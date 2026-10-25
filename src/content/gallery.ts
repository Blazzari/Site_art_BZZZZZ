/** Catalogue unique des images publiées. Sources : portfolio PDF et photographies fournies par l’artiste. */
export interface ArtworkPhoto {
  file: string;
  width: number;
  height: number;
  alt: string;
  /** Fenêtre de cadrage en pixels, sans modifier la photographie source. */
  crop?: { x: number; y: number; width: number; height: number };
}

export const gallery = {
  portrait: [
    {
      file: 'portrait/artiste-fleur.webp',
      width: 874,
      height: 794,
      alt: 'Portrait de B.ZZZZ tenant une fleur devant son visage.',
    },
  ],
  'fleurs-paris': [
    {
      file: 'fleurs-paris/fleurs-mur-clair.webp',
      width: 562,
      height: 618,
      alt: 'Fleurs colorées sur un mur clair.',
    },
    {
      file: 'fleurs-paris/porte-violette.webp',
      width: 554,
      height: 580,
      alt: 'Fleurs sur une porte violette.',
    },
    {
      file: 'fleurs-paris/fleurs-poignee.webp',
      width: 492,
      height: 649,
      alt: 'Fleurs jaunes près d’une poignée de porte.',
    },
    {
      file: 'fleurs-paris/pose-panneau.webp',
      width: 585,
      height: 610,
      alt: 'Pose d’une fleur sur un panneau dans la rue.',
    },
    {
      file: 'fleurs-paris/trois-fleurs-facade.webp',
      width: 613,
      height: 854,
      alt: 'Trois petites fleurs sur une façade.',
    },
    {
      file: 'fleurs-paris/fleur-mur-patine.webp',
      width: 569,
      height: 759,
      alt: 'Fleur multicolore sur un mur patiné.',
    },
    {
      file: 'fleurs-paris/fleurs-numero-six.webp',
      width: 908,
      height: 1210,
      alt: 'Fleurs à côté du numéro 6.',
    },
    {
      file: 'fleurs-paris/fleurs-coin-facade.webp',
      width: 908,
      height: 1210,
      alt: 'Deux fleurs au coin d’une façade.',
    },
    {
      file: 'fleurs-paris/fleurs-mur-brut.webp',
      width: 908,
      height: 1210,
      alt: 'Petites fleurs sur un mur brut.',
    },
  ],
  expressions: [
    {
      file: 'expressions/fleurs-blanches.webp',
      width: 645,
      height: 643,
      alt: 'Fleurs blanches et tiges peintes sur un mur.',
    },
    {
      file: 'expressions/etre-fleur-bleue.webp',
      width: 720,
      height: 663,
      alt: 'Fleur bleue et inscription Être fleur bleue.',
    },
    {
      file: 'expressions/arriver-comme-une-fleur.webp',
      width: 908,
      height: 969,
      alt: 'Silhouette et inscription Arriver comme une fleur.',
    },
    {
      file: 'expressions/artiste-mur-fleuri.webp',
      width: 760,
      height: 1351,
      alt: 'Intervention de l’artiste sur un mur fleuri.',
    },
  ],
  'mur-curiosites': [
    {
      file: 'mur-curiosites/bouquet-vase-jaune.webp',
      crop: { x: 220, y: 420, width: 460, height: 620 },
      width: 900,
      height: 1600,
      alt: 'Bouquet de fleurs en relief et vase jaune sur le Mur des curiosités.',
    },
    {
      file: 'mur-curiosites/installation-jardinieres.webp',
      width: 1200,
      height: 1600,
      alt: 'B.ZZZZ installe des fleurs au Mur des curiosités, au-dessus des jardinières.',
    },
    {
      file: 'mur-curiosites/composition-bouquet.webp',
      width: 1200,
      height: 1600,
      alt: 'B.ZZZZ de dos, en train de composer le bouquet sur le Mur des curiosités.',
    },
  ],
  ateliers: [
    {
      file: 'ateliers/creation-fleurs.webp',
      width: 903,
      height: 605,
      alt: 'Création de fleurs autour d’une table pendant un atelier.',
    },
    {
      file: 'ateliers/participants.webp',
      width: 774,
      height: 515,
      alt: 'Participants réunis lors d’un atelier.',
    },
    {
      file: 'ateliers/affiche-fleurs-couleurs.webp',
      width: 645,
      height: 798,
      alt: 'Affiche de l’atelier Fleurs et couleurs.',
    },
  ],
  documentaire: [
    {
      file: 'documentaire/tournage-rue.webp',
      width: 908,
      height: 1210,
      alt: 'Prise de vue dans la rue pendant le documentaire.',
    },
    {
      file: 'documentaire/equipe-facade.webp',
      width: 1600,
      height: 900,
      alt: 'Équipe devant une façade de street art.',
    },
    {
      file: 'documentaire/yeux-fleurs.webp',
      width: 908,
      height: 1210,
      alt: 'Yeux dessinés avec des fleurs à la place des iris.',
    },
    {
      file: 'documentaire/tu-maimes.webp',
      width: 774,
      height: 766,
      alt: 'Deux fleurs blanches et inscription Tu m’aimes ?',
    },
  ],
  'bee-project': [
    {
      file: 'bee-project/mur-vert-utrecht.webp',
      width: 807,
      height: 605,
      alt: 'Mur vert avec fleurs et motifs peints à Utrecht.',
    },
    {
      file: 'bee-project/detail-abeille.webp',
      width: 807,
      height: 605,
      alt: 'Détail des fleurs et de l’abeille sur le mur vert.',
    },
    {
      file: 'bee-project/mur-environnement.webp',
      width: 605,
      height: 454,
      alt: 'Vue du mur dans son environnement à Utrecht.',
    },
    {
      file: 'bee-project/fresque-ensemble.webp',
      width: 706,
      height: 530,
      alt: 'Vue d’ensemble de la fresque fleurie.',
    },
  ],
} satisfies Record<string, ArtworkPhoto[]>;

/** Vue transversale du catalogue : sans portrait ni fichier répété. */
export const allArtworkPhotos: ArtworkPhoto[] = [
  ...new Map(
    Object.entries(gallery)
      .filter(([collection]) => collection !== 'portrait')
      .flatMap(([, photos]) => photos)
      .map((photo) => [photo.file, photo] as const),
  ).values(),
];
