# Placeholders Restants A Remplacer

Ce fichier liste les contenus encore temporaires ou partiellement temporaires dans le portfolio.

## 1. Texte alternatif de l image profil

Fichier:
- src/features/profile/data/profile.data.ts

Probleme:
- Le nom dans `profileImageAlt` est encore `Alexandre Laurent`, alors que le portfolio affiche `Ionut Nicoara`.

Valeur actuelle:
- FR: `Alexandre Laurent - Développeur École 42`
- EN: `Alexandre Laurent - 42 School developer`

Remplacement attendu:
- FR: `Ionut Nicoara - Développeur École 42`
- EN: `Ionut Nicoara - 42 School developer`

Pourquoi c est important:
- Cohérence du branding
- Accessibilité correcte pour lecteurs d ecran

## 2. Bouton CV encore non branché

Fichier:
- src/features/profile/data/profile.data.ts

Probleme:
- Le bouton `Télécharger CV (PDF)` / `Download resume (PDF)` pointe encore vers `#contact`.

Valeur actuelle:
- FR: `secondaryAction.href = '#contact'`
- EN: `secondaryAction.href = '#contact'`

Remplacement attendu:
- Un vrai lien vers un PDF public, par exemple `/cv-ionut-nicoara.pdf`

Pourquoi c est important:
- Le libellé promet un téléchargement, mais le comportement actuel redirige seulement vers la section contact.

## 3. Formulaire contact non branché a un vrai service

Fichier:
- src/features/contact/components/ContactSection.tsx

Probleme:
- Le formulaire annule la soumission avec `event.preventDefault()`.

Valeur actuelle:
- Aucun envoi réel
- Aucun backend ou service mail connecté

Remplacement attendu:
- Brancher le formulaire à un vrai service d email ou API de contact

Pourquoi c est important:
- Aujourd hui, l utilisateur peut remplir le formulaire mais aucun message n est envoyé.

## 4. Valeurs d exemple dans le formulaire

Fichier:
- src/features/contact/components/ContactSection.tsx

Probleme:
- Certains placeholders de champs sont des exemples génériques.

Valeurs actuelles:
- `ex. Alan Turing`
- `alexandre@entreprise.fr`

Remplacement attendu:
- Soit conserver ces exemples si c est volontaire
- Soit utiliser des exemples plus proches du branding cible

Pourquoi c est important:
- Ce n est pas bloquant, mais ce sont encore des contenus de démonstration.

## 5. Titre HTML generique

Fichier:
- index.html

Probleme:
- Le titre de la page est encore `portfoliov.2`.

Valeur actuelle:
- `<title>portfoliov.2</title>`

Remplacement attendu:
- Un vrai titre marketing, par exemple:
  - `Ionut Nicoara - Portfolio`
  - `Ionut Nicoara - Développeur Fullstack`

Pourquoi c est important:
- SEO
- Lisibilité de l onglet navigateur
- Branding global

## 6. Donnees de contact encore partiellement generiques sur le fond

Fichiers:
- src/features/contact/data/contact.data.ts
- src/features/profile/data/profile.data.ts

Probleme:
- La structure est correcte, mais certaines informations peuvent encore être enrichies avec de vraies données métier selon le besoin final.

Exemples:
- Disponibilité exacte
- Type d opportunité recherché
- Lien réel du CV
- Positionnement professionnel final en FR/EN

Pourquoi c est important:
- Le site est déjà fonctionnel, mais pas encore entièrement finalisé côté contenu métier.

## Resume

Les placeholders vraiment prioritaires a remplacer sont:
1. `profileImageAlt` avec `Alexandre Laurent`
2. le lien du bouton CV
3. la connexion réelle du formulaire de contact
4. le titre HTML `portfoliov.2`

Les autres éléments sont surtout des contenus d exemple ou d enrichissement final.
