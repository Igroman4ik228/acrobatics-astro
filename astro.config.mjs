// @ts-check
import { defineConfig } from 'astro/config';
import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
	integrations: [playformCompress()],
	compressHTML: false,
	scopedStyleStrategy: 'class',

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: "@use '@/styles/helper' as *;",
				},
			},
		},
	},
});
