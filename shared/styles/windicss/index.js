import { defineConfig } from "windicss/helpers";
import shortcuts from "./shortcuts.js";
import theme from "./theme.js";
export default defineConfig({
	darkMode: "class",
	shortcuts: shortcuts,
	theme: theme,
});
