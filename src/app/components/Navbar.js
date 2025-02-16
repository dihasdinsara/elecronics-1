'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Create motion-wrapped Link component
  const MotionLink = motion(Link)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Link href="/" className="text-xl font-bold text-blue-600">
                IoT Academy
              </Link>
            </motion.div>
          </div>

          {/* Desktop Menu */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delayChildren: 0.5, staggerChildren: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            <MotionLink
              href="/curriculum"
              className="text-gray-600 hover:text-blue-600 transition"
              whileHover={{ scale: 1.05, color: '#2563eb' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Curriculum
            </MotionLink>
            <MotionLink
              href="/getstarted"
              className="text-gray-600 hover:text-blue-600 transition"
              whileHover={{ scale: 1.05, color: '#2563eb' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Get Started
            </MotionLink>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={isOpen ? 'open' : 'closed'}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <MotionLink
                  href="/curriculum"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition"
                  initial={{ x: 20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Curriculum
                </MotionLink>
                <MotionLink
                  href="/getstarted"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition"
                  initial={{ x: 20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Get Started
                </MotionLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
