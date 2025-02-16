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

export default function LedBlinkPage() {
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
        <motion.h1 className="text-3xl font-bold text-center text-gray-800 mb-6" variants={itemVariants}>Arduino LED Blink: Your First Project</motion.h1>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>Introduction</motion.h2>
          <motion.p className="text-gray-600" variants={itemVariants}>
            Welcome to your first Arduino project! In this lesson, you'll learn how to blink an LED using your Arduino Uno board.
            This is a fundamental project for beginners and a great way to understand basic digital output and Arduino programming.
          </motion.p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>Components Required</motion.h2>
          <motion.ul className="list-disc list-inside text-gray-600" variants={itemVariants}>
            <li>1 x Arduino Uno board</li>
            <li>1 x LED (Light Emitting Diode)</li>
            <li>1 x 220Ω Resistor (Ohm)</li>
            <li>1 x Breadboard</li>
            <li>Jumper wires</li>
          </motion.ul>
          {/* You can add images of components here if you have them */}
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>Circuit Diagram</motion.h2>
          <motion.p className="text-gray-600" variants={itemVariants}>
            Connect the components as follows:
          </motion.p>
          <motion.ul className="list-disc list-inside text-gray-600" variants={itemVariants}>
            <li>Connect the longer leg (anode, positive) of the LED to a digital pin on the Arduino (e.g., pin 8) through the 220Ω resistor. Connect one end of the resistor to pin 8 and the other end to the LED's anode.</li>
            <li>Connect the shorter leg (cathode, negative) of the LED to the GND (Ground) pin on the Arduino.</li>
            <li>Use jumper wires to make these connections on the breadboard.</li>
          </motion.ul>
          {/* Ideally, insert a visual circuit diagram here */}
          <motion.p className="text-gray-500 mt-2" variants={itemVariants}>
            (A visual diagram will be added here to make it easier to understand)
          </motion.p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>Arduino Code</motion.h2>
          <motion.p className="text-gray-600 mb-2" variants={itemVariants}>
            Copy and paste this code into your Arduino IDE:
          </motion.p>
          <motion.div className="bg-gray-100 rounded-md p-4 font-mono text-sm text-gray-800" variants={itemVariants}>
            <pre><code>
              {`// Define the LED pin
const int ledPin = 8;

void setup() {
  // Initialize the LED pin as an output
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // Turn the LED on
  digitalWrite(ledPin, HIGH);
  delay(1000); // Wait for 1 second

  // Turn the LED off
  digitalWrite(ledPin, LOW);
  delay(1000); // Wait for 1 second
}`}
            </code></pre>
          </motion.div>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>Instructions</motion.h2>
          <motion.ol className="list-decimal list-inside text-gray-600" variants={itemVariants}>
            <li>Assemble the circuit on your breadboard as shown in the circuit diagram.</li>
            <li>Connect your Arduino Uno to your computer using a USB cable.</li>
            <li>Open the Arduino IDE on your computer.</li>
            <li>Copy the code provided above and paste it into the Arduino IDE.</li>
            <li>Select your Arduino Uno board and the correct port from the Tools menu.</li>
            <li>Click the "Upload" button in the Arduino IDE to upload the code to your Arduino board.</li>
            <li>Observe the LED blinking on and off every second.</li>
          </motion.ol>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>Code Explanation</motion.h2>
          <motion.ul className="text-gray-600" variants={itemVariants}>
              <li><code>const int ledPin = 8;</code>:  This line declares a constant integer variable named <code>ledPin</code> and assigns it the value 8. This is the pin number where your LED is connected.</li>
              <li><code>pinMode(ledPin, OUTPUT);</code>: In the <code>setup()</code> function, this line configures the <code>ledPin</code> as an output. This means we will be sending signals from this pin to control the LED.</li>
              <li><code>digitalWrite(ledPin, HIGH);</code>: In the <code>loop()</code> function, this line turns the LED on by sending a HIGH signal (5V) to the <code>ledPin</code>.</li>
              <li><code>delay(1000);</code>: This line pauses the program for 1000 milliseconds (1 second).</li>
              <li><code>digitalWrite(ledPin, LOW);</code>: This line turns the LED off by sending a LOW signal (0V) to the <code>ledPin</code>.</li>
              <li>The <code>loop()</code> function repeats these steps continuously, causing the LED to blink on and off.</li>
            </motion.ul>
        </motion.section>

        <motion.section variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>Congratulations!</motion.h2>
          <motion.p className="text-gray-600" variants={itemVariants}>
            You have successfully completed your first Arduino project - blinking an LED! This simple project is the foundation for more complex and exciting projects in the world of Arduino and electronics. Keep exploring and learning!
          </motion.p>
        </motion.section>
      </motion.div>
    </motion.div>
  )
}
