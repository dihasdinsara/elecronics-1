'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ArduinoProjects() {
  const projects = [
    {
      title: "LED Blink",
      difficulty: "Beginner",
      description: "Get started with Arduino by making an LED blink. Learn about digital output and basic programming concepts.",
      components: ["Arduino Uno", "LED", "220Ω Resistor", "Breadboard", "Jumper wires"],
      duration: "30 minutes"
    },
    {
      title: "Reading Analog Input",
      difficulty: "Beginner",
      description: "Learn to read analog signals using Arduino. Interface with potentiometers or analog sensors.",
      components: ["Arduino Uno", "Potentiometer", "Jumper wires"],
      duration: "45 minutes"
    },
    {
      title: "Temperature Sensor with LCD",
      difficulty: "Intermediate",
      description: "Build a project to measure temperature and display it on an LCD screen.",
      components: ["Arduino Uno", "DHT11 Sensor", "LCD Screen", "Jumper wires"],
      duration: "1.5 hours"
    },
    {
      title: "Servo Motor Control",
      difficulty: "Intermediate",
      description: "Control a servo motor's position using Arduino for robotics or automation.",
      components: ["Arduino Uno", "Servo Motor", "Jumper wires"],
      duration: "2 hours"
    },
    {
      title: "Ultrasonic Distance Sensor",
      difficulty: "Intermediate",
      description: "Measure distance using an ultrasonic sensor and display readings.",
      components: ["Arduino Uno", "HC-SR04 Ultrasonic Sensor", "Jumper wires"],
      duration: "2.5 hours"
    },
    {
      title: "Simple Robot Car",
      difficulty: "Advanced",
      description: "Build a basic robot car controlled by Arduino. Learn about motor control and basic robotics.",
      components: ["Arduino Uno", "Motor Driver", "DC Motors", "Wheels", "Chassis", "Jumper wires"],
      duration: "3 hours"
    },
    {
      title: "Line Following Robot",
      difficulty: "Advanced",
      description: "Create a robot that can follow a line using sensors and Arduino programming.",
      components: ["Arduino Uno", "Line Sensors", "Motor Driver", "DC Motors", "Wheels", "Chassis", "Jumper wires"],
      duration: "3.5 hours"
    },
    {
      title: "Home Automation with Relay",
      difficulty: "Professional",
      description: "Control household appliances using relays and Arduino for a basic smart home setup.",
      components: ["Arduino Uno", "Relay Module", "Light Bulb", "Jumper wires"],
      duration: "4 hours"
    },
    {
      title: "Plant Watering System",
      difficulty: "Professional",
      description: "Develop an automated plant watering system using soil moisture sensors and Arduino.",
      components: ["Arduino Uno", "Soil Moisture Sensor", "Water Pump", "Jumper wires"],
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
      <h1 className="text-3xl font-bold mb-8 text-center">Explore Arduino projects</h1>
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
              <Link href={`/courses/arduino/${project.title.toLowerCase().replace(/ /g, '-')}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                Start
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
