// @ts-check
import postcssPresetEnv from 'postcss-preset-env';
import pxtorem from 'postcss-pxtorem';

/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: [],
};

const isDev = process.env.NODE_ENV === 'development';

if (!isDev) {
	config.plugins = [pxtorem(), postcssPresetEnv({ stage: 1 })];
}

export default config;
