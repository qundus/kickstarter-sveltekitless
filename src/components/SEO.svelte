<script lang="ts" context="module">
import { _ } from "svelte-i18n";
import { page } from "@roxi/routify";
</script>

<svelte:head>
	<title>{$_($page.title + ".seo.title")}</title>
</svelte:head>