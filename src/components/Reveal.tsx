import React, { useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
type Props = {
	children: JSX.Element
	width?: "fit-content" | "100%"
	variants?: {
		hidden: any
		visible: any
	}
	delay?: number
}

const Reveal = ({
	children,
	width = "fit-content",
	variants = {
		hidden: { right: 0 },
		visible: { right: "100%" },
	},
	delay = 0.5,
}: Props) => {
	const containerRef = React.useRef<HTMLDivElement>(null)
	const isInView = useInView(containerRef, { once: true })
	const mainControls = useAnimation()
	const slideControls = useAnimation()
	useEffect(() => {
		if (isInView) {
			mainControls.start("visible")
			slideControls.start("visible")
		}
	})
	return (
		<div
			className='relative overflow-hidden'
			style={{ width }}
			ref={containerRef}
		>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial='hidden'
				animate={mainControls}
				transition={{ duration: 0.5, ease: "easeInOut", delay }}
			>
				{children}
			</motion.div>
			<motion.div
				variants={variants}
				initial='hidden'
				animate={slideControls}
				transition={{ duration: 0.3, ease: "easeIn", delay }}
				className='absolute top-0 bottom-0 left-0 right-0 bg-gray-900 z-20'
			></motion.div>
		</div>
	)
}

export default Reveal
