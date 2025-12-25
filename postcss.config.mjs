// @ts-check
import postcssPresetEnv from 'postcss-preset-env';

/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: [],
};

if (process.argv.includes('build')) {
	config.plugins = [postcssPresetEnv({ stage: 1 })];
}

export default config;
