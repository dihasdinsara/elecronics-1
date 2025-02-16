'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NodeMCUProjects() {
  const projects = [
    {
      title: "Web Server Basics",
      difficulty: "Beginner",
      description: "Get started with NodeMCU by setting up a simple web server. Learn about handling HTTP requests and serving web pages.",
      components: ["NodeMCU DevKit", "USB Cable"],
      duration: "30 minutes"
    },
    {
      title: "Connecting to WiFi",
      difficulty: "Beginner",
      description: "Learn how to connect NodeMCU to your local WiFi network. Understand network configuration and basic WiFi functionalities.",
      components: ["NodeMCU DevKit", "USB Cable"],
      duration: "45 minutes"
    },
    {
      title: "DHT11 Sensor Readings to Cloud",
      difficulty: "Intermediate",
      description: "Send temperature and humidity data from a DHT11 sensor to a cloud platform (e.g., ThingSpeak) using WiFi.",
      components: ["NodeMCU DevKit", "DHT11 Sensor", "Jumper wires"],
      duration: "1.5 hours"
    },
    {
      title: "Web Controlled LED",
      difficulty: "Intermediate",
      description: "Control an LED remotely via a web interface hosted on NodeMCU. Explore basic web control and digital output.",
      components: ["NodeMCU DevKit", "LED", "220Ω Resistor", "Breadboard", "Jumper wires"],
      duration: "2 hours"
    },
    {
      title: "Simple Telegram Bot",
      difficulty: "Advanced",
      description: "Create a simple Telegram bot using NodeMCU to send and receive messages. Learn about basic bot interactions.",
      components: ["NodeMCU DevKit", "USB Cable"],
      duration: "2.5 hours"
    },
    {
      title: "Real-time Sensor Dashboard",
      difficulty: "Advanced",
      description: "Build a real-time dashboard to display sensor data (e.g., temperature, humidity) on a webpage served by NodeMCU.",
      components: ["NodeMCU DevKit", "Temperature Sensor", "Humidity Sensor", "Jumper wires"],
      duration: "3 hours"
    },
    {
      title: "IFTTT Integration",
      difficulty: "Advanced",
      description: "Integrate NodeMCU with IFTTT to trigger actions based on sensor data or web events. Explore webhooks and IoT automation.",
      components: ["NodeMCU DevKit", "Light Sensor", "Jumper wires"],
      duration: "3.5 hours"
    },
    {
      title: "Smart Home Light Control",
      difficulty: "Professional",
      description: "Control a light bulb using NodeMCU and a relay module, accessible via a web interface.",
      components: ["NodeMCU DevKit", "Relay Module", "Light Bulb", "Jumper wires"],
      duration: "4 hours"
    },
    {
      title: "Air Quality Monitor",
      difficulty: "Professional",
      description: "Develop an air quality monitor using a gas sensor and NodeMCU, displaying readings on a local webpage.",
      components: ["NodeMCU DevKit", "Gas Sensor (e.g., MQ-135)", "Jumper wires"],
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
      <h1 className="text-3xl font-bold mb-8 text-center">Explore NodeMCU Project Modules</h1>
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
              <Link href={`/courses/nodemcu/${project.title.toLowerCase().replace(/ /g, '-')}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                Start
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
