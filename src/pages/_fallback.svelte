<script>
import { url } from "@roxi/routify";
import { t } from "src/components/Translate.svelte";
</script>

<div class="main h-screen flex flex-col justify-center items-center bg-secondary">
	<div class="grid place-items-center">
		<p class="text-9xl text-error">404</p>
		<p class="text-3xl text-primary dark:text-white">{$t("_fallback._404")}</p>
	</div>

	<div>
		<a class="text-primary dark:text-error" href={$url("../")}>{$t("_fallback.back")}</a>
	</div>
</div>
