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
