import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: "white",
		border: "5px solid #4d83f7",
		// boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	header: {
		fontSize: "28px",
		fontWeight: "bold",
		color: "#4d1e00",
	},
	content: {
		fontSize: "24px",
		color: "#4d1e00",
		margin: 0,
	},
}))

export default function AnimatedModal({ isOpen, modalClose, txt }) {
	const classes = useStyles()

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			className={classes.modal}
			open={isOpen}
			onClose={modalClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 100,
			}}
		>
			<Fade in={isOpen}>
				<div className={classes.paper}>
					<p className={classes.header}>Notification</p>
					<p className={classes.content}>{txt}</p>
				</div>
			</Fade>
		</Modal>
	)
}
