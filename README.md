# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Deploy


### Github Pages

Github pages automatically looks for an index.html. It's best to setup a deploy folder called dist/build

1. Install the CLI this will handle authentication for you.
   https://github.com/cli/cli#installation

2. Set Homepage
````
 "homepage": "https://gitname.github.io/react-gh-pages",
````

2. Vite config set base path to git subdirectory

````
export default defineConfig({

    base: '/example/',
})
````

3. Create Subtree
````
git subtree push --prefix dist origin gh-pages
````

If you get an error try removing "dist" from git ignore
In this example dist is our directory

4. Deploy on Github.com
   In github.com > pages > select branch gh-pages




### Typescript notes

Exporting arrays from hooks add `as const`
Functions can be declared as return `void` or as type `()=>void`
You can sit an or <oneType | anotherType>
Examples: `boolean | Array<Profile>` 


