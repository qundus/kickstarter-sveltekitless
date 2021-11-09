<script lang="ts">
import { _, locale } from "svelte-intl-precompile";
import { onMount } from "svelte";
import * as locales from "src/locales/_locales";

const locales_entries = Object.entries(locales);
// change direction html according to locale
let root: Element;
$: if (root && $locale) {
	root.setAttribute("dir", locales[$locale].css_direction);
}

function onSwitch(): string {
	return $locale;
}
onMount(() => {
	root = document.getElementsByTagName("html")[0];
});
</script>

<select class="rounded-lg w-max h-11" name="langs" bind:value={$locale}>
	{#each locales_entries as [key, value]}
		<option value={key}>{value.native_name}</option>
	{/each}
</select>
