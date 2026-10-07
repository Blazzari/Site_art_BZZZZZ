# Images — organisation et audit du 4 octobre 2026

## Où sont les images ?

- `public/images/<rubrique>/` : uniquement les 26 WebP utilisés par le site. Rubriques : portrait, fleurs-paris, expressions, mur-curiosites, ateliers, documentaire et bee-project.
- `src/content/gallery.ts` : catalogue unique typé, avec chemin relatif, dimensions natives et texte alternatif.
- `src/components/Artwork.astro` : rendu commun, dimensions HTML, texte alternatif, chargement différé et chemin compatible avec un changement de domaine ou de propriétaire GitHub.
- `src/content/art-projects.ts` : projets et galeries associées.
- `reference/images-unused/` : cinq anciennes versions et un QR inutilisé, conservés pour référence, hors du répertoire public et du build.

Les dossiers correspondent aux anciennes pages PDF 2 à 8, dans cet ordre. Les fichiers 01, 02… conservent l’ordre d’extraction. Le PDF est la source provisoire ; ne pas considérer les WebP comme les originaux de l’artiste.

## Ajouter ou remplacer une photo

1. Partir du fichier original, conserver une copie maître hors du site public. Vérifier les droits et le crédit.
2. Exporter un WebP sans GPS/EXIF, en conservant les couleurs et les proportions ; ne pas agrandir artificiellement une petite source.
3. Ranger le fichier dans sa rubrique avec un nom stable. Mettre à jour son entrée dans gallery.ts : dimensions réelles et description utile. L’ordre du tableau définit l’ordre des photos.
4. Pour un nouveau projet, ajouter sa galerie puis son entrée dans art-projects.ts.
5. Lancer `pnpm images:check`, puis `pnpm validate` et regarder mobile/desktop.

Le contrôle automatique détecte les fichiers manquants, dimensions incorrectes, entrées dupliquées, descriptions vides et fichiers publics non catalogués. Il signale les fichiers dépassant 500 Kio ; ce seuil est un repère interne, pas une norme UX.

## Qualité et poids

Inspection de la planche des 27 images extraites et contrôle des 32 WebP initiaux : fichiers lisibles, pas de métadonnées EXIF/GPS détectées. Le dossier public contenait environ 5,18 Mio avant nettoyage, dont environ 1,10 Mio inutilisé. Les 26 images affichées représentent environ 4,08 Mio au total, hors police et code. Ce total ne correspond pas au téléchargement initial : le chargement est différé, sauf le portrait.

Qualité suffisante pour la maquette mobile, inégale pour une présentation définitive sur écran haute densité. Les sources vont de 492 à 1600 px de large. Priorités de remplacement :

- Mur des curiosités : 900 × 1600, affiché jusqu’à environ 1125 px de large ; agrandissement même à densité 1, aggravé sur écran Retina. Le cadrage CSS 16/10 desktop et 4/5 mobile recoupe la photo verticale ; l’œuvre est centrée à 50 % / 42 %. Demander une vue horizontale originale pour le desktop.
- Atelier principal : 903 × 605, également agrandi en pleine largeur desktop.
- Galeries : certaines sources de 492–645 px ne couvrent pas deux fois leur largeur affichée. Le BEE Project et les expressions sont à revoir avec les originaux.
- Affiche d’atelier : texte incorporé à l’image, petit sur mobile ; les informations essentielles d’un futur atelier devront aussi être présentes en HTML.

Les images de murs texturés pèsent jusqu’à environ 424 Kio ; le détail de la matière explique une partie du poids. Pas de recompression aveugle ni de retouche des œuvres dans cet audit.

## Limites avant publication

Le composant sert encore un seul fichier par photo : absence de srcset/sizes, donc les petits écrans peuvent charger un fichier plus grand que nécessaire. Prochaine amélioration de performance : génération automatique de variantes depuis les originaux, en gardant ce catalogue et ce composant comme points d’entrée. Aucun test réseau mobile ni mesure LCP/CLS en conditions réelles dans cet audit. L’inspection de la planche ne constitue pas une expertise de netteté à 100 % pour chaque fichier. Vérifier crédits, autorisations des personnes photographiées et qualité sur téléphone réel avant publication.
