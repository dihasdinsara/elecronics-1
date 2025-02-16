'use client'

import Link from 'next/link';
import { FaArrowRight, FaBook } from 'react-icons/fa';
import { IoHardwareChip } from 'react-icons/io5';
import { MdOutlineSchool, MdSmartToy } from 'react-icons/md';
import { BiCodeAlt } from 'react-icons/bi';
import { BsRobot, BsPeople } from 'react-icons/bs';
import { TbCircuitCapacitor } from 'react-icons/tb';
import { motion } from 'framer-motion';
import Chatbot from './components/Chatbot';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">
          Electronics Learning Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Master Arduino, NodeMCU, and ESP32 with AI-powered learning
        </p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4"
        >
          <Link href="/getstarted">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
              Get Started <FaArrowRight />
            </button>
          </Link>
          <Link href="/curriculum">
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center gap-2">
              View Curriculum <FaBook />
            </button>
          </Link>
        </motion.div>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Arduino Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          className="border rounded-lg p-6 shadow-md hover:shadow-lg transition"
        >
          <div className="flex items-center gap-2 mb-4">
            <IoHardwareChip className="text-3xl text-blue-500" />
            <h2 className="text-2xl font-bold">Arduino</h2>
          </div>
          <p className="mb-4 text-gray-600">
            Learn the basics of Arduino programming and electronics. Perfect for beginners.
          </p>
          <ul className="mb-6 text-gray-600">
            <li className="flex items-center gap-2 mb-2">
              <span className="text-green-500">✓</span> Basic Electronics
            </li>
            <li className="flex items-center gap-2 mb-2">
              <span className="text-green-500">✓</span> Programming Fundamentals
            </li>
            <li className="flex items-center gap-2 mb-2">
              <span className="text-green-500">✓</span> Hands-on Projects
            </li>
          </ul>
          <Link href="/courses/arduino">
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition flex items-center justify-center gap-2">
              Start Learning <FaArrowRight />
            </button>
          </Link>
        </motion.div>

        {/* NodeMCU Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          className="border rounded-lg p-6 shadow-md hover:shadow-lg transition"
        >
          <div className="flex items-center gap-2 mb-4">
            <TbCircuitCapacitor className="text-3xl text-blue-500" />
            <h2 className="text-2xl font-bold">NodeMCU</h2>
          </div>
          <p className="mb-4 text-gray-600">
            Explore IoT development with NodeMCU. Build connected devices.
          </p>
          <ul className="mb-6 text-gray-600">
            <li className="flex items-center gap-2 mb-2">
              <span className="text-green-500">✓</span> WiFi Programming
            </li>
            <li className="flex items-center gap-2 mb-2">
              <span className="text-green-500">✓</span> IoT Protocols
            </li>
            <li className="flex items-center gap-2 mb-2">
              <span className="text-green-500">✓</span> Web Integration
            </li>
          </ul>
          <Link href="/courses/nodemcu">
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition flex items-center justify-center gap-2">
              Start Learning <FaArrowRight />
            </button>
          </Link>
        </motion.div>

        {/* ESP32 Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="border rounded-lg p-6 shadow-md hover:shadow-lg transition"
        >
          <div className="flex items-center gap-2 mb-4">
            <MdSmartToy className="text-3xl text-blue-500" />
            <h2 className="text-2xl font-bold">ESP32</h2>
          </div>
          <p className="mb-4 text-gray-600">
            Master advanced IoT with ESP32. For experienced makers.
          </p>
          <ul className="mb-6 text-gray-600">
            <li className="flex items-center gap-2 mb-2">
              <span className="text-green-500">✓</span> Bluetooth & WiFi
            </li>
            <li className="flex items-center gap-2 mb-2">
              <span className="text-green-500">✓</span> Advanced Sensors
            </li>
            <li className="flex items-center gap-2 mb-2">
              <span className="text-green-500">✓</span> Real-time Applications
            </li>
          </ul>
          <Link href="/courses/esp32">
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition flex items-center justify-center gap-2">
              Start Learning <FaArrowRight />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-8">Why Learn With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-4"
          >
            <BsRobot className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Learning</h3>
            <p className="text-gray-600">Get personalized feedback and assistance from our AI tutor</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-4"
          >
            <BiCodeAlt className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Interactive Projects</h3>
            <p className="text-gray-600">Learn by doing with hands-on practical projects</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-4"
          >
            <MdOutlineSchool className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Virtual Simulator</h3>
            <p className="text-gray-600">Test your circuits in our virtual environment</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-4"
          >
            <BsPeople className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-600">Join our community of makers and learners</p>
          </motion.div>
        </div>
      </motion.section>

      <Chatbot />
    </main>
  );
}
