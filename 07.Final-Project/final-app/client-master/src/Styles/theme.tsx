import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button} from "./components/buttonStyles";

export const customTheme=extendTheme({
	colors:{
		primary: "#9B6BCB",
		secondary: "#63AD6A",
		neutral: "#FFD747",
		warning: "#FF843F",

	},
	fonts:{
		regular: "Roboto",
		mono: "Roboto Mono"
		
	},
	components: {
		Button
	}
})