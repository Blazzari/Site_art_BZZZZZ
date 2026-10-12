import { gallery, type ArtworkPhoto } from './gallery';
import { projects } from './portfolio';

export interface ArtProject {
  id: string;
  title: string;
  location: string;
  description: string;
  photos: ArtworkPhoto[];
}

// Ajouter un objet ici pour publier un nouveau projet dans cette rubrique.
export const artProjects: ArtProject[] = [
  {
    id: 'mur-des-curiosites',
    title: 'Mur des curiosités',
    location: 'Paris XIX',
    description: projects.wall.text,
    photos: gallery['mur-curiosites'],
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
