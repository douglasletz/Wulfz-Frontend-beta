import React from "react"
import "font-awesome/css/font-awesome.min.css"
// import CustomModal from "./Modal"

import "./SocialBtn.scss"

export default function SocialBtn(props) {
	const [open, setOpen] = React.useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const style = { width: "64px", height: "64px" }
	return (
		<div>
			<div className="socialBtn">
				<img style={style} src={props.src} />
			</div>
			{/* <CustomModal
				isOpen={open}
				modalClose={handleClose}
				txt="You can visit https://opensea.io/collection/wulfz-official"
			/> */}
		</div>
	)
}
