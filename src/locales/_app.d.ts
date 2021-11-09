// TODO: explore yaml solutions
// adding /// <reference path="/path/to/types.d.ts" /> line in files where you use it or by
// adding this file to include array in your tsconfig.
// declare module "*.yaml" {
// 	const data: any;
// 	export default data;
// }
// yaml-ts-loader
/**
 * carries abstract page structure
 */
export declare interface APage {
	[key: string | number]: any;
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
export default interface AppPages {
	index: APage;
	_fallback: APage;
}
