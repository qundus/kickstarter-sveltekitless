<script>
import { url } from "@roxi/routify";
import { _ } from "svelte-i18n";
</script>

<div class="h-screen flex flex-col justify-center items-center bg-secondary">
	<div class="grid place-items-center">
		<p class="text-9xl text-error">404</p>
		<p class="text-3xl text-white">{$_("_fallback.404")}</p>
	</div>

	<div class="text-primary">
		<a href={$url("../")}>{$_("_fallback.back")}</a>
	</div>
</div>
