# Site_art_BZZZZZ

Socle d'un site d'artiste statique : la direction artistique reste à définir.
Le site produit est constitué de HTML, CSS et, seulement si nécessaire, JavaScript.
Il ne nécessite aucun compte, clé d'API ou service IA pour fonctionner.

## Démarrage

Installer Git, Node dans la version de `.node-version` et pnpm dans la version
`packageManager` de `package.json`, puis ouvrir un Terminal dans le projet :

```sh
pnpm install --frozen-lockfile --ignore-scripts
pnpm dev
```

Ouvrir http://127.0.0.1:4321/. L'édition recharge automatiquement la page.
Ctrl+C arrête le serveur. Sur macOS, `dev.command` lance la même commande après
installation des outils. Aucun chemin vers une installation personnelle n'est inclus.

| Commande        | Utilité                                                               |
| --------------- | --------------------------------------------------------------------- |
| `pnpm dev`      | Édition locale, port 4321                                             |
| `pnpm validate` | Types, tests de déploiement, format, build et inspection de la sortie |
| `pnpm preview`  | Prévisualisation du dernier build sur le port 4322                    |
| `pnpm format`   | Formatage des fichiers                                                |
| `pnpm audit`    | Vulnérabilités connues dans les dépendances                           |
| `pnpm export`   | Validation puis copie du site dans `exports/site/`                    |

## Organisation

- `src/components/` : blocs réutilisables ; `src/layouts/` : structures communes.
- `src/pages/` : routes ; `src/styles/` : charte et styles.
- `src/content/` : textes et données ; `public/` : fichiers publics non transformés.
- `config/` : configuration portable ; `scripts/` : commandes de développement.
- `tests/` : comportements à protéger ; `docs/` : maintenance et transmission.

## Sauvegarder et publier

Examiner `git status` et `git diff`, lancer `pnpm validate`, puis :

```sh
git add <fichiers-vérifiés>
git diff --staged
git commit -m "Décrire la modification"
git push
```

Le workflow valide les push sur main et les pull requests. La publication est
séparée : activer GitHub Pages avec la source **GitHub Actions**, puis ouvrir
**Actions → Site → Run workflow → main**. Seul le dossier `dist/` est publié.

Le premier `git push -u origin main` relie la branche locale à la branche distante.
Les identifiants sont gérés par Git/SSH hors du code. Ils ne font pas partie d'un ZIP.

## Domaine et transfert

En local, le site fonctionne à la racine. Dans GitHub Actions, le propriétaire et
le nom du dépôt déterminent automatiquement l'URL GitHub Pages.
Pour un domaine personnalisé, définir les variables de dépôt `SITE_URL`
(exemple : `https://example.org`) et `BASE_PATH` (`/`), puis régler le domaine et
le DNS dans GitHub Pages. Voir [la transmission](docs/TRANSMISSION.md).

Toujours construire les liens internes et chemins d'images avec
`import.meta.env.BASE_URL` pour prendre en charge un hébergement en sous-dossier.

## Sécurité et maintenance

Aucun secret dans `src/`, `public/`, les variables publiques ou l'historique Git.
Le dépôt et les fichiers du site peuvent être consultés publiquement.
Les serveurs locaux écoutent uniquement sur la boucle locale ; aucun tunnel public.
Les scripts d'installation tiers sont désactivés : si une future dépendance en exige
un, l'examiner explicitement avant de l'autoriser.

Le lockfile fige les versions ; Dependabot propose les mises à jour, sans fusion
automatique. TypeScript est choisi dans la plage compatible avec Astro Check,
plutôt que de forcer une version majeure incompatible.

Les consignes pour les assistants IA se trouvent dans [AGENTS.md](AGENTS.md).
Une vérification automatique détecte certaines erreurs et certains motifs sensibles ;
elle ne remplace pas une revue de code ni un audit après ajout de fonctionnalités.
