'use client'

import React from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function PlantWateringSystemPage() {
  return (
    <motion.div
      className="container mx-auto p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Link href="/courses/arduino" className="mb-4 inline-block text-blue-500 hover:text-blue-700 transition duration-200">
          <FaArrowLeft className="inline-block mr-2 align-middle" /> Back to Arduino Projects
        </Link>
      </motion.div>

      <motion.div className="bg-white shadow-md rounded-lg p-8" variants={itemVariants}>
        <motion.h1 className="text-3xl font-bold text-center text-gray-800 mb-6" variants={itemVariants}>
          Arduino Plant Watering System
        </motion.h1>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Introduction to Plant Watering System
          </motion.h2>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            In this lesson, you will learn how to build an automated plant watering system using Arduino. This project is perfect for keeping your plants healthy, even when you're away or forget to water them. We will use a soil moisture sensor to detect the dryness of the soil and a water pump to automatically water your plant when needed.
          </motion.p>
          <motion.p className="text-gray-600" variants={itemVariants}>
            This system helps ensure your plants receive the right amount of water, preventing both under and overwatering. Let's get started and build a smart watering solution for your plants!
          </motion.p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Components Required
          </motion.h2>
          <motion.ul className="list-disc list-inside text-gray-600" variants={itemVariants}>
            <li>1 x Arduino Uno board</li>
            <li>1 x Soil Moisture Sensor</li>
            <li>1 x Mini Water Pump</li>
            <li>1 x Relay Module</li>
            <li>1 x Breadboard</li>
            <li>Jumper wires</li>
            <li>Water container</li>
            <li>Power supply for Arduino and water pump (e.g., USB for Arduino, external power for pump if needed)</li>
          </motion.ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Circuit Diagram
          </motion.h2>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            [Insert Circuit Diagram Image or Description here] -  A detailed circuit diagram will be provided to show how to connect the soil moisture sensor, relay module, water pump, and Arduino Uno.
          </motion.p>
          {/* Consider adding an image here */}
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Arduino Code
          </motion.h2>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            Below is the Arduino code for the plant watering system. Copy and paste this code into your Arduino IDE.
          </motion.p>
          <motion.pre className="bg-gray-100 p-4 rounded-md overflow-x-auto" variants={itemVariants}>
            <code className="text-sm text-gray-800">
              {`// Define sensor and relay pins
const int moistureSensorPin = A0;
const int relayPin = 8;

// Define moisture threshold (adjust as needed)
const int moistureThreshold = 500; // Example value

void setup() {
  Serial.begin(9600);
  pinMode(relayPin, OUTPUT);
}

void loop() {
  // Read moisture sensor value
  int moistureValue = analogRead(moistureSensorPin);
  Serial.print("Moisture Value: ");
  Serial.println(moistureValue);

  // Check if soil is dry
  if (moistureValue > moistureThreshold) {
    Serial.println("Soil is dry, watering plant...");
    digitalWrite(relayPin, LOW); // Turn on water pump (Relay module logic might be different)
    delay(5000); // Water for 5 seconds (adjust as needed)
    digitalWrite(relayPin, HIGH); // Turn off water pump
    Serial.println("Watering complete.");
  } else {
    Serial.println("Soil is moist enough.");
    digitalWrite(relayPin, HIGH); // Ensure pump is off
  }

  delay(60000); // Check moisture every 60 seconds (adjust as needed)
}
`}
            </code>
          </motion.pre>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Steps to Build the Project
          </motion.h2>
          <motion.ol className="list-decimal list-inside text-gray-600" variants={itemVariants}>
            <li>Connect the soil moisture sensor to the Arduino Uno.</li>
            <li>Connect the relay module to control the water pump.</li>
            <li>Wire the water pump to the relay module.</li>
            <li>Upload the Arduino code to your Arduino Uno board.</li>
            <li>Place the soil moisture sensor in the plant soil.</li>
            <li>Place the water pump tube in a water container and the output tube near your plant.</li>
            <li>Power up the Arduino and test the system.</li>
          </motion.ol>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Conclusion
          </motion.h2>
          <motion.p className="text-gray-600" variants={itemVariants}>
            Congratulations! You have successfully built an automated plant watering system using Arduino. This project can be further expanded by adding features like scheduling, remote monitoring, and integration with weather data for smarter watering decisions.
          </motion.p>
        </motion.section>
      </motion.div>
    </motion.div>
  )
}
