import { init, sendForm } from '@emailjs/browser'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import type { ContactSectionData } from '../types/contact.types'

type ContactSectionProps = {
  section: ContactSectionData
}

type SubmitState = 'idle' | 'sending' | 'success' | 'error'

type EmailJsConfig = {
  publicKey: string
  serviceId: string
  templateId: string
}

const env = import.meta.env as Record<string, unknown>

const EMAILJS_PUBLIC_KEY =
  typeof env.VITE_EMAILJS_PUBLIC_KEY === 'string' ? env.VITE_EMAILJS_PUBLIC_KEY : undefined
const EMAILJS_SERVICE_ID =
  typeof env.VITE_EMAILJS_SERVICE_ID === 'string' ? env.VITE_EMAILJS_SERVICE_ID : undefined
const EMAILJS_TEMPLATE_ID =
  typeof env.VITE_EMAILJS_TEMPLATE_ID === 'string' ? env.VITE_EMAILJS_TEMPLATE_ID : undefined

function getEmailJsConfig(): EmailJsConfig | null {
  if (
    typeof EMAILJS_PUBLIC_KEY !== 'string' ||
    EMAILJS_PUBLIC_KEY.length === 0 ||
    typeof EMAILJS_SERVICE_ID !== 'string' ||
    EMAILJS_SERVICE_ID.length === 0 ||
    typeof EMAILJS_TEMPLATE_ID !== 'string' ||
    EMAILJS_TEMPLATE_ID.length === 0
  ) {
    return null
  }

  return {
    publicKey: EMAILJS_PUBLIC_KEY,
    serviceId: EMAILJS_SERVICE_ID,
    templateId: EMAILJS_TEMPLATE_ID,
  }
}

export function ContactSection({ section }: ContactSectionProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const isSending = submitState === 'sending'

  useEffect(() => {
    const emailJsConfig = getEmailJsConfig()

    if (!emailJsConfig) {
      return
    }

    init({ publicKey: emailJsConfig.publicKey })
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (isSending) {
      return
    }

    const emailJsConfig = getEmailJsConfig()

    if (!emailJsConfig) {
      setSubmitState('error')
      setStatusMessage(section.form.configErrorMessage)
      return
    }

    const form = formRef.current

    if (!form) {
      setSubmitState('error')
      setStatusMessage(section.form.errorMessage)
      return
    }

    try {
      setSubmitState('sending')
      setStatusMessage('')

      await sendForm(emailJsConfig.serviceId, emailJsConfig.templateId, form)

      setSubmitState('success')
      setStatusMessage(section.form.successMessage)
      form.reset()
    } catch {
      setSubmitState('error')
      setStatusMessage(section.form.errorMessage)
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__container">
        <div className="contact-section__copy">
          <p className="section-kicker">{section.kicker}</p>
          <h2>{section.title}</h2>
          <p>{section.description}</p>

          <ul>
            {section.details.map((detail) => (
              <li key={detail.label}>
                <span className="contact-icon" aria-hidden="true">
                  <span className="material-symbols-outlined">{detail.icon}</span>
                </span>
                {detail.href ? <a href={detail.href}>{detail.label}</a> : <span>{detail.label}</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-section__form-wrap">
          <form
            ref={formRef}
            id="contact-form"
            className="contact-form"
            onSubmit={(event) => {
              void handleSubmit(event)
            }}
          >
            <div className="contact-form__grid">
              <label>
                <span>{section.form.fullNameLabel}</span>
                <input
                  type="text"
                  name="nom"
                  placeholder="ex. Alan Turing"
                  autoComplete="name"
                  required
                  disabled={isSending}
                />
              </label>
              <label>
                <span>{section.form.emailLabel}</span>
                <input
                  type="email"
                  name="email"
                  placeholder="alexandre@entreprise.fr"
                  autoComplete="email"
                  required
                  disabled={isSending}
                />
              </label>
            </div>

            <label>
              <span>{section.form.subjectLabel}</span>
              <select name="object" disabled={isSending}>
                {section.form.subjectOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label>
              <span>{section.form.messageLabel}</span>
              <textarea
                name="message"
                rows={4}
                placeholder={section.form.messagePlaceholder}
                required
                disabled={isSending}
              />
            </label>

            <button type="submit" disabled={isSending}>
              <span>{isSending ? section.form.sendingLabel : section.form.submitLabel}</span>
              <span className="material-symbols-outlined" aria-hidden="true">
                send
              </span>
            </button>

            {statusMessage ? (
              <p
                className={`contact-form__status contact-form__status--${submitState}`}
                role={submitState === 'error' ? 'alert' : 'status'}
                aria-live="polite"
              >
                {statusMessage}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
