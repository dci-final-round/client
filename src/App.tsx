import * as React from "react";
import {
	ChakraProvider,
	Box,
	Text,
	Link,
	VStack,
	Code,
	Grid,
	extendTheme
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { AppRouter } from "./Router";

const theme = extendTheme({
	colors: {
		brand: {
			100: "#f7fafc",
			// ...
			900: "#1a202c"
		}
	}
});

export const App = () => (
	<ChakraProvider theme={theme}>
		<AppRouter></AppRouter>
	</ChakraProvider>
);
