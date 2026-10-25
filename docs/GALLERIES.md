# Galeries réutilisables

`Gallery.astro` reçoit `photos: ArtworkPhoto[]` et `label`. Le catalogue central
reste dans `src/content/gallery.ts` ; `ArtProject.astro` sélectionne une image
fixe ou une galerie selon le nombre de photos. Le cadre conserve sa hauteur
pendant les transitions, avec images centrées et proportions préservées. Seules
les entrées dotées d’un `crop` utilisent un cadrage explicite.

Le défilement horizontal est natif : la molette verticale n’est jamais détournée.
Les flèches permettent la navigation au clic et au clavier. La rotation attend
2,917 secondes entre déplacements et au moins 5 secondes après manipulation.
Elle s’arrête hors écran, dans un onglet caché, après une pause explicite et
lorsque la préférence de réduction des animations est activée.

L’entrée au clavier suspend la rotation jusqu’à une demande explicite de Lecture.
Les copies de bord sont inertes et cachées aux technologies d’assistance.
Sans JavaScript, les images restent accessibles par défilement horizontal.
La vue agrandie utilise un dialogue natif : croix, bouton de réduction ou Échap
ferment la vue et rendent le focus au bouton d’ouverture.

À vérifier sur appareil réel : gestes diagonaux et inertie iOS/Android, zoom
système, lecteur d’écran et confort des commandes avec les barres du navigateur.

## Ajouter un projet

Tous les articles de « Mes projets » sont déclarés dans
`src/content/art-projects.ts` et rendus par `ArtProject.astro`.
Le documentaire et les ateliers utilisent le même composant que les autres projets.

1. Ajouter les images dans `public/images/<nom-du-projet>/` et les déclarer
   avec leurs dimensions et descriptions dans `src/content/gallery.ts`.
2. Ajouter un objet dans `artProjects` : `id` unique et stable, `title`,
   `location`, `description`, `photos` (liste du catalogue).
3. Placer cet objet à la position souhaitée : l’ordre de la liste est l’ordre
   d’affichage. Atelier, Mur, Documentaire, BEE est l’ordre validé en attendant
   la confirmation des dates ; aucun tri chronologique n’est déduit des textes.
4. Lancer `pnpm validate` puis vérifier l’aperçu mobile et desktop.

Une photo produit une image fixe ; plusieurs produisent un carrousel avec
les commandes communes. Une liste vide conserve uniquement le texte.
Les ancres `#documentaire` et `#ateliers` restent disponibles sur leurs articles.
La navigation principale pointe vers la rubrique `#projets` ; aucun lien
à ajouter manuellement pour chaque nouveau projet.

## Galerie transversale

La section « Ça fleurit partout ! » suit « Mes projets ». Elle réutilise le
carrousel commun et `allArtworkPhotos`, une vue dérivée de `gallery` qui exclut
la collection `portrait` et déduplique par chemin de fichier. Aucun fichier
image n’est copié. Les nouvelles collections sont incluses automatiquement.

## Page galerie

L’entrée 03 du menu ouvre `galerie/`. La page utilise `allArtworkPhotos`, sans portrait ni duplication des fichiers. `photo-wall.css` gère les colonnes adaptatives ; `photo-wall.ts` gère la vue agrandie, les flèches et le balayage tactile. Les descriptions restent dans les alternatives accessibles, sans légendes visibles. Le layout et les composants Header et Footer sont partagés entre les pages. Les liens internes respectent BASE_URL pour GitHub Pages.
