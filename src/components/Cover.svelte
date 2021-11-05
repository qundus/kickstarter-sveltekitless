<script>
import { _, isLoading } from "svelte-i18n";
import { page } from "@roxi/routify";
</script>

<main class="bg cover-full bg-gray-300 dark:bg-dark-600">
	{#if !$isLoading}
		<h1 class="title text-black dark:text-primary">{$_($page.title + ".description")}</h1>
	{/if}
</main>

<style lang="postcss">
.bg {
	@apply m-0 p-0;
}

.bg.cover-full {
	@apply flex h-full w-full;
	@apply text-center items-center justify-center;
}

.title {
	@apply text-9xl;
}
</style>
