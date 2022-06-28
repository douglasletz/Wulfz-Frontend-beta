import React, { useContext, useEffect } from "react"
import Web3 from "web3"
import WulfzNFT from "../../abi/WulfzNFT.json"

import bgImg from "../../new/banner/bg.png"
import photoBoardImg from "../../new/banner/photoBoard.png"
import descriptionBoardImg from "../../new/banner/descriptionBoard.png"
import photoImg from "../../new/gallery/main.gif"
import Countdown from "./CoundDown"
import MintBtn from "./MintBtn"

import "./Banner.scss"
import "./Banner.css"

export default function Banner() {
	const [mintCount, setMintCount] = React.useState(0)
	const [contract, setContract] = React.useState(null)

	const startTimeOfPublicSale = new Date(1640710800000)
	const [chain, setChain] = React.useState(1)
	const web3 = window.ethereum ? new Web3(window.ethereum) : null

	useEffect(() => {
		if (!web3) return
		web3.eth.getChainId().then(setChain)

		window.ethereum.on("chainChanged", (chainId) => {
			setChain(chainId)
		})

		setContract(
			new web3.eth.Contract(
				WulfzNFT,
				"0x9712228cEeDA1E2dDdE52Cd5100B88986d1Cb49c"
			)
		)

		if (!!contract) {
			contract.methods
				.totalSupply()
				.call()
				.then((res) => {
					setMintCount(res)
				})
				.catch((err) => {
					console.log(err)
				})

			contract.events
				.WulfzMinted()
				.on("data", (event) => {
					setMintCount(Number(mintCount) + 1)
				})
				.on("error", (error) => {
					console.log(error)
				})
		}
	}, [])
	// const [startTimeOfPublicSale, setPublicSale] = React.useState(0)

	// contract.methods
	// 	.startTimeOfPublicSale()
	// 	.call()
	// 	.then((res) => {
	// 		setPublicSale(res)
	// 	})
	// 	.catch((err) => {
	// 		console.log(err)
	// 	})

	return (
		<div
			className="bannerContainer"
			style={{
				backgroundImage: `url(${bgImg})`,
				backgroundSize: "100% 100%",
			}}
		>
			<p className="topPresent">Sold Out!</p>

			<div className="bannerPaperContainer">
				<div className="bannerPaper">
					<PhotoBoard />

					<div
						className="descriptionBoard"
						style={{
							backgroundImage: `url(${descriptionBoardImg})`,
							backgroundSize: "100% 100%",
						}}
					>
						<p>
							A pack of <span>5,555</span> Wulfz finding their way
							through the Metaverse. Using the power of{" "}
							<span>$AWOO</span>, they can expand and evolve to
							ensure that they are prepared to defend themselves
							against unknown threats.
						</p>
					</div>

					<div className="mintPackageContainer">
						<div className="mintPackage">
							{/* <MintBtn txt="MINT 1" amount="1" />
              <MintBtn txt="MINT 2" amount="2" /> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function PhotoBoard() {
	return (
		<div className="photoBoard">
			<img src={photoBoardImg} className="photoBoardImg" />
			<img src={photoImg} className="photoImg" />
		</div>
	)
}
