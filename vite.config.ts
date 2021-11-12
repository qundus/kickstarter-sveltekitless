import { defineConfig } from "vite";
import { resolve } from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltepreprocess from "svelte-preprocess";
import precompileIntl from "svelte-intl-precompile/sveltekit-plugin.js";

// windicss hmr doesn't play well with separate config files,
// even setting configFiles[] only updaets the first config file
// so this is the best structure i tested that works well.
import WindiCSS from "vite-plugin-windicss";
import windicss_config from "./shared/styles/windicss";

const dir = process.cwd();
export default defineConfig(({ command, mode }) => {
	const isProduction = mode === "production";
	return {
		build: {
			outDir: "dist",
			minify: "esbuild",
		},
		server: {
			port: 3000,
		},
		publicDir: "shared/assets",
		optimizeDeps: {
			exclude: ["@roxi/routify"],
		},
		resolve: {
			dedupe: ["svelte", "@roxi/routify"],
			// need to be in sync with tsconfig paths
			alias: {
				svelte: resolve(dir, "node_modules", "svelte"),
				"src": resolve(dir, "src"),
				"shared": resolve(dir, "shared"),
			},
		},
		plugins: [
			WindiCSS({
				config: windicss_config,
				scan: {
					exclude: ["node_modules/**/*", ".git/**/*"],
				},
			}),
			precompileIntl("shared/locales"),
			svelte({
				emitCss: true, // hand css to windi
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
