<script lang="ts" context="module">
import { _, isLoading } from "svelte-intl-precompile";
export const t = _;
</script>

<script lang="ts">
export let text: string = null;
</script>

{#if text}
	{#if !$isLoading}
		{$_(text)}
	{:else}
		{$_("loading")}
	{/if}
{:else}
	Text is not provided for translation..
{/if}
