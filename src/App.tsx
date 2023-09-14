import { useEffect, useRef } from "react"
import Game from "./components/Game"
import Section1 from "./components/Section1"
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
	const section2Ref = useRef<HTMLDivElement>(null)

	return (
		<div className='wrapper'>
			<Section1 nextSection={section2Ref} />
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
