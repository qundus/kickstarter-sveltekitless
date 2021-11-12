<script lang="ts">
import Navigation from "./sub/header/Navigation.svelte";
import LocaleSwitch from "./sub/header/LocaleSwitch.svelte";
import ThemeSwitch from "./sub/header/ThemeSwitch.svelte";
import assets from "shared/assets";
</script>

<main
	class="fixed w-full mt-2 flex justify-between items-center bg-transparent children:(flex items-center)"
>
	<div>
		<a href="/"> <img class="icon" src={assets.svelte} alt="logo_brand" /></a>
	</div>
	<div>
		<Navigation />
	</div>
	<div class="gap-2">
		<LocaleSwitch />
		<ThemeSwitch />
	</div>
</main>
