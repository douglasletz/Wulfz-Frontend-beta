import { useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-scroll"
import "./TermsAndPolicy.scss"
import { animateScroll as scroll } from "react-scroll"

export default function Terms() {
	useEffect(() => {
		scroll.scrollToTop()
	}, [])
	return (
		<div>
			<Header />
			<div className="termContainer">
				<p className="subject">Terms of Service</p>
				<p className="headerTitle">
					<span>Wulfz NFT</span> is a collection of digital artworks
					(NFTs) running on the Ethereum network. Users are entirely
					responsible for the safety and management of their own
					private Ethereum wallets and validating all transactions and
					contracts. Furthermore, as the <span>Wulfz NFT</span> smart
					contract runs on the Ethereum network, there is no ability
					to undo, reverse, or restore any transactions. This website
					and its connected services are provided “as is” and “as
					available” without warranty of any kind. By using this
					website you are accepting sole responsibility for any and
					all transactions involving <span>Wulfz NFT</span>. This
					includes gas fees, failed transactions or any issues that
					may arise from interacting on the Ethereum network.
				</p>
				<div className="navigateTerms">
					<Link
						to="ownership"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
					>
						<p>1. Ownership</p>
					</Link>
					<Link
						to="obligation"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
					>
						<p>2. Your Obligations</p>
					</Link>
					<Link
						to="purchaseOfWulfz"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
					>
						<p>3. PURCHASE OF WULFZ NFT</p>
					</Link>
					<Link
						to="disclaimers"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
					>
						<p>4. Disclaimers</p>
					</Link>
					<Link
						to="riskAssumption"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
					>
						<p>5. Risk Assumption</p>
					</Link>
					<Link
						to="indemnification"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
					>
						<p>6. Indemnification</p>
					</Link>
					<Link
						to="changeTermsAndCond"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
					>
						<p>7. Changes to the Terms and Conditions</p>
					</Link>
					<Link
						to="children"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
					>
						<p>8. Children</p>
					</Link>
				</div>
				<p className="title" id="ownership">
					1. Ownership
				</p>
				<span className="subTitle">A.</span> You Own the NFT.{" "}
				<span>Wulfz NFT</span> is an NFT on the Ethereum blockchain.
				When you purchase an NFT, you own the underlying{" "}
				<span>Wulfz NFT</span>, the Art, completely. Ownership of the
				NFT is mediated entirely by the Smart Contract and the Ethereum
				Network: at no point may we seize, freeze, or otherwise modify
				the ownership of any <span>Wulfz NFT</span>.
				<br />
				<br />
				<span className="subTitle">B.</span> Personal Use. Subject to
				your continued compliance with these Terms,{" "}
				<span>Wulfz NFT</span> grants you a worldwide, royalty-free
				license to use, copy, and display the purchased Art, along with
				any extensions that you choose to create or use, solely for the
				following purposes:{" "}
				<li> for your own personal or commercial use; </li>
				<li>
					{" "}
					as part of a marketplace that permits the purchase and sale
					of your <span>Wulfz NFT</span>/NFT, provided that the
					marketplace cryptographically verifies each{" "}
					<span>Wulfz NFT</span> owner’s rights to display the Art for
					their <span>Wulfz NFT</span> to ensure that only the actual
					owner can display the Art; or
				</li>{" "}
				<li>
					{" "}
					as part of a third party website or application that permits
					the inclusion, involvement, or participation of your{" "}
					<span>Wulfz NFT</span>, provided that the
					website/application cryptographically verifies each{" "}
					<span>Wulfz NFT</span> owner’s rights to display the Art for
					their <span>Wulfz NFT</span> to ensure that only the actual
					owner can display the Art, and provided that the Art is no
					longer visible once the owner of the <span>Wulfz NFT</span>{" "}
					leaves the website/application.
				</li>
				<br />
				<br />
				<span className="subTitle">C.</span> <span>Wulfz NFT</span> IP.
				Other than the rights to the Art, nothing herein gives you any
				rights to any other trademarks or other intellectual property
				rights belonging to <span>Wulfz NFT</span> including, without
				limitation, to <span>Wulfz NFT</span> and the associated logos.
				All of these rights are expressly reserved in the name of{" "}
				<span>Wulfz NFT</span>.<br />
				<br />
				<span className="subTitle">D.</span> Feedback. You may choose to
				submit comments, bug reports, ideas or other feedback about the
				Site, including without limitation about how to improve the Site
				(collectively, “Feedback”). By submitting any Feedback, you
				agree that we are free to use such Feedback in any way we choose
				without additional compensation to you and you hereby grant us a
				perpetual, irrevocable, nonexclusive, worldwide license to
				incorporate and use the Feedback for any purpose.
				<p className="title" id="obligation">
					2. Your Obligations
				</p>
				You are solely responsible for your own conduct while accessing
				or using the Site, and for any consequences thereof. You agree
				to use the Site only for purposes that are legal, proper and in
				accordance with these Terms and any applicable laws or
				regulations. By way of example, and not as a limitation, you may
				not, and may not allow any third party to:{" "}
				<li>
					{" "}
					send, upload, distribute or disseminate any unlawful,
					defamatory, harassing, abusive, fraudulent, hateful,
					violent, obscene, or otherwise objectionable content;{" "}
				</li>
				<li>
					{" "}
					distribute viruses, worms, defects, Trojan horses, corrupted
					files, hoaxes, or any other items of a destructive or
					deceptive nature;
				</li>{" "}
				<li> impersonate another person; </li>
				<li>
					{" "}
					upload, post, transmit or otherwise make available through
					the Site any content that infringes the intellectual
					property or proprietary rights of any party or otherwise
					violates the legal rights of others;{" "}
				</li>
				<li>
					{" "}
					engage in, promote, or encourage illegal activity
					(including, without limitation, money laundering);{" "}
				</li>
				<li> interfere with other users' use of the Site;</li>
				<li> use the Site for any unauthorized commercial purpose;</li>
				<li>
					{" "}
					modify, adapt, translate, or reverse engineer any portion of
					the Site;{" "}
				</li>
				<li>
					{" "}
					remove any copyright, trademark or other proprietary rights
					notices contained in or on the Site or any part of it;{" "}
				</li>
				<li>
					{" "}
					use any technology to collect information about the Site’s
					for any unauthorized purpose;{" "}
				</li>
				<li>
					{" "}
					access or use the Site for the purpose of creating a product
					or service that is competitive with any of our products or
					services. If you engage in any of the activities prohibited
					by this Section, we may, at our sole and absolute
					discretion, without notice to you, and without limiting any
					of our other rights or remedies at law or in equity,
					immediately suspend or terminate your user account.
				</li>
				<p className="title" id="purchaseOfWulfz">
					3. PURCHASE OF WULFZ NFT
				</p>
				<span className="subTitle">A.</span> If you elect to purchase a{" "}
				<span>Wulfz NFT</span>, any financial transactions that you
				engage in will be conducted solely through the Ethereum network.
				We will have no insight into or control over these payments or
				transactions, nor do we have the ability to reverse any
				transactions. We will have no liability to you or to any third
				party for any claims or damages that may arise as a result of
				any transactions that you engage or any other transactions that
				you conduct via the Ethereum network.
				<br />
				<br />
				<span className="subTitle">B.</span> Ethereum requires the
				payment of a transaction fee (a “Gas Fee”) for every transaction
				that occurs on the Ethereum network. The Gas Fee funds the
				network of computers that run the decentralized Ethereum
				network. This means that you will need to pay a Gas Fee for each
				transaction.
				<p className="title" id="disclaimers">
					4. Disclaimers
				</p>
				<span className="subTitle">A.</span> You expressly understand
				and agree that your access to and use of the site is at your
				sole risk, and that the site is provided "as is" and "as
				available" without warranties of any kind, whether express or
				implied. To the fullest extent permissible pursuant to
				applicable law, we make no express warranties and hereby
				disclaim all implied warranties regarding the site and any part
				of it (including, without limitation, the site, any smart
				contract, or any external websites), including the implied
				warranties of merchantability, fitness for a particular purpose,
				non-infringement, correctness, accuracy, or reliability. without
				limiting the generality of the foregoing, we, our subsidiaries,
				affiliates, and licensors do not represent or warrant to you
				that:
				<br />
				<br />
				<li>
					Your access to or use of the site will meet your
					requirements,{" "}
				</li>
				<li>
					Your access to or use of the site will be uninterrupted,
					timely, secure or free from error,{" "}
				</li>
				<li>Usage data provided through the site will be accurate, </li>
				<li>
					The site or any content, services, or features made
					available on or through the site are free of viruses or
					other harmful components, or{" "}
				</li>
				<li>
					That any data that you disclose when you use the site will
					be secure. some jurisdictions do not allow the exclusion of
					implied warranties in contracts with consumers, so some or
					all of the above exclusions may not apply to you.
				</li>
				<br />
				<br />
				<span className="subTitle">B.</span> You accept the inherent
				security risks of providing information and dealing online over
				the internet, and agree that we have no liability or
				responsibility for any breach of security unless it is due to
				our willfull misconduct.
				<br />
				<br />
				<span className="subTitle">C.</span> We will not be responsible
				or liable to you for any losses you incur as the result of your
				use of the ethereum network nor do we have no control over and
				make no guarantees regarding any smart contracts.
				<p className="title">5. Risk Assumption</p>
				You accept and acknowledge each of the following:
				<br />
				<br />
				<span className="subTitle">A.</span> To the extent that you sell
				your <span>Wulfz NFT</span>, please be aware that the prices of
				NFTs are extremely volatile and fluctuations in the prices of
				other NFTs impact the price of your <span>Wulfz NFT</span> both
				positively and negatively. Given the volatility, NFTs such as{" "}
				<span>Wulfz NFT</span> should not be considered an investment.
				You assume all risks in that connection.
				<br />
				<br />
				<span className="subTitle">B.</span> Ownership of a{" "}
				<span>Wulfz NFT</span> confers ownership of digital artwork
				only. Accordingly, no information on this Site (or any other
				documents mentioned therein) is or may be considered to be
				advice or an invitation to enter into an agreement for any
				investment purpose. Further, nothing on this Site qualifies or
				is intended to be an offering of securities in any jurisdiction
				nor does it constitute an offer or an invitation to purchase
				shares, securities or other financial products. Due to the
				artistic nature of the project, <span>Wulfz NFT</span> has not
				been registered with or approved by any regulator in any
				jurisdiction. It remains your sole responsibility to assure that
				the purchase of the <span>Wulfz NFT</span> and the associated
				art is in compliance with laws and regulations in your
				jurisdiction.
				<br />
				<br />
				<span className="subTitle">C.</span> You assume all risks
				associated with using an Internet-based currency, including, but
				not limited to, the risk of hardware, software and Internet
				connections, the risk of malicious software introduction, and
				the risk that third parties may obtain unauthorized access to
				information stored within your wallet.
				<br />
				<br />
				<span className="subTitle">D.</span> NFTs, cryptocurrencies and
				blockchain technology are relatively new and the regulatory
				landscape is unsettled. New regulations could negatively impact
				such technologies impacting the value for your{" "}
				<span>Wulfz NFT</span>. You understand and accept all risk in
				that regard
				<br />
				<br />
				<span className="subTitle">E.</span> You assume all
				responsibility for any adverse effects of disruptions or other
				issues impacting Ethereum or the Ethereum platform.
				<p className="title" id="indemnification">
					6. Indemnification
				</p>
				You agree to hold harmless and indemnify <span>Wulfz NFT</span>{" "}
				and its subsidiaries, affiliates, officers, agents, employees,
				advertisers, licensors, suppliers or partners from and against
				any claim, liability, loss, damage (actual and consequential) of
				any kind or nature, suit, judgment, litigation cost, and
				reasonable attorneys' fees arising out of or in any way related
				to <li> your breach of these Terms, </li>
				<li> your misuse of the Site, or </li>
				<li>
					{" "}
					your violation of applicable laws, rules or regulations in
					connection with your access to or use of the Site.
				</li>
				<p className="title" id="changeTermsAndCond">
					7. Changes to the Terms and Conditions
				</p>
				We may make changes to the Terms at our discretion. Please check
				these Terms periodically for changes. Any changes to the Terms
				will apply on the date that they are made, and your continued
				access to or use after the Terms have been updated will
				constitute your binding acceptance of the updates. If you do not
				agree to any revised Terms, you may not access or use the Site.
				<p className="title" id="children">
					8. Children
				</p>
				Our Site is not intended for children. You must be at least 18
				years old to access this Site or purchase a{" "}
				<span>Wulfz NFT</span>. If you are under 18 years old you are
				not permitted to use this Site for any reason. By accessing the
				Site, you represent and warrant that you are at least 18 years
				of age
			</div>
			<Footer />
		</div>
	)
}
