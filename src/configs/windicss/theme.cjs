import colors from "windicss/colors";

const red_violet = "#8c2f39";
const gray = "gray500";

module.exports.theme = {
	extend: {
		backgroundColor: {
			wall: colors.black,
			primary: colors.orange[400],
			secondary: gray,
		},
		textColor: {
			wall: colors.white,
			primary: colors.black,
			secondary: colors.coolGray,
			error: red_violet,
		},
	},
};
