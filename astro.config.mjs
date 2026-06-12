// @ts-check
import { defineConfig } from 'astro/config';
import playformCompress from '@playform/compress';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://igroman4ik228.github.io',
	base: '/acrobatics-astro',
	integrations: [playformCompress(), sitemap()],
	compressHTML: false,
	scopedStyleStrategy: 'class',

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "helper" as *;',
					loadPaths: ['./src/styles'],
				},
			},
		},
	},
});
