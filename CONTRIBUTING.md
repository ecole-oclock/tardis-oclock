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

---

## Contributing to tardis-oclock

---

### Code of conduct

For each new contribution, please respect the architecture and philosophy of this repository.
For example, to create a new component, being inspired by the organization of existing components and naming conventions is a good practice.
Each component folder should, at list, contain :

- a `style.scss` file associated to the component
- a type file named `ComponentName.types.ts` containing all the types associated to the component.
- an `index.tsx` file containing the imports of the above mentioned files, the declaration and export of the component.

Also to be added for each component:

- make the necessary tests to validate the component by creating a file named `ComponentName.test.tsx` in the root folder `__tests__/components`
- write a story using the [storybook tool](https://storybook.js.org/docs/react/writing-docs/introduction) which clearly describe the roles, features and props of the component to be submitted in a file named `ComponentName.stories.tsx` in the `src/stories` folder, in order to increase the documentation
- don't forget to import/export the component in the `index.ts` file at the root of the `src/components` folder if you want to make it usable in the library after the build command
- please also respect the structure of the cascading style sheets and global design UI/UX by reusing or enhancing existing [variables](./src/scss/_vars.scss), and respecting the [BEM methodology](http://getbem.com/)

**For instance, documentation improvements are as important as code changes**.

### Your first Pull Request

Working on your first Pull Request? You can learn how from this free video series:  
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

---

### Git Flow

We use a [Git Flow architecture](https://danielkummer.github.io/git-flow-cheatsheet/index.fr_FR.html) (You need a working git installation as prerequisite).  
Start a new feature (based on branch develop) with :

```bash
git flow feature start MYFEATURE
```

To publish a feature on the remote server use :

```bash
git add .
git commit -m 'my explicit commit message'
git flow feature publish MYFEATURE
```

When finishing the development on a feature :

```bash
git flow feature finish MYFEATURE
```

This action will merge MYFEATURE into 'develop', remove the feature branch and switch back to branch 'develop'.

---

### Scripts

#### Run project in development mode

You can run the development script, which will compile code after any changes :

```bash
npm run dev
```

If you want to delete the dist folder, run the command :

```bash
npm run clear
```

To perform the build of the library for production mode, run :

```bash
npm run build
```

This will create a dist floder containing the building library.

#### Testing

##### Jest

To run the tests using jest and @testing-library/react, you can run the command :

```bash
npm run test
```

or, to run the tests in watch mode :

```bash
npm run test:watch
```

##### Husky

A pre-commit hook by Husky will be run all the tests before each commit.

```bash
npm run prepare
```

---

#### Documentation

We use [Storybook](https://storybook.js.org/) to document our components. You can run commands to run a server locally in development mode, or perform a build for production.

##### Development mode

To run the documentation during development, you can run the command:

```bash
npm run storybook
```

This will open a server running our Storybook instance on [port 6006](http://localhost:6006/)

##### Production mode

To perform the build of the library's documentation for production, you can run :

```bash
npm run build-storybook
```

---

#### EsLint and Prettier

If you want to run the linter :

```bash
npm run lint
```

Then, you want to format :

```bash
npm run format
```

---

### Develop library on local

This project is not actually publish on NPM, you can run it locally to use the library in your application.

Clone the project from Github, install dependencies, then move on the develop branch, following commands:

```bash
git clone git@github.com:ecole-oclock/tardis-oclock.git <directory>
cd <directory>
npm i
git checkout develop
```

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
