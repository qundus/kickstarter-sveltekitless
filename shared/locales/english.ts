import type AppPages from "./_app";
export default {
	index: {
		nav: "Home",
		seo: {
			title: "Homepage",
		},
		description: "Svelte kitless",
	},

	_fallback: {
		nav: "Error Page",
		seo: {
			title: "Something went wrong",
		},
		back: "Go Back",
		_404: "Page not found",
	},
} as AppPages;
