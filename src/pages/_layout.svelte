<script>
import Header from "components/Header.svelte";
import SEO from "components/SEO.svelte";
</script>

<SEO />
<Header />

<!-- routify:options preload="proximity" -->
<slot />
