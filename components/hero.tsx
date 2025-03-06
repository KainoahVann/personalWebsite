"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Kainoah Vann
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">
              I&apos;m a{" "}
              <TypeAnimation
                sequence={[
                  "Computer Science Student",
                  2000,
                  "Software Developer",
                  2000,
                  "Embedded Systems Enthusiast",
                  2000,
                  "Robotics Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="text-purple-400"
              />
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Based in Riverside, CA. Passionate about embedded systems, computer vision, and autonomous systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-purple-500 rounded-full text-white font-medium hover:bg-purple-500/10 transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 glow-effect">
              <Image
                src="/assets/me.jpg"
                alt="Kainoah Vann"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

