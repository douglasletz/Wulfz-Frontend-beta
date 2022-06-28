import TopBar from "./TopBar"
import BottomBar from "./BottomBar"

import Background from "../../new/dashboard/bg.png"

import "./Content.scss"

export default function Content() {
	return (
		<div
			className="content"
			style={{ backgroundImage: `url(${Background})` }}
		>
			<TopBar />
			<BottomBar />
		</div>
	)
}
