"use client"

import { useEffect, useRef } from "react"

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create stars
    const stars: { x: number; y: number; radius: number; color: string; speed: number }[] = []
    const createStars = () => {
      stars.length = 0 // Clear existing stars
      const starCount = Math.floor((canvas.width * canvas.height) / 3000)

      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 1.5
        const color = `rgba(${155 + Math.random() * 100}, ${155 + Math.random() * 100}, 255, ${0.5 + Math.random() * 0.5})`
        const speed = 0.05 + Math.random() * 0.1

        stars.push({ x, y, radius, color, speed })
      }
    }

    createStars()
    window.addEventListener("resize", createStars)

    // Animation
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.fill()

        // Move stars
        star.y += star.speed

        // Reset position if star goes off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", createStars)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black via-purple-950/20 to-black opacity-80 pointer-events-none z-0"></div>
    </>
  )
}

