export interface LocaleSettings {
	loading: string; // native lang string
	native_name: string;
	css_direction: string;
	/**
	 * pass a 'Promise' to use register(),
	 * pass a 'DeepDictionary[]' to use addMessage() */
	loader: any;
	default?: boolean | false;
	[key: string]: any;
}
// -----------------------------------------------------
// add and/or adjust the following locales as you wish,
// they'll be registered in ./index.ts automatically.
// -----------------------------------------------------
export const en: LocaleSettings = {
	default: true,
	loading: "loading",
	native_name: "english",
	css_direction: "ltr",
	loader: import("./english"),
};

export const ar: LocaleSettings = {
	loading: "جاري التحميل",
	native_name: "العربية",
	css_direction: "rtl",
	loader: import("./arabic"),
};
