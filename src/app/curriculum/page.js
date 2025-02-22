'use client'

import React from 'react'
import { IoHardwareChip } from 'react-icons/io5'
import { TbCircuitCapacitor } from 'react-icons/tb'
import { MdSmartToy } from 'react-icons/md'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Changed function name from 'page' to 'Page' to follow React component naming convention
export default function Page() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Curriculum Overview
        </motion.h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Arduino Track */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="border rounded-lg p-6 relative"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-6 right-6"
            >
              <IoHardwareChip className="text-6xl text-blue-200" />
            </motion.div>
            <div className="flex items-center gap-2 mb-4">
              <IoHardwareChip className="text-3xl text-blue-500" />
              <h2 className="text-2xl font-bold">Arduino Track</h2>
            </div>
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Introduction to Electronics</h3>
                  <p className="text-gray-600">Basic components, circuits, and Arduino fundamentals</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-4"
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Programming Basics</h3>
                  <p className="text-gray-600">C++ fundamentals, Arduino IDE, and basic sketches</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-4"
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Sensors and Outputs</h3>
                  <p className="text-gray-600">Working with various sensors, displays, and actuators</p>
                </div>
              </motion.div>
            </div>
            <Link href="/courses/arduino" className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Start
            </Link>
          </motion.div>

          {/* NodeMCU Track */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="border rounded-lg p-6 relative"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-6 right-6"
            >
              <TbCircuitCapacitor className="text-6xl text-green-200" />
            </motion.div>
            <div className="flex items-center gap-2 mb-4">
              <TbCircuitCapacitor className="text-3xl text-green-500" />
              <h2 className="text-2xl font-bold">NodeMCU Track</h2>
            </div>
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="flex items-center gap-4"
              >
                <div className="bg-green-100 p-3 rounded-full">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">WiFi Programming</h3>
                  <p className="text-gray-600">Connecting to networks, HTTP requests, and API integration</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-4"
              >
                <div className="bg-green-100 p-3 rounded-full">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">IoT Protocols</h3>
                  <p className="text-gray-600">MQTT, WebSocket, and other IoT communication protocols</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="flex items-center gap-4"
              >
                <div className="bg-green-100 p-3 rounded-full">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Cloud Integration</h3>
                  <p className="text-gray-600">Working with cloud platforms and real-time data</p>
                </div>
              </motion.div>
            </div>
            <Link href="/courses/nodemcu" className="absolute bottom-4 right-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Start
            </Link>
          </motion.div>

          {/* ESP32 Track */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="border rounded-lg p-6 relative"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-6 right-6"
            >
              <MdSmartToy className="text-6xl text-purple-200" />
            </motion.div>
            <div className="flex items-center gap-2 mb-4">
              <MdSmartToy className="text-3xl text-purple-500" />
              <h2 className="text-2xl font-bold">ESP32 Track</h2>
            </div>
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="flex items-center gap-4"
              >
                <div className="bg-purple-100 p-3 rounded-full">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Advanced IoT Development</h3>
                  <p className="text-gray-600">Bluetooth, dual-core programming, and deep sleep modes</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="flex items-center gap-4"
              >
                <div className="bg-purple-100 p-3 rounded-full">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Real-time Systems</h3>
                  <p className="text-gray-600">FreeRTOS, task management, and interrupt handling</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
                className="flex items-center gap-4"
              >
                <div className="bg-purple-100 p-3 rounded-full">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Advanced Projects</h3>
                  <p className="text-gray-600">Complex IoT systems and industrial applications</p>
                </div>
              </motion.div>
            </div>
            <Link href="/courses/esp32" className="absolute bottom-4 right-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Start
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
