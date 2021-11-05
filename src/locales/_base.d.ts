/**
 * used to define locale specific settings
 */
export declare interface SETTINGS_I18N {
	name: string;
	css_direction: string;
	/**
	 * has to be same as used in method
	 */
	short: string;
	/**
	 * could be `register` or `import`
	 */
	loader: void;
}

/**
 * carries abstract page structure
 */
export declare interface PAGE_I18N {
	[key: string]: any;
	nav: string;
	seo: {
		title: string;
	};
}

/**
 * structured however you like, acts as base for all locales.
 * ps: try to name these exactly as the routes or pages under `src/pages`
 * so the SEO component could work properly.
 */
export default interface LOCALE_I18N {
	// locale_settings: SETTINGS_I18N;
	index: PAGE_I18N;
	about: PAGE_I18N;
	_fallback: PAGE_I18N;
}
