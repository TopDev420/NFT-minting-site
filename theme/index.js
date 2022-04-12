import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const theme = extendTheme({
	fonts: {
		heading: "Antonio",
		button: "Antonio",
		body: "Jost",
	},
	colors: {
		magenta: {
			50: "#f8e3ff",
			100: "#e2b2ff",
			200: "#ce80ff",
			300: "#ba4efe",
			400: "#a61dfd",
			500: "#8d06e4",
			600: "#6d02b2",
			700: "#4e0080",
			800: "#2f004e",
			900: "#12001e",
		},
	},
	components: {
		Heading: {
			sizes: {
				// default size is md
				xl: {
					fontSize: "42px",
					lineHeight: "100%",
					textShadow: "0px 1px 2px rgba(0, 0, 0, 0.45)",
				},
				"2xl": {
					fontSize: "60px",
					lineHeight: "100%",
					textShadow: "0px 1px 2px rgba(0, 0, 0, 0.45)",
				},
			},
		},
	},
	textStyles: {
		navButton: {
			fontFamily: "button",
			fontSize: "20px",
			color: "#fff",
		},
		paragraph: {
			fontFamily: "body",
			fontSize: "20px",
			lineHeight: "1.5em",
		},
		memberName: {
			fontFamily: "heading",
			fontWeight: "bold",
			color: "#fff",
			fontSize: "36px",
		},
		memberDescription: {
			fontFamily: "body",
			color: "#fff",
			opacity: 0.6,
			fontSize: "18px",
		},
	},
	colors: {},
	styles: {
		global: {
			body: {
				bg: "#000",
			},
		},
	},
});

const myBreakpoints = createBreakpoints({
	sm: "415px",
	sm2: "570px",
	md: "768px",
	lg: "1024px",
	xl: "1260px",
});

theme.breakpoints = myBreakpoints;

export default theme;
