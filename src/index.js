import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { DAppProvider } from "@usedapp/core"

import "./index.css"
import App from "./App"

ReactDOM.render(
	<React.StrictMode>
		<DAppProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</DAppProvider>
	</React.StrictMode>,
	document.getElementById("root")
)
