import React from "react"
import { Link } from "react-router-dom"

import SocialBtn from "../../components/SocialBtn"

import OpenSea from "../../new/ico/opensea.png"
import Discord from "../../new/ico/discord.png"
import Twitter from "../../new/ico/twitter.png"

import "./Footer.scss"

export default function Footer() {
	return (
		<div className="footerContainer">
			<div className="footerBar">
				<div className="copyrightBox">
					<p className="copyright">© Wulfz 2021</p>
					<Link to="/termsAndService">
						<p className="termsAndPolicy">Terms and Policy</p>
					</Link>
				</div>
				<div className="social">
					<a
						href="https://opensea.io/collection/wulfz-official"
						target="_blank"
					>
						<SocialBtn src={OpenSea} blocked="true" />
					</a>
					<a href="http://discord.gg/wulfz" target="_blank">
						<SocialBtn src={Discord} />
					</a>
					<a href="https://twitter.com/wulfznft" target="_blank">
						<SocialBtn src={Twitter} />
					</a>
				</div>
			</div>
		</div>
	)
}
