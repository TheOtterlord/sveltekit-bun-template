import adapter from 'svelte-adapter-bun';
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
		adapter: adapter(),
	}
};

export default config;
