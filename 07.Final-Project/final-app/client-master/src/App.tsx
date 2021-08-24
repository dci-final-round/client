import * as React from "react";
import {
	ChakraProvider,
	Box,
	Text,
	Link,
	VStack,
	Code,
	Grid,
	ThemeProvider,
	CSSReset,
	extendTheme
} from "@chakra-ui/react";

import { customTheme } from './Styles/theme';
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { AppRouter } from "./Router";


export const App = () => (
	<ChakraProvider theme={customTheme}>
		<AppRouter>
			<CSSReset/>
		</AppRouter>
	</ChakraProvider>
);
