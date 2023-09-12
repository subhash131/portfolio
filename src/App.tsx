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
	const section3Ref = useRef<HTMLDivElement>(null)
	const wrapRef = useRef<HTMLDivElement>(null)
	const [activeSection, setActiveSection] = useState("section1")

	useEffect(() => {
		section1Ref.current?.addEventListener("mousemove", (e) => {
			cursorRef.current!.style.left = `${e.clientX - 20}px`
			cursorRef.current!.style.top = `${e.clientY - 20}px`
		})
		var lastScrollTop = 0
		console.log(document.getElementById("section2")!.offsetTop)

		document.onscroll = () => {
			// if (activeSection === "section1") {
			var scrollTop =
				window.pageYOffset || document.documentElement.scrollTop
			if (scrollTop > lastScrollTop) {
				window.scrollTo({
					top: section2Ref.current!.offsetTop,
					behavior: "smooth",
				})
			} else if (scrollTop < lastScrollTop) {
				window.scrollTo({
					top: section1Ref.current!.offsetTop,
					behavior: "smooth",
				})
			}
			lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
			setActiveSection("section2")
			// }
		}
	})
	const handleScroll = (elemRef: React.RefObject<HTMLDivElement>) => {
		window.scrollTo({ top: elemRef.current!.offsetTop, behavior: "smooth" })
	}

	const { scrollYProgress } = useScroll({
		target: section2Ref,
	})
	const x = useTransform(scrollYProgress, [0, 1], ["55.5%", "-95%"])
	return (
		<div className='relative' ref={wrapRef}>
			<div
				className='h-[100vh]  bg-red-00 grid place-items-center relative z-100 cursor-none'
				ref={section1Ref}
				id='section1'
			>
				<div className='select-none backdrop-blur-sm p-4 rounded w-full h-full grid place-items-center'>
					<div className='items-center flex flex-col gap-2'>
						<Reveal
							variants={{
								hidden: { left: 0, visibility: "hidden" },
								visible: { left: 0, visibility: "hidden" },
							}}
						>
							<p className='font-cursive text-8xl p-2	'>
								Subhash nayak
							</p>
						</Reveal>
						<Reveal
							variants={{
								hidden: { left: 0, visibility: "hidden" },
								visible: { left: 0, visibility: "hidden" },
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
				<div className='absolute bottom-10'>
					<button
						onClick={() => handleScroll(section2Ref)}
						onMouseMove={() => {
							cursorRef.current!.style.visibility = "hidden"
						}}
						onMouseLeave={() => {
							cursorRef.current!.style.visibility = "visible"
						}}
					>
						<ChevronDown />
					</button>
				</div>

				<Game />
			</div>
			<div
				className='h-[400vh] w-full bg-black relative'
				id='section2'
				ref={section2Ref}
			>
				<div className='h-screen bg-blue-600 sticky top-0 items-center overflow-hidden flex justify-center'>
					{" "}
					<motion.div className='flex' style={{ x }}>
						<div className='w-screen h-screen bg-gray-950 text-white items-center justify-center flex'>
							abcd
						</div>
						<div className='w-screen h-screen bg-blue-950 text-white items-center justify-center flex'>
							abcd
						</div>
						<div className='w-screen h-screen bg-pink-950 text-white items-center justify-center flex'>
							abcd
						</div>
					</motion.div>
				</div>
			</div>
			<div className='h-[280vh] w-max-screen bg-red-600'> abcd</div>
		</div>
	)
}

export default App
