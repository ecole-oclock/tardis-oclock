# Rollup Template

Tardis O'clock is an open source ReactJS components library (add a better description and image to illustrate the library's components)

## Getting Started

### Prerequisites

Tardis Oclock is running with NPM

### Installation

This project is not actually publish on NPM, you can run it locally to use the library in your application.

1. Clone the project from Github, install dependencies, then move on the develop branch, following commands:

```bash
git clone git@github.com:ecole-oclock/tardis-oclock.git <directory>
cd <directory>
npm i
git checkout develop
```

2. Make a build by running build script:

```bash
npm run build
```

this will delete previous dist directory and perfom a build from our library following the Rollup configuration.

3. Use NPM link to simulate an NPM publish locally, NPM will install the library package locally:

```bash
cd dist/
npm link
```

4. then create a symbolic link from globally-installed 'tardis-oclock' to node_modules/ in your application :

```bash
cd ../../<your-app-directory>
npm link tardis-oclock
```

**Knowings Issues :**

According to the [official React documentation](https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react), to avoid React running two instances (one in the app, and the other one in the lib), you may link the app dependencies to your library :

Open a terminal on the root of your library folder :

```bash
npm link ../paste_to_your_app/node_modules/react
```

5. Then, import components and styles to your application

```js
import { Timeline } from 'tardis-oclock';
import 'tardis-oclock/dist/styles.css';
```

6. Run the documentation server locally :
   On your tardis-oclock folder, you can run this command to open storybook in development mode :

```bash
npm run storybook
```

This will open a server running our Storybook instance on [port 6006](http://localhost:6006/)

## Build with :

- [Rollup](https://rollupjs.org/guide/en/) - Module bundler for JavaScript.
- [React](https://reactjs.org/docs/getting-started.html) - JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language builds on JavaScript.
- [Sass](https://sass-lang.com/) using [Scss syntax](https://sass-lang.com/documentation/syntax) - Preprocessor scripting language compiled into CSS.
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction) Styleguide tools for building UI components and documentation.
- [Jest](https://jestjs.io/) - JavaScript testing framework.
- [EsLint](https://eslint.org/) - Find and fix problems in your JavaScript Code.
- [Prettier](https://prettier.io/) - Code formatter.
- [Husky](https://typicode.github.io/husky/#/) - Improve commits.
- [Git Flow](https://git-flow.readthedocs.io/en/latest/presentation.html) Workflow git.

## Depending on :

- [DayJS](https://day.js.org/en/) - A minimalist Javascript library that parses, validates, manipulates, and displays dates and times

## Contributing

If you want to contribute to our project, take a look on [contributions rules](./CONTRIBUTING.md)

## Licence

Show [licence](./LICENCE.md)
