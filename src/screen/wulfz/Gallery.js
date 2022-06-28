import "./Gallery.scss"

import Avatar1 from "../../new/gallery/avatar (1).gif"
import Avatar2 from "../../new/gallery/avatar (2).gif"
import Avatar3 from "../../new/gallery/avatar (3).gif"
import Avatar4 from "../../new/gallery/avatar (4).gif"
import Avatar5 from "../../new/gallery/avatar (5).gif"
import Avatar6 from "../../new/gallery/avatar (6).gif"
import Avatar7 from "../../new/gallery/avatar (7).gif"
import Avatar8 from "../../new/gallery/avatar (8).gif"
import Avatar9 from "../../new/gallery/avatar (9).gif"
import Avatar10 from "../../new/gallery/avatar (10).gif"

import Wrapper from "../../new/gallery/album.png"
import leftFootImg from "../../new/gallery/top-left-foot.png"
import rigthtFootImg from "../../new/gallery/top-right-foot.png"

export default function Gallery() {
	return (
		<div className="gallery-container">
			<div className="gallery-header-container">
				<img src={leftFootImg} />
				<p className="gallery-header">UNIQUE TRAITS</p>
				<img src={rigthtFootImg} />
			</div>

			<p className="gallery-text">
				Wulfz traits are inspired by anime, pop-culture, movies,
				television, and books. An incredible amount of detail has been
				put into each pixel. There are 10 animated Legendary and 10
				static Hero Wulfz. The remaining 5535 Wulfz are spawned with
				150+ different traits.
			</p>

			<div className="gallery">
				<div className="wrapper">
					<WolfAvatar src={Avatar1} />
					<WolfAvatar src={Avatar2} />
					<WolfAvatar src={Avatar3} />
					<WolfAvatar src={Avatar4} />
					<WolfAvatar src={Avatar5} />
					<WolfAvatar src={Avatar6} />
					<WolfAvatar src={Avatar7} />
					<WolfAvatar src={Avatar8} />
					<WolfAvatar src={Avatar9} />
					<WolfAvatar src={Avatar10} />
				</div>
			</div>
		</div>
	)
}

function WolfAvatar(props) {
	return (
		<div
			className="wolfItem"
			style={{
				backgroundImage: `url(${Wrapper})`,
				backgroundSize: "100% 100%",
			}}
		>
			<img src={props.src} className="wolfAvatar" />
		</div>
	)
}
