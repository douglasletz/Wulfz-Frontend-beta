import React, { useState } from "react"

import awooImage from "../../new/roadmap/awoo.png"
import breedingImage from "../../new/roadmap/egg.png"
import evolveImage from "../../new/roadmap/evolution.png"
import merchImage from "../../new/roadmap/merch.png"
import futureImage from "../../new/roadmap/earth.png"

import titleBoardImg from "../../new/roadmap/titleBar.png"
import titleBoardImgMobile from "../../new/roadmap/titleBar-mobile.png"
import descriptionBoardImg from "../../new/roadmap/descriptionBoard.png"

import Background from "../../new/roadmap/bg.png"
import leftFootImg from "../../new/gallery/top-left-foot.png"
import rigthtFootImg from "../../new/gallery/top-right-foot.png"

import buttonAwoo from "../../new/roadmap/wrapped-awoo.png"
import buttonBreeding from "../../new/roadmap/wrappedbreed.png"
import buttonEarth from "../../new/roadmap/wrapped-earth.png"
import buttonMerch from "../../new/roadmap/wrapped-merch.png"

import "./RoadMap.scss"
import "./RoadMap.css"

export default function RoadMap() {
	const [phase, setPhase] = useState(0)

	const phases = [buttonAwoo, buttonBreeding, buttonMerch, buttonEarth]
	const descriptions = [
		{
			section: "PHASE 1",
			title1: "1 $AWOO = 1 $AWOO",
			description1:
				"$AWOO is the ERC-20 utility token of the Wulfz ecosystem. First and foremost, it is important to know that $AWOO holds no monetary value. Starting in the beginning of 2022 you can stake your Wulfz via the Hub to produce 10 $AWOO per day.",
			title2: "",
			description2: "",
			src: awooImage,
			imageCnt: 4,
		},
		{
			section: "PHASE 2",
			title1: "Adopting",
			description1:
				"Having 1 Wulf and 600 $AWOO will allow you to adopt a Pupz from the Daycare. The total supply of Pupz is 10,000. When staked, Pupz will produce 5 $AWOO per day. There is no limit to the amount of Pupz you can adopt, however there is a 14 day cooldown.",
			title2: "Evolving",
			description2:
				"1 Wulf + 1500 $AWOO will allow you to evolve your Wulf into an Alpha Wulf. In the process of evolution, your Wulf will be burned.  There is only a total of 100 Alpha Wulfz in existence. All Alpha Wulfz will be fully animated and unique. Alpha Wulfz will produce 50 $AWOO per day. Alpha Wulfz will need to have a full moon to be evolved. There is a 7 day cooldown between minting.",
			src: breedingImage,
			extraSrc: evolveImage,
			imageCnt: 1,
		},
		{
			section: "PHASE 3",
			title1: "Community",
			description1:
				"One of the primary goals for Wulfz is to create a strong pack within our community. All Wulfz holders will have a private channel to share Alpha and bond with each other. Our Founder, Artist, and Developer will be working on the Wulfz project full-time for the foreseeable future. As time goes on, there will be further utilization for $AWOO which the Pack will have access to.",
			title2: "",
			description2: "",
			src: merchImage,
			imageCnt: 4,
		},
		{
			section: "PHASE 4",
			title1: "Future Plans",
			description1:
				"We have many future plans in mind for the Pack aside from the ones listed in the previous phases, however these will be revealed at a later time. Overall we are looking to expand into the Metaverse and expand the Wulfz ecosystem through $AWOO. With the power of the Pack, anything is possible.",
			title2: "",
			description2: "",
			src: futureImage,
			imageCnt: 1,
		},
	]

	return (
		<div
			className="loadMapContainer"
			style={{
				backgroundImage: `url(${Background})`,
				backgroundSize: "100% 100%",
			}}
		>
			<div className="loadMapHeaderContainer">
				<img src={leftFootImg} />
				<p className="loadMapHeader">ROADMAP</p>
				<img src={rigthtFootImg} />
			</div>

			<div className="roadMapContentContainer">
				<div className="roadMapSidebar">
					{phases.map((src, index) => (
						<RoadMapButton
							src={src}
							active={index == phase}
							onPress={() => setPhase(index)}
						/>
					))}
				</div>
				{descriptions.map((src, index) => (
					<PhaseSection {...src} shown={index == phase} />
				))}
			</div>
		</div>
	)
}

function RoadMapButton(props) {
	return (
		<div className="roadMapButton">
			<img
				src={props.src}
				className={"phaseButton " + (props.active ? "" : "fadeButton")}
				onClick={props.onPress}
			/>
		</div>
	)
}

function PhaseSection(props) {
	return props.shown ? (
		<div className="roadMapContent">
			<div className="titleBoard">
				<img src={titleBoardImg} className="titleBoardImg land" />
				<img
					src={titleBoardImgMobile}
					className="titleBoardImg mobile"
				/>
				<div className="sectionContainer">
					<p className="section">{props.section}</p>
				</div>
			</div>
			<div
				className="descriptionBoard"
				style={{
					backgroundImage: `url(${descriptionBoardImg})`,
					backgroundSize: "100% 100%",
				}}
			>
				<p className="title">{props.title1}</p>
				<p className="description">{props.description1}</p>
				<p className="title">{props.title2}</p>
				<p className="description">{props.description2}</p>
				<div className="imgContainer">
					{Array.from(
						{ length: props.imageCnt },
						(_, index) => index
					).map((val, index) => {
						return (
							<>
								<img className="img" src={props.src} />
								{props.extraSrc && (
									<img className="img" src={props.extraSrc} />
								)}
							</>
						)
					})}
				</div>
			</div>
		</div>
	) : null
}
