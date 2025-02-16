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

export default function ServoMotorControlPage() {
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
          Arduino Servo Motor Control
        </motion.h1>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Introduction to Servo Motors
          </motion.h2>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            In this lesson, you will learn how to control a servo motor using Arduino. Servo motors are a type of rotary actuator that allows for precise control of angular position. They are widely used in robotics, automation, and model making due to their accuracy and ease of use.
          </motion.p>
          <motion.p className="text-gray-600" variants={itemVariants}>
            You will learn how to wire a servo motor to your Arduino and write code to control its position. This project is a great introduction to more complex electromechanical systems.
          </motion.p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Components Required
          </motion.h2>
          <motion.ul className="list-disc list-inside text-gray-600" variants={itemVariants}>
            <li>1 x Arduino Uno board</li>
            <li>1 x Servo Motor (e.g., SG90)</li>
            <li>Jumper wires</li>
            <li>Breadboard (optional, but recommended for easier setup)</li>
          </motion.ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Step-by-step Instructions
          </motion.h2>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            Follow these steps to connect your servo motor to the Arduino and control it:
          </motion.p>
          <motion.ol className="list-decimal list-inside text-gray-600" variants={itemVariants}>
            <li>Connect the servo motor to the Arduino as follows:
              <ul className="list-disc list-inside ml-5 mt-2">
                <li>Servo Motor Brown wire (GND) to Arduino GND</li>
                <li>Servo Motor Red wire (VCC) to Arduino 5V</li>
                <li>Servo Motor Yellow/Orange wire (Signal) to Arduino Digital Pin 9</li>
              </ul>
            </li>
            <li>Open the Arduino IDE and write the code provided in the 'Code Example' section.</li>
            <li>Upload the code to your Arduino Uno board.</li>
            <li>Observe the servo motor moving back and forth. You can adjust the angle in the code to control the servo's position.</li>
          </motion.ol>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Code Example
          </motion.h2>
          <motion.div className="text-gray-600" variants={itemVariants}>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-gray-800">
                {`#include <Servo.h>

Servo myservo;  // create servo object to control a servo
int pos = 0;    // variable to store the servo position

void setup() {
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
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
            Congratulations! You have successfully controlled a servo motor with Arduino. This project demonstrates the basics of servo control and can be expanded upon to create more interactive and dynamic projects, such as robotic arms or automated gates.
          </motion.p>
        </motion.section>
      </motion.div>
    </motion.div>
  )
}
