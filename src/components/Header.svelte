<script lang="ts">
import Navigation from "./sub/header/Navigation.svelte";
import LocaleSwitch from "./sub/header/LocaleSwitch.svelte";
import ThemeSwitch from "./sub/header/ThemeSwitch.svelte";
import { pic } from "src/assets";
</script>

<main>
	<div>
		<a href="/"> <img class="icon" src={pic.svelte} alt="svelte" /></a>
	</div>
	<div>
		<Navigation />
	</div>
	<div class="gap-2">
		<LocaleSwitch />
		<ThemeSwitch />
	</div>
</main>

<style lang="postcss">
main {
	@apply fixed w-full mt-2;
	@apply flex justify-between items-center;
	@apply bg-transparent;
}

main > * {
	@apply flex items-center;
}
</style>
