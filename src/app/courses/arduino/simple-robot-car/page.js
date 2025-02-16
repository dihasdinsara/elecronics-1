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

export default function SimpleRobotCarPage() {
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
          Arduino Simple Robot Car
        </motion.h1>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Introduction to Simple Robot Car
          </motion.h2>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            In this exciting lesson, you will build a simple robot car using Arduino! This project is perfect for beginners and will teach you the basics of robotics, including how to control DC motors, use a motor driver, and assemble a basic mobile robot.
          </motion.p>
          <motion.p className="text-gray-600" variants={itemVariants}>
            Get ready to bring your Arduino projects to life and explore the fun world of mobile robotics.
          </motion.p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Components Required
          </motion.h2>
          <motion.ul className="list-disc list-inside text-gray-600" variants={itemVariants}>
            <li>1 x Arduino Uno board</li>
            <li>1 x L298N Motor Driver Module</li>
            <li>2 x DC Motors with wheels</li>
            <li>1 x Chassis for the robot car (can be simple cardboard or a dedicated robot car chassis)</li>
            <li>1 x 9V Battery or Battery Pack for Motors</li>
            <li>Jumper wires</li>
            <li>Breadboard (optional, but recommended for easier setup)</li>
          </motion.ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Step-by-step Instructions
          </motion.h2>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            Follow these steps to build your simple robot car and control it with Arduino:
          </motion.p>
          <motion.ol className="list-decimal list-inside text-gray-600" variants={itemVariants}>
            <li>Assemble the Robot Car Chassis:
              <ul className="list-disc list-inside ml-5 mt-2">
                <li>Attach the DC motors to the chassis.</li>
                <li>Mount the wheels onto the motor shafts.</li>
                <li>Place the Arduino, motor driver, and breadboard (if using) on the chassis in a convenient layout.</li>
              </ul>
            </li>
            <li>Connect the Motor Driver to Arduino:
              <ul className="list-disc list-inside ml-5 mt-2">
                <li>Connect Motor Driver IN1 to Arduino Digital Pin 8</li>
                <li>Connect Motor Driver IN2 to Arduino Digital Pin 9</li>
                <li>Connect Motor Driver IN3 to Arduino Digital Pin 10</li>
                <li>Connect Motor Driver IN4 to Arduino Digital Pin 11</li>
                <li>Connect Motor Driver EN-A to Arduino Digital Pin 6 (PWM)</li>
                <li>Connect Motor Driver EN-B to Arduino Digital Pin 5 (PWM)</li>
              </ul>
            </li>
            <li>Connect Motors to Motor Driver:
              <ul className="list-disc list-inside ml-5 mt-2">
                <li>Connect the wires of the first DC motor to Motor Driver OUT1 and OUT2.</li>
                <li>Connect the wires of the second DC motor to Motor Driver OUT3 and OUT4.</li>
              </ul>
            </li>
            <li>Connect Power Supply:
              <ul className="list-disc list-inside ml-5 mt-2">
                <li>Connect the 9V battery to the Motor Driver's power input (VCC and GND), ensuring correct polarity.</li>
                <li>Connect Arduino to power via USB or a separate power supply. Ensure grounds are common between Arduino and Motor Driver.</li>
              </ul>
            </li>
            <li>Upload the Code:
              <ul className="list-disc list-inside ml-5 mt-2">
                <li>Open the Arduino IDE and write or copy the code provided in the 'Code Example' section.</li>
                <li>Upload the code to your Arduino Uno board.</li>
              </ul>
            </li>
            <li>Test Your Robot Car:
              <ul className="list-disc list-inside ml-5 mt-2">
                <li>Once the code is uploaded, your robot car should start moving.</li>
                <li>Observe the car's movement and ensure the motors are responding as expected.</li>
                <li>You can modify the code to change the car's behavior, speed, and direction.</li>
              </ul>
            </li>
          </motion.ol>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Code Example
          </motion.h2>
          <motion.div className="text-gray-600" variants={itemVariants}>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-gray-800">
                {`// Define motor control pins
const int enA = 6;  // Enable pin for motor A (right motor) - PWM pin
const int in1 = 8;
const int in2 = 9;
const int enB = 5;  // Enable pin for motor B (left motor) - PWM pin
const int in3 = 10;
const int in4 = 11;

void setup() {
  // Set motor control pins as output
  pinMode(enA, OUTPUT);
  pinMode(enB, OUTPUT);
  pinMode(in1, OUTPUT);
  pinMode(in2, OUTPUT);
  pinMode(in3, OUTPUT);
  pinMode(in4, OUTPUT);

  // Initialize motor speed to 0 (optional)
  analogWrite(enA, 0);
  analogWrite(enB, 0);
}

void loop() {
  // Move forward
  forward();
  delay(2000); // Move forward for 2 seconds

  // Stop
  stop();
  delay(1000); // Stop for 1 second

  // Move backward
  backward();
  delay(2000); // Move backward for 2 seconds

  // Stop
  stop();
  delay(1000); // Stop for 1 second

  // Turn right
  turnRight();
  delay(1500); // Turn right for 1.5 seconds

  // Stop
  stop();
  delay(1000); // Stop for 1 second

  // Turn left
  turnLeft();
  delay(1500); // Turn left for 1.5 seconds

  // Stop and repeat
  stop();
  delay(2000); // Stop for 2 seconds before repeating loop
}

void forward() {
  digitalWrite(in1, HIGH);
  digitalWrite(in2, LOW);
  digitalWrite(in3, HIGH);
  digitalWrite(in4, LOW);
  analogWrite(enA, 200); // Adjust speed as needed (0-255)
  analogWrite(enB, 200); // Adjust speed as needed (0-255)
}

void backward() {
  digitalWrite(in1, LOW);
  digitalWrite(in2, HIGH);
  digitalWrite(in3, LOW);
  digitalWrite(in4, HIGH);
  analogWrite(enA, 200); // Adjust speed as needed (0-255)
  analogWrite(enB, 200); // Adjust speed as needed (0-255)
}

void turnRight() {
  digitalWrite(in1, HIGH);
  digitalWrite(in2, LOW);
  digitalWrite(in3, LOW);
  digitalWrite(in4, HIGH);
  analogWrite(enA, 200); // Adjust speed as needed (0-255)
  analogWrite(enB, 200); // Adjust speed as needed (0-255)
}

void turnLeft() {
  digitalWrite(in1, LOW);
  digitalWrite(in2, HIGH);
  digitalWrite(in3, HIGH);
  digitalWrite(in4, LOW);
  analogWrite(enA, 200); // Adjust speed as needed (0-255)
  analogWrite(enB, 200); // Adjust speed as needed (0-255)
}

void stop() {
  digitalWrite(in1, LOW);
  digitalWrite(in2, LOW);
  digitalWrite(in3, LOW);
  digitalWrite(in4, LOW);
  analogWrite(enA, 0);
  analogWrite(enB, 0);
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
            Congratulations! You have built and programmed a simple robot car using Arduino. This project is a fantastic stepping stone to more complex robotics projects. You can now explore adding sensors for obstacle avoidance, remote control capabilities, or even autonomous navigation. The possibilities are endless!
          </motion.p>
        </motion.section>
      </motion.div>
    </motion.div>
  )
}
