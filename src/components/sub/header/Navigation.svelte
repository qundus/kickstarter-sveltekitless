<script lang="ts">
import { _ } from "svelte-i18n";
import { url } from "@roxi/routify";
</script>

<nav>
	<a href={$url("/error")}>{$_("_fallback.nav")}</a>
	<a href={$url("/about")}>{$_("about.nav")}</a>
</nav>

<style lang="postcss">
nav {
	@apply flex justify-center items-center;
	@apply gap-1;
}

nav > a {
	@apply p-2  rounded-lg;
	@apply w-max h-10 bg-transparent;
	@apply bg-primary;
	@apply cursor-pointer;
}
</style>
