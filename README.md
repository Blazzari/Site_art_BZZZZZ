# B.ZZZZ — portfolio

Site statique Astro, en français, sans serveur applicatif, compte utilisateur,
traceur ni service de galerie externe. Version de prévisualisation : `noindex`
reste actif jusqu’au lancement public (ce n’est pas une protection d’accès).

## Développer et vérifier

Utiliser la version Node de `.node-version` et la version pnpm de `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm validate
pnpm audit
```

`validate` contrôle les types Astro/TypeScript, les images, les tests, le format,
la compilation et les fichiers publiés. La prévisualisation locale reste sur
l’interface loopback. `pnpm export` produit une copie validée dans `exports/site`.

## Structure

| Dossier                      | Responsabilité                                             |
| ---------------------------- | ---------------------------------------------------------- |
| `src/content`                | Textes, catalogue des images, projets et ordre d’affichage |
| `src/components`             | Navigation, image, galerie, projet et icônes réutilisables |
| `src/layouts`, `src/pages`   | Document HTML et assemblage de la page                     |
| `src/styles`                 | Thème, composition du site et galerie                      |
| `src/scripts`                | Interactions de la galerie                                 |
| `public/images`              | WebP publiés, classés par rubrique et nommés par sujet     |
| `scripts`, `tests`, `config` | Validation, export et configuration du déploiement         |
| `docs`                       | Guides de contenu et comptes rendus d’audit                |

## Ajouter un projet

1. Ranger les photos WebP dans `public/images/nom-du-projet/`, avec des noms
   descriptifs stables, sans numéro d’ordre, espace ou accent.
2. Déclarer leurs dimensions réelles et textes alternatifs dans
   `src/content/gallery.ts`. L’ordre du tableau détermine l’ordre des images.
3. Ajouter un objet dans `src/content/art-projects.ts` : identifiant unique,
   titre, localisation, description et photos. Le composant choisit une image
   fixe ou une galerie selon leur nombre.
4. Lancer `pnpm validate`, puis vérifier le rendu mobile et desktop.

Voir [le guide des images](docs/IMAGES.md) et [les galeries](docs/GALLERIES.md).

## GitHub Pages

Dans les paramètres Pages du dépôt, choisir **GitHub Actions** comme source.
Le workflow **Site** valide chaque push et pull request. Il ne publie pas
automatiquement : après un contrôle réussi sur `main`, lancer **Run workflow**
dans Actions → Site. Le job de déploiement fournit l’adresse à partager.
Un push réussi et un site publié sont deux étapes distinctes.

La configuration déduit l’URL et le sous-répertoire du dépôt GitHub. Les variables
facultatives `SITE_URL` et `BASE_PATH` permettent un domaine personnalisé. Les
composants utilisent `BASE_URL` pour leurs ressources ; ne pas coder une adresse
GitHub ou un chemin local dans les contenus.

## Entretien du dépôt

Les dossiers `node_modules`, `dist`, `.astro` et `exports` sont générés localement
et exclus de Git. Les anciens essais sont conservés dans l’historique Git, pas
dans un dossier d’archives du projet. Aucun fichier `.gitkeep` n’est nécessaire
dans un dossier qui contient déjà des fichiers suivis.

La typographie et les espacements sont définis dans `src/styles/theme.css` :
texte à 16 px sur mobile, 17 px dès 48rem (avec une racine navigateur à 16 px).
Les styles de composition et de galerie restent dans leurs feuilles respectives.
La licence Archivo dans `public/fonts/OFL-Archivo.txt` doit être conservée.
