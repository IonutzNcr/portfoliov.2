import type { StackSectionData } from '../types/stack.types'
import { STACK_ICONS } from './stack-icons.data'

export const STACK_SECTION: StackSectionData = {
  kicker: 'Competences',
  title: 'Stack & Technologies',
  description:
    'Competences articulees autour de la rigueur de la programmation systeme bas niveau, des architectures web modernes et de l outillage d ingenierie logicielle.',
  technologies: [
    { name: 'C', badge: 'C', iconSvg: STACK_ICONS.C },
    { name: 'C++', badge: 'C+', iconSvg: STACK_ICONS['C++'] },
    { name: 'JavaScript', badge: 'JS', iconSvg: STACK_ICONS.JavaScript },
    { name: 'PHP', badge: 'PHP', iconSvg: STACK_ICONS.PHP },
    { name: 'Python', badge: 'PY', iconSvg: STACK_ICONS.Python },
    { name: 'React.js', badge: 'RE', iconSvg: STACK_ICONS['React.js'] },
    { name: 'Next.js', badge: 'NX', iconSvg: STACK_ICONS['Next.js'] },
    { name: 'Git', badge: 'GT', iconSvg: STACK_ICONS.Git },
    { name: 'GitHub', badge: 'GH', iconSvg: STACK_ICONS.GitHub },
    { name: 'Docker', badge: 'DK', iconSvg: STACK_ICONS.Docker },
    { name: 'Figma', badge: 'FG', iconSvg: STACK_ICONS.Figma },
    { name: 'Linux', badge: 'LX', iconSvg: STACK_ICONS.Linux },
  ],
}
