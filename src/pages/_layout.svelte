<script>
import Header from "src/components/Header.svelte";
import SEO from "src/components/SEO.svelte";
</script>

<SEO />
<Header />

<!-- routify:options preload="proximity" -->
<slot />
