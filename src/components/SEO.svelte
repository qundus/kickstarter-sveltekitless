<script lang="ts" context="module">
import { page } from "@roxi/routify";
import { t } from "src/components/Translate.svelte";
</script>

<svelte:head>
	<title>{$t($page.title + ".seo.title")}</title>
</svelte:head>
