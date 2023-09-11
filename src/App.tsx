import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import Game from "./components/Game"
import Aim from "./components/Aim"

function App() {
	const motionRef = useRef<HTMLDivElement>(null)
	const cursorRef = useRef<HTMLDivElement>(null)
	const titleRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		motionRef.current?.addEventListener("mousemove", (e) => {
			cursorRef.current!.style.left = `${e.clientX - 20}px`
			cursorRef.current!.style.top = `${e.clientY - 20}px`
		})
	})

	const { scrollYProgress } = useScroll({
		target: motionRef,
	})
	const x = useTransform(scrollYProgress, [0, 1], ["55.5%", "-95%"])
	return (
		<div className='relative' ref={motionRef}>
			<div className='h-[100vh]  bg-red-00 grid place-items-center relative z-100 cursor-none'>
				<div
					className='text-center  select-none backdrop-blur-sm p-4 rounded w-full h-full grid place-items-center'
					ref={titleRef}
				>
					<div>
						<p className='font-cursive text-8xl p-2	'>
							Subhash nayak
						</p>
						<p className='text-4xl font-cursive'>
							Front-End Developer
						</p>
					</div>
				</div>
				<div
					className='absolute rounded-full border select-none  w-10 h-10 items-center flex justify-center'
					ref={cursorRef}
				>
					<Aim />
				</div>

				<Game />
			</div>
			<div className='h-[400vh] w-full bg-black relative'>
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
