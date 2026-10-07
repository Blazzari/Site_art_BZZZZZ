# Typographie et lisibilité

## Règles de maintenance

La source des valeurs est src/styles/theme.css. src/styles/portfolio.css contient uniquement les mises en page et le comportement responsive des composants.

| Rôle                               | Variable        | Mobile          | À partir de 48rem |
| ---------------------------------- | --------------- | --------------- | ----------------- |
| Texte, menu, coordonnées, légendes | --font-body     | 1.125rem (18px) | 1.125rem (18px)   |
| Sous-titres et signature du menu   | --font-subtitle | 1.375rem (22px) | 1.5rem (24px)     |
| Titres de section                  | --font-title    | 1.875rem (30px) | 2.25rem (36px)    |

Les équivalences supposent la préférence habituelle du navigateur de 16px. La racine reste à 100% pour respecter les préférences utilisateur. Ne pas ajouter de taille ponctuelle dans un composant. Les différences de hiérarchie complémentaires reposent sur les graisses et les espacements, pas sur une nouvelle couleur.

- Police : Archivo locale, avec Arial et sans-serif en secours.
- Interligne : 1.6 pour le texte, 1.25 pour les titres.
- Graisse : 400 pour le texte, 600 pour les titres, 800 pour la signature.
- Approche : normale dans les paragraphes, -0.02em dans les titres.
- Mesure de lecture : maximum 65ch pour les blocs de prose ; la largeur disponible peut être inférieure.
- Couleur de texte unique : --ink (#2b3429), fond --paper (#f5f2eb).
- Espacements réutilisables : --space-1 à --space-5.
- Mise en page en une colonne avant 48rem ; navigation dépliante avant 75rem.
- Ne pas fixer la hauteur des blocs de texte ni imposer de sauts de ligne dans les titres.
- Images proportionnelles, galeries centrées sur mobile.
- Zones interactives d'au moins 44px de hauteur, focus clavier visible, mouvement réduit respecté.

## Audit : constats et corrections

### Typographie

Avant intervention, la racine utilisait une taille en pixels et les styles contenaient des blocs vides, des sélecteurs liés à des compositions supprimées et des surcharges successives. Des titres avaient encore des retours à la ligne forcés. Les tailles avaient été ramenées à trois niveaux, mais leur organisation restait fragile.

La feuille globale a été réorganisée autour de trois variables en rem. La feuille de mise en page a été réécrite et regroupée par navigation, présentation, galeries, projets et adaptations responsive. Les règles obsolètes de l'ancien accueil, des grands chiffres et des anciennes expressions ont été retirées. Les styles vides et les corrections contradictoires ont disparu. Les titres Atelier et Documentaire utilisent maintenant les données du contenu, sans retours forcés.

18px est un choix de conception adapté à ce site riche en textes courts et en images. Les WCAG n'imposent pas de taille universelle en pixels. La priorité est une lecture confortable, un contraste suffisant et la possibilité d'agrandir le texte. La limite de trois tailles est une contrainte du projet, pas une obligation normative.

### Hiérarchie et lecture

Un h1 accessible identifie le site ; les sections utilisent des h2, Techniques et Contact des h3. Les titres ont la même échelle, sans mise en scène typographique disproportionnée. Le menu utilise la même taille que les paragraphes. Le texte est aligné à gauche, sans justification forcée.

La marge générale de la présentation est identique à celle des autres sections. Le portrait reste à droite sur grand écran et centré sur petit écran. Les coordonnées suivent la présentation, conformément à la structure demandée. Le retrait particulier de BEE a été supprimé au profit du conteneur commun.

### Contraste

Le contraste calculé entre #2b3429 et #f5f2eb est de 11.55:1. Cette paire dépasse les seuils WCAG AA de 4.5:1 pour le texte courant et AAA de 7:1. Cela ne constitue pas une déclaration de conformité globale du site.

La couleur du texte est héritée ; liens et focus utilisent cette même encre. Les liens dans les contenus restent soulignés. Les photographies gardent naturellement leurs couleurs : le contraste de texte incorporé aux images ne peut pas être corrigé par la CSS.

### Navigation et interactions

Les liens du menu, le bouton de navigation, les coordonnées et le retour en haut ont une hauteur minimale de 44px. C'est un choix de confort supérieur au minimum de 24px du critère AA 2.5.8, lequel comporte des exceptions et conditions d'espacement.

Le menu natif details/summary s'ouvre au clic et se ferme avec Échap. Les liens et le bouton disposent d'un focus visible. Le menu long reste défilable. Les liens desktop peuvent revenir à la ligne lorsque l'espace diminue.

### Images et performance

Les 26 visuels intégrés ont des alternatives textuelles et des dimensions intrinsèques. Le portrait est chargé en priorité, les autres images à la demande. Les images WebP du dossier portfolio totalisent environ 4.2Mo, QR extrait inclus ; la police TTF occupe environ 644Ko.

Limites : aucun srcset n'est encore produit ; les petits écrans peuvent recevoir une image plus grande que nécessaire. La police pourrait être convertie en WOFF2 avec contrôle de licence et de rendu. Ces optimisations n'ont pas été ajoutées à cette intervention typographique. Les textes figurant dans les photos et l'affiche d'atelier restent difficiles à lire à petite échelle ; une transcription ou une vue agrandie serait utile si ces informations doivent être consultées.

## Vérifications réalisées

- pnpm validate : diagnostics Astro sans erreur, cinq tests de déploiement réussis, formatage et compilation réussis, contrôle de sortie statique réussi.
- Mesures navigateur aux largeurs 320, 390, 768, 1024 et 1440px : aucun débordement horizontal.
- Trois tailles calculées par écran : 18/22/30px en petit format, 18/24/36px en grand format.
- Une seule couleur calculée sur les textes et liens contrôlés.
- Toutes les zones interactives visibles mesurées atteignent 44px de hauteur minimum.
- Inspection visuelle de la présentation sur mobile 390px et desktop 1440px.
- Ouverture du menu au clic et fermeture avec Échap vérifiées.
- Copies de contrôle : racine à 200% (texte courant à 36px), puis interligne 1.5, espacement des lettres 0.12em, mots 0.16em et paragraphes 2em. Aucun débordement horizontal à 320 et 1440px.
- Ces copies sont des essais de résistance CSS, pas une certification de zoom navigateur ni une inspection exhaustive de tous les chevauchements.

## Limites et suite de validation

L'audit porte sur la typographie, la structure des styles et les principaux comportements de lisibilité. Il ne remplace pas un audit WCAG complet. Restent à vérifier sur appareils réels : Safari iOS, Chrome Android, zoom navigateur jusqu'à 200%/400%, parcours intégral au clavier et lecteur d'écran. Aucune mesure Lighthouse ou Core Web Vitals en conditions réseau réelles n'a été exécutée.

L'aperçu desktop dans le panneau est une page de 1440px réduite pour tenir dans la fenêtre : cette réduction rend visuellement le texte plus petit. Les tailles mesurées concernent le site à son échelle réelle, pas la miniature d'aperçu. Pour juger le confort de lecture desktop, ouvrir le site directement dans une fenêtre suffisamment large à 100%.

## Références

- WCAG 2.2 : https://www.w3.org/TR/WCAG22/
- Agrandissement : https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html
- Espacement personnalisé : https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html
- Taille des cibles : https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- Échelle de référence GOV.UK : https://design-system.service.gov.uk/styles/type-scale/

Les valeurs finales sont adaptées au site de B.ZZZZ ; elles ne reproduisent pas l'identité graphique de ces références.
