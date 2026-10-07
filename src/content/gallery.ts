/** Catalogue unique des images publiées. Sources provisoires : portfolio PDF. */
export interface ArtworkPhoto {
  file: string;
  width: number;
  height: number;
  alt: string;
}

export const gallery = {
  portrait: [
    {
      file: 'portrait/01.webp',
      width: 1024,
      height: 794,
      alt: 'Portrait de B.ZZZZ tenant une fleur devant son visage.',
    },
  ],
  'fleurs-paris': [
    {
      file: 'fleurs-paris/01.webp',
      width: 562,
      height: 618,
      alt: 'Fleurs colorées sur un mur clair.',
    },
    {
      file: 'fleurs-paris/02.webp',
      width: 554,
      height: 580,
      alt: 'Fleurs sur une porte violette.',
    },
    {
      file: 'fleurs-paris/03.webp',
      width: 492,
      height: 649,
      alt: 'Fleurs jaunes près d’une poignée de porte.',
    },
    {
      file: 'fleurs-paris/04.webp',
      width: 585,
      height: 610,
      alt: 'Pose d’une fleur sur un panneau dans la rue.',
    },
    {
      file: 'fleurs-paris/05.webp',
      width: 613,
      height: 854,
      alt: 'Trois petites fleurs sur une façade.',
    },
    {
      file: 'fleurs-paris/06.webp',
      width: 569,
      height: 759,
      alt: 'Fleur multicolore sur un mur patiné.',
    },
    {
      file: 'fleurs-paris/07.webp',
      width: 908,
      height: 1210,
      alt: 'Fleurs à côté du numéro 6.',
    },
    {
      file: 'fleurs-paris/08.webp',
      width: 908,
      height: 1210,
      alt: 'Deux fleurs au coin d’une façade.',
    },
    {
      file: 'fleurs-paris/09.webp',
      width: 908,
      height: 1210,
      alt: 'Petites fleurs sur un mur brut.',
    },
  ],
  expressions: [
    {
      file: 'expressions/01.webp',
      width: 645,
      height: 643,
      alt: 'Fleurs blanches et tiges peintes sur un mur.',
    },
    {
      file: 'expressions/02.webp',
      width: 720,
      height: 663,
      alt: 'Fleur bleue et inscription Être fleur bleue.',
    },
    {
      file: 'expressions/03.webp',
      width: 908,
      height: 969,
      alt: 'Silhouette et inscription Arriver comme une fleur.',
    },
    {
      file: 'expressions/04.webp',
      width: 760,
      height: 1351,
      alt: 'Intervention de l’artiste sur un mur fleuri.',
    },
  ],
  'mur-curiosites': [
    {
      file: 'mur-curiosites/01.webp',
      width: 900,
      height: 1600,
      alt: 'Mur des curiosités : bouquet en relief et vase jaune au-dessus de plantes.',
    },
  ],
  ateliers: [
    {
      file: 'ateliers/01.webp',
      width: 903,
      height: 605,
      alt: 'Création de fleurs autour d’une table pendant un atelier.',
    },
    {
      file: 'ateliers/02.webp',
      width: 774,
      height: 515,
      alt: 'Participants réunis lors d’un atelier.',
    },
    {
      file: 'ateliers/03.webp',
      width: 645,
      height: 798,
      alt: 'Affiche de l’atelier Fleurs et couleurs.',
    },
  ],
  documentaire: [
    {
      file: 'documentaire/01.webp',
      width: 908,
      height: 1210,
      alt: 'Prise de vue dans la rue pendant le documentaire.',
    },
    {
      file: 'documentaire/02.webp',
      width: 1600,
      height: 900,
      alt: 'Équipe devant une façade de street art.',
    },
    {
      file: 'documentaire/03.webp',
      width: 908,
      height: 1210,
      alt: 'Yeux dessinés avec des fleurs à la place des iris.',
    },
    {
      file: 'documentaire/04.webp',
      width: 774,
      height: 766,
      alt: 'Deux fleurs blanches et inscription Tu m’aimes ?',
    },
  ],
  'bee-project': [
    {
      file: 'bee-project/01.webp',
      width: 807,
      height: 605,
      alt: 'Mur vert avec fleurs et motifs peints à Utrecht.',
    },
    {
      file: 'bee-project/02.webp',
      width: 807,
      height: 605,
      alt: 'Détail des fleurs et de l’abeille sur le mur vert.',
    },
    {
      file: 'bee-project/03.webp',
      width: 605,
      height: 454,
      alt: 'Vue du mur dans son environnement à Utrecht.',
    },
    {
      file: 'bee-project/04.webp',
      width: 706,
      height: 530,
      alt: 'Vue d’ensemble de la fresque fleurie.',
    },
  ],
} satisfies Record<string, ArtworkPhoto[]>;
