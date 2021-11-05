import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

import { defineConfig } from "vite";
import svelte from "@svitejs/vite-plugin-svelte";
import sveltepreprocess from "svelte-preprocess";
import WindiCSS from "vite-plugin-windicss";

// define path to current project
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// actual vite configs
export default defineConfig(({ command, mode }) => {
	const isProduction = mode === "production";
	return {
		build: {
			outDir: "dist", // DO NOT CHANGE
			minify: "esbuild",
		},
		server: {
			port: 3000,
		},
		publicDir: "static",
		optimizeDeps: {
			exclude: ["@roxi/routify"],
		},
		resolve: {
			dedupe: ["svelte", "@roxi/routify"],
			alias: {
				svelte: resolve(__dirname, "node_modules", "svelte"),
				"root": resolve(__dirname),
				"src": resolve(__dirname, "src"),
				"components": resolve(__dirname, "src", "components"),
				"locales": resolve(__dirname, "src", "locales"),
				"static": resolve(__dirname, "static"),
				"style": resolve(__dirname, "style"),
			},
		},
		plugins: [
			WindiCSS({
				config: "windi.config.js",
				scan: {
					// include: ["src/**/*.{svelte,html,jsx,tsx,js,ts}", "style/**/*.{css, scss, less}"],
					exclude: ["node_modules", ".git"],
				},
			}),
			svelte({
				//@ts-ignore
				hot: !isProduction,
				emitCss: true,
				extensions: [".md", ".svx", ".svelte"],
				preprocess: [sveltepreprocess({})],
				compilerOptions: {
					// dev: isProduction,
					// css: false,
					// hydratable: true,
					// format: "esm",
					// generate: "dom",
				},
			}),
		],
	};
});
