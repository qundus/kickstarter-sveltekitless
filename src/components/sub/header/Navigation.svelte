<script lang="ts">
import { url } from "@roxi/routify";
import T from "src/components/Translate.svelte";
</script>

<nav>
	<a href={$url("/_fallback")}><T text="_fallback.nav" /></a>
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
