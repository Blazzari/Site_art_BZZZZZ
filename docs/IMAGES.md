# Images — catalogue et maintenance

Le catalogue `src/content/gallery.ts` référence les 28 WebP publiés dans
`public/images/<rubrique>/<sujet>.webp`. Les noms décrivent le contenu ; seul
l’ordre des tableaux détermine la position dans les carrousels. Les fichiers
proviennent du portfolio PDF et des trois photographies fournies pour le Mur des
curiosités. Les archives dans `reference/images-unused` ne sont pas publiées.

Chaque entrée contient `file`, `width`, `height`, `alt`, et éventuellement `crop`
(une fenêtre en pixels de la source). Le bouquet et le vase restent la première
image du Mur des curiosités. Son cadrage est rendu sans modifier la photographie.

Pour ajouter une photo : partir de l’original, exporter un WebP sans EXIF/GPS/XMP,
conserver proportions et couleurs, choisir un nom descriptif stable, renseigner
le catalogue et lancer `pnpm images:check` puis `pnpm validate`. Conserver les
originaux séparément. Ne pas agrandir artificiellement les petites sources.

Le contrôle vérifie présence, dimensions natives, noms, unicité, alternatives
textuelles, limites du cadrage, absence de métadonnées EXIF/XMP et absence de
fichiers publics oubliés du catalogue. Un fichier de plus de 500 Kio est signalé
pour revue ; ce repère interne n’est pas une norme.

## Qualité et limites

Les 28 images totalisent environ 4,99 Mio, ce qui ne correspond pas au poids du
chargement initial. Les images HTML utilisent le chargement différé, sauf le
portrait prioritaire. Le cadrage SVG du vase n’a pas de chargement différé natif.
Les fichiers sont servis à leur définition native, sans variantes `srcset`.

Les sources issues du PDF sont parfois petites (492 px de large au minimum) :
le mode agrandi sur écran haute densité ne peut pas recréer leurs détails.
Privilégier les originaux pour les futures mises à jour, notamment les ateliers,
BEE Project et petites photos de rue. Les textes essentiels d’une affiche doivent
également figurer dans le contenu HTML pour rester lisibles et accessibles.

L’audit de structure ne remplace pas une validation artistique des sources, des
crédits et des autorisations. Aucun filtre, agrandissement ou recompression des
photographies n’a été appliqué pendant le nettoyage du 11 octobre 2026.
