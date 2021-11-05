import { defineConfig } from "windicss/helpers"; // also works with svelte-windicss
// import { defineConfig } from "vite-plugin-windicss"; // slower bundling

export default defineConfig({
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#F0C281", // gold
				secondary: "#2A3D45", // charcoal
				error: "#8C2F39", // red
			},
		},
	},
});
