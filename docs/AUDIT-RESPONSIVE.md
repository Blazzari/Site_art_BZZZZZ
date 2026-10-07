# Audit UX/UI responsive — 4 octobre 2026

## Conclusion

La lecture suit une hiérarchie cohérente : titre, contexte, texte puis images. Le fond chaud, le texte noir et Archivo sont conservés. Les photographies portent la couleur. L’interface est sobre et lisible ; son caractère artistique repose surtout sur les œuvres plutôt que sur des effets décoratifs.

## Corrections

- Espacement entre les photos fluide de 12 à 24 px, au lieu d’un saut à 768 px.
- Galeries de quatre photos sur deux colonnes dès 768 px : suppression des rangées à une seule photo.
- Sous 360 px, photos sur une colonne pour préserver leur lisibilité. Deux colonnes sur les mobiles plus larges ; trois pour la série de neuf photos sur desktop.
- Espacement titre/texte partagé de 12 px, texte/images de 16 px. Techniques utilise désormais le même écart.
- Coupure possible de l’email avant @ sans changer l’adresse ni sa destination.
- Styles de texte regroupés, ancien clear de float supprimé, couleur de survol centralisée.

## Vérifications réalisées

Dans le navigateur intégré, largeurs 320, 390, 768, 1024 et 1440 px : aucun débordement horizontal ; trois tailles de texte calculées (18/22/30 px mobile, 18/24/36 px desktop). Galeries et gouttières vérifiées par leurs dimensions calculées. Inspection visuelle du documentaire en mobile et desktop.

Navigation mobile : ouverture, fermeture avec Échap et retour du focus sur le bouton, fermeture après sélection et navigation vers Documentaire vérifiées. Le code conserve les contours de focus et la préférence de réduction des mouvements. Contacts : liens natifs email/téléphone/Instagram et hauteur minimale de 64 px ; les libellés restent visibles.

`pnpm validate` réussi après corrections : diagnostics Astro, cinq tests existants, formatage, build statique et contrôle des chemins/secrets dans le résultat.

## Limites et suites utiles

Cet audit n’est pas une certification Baymard ou WCAG. Pas de test sur téléphone physique, VoiceOver, Safari/Firefox, zoom système ou réseau mobile lent dans cette passe. Les ratios originaux des photos créent encore des blancs sous les images paysage voisines de portraits : choix conservé pour ne pas recadrer les œuvres. La lecture est plus longue sur les très petits écrans. Les photos issues du PDF restent provisoires ; des fichiers originaux et des variantes responsive seraient utiles avant publication. Le bouton de menu sous le nom de l’artiste respecte le choix validé, mais sa découvrabilité mérite un test auprès de visiteurs.

## Références

- [Baymard : Button Design](https://baymard.com/blog/button-design) : actions compréhensibles, taille des cibles et états d’interaction. Principes adaptés à un site d’artiste, sans reprendre les parcours e-commerce.
- [W3C : Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) : adaptation du contenu à une largeur réduite. Le contrôle à 320 px constitue une vérification partielle, pas un audit complet d’accessibilité.
