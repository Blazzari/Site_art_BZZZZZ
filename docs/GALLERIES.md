# Galeries réutilisables

`src/components/Gallery.astro` reçoit `photos: ArtworkPhoto[]` et `label`.
Les fichiers, dimensions et descriptions restent dans `src/content/gallery.ts`.
Les projets à plusieurs images utilisent automatiquement cette présentation.
Aucune copie des fichiers sources, aucun service externe ni dépendance ajoutée.

Le cadre conserve sa hauteur à chaque breakpoint. Les images utilisent contain,
centrées sur un fond légèrement nuancé, sans recadrage. Les copies de bord servant
à la boucle sont masquées aux technologies d’assistance.

Le défilement horizontal est natif : aucun gestionnaire ne détourne la molette
verticale. Les flèches fonctionnent au clic et au clavier. Lecture automatique
à 3,5 secondes, reprise au moins 5 secondes après manipulation. Pause explicite,
réduction des animations, onglet caché et navigation clavier suspendent la lecture.
Une galerie hors écran ne tourne pas. Sans JavaScript, toutes les photos restent
accessibles par défilement horizontal.

À vérifier sur appareil réel avant publication : geste diagonal iOS/Android,
reprise après inertie, zoom système et navigation au lecteur d’écran.
