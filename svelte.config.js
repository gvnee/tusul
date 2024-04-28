import adapter from '@sveltejs/adapter-auto';

import {mdsvex} from 'mdsvex'
import sveltePreprocess from 'svelte-preprocess';

const mdsvexOptions = {
	extensions: ['.md'],
	// highlight: {}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess(),
		mdsvex(mdsvexOptions)
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
