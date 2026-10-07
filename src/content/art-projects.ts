import { gallery } from './gallery';
import { projects } from './portfolio';

// Ajouter un objet ici pour publier un nouveau projet dans cette rubrique.
export const artProjects = [
  {
    id: 'mur-des-curiosites',
    title: 'Mur des curiosités — Paris XIX',
    location: '',
    description: projects.wall.text,
    layout: 'wide' as const,
    photos: gallery['mur-curiosites'],
  },
  {
    id: 'bee-project',
    title: 'BEE Project (beeepostive)',
    location: 'Utrecht, Pays-Bas',
    description:
      'Réalisation d’un mur pour sensibiliser à l’environnement et aux abeilles dans la ville d’Utrecht en 2022.',
    layout: 'gallery' as const,
    photos: gallery['bee-project'],
  },
];
