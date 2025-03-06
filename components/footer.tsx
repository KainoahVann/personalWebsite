"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Linkedin, Github, Twitter, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="py-12 border-t border-purple-900/50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-purple-400">Get In Touch</h3>
            <p className="text-gray-300">
              Feel free to reach out if you&apos;re looking for a dedicated computer science student with a passion for
              embedded systems, computer vision, and robotics.
            </p>

            <div className="space-y-4">
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
                <Phone className="mr-3 text-purple-400" size={20} />
                <span className="text-gray-300">(951)-987-1197</span>
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
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-purple-400">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="#home" className="text-gray-300 hover:text-purple-400 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="#experience" className="text-gray-300 hover:text-purple-400 transition-colors">
                Experience
              </Link>
              <Link href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">
                Projects
              </Link>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-medium text-gray-200 mb-3">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/kainoahvann/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-800 transition-colors"
                >
                  <Linkedin size={20} className="text-purple-400" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-800 transition-colors"
                >
                  <Github size={20} className="text-purple-400" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-800 transition-colors"
                >
                  <Twitter size={20} className="text-purple-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-purple-900/50 text-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} Kainoah Vann. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

