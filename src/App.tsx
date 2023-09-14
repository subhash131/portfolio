import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Game from "./components/Game"
import Aim from "./components/Aim"
import Reveal from "./components/Reveal"
import { ChevronDown } from "lucide-react"
// import {
// 	Link,
// 	Button,
// 	Element,
// 	Events,
// 	animateScroll as scroll,
// 	scrollSpy,
// 	scroller,
// } from "react-scroll"

function App() {
	const cursorRef = useRef<HTMLDivElement>(null)
	const section1Ref = useRef<HTMLDivElement>(null)
	const section2Ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		section1Ref.current?.addEventListener("mousemove", (e) => {
			cursorRef.current!.style.left = `${e.clientX - 20}px`
			cursorRef.current!.style.top = `${e.clientY - 20}px`
		})
	})

	return (
		<div className='wrapper'>
			<section
				className='h-screen w-screen grid place-items-center relative z-100 cursor-none '
				ref={section1Ref}
			>
				<div className='items-center flex flex-col gap-2 select-none backdrop-blur-sm  rounded'>
					<div className='items-center flex flex-col gap-2 select-none backdrop-blur-sm  rounded h-screen w-screen justify-center'>
						<Reveal
							variants={{
								hidden: {
									left: 0,
									visibility: "hidden",
								},
								visible: {
									left: 0,
									visibility: "hidden",
								},
							}}
						>
							<p className='font-cursive text-8xl p-2	'>
								Subhash nayak
							</p>
						</Reveal>
						<Reveal
							variants={{
								hidden: {
									left: 0,
									visibility: "hidden",
								},
								visible: {
									left: 0,
									visibility: "hidden",
								},
							}}
							delay={0.8}
						>
							<p className='text-4xl font-cursive p-2'>
								Front-End Developer
							</p>
						</Reveal>
					</div>
				</div>

				<div
					className='absolute rounded-full border select-none  w-10 h-10 items-center flex justify-center'
					ref={cursorRef}
				>
					<Aim />
				</div>
				<div className='absolute bottom-10 '>
					<button>
						<ChevronDown />
					</button>
				</div>

				<Game />
			</section>
			<section
				className='two'
				style={{
					width: "100vw",
					height: "100vh",
					backgroundColor: "red",
				}}
				ref={section2Ref}
			></section>
			<section
				className='three'
				style={{
					width: "100vw",
					height: "100vh",
					backgroundColor: "green",
				}}
			></section>
		</div>
	)
}

export default App
