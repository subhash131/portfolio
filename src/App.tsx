import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import WorkedWith from "./components/WorkedWith"

function App() {
	return (
		<div className='wrapper'>
			<Section1 />
			<WorkedWith />
			<Section2 />
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
