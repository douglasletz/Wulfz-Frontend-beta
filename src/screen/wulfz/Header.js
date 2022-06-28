import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useEthers, useEtherBalance } from "@usedapp/core"

import SocialBtn from "../../components/SocialBtn"

import Connect from "../../new/ico/connect.png"
import OpenSea from "../../new/ico/opensea.png"
import Discord from "../../new/ico/discord.png"
import Twitter from "../../new/ico/twitter.png"
import Home from "../../new/ico/home.png"
import List from "../../new/ico/list.png"
import Close from "../../new/ico/close.png"
import Background from "../../new/ico/topbar.png"

import "./Header.scss"

export default function Header() {
	const [bSticky, setSticky] = useState(false)
	const [bHeader, setHeader] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
	})

	const handleScroll = () => {
		const scrollY = window.scrollY
		if (scrollY > 40) setSticky(true)
		else setSticky(false)
	}

	return (
		<div className="headerContainer">
			<div
				className={
					"headerBar " + (bSticky ? "headerSticky" : "headerTop")
				}
				style={{
					backgroundImage: `url(${Background})`,
					backgroundSize: "100% 100%",
				}}
			>
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
				<div className="wallet-connect">
					<Link to="/dashboard">
						<SocialBtn src={Home} />
					</Link>

					<ConnectBtn />
				</div>
			</div>
			<div className="headerOther">
				<div
					className={"topBar " + (bHeader ? "topBarSelected" : "")}
					onClick={() => {
						setHeader(!bHeader)
					}}
				>
					{bHeader ? (
						<img
							style={{ width: "30px", height: "30px" }}
							src={Close}
						/>
					) : (
						<img src={List} />
					)}
				</div>
				{bHeader && (
					<div className="hamContainer">
						<div className="social">
							{/* <a
								href="http://opensea.io/wulfzNFT"
								target="_blank"
							> */}
							<SocialBtn src={OpenSea} blocked="true" />
							{/* </a> */}
							<a href="http://discord.gg/wulfz" target="_blank">
								<SocialBtn src={Discord} />
							</a>
							<a
								href="https://twitter.com/wulfznft"
								target="_blank"
							>
								<SocialBtn src={Twitter} />
							</a>
							<Link to="/dashboard">
								<SocialBtn src={Home} />
							</Link>
						</div>
						<ConnectBtn />
					</div>
				)}
			</div>
		</div>
	)
}

function ConnectBtn(props) {
	const { activateBrowserWallet, account } = useEthers()

	const handleWallet = () => {
		activateBrowserWallet()
	}

	return (
		<a
			style={{
				backgroundImage: `url(${Connect})`,
				width: "180px",
				height: "64px",
				fontSize: "26px",
			}}
			className="connectButton"
			onClick={handleWallet}
		>
			{account ? `${account.slice(0, 6)}...` : "Connect"}
		</a>
	)
}
