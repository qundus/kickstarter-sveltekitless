<script lang="ts" context="module">
// add more themes and make sure they're added to markup below and your css ofcourse
// using string values is better than using enum keys as css classes for freedom purposes
enum Themes {
	Light = "light",
	Dark = "dark",
}
</script>

<script lang="ts">
let main: Themes = Themes.Light;
let next: Themes = Themes.Dark;

$: document.getElementsByTagName("html")[0].classList.toggle(main);
function next_theme(): void {
	document.getElementsByTagName("html")[0].classList.toggle(main);

	const keys = Object.values(Themes);
	const values = Object.values(Themes);
	let index = values.indexOf(main);
	index++;
	if (index >= values.length) {
		index = 0;
	}
	main = keys[index] as Themes;

	index++;
	if (index >= values.length) {
		index = 0;
	}
	next = keys[index] as Themes;
}
</script>

<!-- using remix icon https://remixicon.com -->
<!-- you could instead save .svg files and import, i like editing the svgs directly -->
<button class="icon justify-self-end ring-0" on:click={() => next_theme()}>
	{#if next === Themes.Dark}
		<svg
			class="text-black-500 fill-current"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24"
			height="24"
			><path fill="none" d="M0 0h24v24H0z" /><path
				d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"
			/></svg
		>
	{:else if next === Themes.Light}
		<svg
			class="text-white fill-current"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24"
			height="24"
			><path fill="none" d="M0 0h24v24H0z" /><path
				d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
			/></svg
		>
	{/if}
</button>
