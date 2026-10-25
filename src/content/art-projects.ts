import { gallery, type ArtworkPhoto } from './gallery';

export interface ArtProject {
  id: string;
  title: string;
  location: string;
  description: string;
  photos: ArtworkPhoto[];
}

// Ajouter un objet ici ; l’ordre de cette liste est celui de la page.
export const artProjects: ArtProject[] = [
  {
    id: 'ateliers',
    title: 'Atelier d’initiation et de création',
    location: 'Paris X',
    description:
      'J’organise également des ateliers pour petits et grands afin de créer, de se rassembler autour de l’art et de construire de beaux bouquets muraux où chacun met sa graine.',
    photos: gallery.ateliers,
  },
  {
    id: 'mur-des-curiosites',
    title: 'Mur des curiosités',
    location: 'Paris XIX',
    description: 'Vase en terre cuite, fleurs en plâtre et peinture acrylique.',
    photos: gallery['mur-curiosites'],
  },
  {
    id: 'documentaire',
    title: 'Documentaire sur le street art et B.ZZZZ',
    location: 'Paris XX, 2024',
    description:
      'Martin Gonzalez et son équipe m’ont suivie pendant deux jours afin de réaliser un documentaire de vingt minutes sur mes fleurs et le street art.',
    photos: gallery.documentaire,
  },
  {
    id: 'bee-project',
    title: 'BEE Project (beeepostive)',
    location: 'Utrecht, Pays-Bas, 2022',
    description:
      'Réalisation d’un mur pour sensibiliser à l’environnement et aux abeilles.',
    photos: gallery['bee-project'],
  },
];
