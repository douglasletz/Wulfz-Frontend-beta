import React from "react"
import { Routes, Route } from "react-router-dom"
import Wulfz from "./screen/wulfz"
import DashBoard from "./screen/dashboard"
import Term from "./screen/wulfz/TermsAndPolicy"

function App() {
	return (
		<Routes>
			<Route path="/" element={<Wulfz />} />
			<Route path="/dashboard" element={<DashBoard />} />
			<Route path="/termsAndService" element={<Term />} />
		</Routes>
	)
}

export default App
