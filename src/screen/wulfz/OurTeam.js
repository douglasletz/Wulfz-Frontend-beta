import artist from "../../new/ourteam/artist.png"
import developer from "../../new/ourteam/developer.png"
import founder from "../../new/ourteam/founder.png"
import partner from "../../new/ourteam/partner.png"

import Background from "../../new/ourteam/teamCard.png"
import leftFootImg from "../../new/gallery/top-left-foot.png"
import rigthtFootImg from "../../new/gallery/top-right-foot.png"
import bottomImg from "../../new/ourteam/bottom.png"

import "./OurTeam.scss"

export default function OurTeam() {
	const members = [
		{
			name: "SLIDE",
			job: "FOUNDER",
			description:
				"Has had a vast experience with startup businesses and is an entrepreneur by heart. He currently manages a subscription service with 1,500+ members and has multiple SAAS businesses he runs.",
			mobileText:
				"Has had a vast experience with startup businesses and is an entrepreneur by heart. He currently manages a subscription service with 1,500+ members",
			src: founder,
		},
		{
			name: "SNOOOW",
			job: "ARTIST",
			description:
				"Professional UI designer and an artist of 6+ years. Has always had a passion for Pixel Art. His hobbies include games, manga, literature, movies and more!",
			src: artist,
		},
		{
			name: "HIRO",
			job: "DEVELOPER",
			description:
				"Hiro is a senior blockchain and full-stack developer. He has years of experience working and consulting for various De-fi projects.",
			src: developer,
		},
		{
			name: "+MORE",
			job: "PARTNERS",
			description:
				"Dozens of moderators and partners are helping grow the Wulfz everyday!",
			src: partner,
		},
	]
	return (
		<div className="teamContainer">
			<div className="teamHeaderContainer">
				<img src={leftFootImg} />
				<p className="teamHeader">OUR TEAM</p>
				<img src={rigthtFootImg} />
			</div>

			{/* <div className="teamWrapper">
				<div className="group2Container">
					<div className="group2Wrapper">
						<TeamMember {...members[0]} />
						<TeamMember {...members[1]} />
					</div>
				</div>
				<div className="group2Container">
					<div className="group2Wrapper">
						<TeamMember {...members[2]} />
						<TeamMember {...members[3]} />
					</div>
				</div>
			</div> */}

			<div className="teamWrapper">
				{members.map((mem, key) => (
					<TeamMember {...mem} />
				))}
			</div>

			<img src={bottomImg} className="teamBottomImg" />
		</div>
	)
}

function TeamMember(props) {
	return (
		<div
			className="wrapper"
			style={{
				backgroundImage: `url(${Background})`,
				backgroundSize: "100% 100%",
			}}
		>
			<div className="namejob">
				<p className="name">{props.name}</p>
				<p className="job">({props.job})</p>
			</div>
			<img src={props.src} />
			<div className="quote">
				<p className={props.mobileText ? "mobileDesc" : "description"}>
					{props.description}
				</p>
				{props.mobileText && (
					<p className="mobileText">{props.mobileText}</p>
				)}
			</div>
		</div>
	)
}
