// // load everything before App
import "virtual:windi.css";
import "virtual:windi-devtools";
import "./styles/global.css";
import "./locales";

import HMR from "@roxi/routify/hmr";
import App from "src/App.svelte";
const app = HMR(App, { target: document.body }, "my-app");
export default app;
