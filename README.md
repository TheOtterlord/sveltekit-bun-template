# Sveltekit + Bun

Everything you need to build a Svelte project, powered by [Bun](https://bun.sh) and the [`svelte-adapter-bun`](https://github.com/gornostay25/svelte-adapter-bun) package. Based on the [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte) skeleton project.

## Requirements

- Node.js LTS or newer
- Bun

## Clone & Setup

```bash
bun create TheOtterlord/sveltekit-bun-template my-project
```

## Developing

Once you've created a project and navigated to the root directory of the project, start a development server:

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

To create a production version of your app:

```bash
bun run build
```

To skip type-checking when building for production, instead use:

```
bun run build:force
```

You can preview the production build with `bun run preview`.
In the production environment, you can use `bun ./build/index.js` to run the production server.

## Important notes

- Vite will not type-check on the development server. This is a known issue with Sveltekit and more information can be found [here](https://github.com/ivanhofer/sveltekit-typescript-showcase#type-checking-the-whole-project). Run `bun run check` or `bun run check:watch` if you need type-checking during development.
- The Bun runtime is not used for the development server or any build or check processes. Vite instead uses the Node.js runtime. Bun is only used to run the production server. 
