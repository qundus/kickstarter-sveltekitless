<script>
import Header from "components/Header.svelte";
import SEO from "components/SEO.svelte";
</script>

<SEO />
<Header />

<div>
	<!-- routify:options preload="proximity" -->
	<slot />
</div>

<style lang="postcss">
div {
	@apply w-screen h-screen;
}
</style>
