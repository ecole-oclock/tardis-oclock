# Contributing to tardis-oclock

First off, thank you for your interest and considering contributing to Tardis-Oclock components library.  
It's people like you that make Tardis-Oclock such a great tool.
By following these few general guidelines on contributing and reporting bugs, you show that you respect the time of the developers who manage and develop this open source library. In return, they should reciprocate by addressing your issue, evaluating changes, and helping you finalise your pull requests.  
Notice that all of your interactions in the project are expected to follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## Bugs

### Known issues

You can find all the opened issues [here](https://github.com/ecole-oclock/tardis-oclock/issues).

### Reporting new issues

You can report bugs in order to solve them. For this, you have to post an issue following a template. Before reporting a new issue, try to make sure your problem doesn't already exist by searching issues for similar tickets.

### Security bugs

You can report vulnerability by contacting us. (TODO email de contact)

---

## Contributing to tardis-oclock

### Code of conduct

For each new contribution, please respect the architecture and philosophy of this repository.
For example, to create a new component, being inspired by the organization of existing components and naming conventions is a good practice.
Each component folder should contain :

- a `style.scss` file associated to the component
- a type file named `ComponentName.types.ts` containing all the types associated to the component.
- an `index.tsx` file containing the imports of the above mentioned files, the declaration and export of the component.

Also to be added for each component:

- make the necessary tests to validate the component by creating a file named `ComponentName.test.tsx` in the root folder `__tests__/components`
- write a story using the [storybook tool](https://storybook.js.org/docs/react/writing-docs/introduction) which clearly describe the roles, features and props of the component to be submitted in a file named `ComponentName.stories.tsx` in the `src/stories` folder, in order to increase the documentation
- don't forget to import/export the component in the `index.ts` file at the root of the `src/components` folder to make it usable in the library after the build command
- please also respect the structure of the cascading style sheets and global design UI/UX by reusing or enhancing existing [variables](./src/scss/_vars.scss), and respecting the [BEM methodology](http://getbem.com/)

For instance, documentation improvements are as important as code changes.

### Your first Pull Request

Working on your first Pull Request? You can learn how from this free video series:  
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

//TODO création d'un template de pull request + documentation du fork du projet

### Develop library on local

While developping this library on local, you may run two projects. The first one is the library project, the second one is an app importing the library with npm link :

Open a terminal on the root of your library folder :

```bash
npm run build
cd dist
npm link
```

Then, open a new terminal on the root of your application folder :

```bash
npm link tardis-oclock
```

Finally, according to the [official React documentation](https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react), to avoid React running two instances (one in the app, and the other one in the lib), you may link the app dependencies to your library :

Open a terminal on the root of your library folder :

```bash
npm link ../paste_to_your_app/node_modules/react
```

---

## Licence

By contributing your code to the [tardis-oclock](https://github.com/ecole-oclock/tardis-oclock) Github repository, you agree to licence your contribution under [MIT Licence](./LICENCE)

```

```
