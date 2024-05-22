# React + TypeScript + Vite

## Deployed at



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


