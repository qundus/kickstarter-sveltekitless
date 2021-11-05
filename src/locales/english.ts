import type LOCALE_I18N from "./_base";
import type { PAGE_I18N } from "./_base";

const index: PAGE_I18N = {
	nav: "Home",
	seo: {
		title: "Homepage",
	},
	description: "this is the home page",
};

const about: PAGE_I18N = {
	nav: "About",
	seo: {
		title: "About Page",
	},
	description: "this is the about page booiii!",
};

const fallback: PAGE_I18N = {
	nav: "Error Page",
	seo: {
		title: "Something went wrong",
	},
	back: "Go Back",
	[404]: "Page not found",
};

const locale: LOCALE_I18N = {
	index: index,
	about: about,
	_fallback: fallback,
};

export default locale;
