// styles
import "virtual:windi.css";
import "virtual:windi-devtools";
import "shared/styles/global.css";

// localization
import "shared/locales";

// assets (loaded per need)

import HMR from "@roxi/routify/hmr";
import App from "./App.svelte";
const app = HMR(App, { target: document.body }, "my-app");
export default app;
