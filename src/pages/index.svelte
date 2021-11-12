<script>
import { page } from "@roxi/routify";
import T from "src/components/Translate.svelte";
import assets from "shared/assets";
</script>

<main class="h-screen w-screen main flex flex-row">
	<img class="ltr:ml-30 rtl:mr-30 h-1/2 self-center" src={assets.svelte} alt="brand_logo" />
	<div class="flex flex-col content-center justify-center">
		<h1 class="text-7xl text_wall align-self-middle">
			<T text={$page.title + ".description"} />
		</h1>
		<div class="flex flex-row">
			<button class="rounded-lg" />
		</div>
	</div>
</main>
