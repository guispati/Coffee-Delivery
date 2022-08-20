import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { PurchaseListContextProvider } from './contexts/PurchaseListContext';


export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<PurchaseListContextProvider>
					<Router />
				</PurchaseListContextProvider>
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	)
}
