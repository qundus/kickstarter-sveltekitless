import { register, init, getLocaleFromNavigator, locales } from "svelte-i18n";
import { get } from "svelte/store";
import type { SETTINGS_I18N } from "./locales/_base";

//--- add locales here, first is default.
export const settings: SETTINGS_I18N[] = [
	{
		name: "english",
		css_direction: "ltr",
		short: "en",
		loader: register("en", () => import("./locales/english")),
	},
	{
		name: "العربية",
		css_direction: "rtl",
		short: "ar",
		loader: register("ar", () => import("./locales/arabic")),
	},
];
//---

//--- helper methods
export const getLocaleSettings = (locale: string): SETTINGS_I18N => {
	return settings.find((x) => x.short === locale);
};
//---

// core logic
let initialLocale: string | null = getLocaleFromNavigator();
const index = settings.findIndex((x) => x.short === initialLocale);
if (index < 0) {
	initialLocale = settings[0].short;
}
init({
	fallbackLocale: settings[0].short,
	initialLocale: initialLocale,
	warnOnMissingMessages: true,
	ignoreTag: false,
});
