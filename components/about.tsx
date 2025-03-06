"use client"

import { motion } from "framer-motion"
import { GraduationCap, User, Mail, Linkedin, Phone } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <User className="mr-2 text-purple-400" size={24} />
              Profile
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Computer Science Major looking for internships or work that will advance my knowledge in programming
              embedded systems, and other related areas such as navigation, controls, and autonomous systems. Special
              interests in Embedded Software, Computer Vision, GNC, Machine Learning, and Robotics. Seeking
              opportunities to expand my knowledge and provide the necessary tools and experience to excel in the
              industry.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-center">
                <Mail className="mr-3 text-purple-400" size={20} />
                <a
                  href="mailto:kainoahkvann@gmail.com"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  kainoahkvann@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="mr-3 text-purple-400" size={20} />
                <a
                  href="https://www.linkedin.com/in/kainoahvann/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  linkedin.com/in/kainoahvann
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-purple-400" size={20} />
                <span className="text-gray-300">(951)-987-1197</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <GraduationCap className="mr-2 text-purple-400" size={24} />
              Education
            </h3>

            <div className="space-y-6">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/30 hover:border-purple-500/70 transition-colors">
                <h4 className="text-xl font-medium text-purple-400">California State Polytechnic University, Pomona</h4>
                <p className="text-gray-400 mt-1">Bachelor&apos;s of Computer Science</p>
                <p className="text-gray-400 mt-1">Planned Graduation: 2027</p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/30 hover:border-purple-500/70 transition-colors">
                <h4 className="text-xl font-medium text-purple-400">Riverside City College / Norco College</h4>
                <p className="text-gray-400 mt-1">ADT of Computer Science</p>
                <p className="text-gray-400 mt-1">GPA: 3.73</p>
                <p className="text-gray-400 mt-1">Graduation Year: 2024</p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/30 hover:border-purple-500/70 transition-colors">
                <h4 className="text-xl font-medium text-purple-400">Norte Vista High School - CA</h4>
                <p className="text-gray-400 mt-1">High School Diploma</p>
                <p className="text-gray-400 mt-1">GPA: 3.97</p>
                <p className="text-gray-400 mt-1">
                  Participated in: Advanced Placement Program, International Baccalaureate Program
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

