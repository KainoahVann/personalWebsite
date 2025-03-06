"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

// Sample projects - replace with your actual projects
const projects = [
  {
    title: "Rocket Telemetry System",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Developed a telemetry system for the Norco Rocketry team to monitor and transmit real-time data from the rocket to the ground station.",
    technologies: ["Raspberry Pi", "Python", "Arduino", "LORA"],
    link: "#",
    github: "#",
  },
  {
    title: "AR Heads-Up Display",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Contributed to the development of an Augmented Reality Heads-Up-Display for NASA SUITS challenge using Microsoft HoloLens.",
    technologies: ["Unity", "C#", "HoloLens", "AR"],
    link: "#",
    github: "#",
  },
  {
    title: "Autonomous Rover Control System",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Designed a software system for controlling a fleet of 3 autonomous rovers for a simulated moon mission.",
    technologies: ["Python", "ROS", "Computer Vision", "Path Planning"],
    link: "#",
    github: "#",
  },
  {
    title: "Drone Swarm for Emergency Response",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Developed a proposal for using drone swarm technology in emergency response scenarios, including software architecture and deployment strategies.",
    technologies: ["Drone Technology", "Swarm Intelligence", "Python", "System Design"],
    link: "#",
    github: "#",
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            >
              <div className="relative h-60 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-purple-400">{project.title}</h3>

                <p className="text-gray-300 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-900/40 text-purple-300 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" /> View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github size={16} className="mr-1" /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

