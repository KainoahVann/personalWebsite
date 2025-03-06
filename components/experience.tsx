"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Rocket } from "lucide-react"

const experiences = [
  {
    title: "NORCO ROCKETRY - Data/Avionics Division",
    image: "/placeholder.svg?height=100&width=100",
    description: "Student-led development of a hybrid rocket for the FAR-OUT rocketry competition",
    responsibilities: [
      "Working with Raspberry Pi's and Arduino to implement the software aspect of the rocket engine",
      "Responsible for monitoring rocket internal values via sensors, as well as recovery post-launch",
      "Implemented various sensors in the rocket, such as temperature sensors, load cells, pressure sensors, and fill sensors for the purpose of monitoring rocket values during test fires and ensuring safe levels were maintained",
      "Attempted development of wireless communication between rocket and base station with on-board computers via LORA radio communication",
      "Creation of a ground station to communicate with all systems",
      "Creation of a secondary ground station for remote control of fuel lines and rocket launch",
    ],
  },
  {
    title: "NASA SUITS (Space User Interface Technologies for Students) 2023 CHALLENGE",
    image: "/placeholder.svg?height=100&width=100",
    description:
      "Worked in a team environment to develop an Augmented Reality Heads-Up-Display using the Microsoft HoloLens",
    responsibilities: [
      "Assisted with Quality assurance, testing, UI design, and research/implementations",
      "Presented for NASA panel at Johnson Space Center in Houston, Texas.",
    ],
  },
  {
    title: "NCAS (NASA Community College Aerospace Scholars) Mission 2",
    image: "/placeholder.svg?height=100&width=100",
    description:
      "Career Simulation: Collaborated in a team environment to create a simulated rover mission to the moon, aiming to expand knowledge of the moon's surface and interior while identifying points of scientific interest",
    responsibilities: [
      '"Software Specialist" - Developed a software system necessary for a fleet of 3 autonomous rovers to carry out a scientific research mission on the Moon',
      "Arranged NASA open-source software, implementing them in a simulated moon mission, as well as organizing drone systems and communications",
      "Presented project virtually to NCAS panel",
    ],
  },
  {
    title: "NCAS (NASA Community College Aerospace Scholars) Mission 3",
    image: "/placeholder.svg?height=100&width=100",
    description:
      "Advanced Air Mobility project proposal: Collaborating with a team of students to create a proposal incorporating drone technology into an Emergency Response Scenario",
    responsibilities: [
      "Responsible for the systems and software packages enabling the drones to work efficiently in a swarm",
      "Developed a deployment plan and system objectives",
      "Researched various use cases for drones in emergency response",
      "Managed members of the team, directing research and presentation",
      "Presented to NASA Subject-Matter Experts at the Langley Research Center in Virginia",
    ],
  },
  {
    title: "RCC STEM Division Summer Research - Sun Spots",
    image: "/placeholder.svg?height=100&width=100",
    description:
      "Conducted research of the sun, tracking the location of sunspots over a specified time period utilizing NASA's Helioviewer visualization software",
    responsibilities: [
      "Analyzed collected data of sunspot position/time, using this data to calculate the Sun's rotational speed, and determining if the Sun rotates at a constant rate.",
    ],
  },
]

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const [rocketPosition, setRocketPosition] = useState(0)



  useEffect(() => {
    if (activeIndex !== null) {
      // Calculate position based on active index
      const position = (activeIndex / (experiences.length - 1)) * 100
      setRocketPosition(position)
    }
  }, [activeIndex])

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Project <span className="text-purple-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div
            ref={timelineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-400 to-purple-600 h-full rounded-full z-0 timeline-line"
          >
            {/* Rocket Ship */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 z-20"
              animate={{ top: `${rocketPosition}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ top: `${rocketPosition}%` }}
            >
              <div className="relative -left-4 -top-4">
                <Rocket size={32} className="text-purple-400 rotate-90" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-10 bg-gradient-to-t from-purple-500 to-transparent opacity-70 rounded-full blur-sm -z-10 rocket-flame"></div>
              </div>
            </motion.div>
          </div>

          {/* Timeline Items */}
          <div className="relative z-10 timeline-container">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-24 last:mb-0 timeline-item ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse md:flex-row-reverse"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Timeline Content - Left Side */}
                <div className={`w-1/2 timeline-content ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <div
                    className={`bg-gray-900/50 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] ${
                      index % 2 === 0 ? "ml-auto" : "mr-auto"
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">{exp.title}</h3>
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-purple-500/50 glow-effect-sm flex-shrink-0">
                        <Image src={exp.image || "/placeholder.svg"} alt={exp.title} fill className="object-cover" />
                      </div>
                      <div className="text-sm text-gray-400">
                        <ul className="list-disc pl-5 space-y-1">
                          {exp.responsibilities.slice(0, 2).map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                          {exp.responsibilities.length > 2 && (
                            <li className="text-purple-400 cursor-pointer hover:underline">
                              + {exp.responsibilities.length - 2} more responsibilities
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="w-0 flex items-center justify-center z-10 timeline-dot">
                  <div className="w-5 h-5 rounded-full bg-purple-500 border-4 border-black glow-effect-sm"></div>
                </div>

                {/* Timeline Content - Right Side (Empty for alternating layout) */}
                <div className="w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

