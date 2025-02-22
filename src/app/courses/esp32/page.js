'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ESP32Projects() {
  const projects = [
    {
      title: "Basic LED Control",
      difficulty: "Beginner",
      description: "Get started with ESP32 by learning to control an LED. Understand digital output and basic circuit design.",
      components: ["ESP32 DevKitC", "LED", "220Ω Resistor", "Breadboard", "Jumper wires"],
      duration: "30 minutes"
    },
    {
      title: "Serial Communication Fundamentals",
      difficulty: "Beginner",
      description: "Establish serial communication between ESP32 and your computer. Learn to send and receive data for debugging and monitoring.",
      components: ["ESP32 DevKitC", "USB Cable"],
      duration: "45 minutes"
    },
    {
      title: "WiFi Weather Station with Real-time Data",
      difficulty: "Intermediate",
      description: "Build a comprehensive weather station that measures temperature, humidity, and pressure, and transmits data over WiFi to a web dashboard.",
      components: ["ESP32 DevKitC", "BME280 Sensor", "Jumper wires"],
      duration: "1.5 hours"
    },
    {
      title: "MQTT-based Smart Home Automation",
      difficulty: "Intermediate",
      description: "Implement a basic smart home system using MQTT protocol to control devices remotely. Learn about IoT communication standards.",
      components: ["ESP32 DevKitC", "Relay Module", "Light Bulb", "Jumper wires"],
      duration: "2 hours"
    },
    {
      title: "ESP-NOW based Wireless Sensor Network",
      difficulty: "Advanced",
      description: "Explore ESP-NOW for creating a fast and efficient wireless sensor network for distributed data collection and control.",
      components: ["2 x ESP32 DevKitC", "DHT11 Sensor", "Jumper wires"],
      duration: "2.5 hours"
    },
    {
      title: "Image Capture and Streaming with ESP32-CAM",
      difficulty: "Advanced",
      description: "Utilize ESP32-CAM to capture images and stream video over WiFi. Dive into multimedia applications with ESP32.",
      components: ["ESP32-CAM", "USB to Serial Converter (for initial programming)"],
      duration: "3 hours"
    },
    {
      title: "TinyML on ESP32 for Edge Intelligence",
      difficulty: "Advanced",
      description: "Introduce machine learning at the edge by deploying a simple TinyML model on ESP32 for real-time data analysis and decision-making.",
      components: ["ESP32 DevKitC", "Microphone or Accelerometer (optional)"],
      duration: "3.5 hours"
    },
    {
      title: "Industrial IoT Sensor Node for Predictive Maintenance",
      difficulty: "Professional",
      description: "Design a robust IoT sensor node for industrial applications, focusing on data reliability and predictive maintenance strategies.",
      components: ["ESP32-WROOM-32E (Industrial Grade)", "Industrial Sensors (Temperature, Vibration)", "Waterproof Enclosure"],
      duration: "4 hours"
    },
    {
      title: "Smart Agriculture Monitoring System for Precision Farming",
      difficulty: "Professional",
      description: "Develop a comprehensive monitoring system for smart agriculture, integrating soil moisture, temperature, and light sensors for precision farming.",
      components: ["ESP32 DevKitC", "Soil Moisture Sensor", "Light Sensor", "Temperature Sensor", "Waterproof Enclosure"],
      duration: "4.5 hours"
    }
  ];

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Explore ESP32 Project Modules</h1>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((project, index) => (
          <motion.div key={index} className="border rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            variants={item}
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <span className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
              project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
              project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
              project.difficulty === 'Advanced' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
            }`}>
              {project.difficulty}
            </span>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="mb-4">
              <h3 className="font-medium mb-2">Key Components:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {project.components.map((component, idx) => (
                  <li key={idx}>{component}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Estimated Time: {project.duration}</span>
              <Link href="/purchase" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                Start
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
