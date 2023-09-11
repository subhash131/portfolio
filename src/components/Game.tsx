import React from "react"
import { PlayerType, ProjectileType } from "../types"

class Player {
	x = 0
	y = 0
	radius = 0
	color = "#ffffff"
	constructor({ x, y, radius, color }: PlayerType) {
		this!.x = x
		this!.y = y
		this!.radius = radius
		this!.color = color
	}
	draw(ctx: CanvasRenderingContext2D) {
		ctx!.beginPath()
		ctx!.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
		ctx!.fillStyle = this.color
		ctx!.fill()
		ctx!.closePath()
	}
}

class Projectile {
	x = 0
	y = 0
	radius = 0
	color = "#ffffff"
	velocity = { x: 0, y: 0 }
	constructor({ x, y, radius, color, velocity }: ProjectileType) {
		this.x = x
		this.y = y
		this.radius = radius
		this.color = color
		this.velocity.x = velocity.x
		this.velocity.y = velocity.y
	}
	draw(ctx: CanvasRenderingContext2D) {
		ctx!.beginPath()
		ctx!.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
		ctx!.fillStyle = this.color
		ctx!.fill()
		ctx!.closePath()
	}
	update() {
		this.x += this.velocity.x
		this.y += this.velocity.y
	}
}
class Enemy {
	x = 0
	y = 0
	radius = 0
	color = "#ffffff"
	velocity = { x: 0, y: 0 }
	constructor({ x, y, radius, color, velocity }: ProjectileType) {
		this.x = x
		this.y = y
		this.radius = radius
		this.color = color
		this.velocity.x = velocity.x
		this.velocity.y = velocity.y
	}
	draw(ctx: CanvasRenderingContext2D) {
		ctx!.beginPath()
		ctx!.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
		ctx!.fillStyle = this.color
		ctx!.fill()
		ctx!.closePath()
	}
	update() {
		this.x += this.velocity.x
		this.y += this.velocity.y
	}
}
class Particle {
	x = 0
	y = 0
	radius = 0
	color = "#ffffff"
	velocity = { x: 0, y: 0 }
	alpha = 0
	constructor({ x, y, radius, color, velocity }: ProjectileType) {
		this.x = x
		this.y = y
		this.radius = radius
		this.color = color
		this.velocity.x = velocity.x
		this.velocity.y = velocity.y
		this.alpha = 1
	}
	draw(ctx: CanvasRenderingContext2D) {
		ctx.save()
		ctx.globalAlpha = this.alpha
		ctx!.beginPath()
		ctx!.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
		ctx!.fillStyle = this.color
		ctx!.fill()
		ctx!.restore()
	}
	update() {
		this.x += this.velocity.x * 0.8
		this.y += this.velocity.y * 0.8
		this.alpha -= 0.01
	}
}

const Game = () => {
	const canvasRef = React.useRef<HTMLCanvasElement>(null)
	const projectiles: Array<Projectile> = []
	const enemies: Array<Enemy> = []
	const particles: Array<Particle> = []

	const spawnEnemies = () => {
		setInterval(() => {
			const radius = Math.floor(Math.random() * (30 - 5) + 5)
			const color = `hsl(${Math.random() * 360}, 100%, 50%)`
			let x
			let y
			if (Math.random() < 0.5) {
				x =
					Math.random() < 0.5
						? 0 - radius
						: canvasRef.current!.width + radius
				y = Math.random() * canvasRef.current!.height
			} else {
				x = Math.random() * canvasRef.current!.width
				y =
					Math.random() < 0.5
						? 0 - radius
						: canvasRef.current!.height + radius
			}
			const angle = Math.atan2(
				canvasRef.current?.height! / 2 - y,
				canvasRef.current?.width! / 2 - x
			)
			const velocity = {
				x: Math.cos(angle) * 1,
				y: Math.sin(angle) * 1,
			}
			enemies.push(new Enemy({ x, y, radius, color, velocity }))
			if (enemies.length > 30) {
				enemies.shift()
			}
			if (projectiles.length > 20) {
				projectiles.shift()
			}
			if (particles.length > 100) {
				particles.shift()
			}
			// console.log(enemies.length)
		}, 1000)
	}

	React.useEffect(() => {
		canvasRef.current!.width = window.innerWidth
		canvasRef.current!.height = window.innerHeight
		const ctx = canvasRef.current?.getContext("2d")
		const x = canvasRef.current?.width! / 2
		const y = canvasRef.current?.height! / 2
		const player = new Player({
			x,
			y,
			radius: 8,
			color: "black",
		})

		window.addEventListener("click", (e) => {
			const angle = Math.atan2(e.clientY - y, e.clientX - x)
			const velocity = {
				x: Math.cos(angle) * 5,
				y: Math.sin(angle) * 5,
			}
			const projectile = new Projectile({
				x,
				y,
				radius: 10,
				color: "black",
				velocity,
			})
			projectiles.push(projectile)
		})
		function animate() {
			ctx!.fillStyle = "rgba(255, 255, 255, 0.1)"

			ctx!.fillRect(
				0,
				0,
				canvasRef.current?.width!,
				canvasRef.current?.height!
			)
			requestAnimationFrame(animate)
			projectiles.forEach((projectile) => {
				projectile.update()
				projectile.draw(ctx!)
			})
			particles.forEach((particle, index) => {
				setTimeout(() => {
					if (particle.alpha <= 0) {
						particles.splice(index, 1)
					}
				}, 0)
				particle.update()
				particle.draw(ctx!)
			})

			enemies.forEach((enemy, index) => {
				enemy.update()
				projectiles.forEach((projectile, projIndex) => {
					const dist = Math.hypot(
						projectile.x - enemy.x,
						projectile.y - enemy.y
					)

					if (dist - enemy.radius - projectile.radius < 1) {
						for (let i = 0; i < enemy.radius * 0.5; i++) {
							particles.push(
								new Particle({
									x: projectile.x,
									y: projectile.y,
									radius: Math.random() * 3,
									color: enemy.color,
									velocity: {
										x:
											(Math.random() - 0.5) *
											(Math.random() * 8),
										y:
											(Math.random() - 0.5) *
											(Math.random() * 8),
									},
								})
							)
						}

						enemies.splice(index, 1)
						projectiles.splice(projIndex, 1)
					}
				})
				enemy.draw(ctx!)
			})

			player.draw(ctx!)
		}
		animate()
		spawnEnemies()
	})

	return (
		<canvas
			className='absolute w-full h-full z-[-10] bg-geen-500'
			ref={canvasRef}
		></canvas>
	)
}

export default Game
