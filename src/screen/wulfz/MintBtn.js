import React, { useContext, useEffect } from "react"
import Web3 from "web3"

import WulfzNFT from "../../abi/WulfzNFT.json"

import CustomModal from "../../components/Modal"
import mintImg from "../../new/banner/mint.png"

export default function MintBtn({ txt, amount }) {
	const [open, setOpen] = React.useState(false)
	const [text, setText] = React.useState("")
	const [chain, setChain] = React.useState(1)
	const web3 = window.ethereum ? new Web3(window.ethereum) : null
	const [contract, setContract] = React.useState(null)

	useEffect(() => {
		if (!web3) return

		if (!web3) {
			setText(
				"Non-Ethereum browser detected, you should consider tyring MetaMask!"
			)
			handleOpen()
			return
		}

		web3.eth.getChainId().then((e) => {
			setChain(e)
			if (Number(e) !== 1) {
				setText("Please switch to Ethereum mainnet in your wallet")
				handleOpen()
			}
		})

		window.ethereum.on("chainChanged", (chainId) => {
			web3.eth.getChainId().then(setChain)
			if (Number(chainId) !== 1) {
				setText("Please switch to Ethereum mainnet in your wallet")
				handleOpen()
			} else window.location.reload()
		})

		setContract(
			new web3.eth.Contract(
				WulfzNFT,
				process.env.REACT_APP_ContractAddress
			)
		)
	}, [])

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		if (Number(chain) === 1) setOpen(false)
	}

	const mintToken = async () => {
		const _account = await web3.eth.getAccounts()

		// 80000000000000000 = 0.0.8 ETH, web3.utils
		const price = amount * 80000000000000000

		if (contract == null) return
		try {
			const result = await contract.methods.PublicSale(amount).send({
				from: _account[0],
				value: price,
			})
			setText(
				"Successfully Minted. Please visit https://opensea.io/collection/wulfz-official"
			)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<div
				style={{
					backgroundImage: `url(${mintImg})`,
					backgroundSize: "100% 100%",
				}}
				className="mintButton"
				onClick={() => mintToken()}
			>
				{txt}
			</div>
			<CustomModal isOpen={open} modalClose={handleClose} txt={text} />
		</div>
	)
}
