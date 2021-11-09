import { defineConfig } from "windicss/helpers";
export default defineConfig({
	darkMode: "class",
	shortcuts: require("./shortcuts.cjs").shortcuts,
	theme: require("./theme.cjs").theme,
});
