import { register, init, getLocaleFromNavigator, addMessages } from "svelte-intl-precompile";
import * as locales from "./_locales";

let fallback_locale: string;
let initial_locale: string;
let navigator_locale: string | null = getLocaleFromNavigator();

// setup everything
const locales_entries = Object.entries(locales);
locales_entries.forEach((kvp) => {
	const [key, value] = kvp;

	// dynamic/static locale registration
	if (value.loader instanceof Promise) {
		register(key, () => value.loader);
	} else {
		addMessages(key, value.loader);
	}

	// assign default locale
	if (value.default) {
		if (!fallback_locale) {
			fallback_locale = key;
		} else {
			console.error("Detected two default locales, please check!");
		}
	}

	if (!initial_locale && key === navigator_locale) {
		initial_locale = navigator_locale;
	}
});

// if default hasn't been set
if (!fallback_locale) {
	fallback_locale = locales_entries[0][0];
	console.warn(`Default locale hasn't been set, 
	choosing the first locale alphabetically.`);
}

// if no initial locale
if (!initial_locale) {
	initial_locale = fallback_locale;
}

// initialize i18n
init({
	fallbackLocale: fallback_locale,
	initialLocale: initial_locale,
});
