<script lang="ts">
import { _, locale, locales, dictionary } from "svelte-i18n";
import { onMount } from "svelte";
import { settings, getLocaleSettings } from "src/locales";

// change direction html according to locale
let root: Element;
$: if (root && $locale) {
	root.setAttribute("dir", getLocaleSettings($locale).css_direction);
}

onMount(() => {
	root = document.getElementsByTagName("html")[0];
});
</script>

<select class="rounded-lg" name="langs" bind:value={$locale}>
	{#each settings as locale}
		<option value={locale.short}>{locale.name}</option>
	{/each}
</select>

<style lang="postcss">
select {
	@apply w-max h-11;
}
</style>
