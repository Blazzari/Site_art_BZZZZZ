# Transmettre le site et changer d'hébergement

## Ce qui est portable

Le dépôt contient sources, fichiers publics, configuration, lockfile et documentation.
Ni accès SSH, ni mot de passe, ni token, ni chemin de compte utilisateur ne sont nécessaires
pour construire ou exploiter le site. Les réglages Git locaux ne sont pas versionnés.

Pour reprendre le développement : télécharger **Code → Download ZIP** sur GitHub
ou cloner le dépôt, installer les outils indiqués dans le README, puis exécuter
`pnpm install --frozen-lockfile --ignore-scripts` et `pnpm dev`.
Un téléchargement ZIP ne contient pas l'historique Git ; un clone le conserve.

Pour reprendre seulement le site : `pnpm export` génère `exports/site/`.
Transmettre ce dossier et le servir avec un hébergeur HTTP statique.
Node, pnpm, Git et les outils IA ne sont pas requis sur l'hébergeur.
Un simple double-clic sur index.html n'est pas le mode de déploiement de référence.

## Transférer le dépôt GitHub

1. Préparer le compte GitHub destinataire et vérifier son éligibilité GitHub Pages.
2. Dans Settings → General → Danger Zone → Transfer ownership, demander le transfert.
3. La destinataire accepte ; contrôler ensuite les accès et paramètres Pages/Actions.
4. Retirer les anciennes clés de déploiement et les accès qui ne sont plus nécessaires.
   La destinataire utilise ses propres identifiants ; ne pas lui transmettre une clé privée.
5. Mettre à jour origin dans chaque copie locale avec l'URL affichée sur le nouveau dépôt.
6. Lancer le workflow Site manuellement et vérifier l'URL, les images et les liens.

Le propriétaire du dépôt est déduit par le workflow : aucun nom de compte n'est
codé dans les pages. Un transfert GitHub ne remplace pas les démarches de transfert
d'un nom de domaine ni les accords sur les droits des œuvres et contenus.
Aucune licence ouverte n'est imposée par ce socle.

## Nouveau domaine

- Régler Custom domain dans Settings → Pages et les enregistrements DNS chez le registrar.
- Définir la variable de dépôt SITE_URL avec l'origine HTTPS seule, sans chemin.
- Définir BASE_PATH à / pour la racine, ou /dossier/ pour un sous-dossier.
- Republier, contrôler HTTPS et tester les liens/images.
- Pour revenir à l'adresse GitHub Pages, supprimer les variables de surcharge et
  le domaine personnalisé ; recontrôler le DNS de l'ancien domaine pour éviter
  de laisser un enregistrement pointant vers un hébergement abandonné.

En dehors de GitHub Actions, fournir SITE_URL et BASE_PATH comme variables
au moment du build. Elles sont des métadonnées publiques, pas des secrets.
Un changement de domaine nécessite une nouvelle génération si ces valeurs changent.

## Sauvegardes

Conserver une copie des sources (avec l'historique si utile), des originaux des œuvres
et du dernier export statique. Ne pas copier .git/config, .ssh, node_modules ou les
caches personnels dans une archive de remise. Les secrets restent chez leur titulaire.

## Références officielles

- https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.astro.build/en/guides/deploy/github/
