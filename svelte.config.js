import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import {mdsvex} from 'mdsvex'

const mdsvexOptions = {
	extensions: ['.md']
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess({
			scss: {
				prependData: `@use 'src/lib/styles/_variables.scss' as *;`
			}
		}),
		mdsvex(mdsvexOptions)
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
