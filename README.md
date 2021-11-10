# Svelte Kitless

I like svelte-kit very much but when i stumble upon css frameworks or bundlers or any library online
i find guides for either `sveltekit` or `sveltejs` or both, so i've decided to use recreate the
sveltekit ecosystem with sveltejs to have a broader (if not full) control over the dev environment.

# Kickstart

```r
# clone or install .zip manually
$ npx degit onettmecha/template-svelte-kitless my-template
# move into directory
$ cd my-template
# launch project
## yarn
$ yarn && yarn dev
## npm
$ npm i && npm run dev
## pnpm
$ pnpm i && pnpm dev
```

# What's In It

[Svelte.js](https://svelte.dev)\
[Routify](https://routify.dev)\
[Vite](https://vitejs.dev)\
[WindiCSS (Tailwindcss compiler)](https://windicss.org/)\
[Svelte-i18n](https://github.com/kaisermann/svelte-i18n)\
[TypeScript](https://www.typescriptlang.org)\
[Remix Icon](https://remixicon.com)\
[Color Pallets](https://coolors.co/)

# Developer Notes

### Structure

I like my projects' roots clean and contain only the config files that cannot exist in a sub-folder,
also i like function descriptive folder names, that's why this starter is structured like this.

If you wish to add new folders like: services or any other i recommend doing so within `src`
directory as it would keep everything together, neat and straight forward.

This way allows for sub-modules to exist in the root directory easily and ease integration with
other libraries, also, helps focus on tasks in large projects.

# TBC
