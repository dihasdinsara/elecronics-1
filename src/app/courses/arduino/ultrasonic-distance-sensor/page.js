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

export default function UltrasonicDistanceSensorPage() {
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
          Arduino Ultrasonic Distance Sensor
        </motion.h1>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Introduction to Ultrasonic Distance Sensors
          </motion.h2>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            In this lesson, you will learn how to use an ultrasonic distance sensor with your Arduino Uno board. Ultrasonic sensors are fantastic tools for measuring distance without physical contact. They work by sending out ultrasonic waves and measuring the time it takes for the waves to bounce back, allowing you to calculate the distance to an object.
          </motion.p>
          <motion.p className="text-gray-600" variants={itemVariants}>
            This project is a great introduction to sensor technology and is widely used in robotics, automation, and interactive installations.
          </motion.p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Components Required
          </motion.h2>
          <motion.ul className="list-disc list-inside text-gray-600" variants={itemVariants}>
            <li>1 x Arduino Uno board</li>
            <li>1 x Ultrasonic Distance Sensor (HC-SR04)</li>
            <li>Jumper wires</li>
            <li>Breadboard (optional, but recommended for easier setup)</li>
          </motion.ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Step-by-step Instructions
          </motion.h2>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            Follow these steps to connect your ultrasonic distance sensor to the Arduino and read distance measurements:
          </motion.p>
          <motion.ol className="list-decimal list-inside text-gray-600" variants={itemVariants}>
            <li>Connect the ultrasonic sensor to the Arduino as follows:
              <ul className="list-disc list-inside ml-5 mt-2">
                <li>Sensor VCC to Arduino 5V</li>
                <li>Sensor GND to Arduino GND</li>
                <li>Sensor Trig to Arduino Digital Pin 9</li>
                <li>Sensor Echo to Arduino Digital Pin 10</li>
              </ul>
            </li>
            <li>Open the Arduino IDE and write the code provided in the 'Code Example' section.</li>
            <li>Upload the code to your Arduino Uno board.</li>
            <li>Open the Serial Monitor (Tools &gt; Serial Monitor) in the Arduino IDE to see the distance readings.</li>
            <li>Observe the distance readings change as you move objects closer to or further away from the sensor.</li>
          </motion.ol>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Code Example
          </motion.h2>
          <motion.div className="text-gray-600" variants={itemVariants}>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-gray-800">
                {`// Define sensor pins
const int trigPin = 9;
const int echoPin = 10;

// Define variables
long duration;
int distance;

void setup() {
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT);  // Sets the echoPin as an Input
  Serial.begin(9600);       // Starts serial communication
}

void loop() {
  // Clears the trigPin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);
  // Calculating the distance
  distance = duration * 0.034 / 2; // Speed of sound wave divided by 2 (go and back)
  // Prints the distance on the Serial Monitor
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  delay(1000); // Wait for 1 second
}
`}
              </code>
            </pre>
          </motion.div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Conclusion
          </motion.h2>
          <motion.p className="text-gray-600" variants={itemVariants}>
            Congratulations! You have successfully used an ultrasonic distance sensor with Arduino. This project provides a foundation for more advanced projects like obstacle avoidance robots, parking sensors, and interactive art installations. Experiment with different thresholds and actions based on distance to explore the full potential of this sensor.
          </motion.p>
        </motion.section>
      </motion.div>
    </motion.div>
  )
}
