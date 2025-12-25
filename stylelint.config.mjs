// @ts-check
/** @type {import("stylelint").Config} */
export default {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-html',
		'stylelint-config-recess-order',
		'stylelint-config-recommended-scss',
	],
	plugins: ['stylelint-order', 'stylelint-scss'],
	customSyntax: 'postcss-html',
};
