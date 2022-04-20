### Fichier Changelog :

- Principes Directeurs

  - Les changelogs sont pour les êtres humains, pas les machines.
  - Il doit y avoir une section pour chaque version.
  - Les changements similaires doivent être groupés.
  - Les versions et sections doivent être liables.
  - La version la plus récente se situe en haut du fichier.
  - La date de publication de chaque version est indiquée.
  - Indiquer si le projet respecte le [Versionnage Sémantique](https://semver.org/).

- Types de changements

  - `Added` pour les nouvelles fonctionnalités.
  - `Changed` pour les changements aux fonctionnalités préexistantes.
  - `Deprecated` pour les fonctionnalités qui seront bientôt supprimées.
  - `Removed` pour les fonctionnalités désormais supprimées.
  - `Fixed` pour les corrections de bugs.
  - `Security` en cas de vulnérabilités.

- Garder une section `Unrealeased` en haut du fichier afin de lister tous les changements qui n'ont pas encore été publiés
  - Les gens peuvent voir les changements auxquels ils peuvent s'attendre dans les prochaines publications
  - Au moment de la publication, vous pouvez déplacer les changements listés dans la section `unreleased` dans la section d'une nouvelle version

---
