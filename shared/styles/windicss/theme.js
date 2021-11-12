import pallete from "./colorPallete.js";

export default {
	extend: {
		backgroundColor: {
			wall: pallete.black,
			primary: pallete.svelte,
			secondary: pallete.gray,
		},
		textColor: {
			wall: pallete.white,
			primary: pallete.black,
			secondary: pallete.gray.cool,
			error: pallete.red_violet,
		},
	},
};
