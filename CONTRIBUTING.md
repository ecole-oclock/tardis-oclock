# Fichier Contributing

Rédiger dans ce fichier les directives de contributions à la librairie.
Comment déposer une issue (créer un template d'issue et modèles de pull reuest)

## Bugs

---

### Known issues

You can find all the opened issues on [github](https://github.com/ecole-oclock/tardis-oclock/issues).

### Reporting new issues

You can report bugs in order to solve them. For this, you have to post an issue following a template. Before reporting a new issue, try to make sure your problem dosn't already exist.

### Security bugs

You can report vulnerability by contacting us. (TODO email de contact)

## Contributing to tardis-oclock

---

### Code of conduct

For each new contribution, please respect the architecture and philosophy of this repository.
For example, to create a new component, being inspired by the organization of existing components and naming conventions is a good practice.
Each component folder should contain :

- a `style.scss` file associated to the component
- a type file named `ComponentName.types.ts` containing all the types associated to the component.
- an `index.tsx` file containing the imports of the above mentioned files, the declaration and export of the component.

Also to be added for each component:

- make the necessary tests to validate the component by creating a file named `ComponentName.test.tsx` in the root folder `__tests__/components`
- write a story using the [storybook tool](https://storybook.js.org/docs/react/writing-docs/introduction) which clearly describe the roles and functionalities of the component to be submitted in a file named `ComponentName.stories.tsx` in the `src/stories` folder, in order to increase the documentation
- don't forget to import/export the component in the `index.ts` file at the root of the `src/components` folder to make them usable in the library after the build command  
  Please also respect the structure of the cascading style sheets by reusing or enhancing existing variables, and respecting the [BEM] methodology (http://getbem.com/)

For instance, documentation improvements are as important as code changes.

### Your first Pull Request

Working on your first Pull Request? You can learn how from this free video series:  
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

## Licence

---

By contributing your code to the [tardis-oclock](https://github.com/ecole-oclock/tardis-oclock) Github repository, you agree to licence your contribution under <CHOOSEN_LICENCE>
