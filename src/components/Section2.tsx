import React from "react"
import Reveal from "./Reveal"

import nftHub01 from "../assets/01_nftHub.png"
import nftHub02 from "../assets/02_nftHub.png"
// import nftHub03 from "../assets/03_nftHub.png"
const Section2 = () => {
	return (
		<section className='h-screen w-screen flex relative z-100 mt-10 '>
			<div className='w-[50vw] bg-red-70 h-full bg-red-70 '>
				<div className='mt-5 ml-6'>
					<Reveal>
						<p className='text-[30px] text-[#323332] font-semibold p-4'>
							01
						</p>
					</Reveal>
				</div>
				<div className='grid place-content-center w-full h-[70%]'>
					<div className='w-[80%] ml-20 flex flex-col gap-4 '>
						<Reveal>
							<p className='text-[70px] text-[#323332] font-semibold'>
								NFT Hub
							</p>
						</Reveal>
						<Reveal>
							<p className='text-2xl text-[#323332]'>
								Polygon chain NFT Marketplace for Minting,
								Buying and Selling NFTs
							</p>
						</Reveal>
					</div>
				</div>
				<div className='w-[80%] ml-10 mt-10'>
					<Reveal>
						<p className='font-medium text-[#323332] text-[30px]'>
							ERC721 based NFT Marketplace
						</p>
					</Reveal>
				</div>
			</div>
			<div className='w-[50vw] h-full grid place-items-center'>
				<div className='py-10 w-[90%] grid place-items-center col-span-2 gap-6'>
					<div className='w-full ml-10'>
						<Reveal
							variants={{
								hidden: { left: 0 },
								visible: { left: "100%" },
							}}
						>
							<img
								src={nftHub01}
								width='90%'
								alt='text'
								className='rounded'
							></img>
						</Reveal>
					</div>
					<div className=' mr-10 w-full'>
						<Reveal>
							<img
								src={nftHub02}
								width='90%'
								alt='text'
								className='rounded'
							></img>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Section2
