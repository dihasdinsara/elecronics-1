'use client'

import React from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export default function ReadingAnalogInputPage() {
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
        <motion.h1 className="text-3xl font-bold text-center text-gray-800 mb-6" variants={itemVariants}>Arduino Analog Input: Reading a Potentiometer</motion.h1>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>Introduction to Analog Input</motion.h2>
          <motion.p className="text-gray-600" variants={itemVariants}>
            In this lesson, you will learn how to read analog input using your Arduino Uno board. Analog input allows your Arduino to read a range of values, unlike digital input which is only HIGH or LOW. We'll use a potentiometer to demonstrate this, as it provides a variable voltage that Arduino can read.
          </motion.p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>Components Required</motion.h2>
          <motion.ul className="list-disc list-inside text-gray-600" variants={itemVariants}>
            <li>1 x Arduino Uno board</li>
            <li>1 x Potentiometer (10kΩ recommended)</li>
            <li>Jumper wires</li>
            <li>Breadboard (optional, but recommended for easier setup)</li>
          </motion.ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>Circuit Diagram</motion.h2>
          <motion.p className="text-gray-600" variants={itemVariants}>
            Connect the potentiometer to your Arduino as follows:
          </motion.p>
          <motion.ul className="list-disc list-inside text-gray-600" variants={itemVariants}>
            <li>Connect one outer pin of the potentiometer to 5V on the Arduino.</li>
            <li>Connect the other outer pin of the potentiometer to GND on the Arduino.</li>
            <li>Connect the middle pin (wiper) of the potentiometer to analog pin A0 on the Arduino.</li>
          </motion.ul>
          {/* Ideally, insert a visual circuit diagram here */}
          <motion.p className="text-gray-500 mt-2" variants={itemVariants}>
            (A visual diagram will be added here to make it easier to understand)
          </motion.p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>Arduino Code</motion.h2>
          <motion.p className="text-gray-600" variants={itemVariants}>
            Copy and paste this code into your Arduino IDE:
          </motion.p>
          <motion.pre className="bg-gray-100 rounded-md p-4 overflow-x-auto" variants={itemVariants}>
            <code className="text-sm text-gray-800">
              {`void setup() {
  Serial.begin(9600); // Initialize serial communication at 9600 bits per second
}

void loop() {
  int analogValue = analogRead(A0); // Read the analog value from pin A0 (0-1023)
  float voltage = analogValue * (5.0 / 1023.0); // Convert analog reading to voltage (0-5V)

  Serial.print("Analog Value = ");
  Serial.print(analogValue);
  Serial.print("\t Voltage = ");
  Serial.print(voltage);
  Serial.println(" V");

  delay(100); // Wait for 100 milliseconds
}`}
            </code>
          </motion.pre>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>Code Explanation</motion.h2>
          <motion.div className="text-gray-600" variants={itemVariants}>
            <ul>
              <li><code>Serial.begin(9600);</code>: This line initializes serial communication at a baud rate of 9600. This allows your Arduino to send data to your computer via the USB cable, which you can view using the Serial Monitor in the Arduino IDE.</li>
              <li><code>analogRead(A0);</code>: This is the core of reading analog input. The <code>analogRead()</code> function reads the voltage on the specified analog pin (A0 in this case). It returns an integer value between 0 and 1023, which corresponds to a voltage range of 0V to 5V (for a 5V Arduino).</li>
              <li><code>float voltage = analogValue * (5.0 / 1023.0);</code>: This line converts the raw analog reading (0-1023) into a voltage value (0-5V). We multiply the <code>analogValue</code> by <code>(5.0 / 1023.0)</code> because 1023 represents 5V, and we want to scale the reading accordingly.</li>
              <li><code>Serial.print()</code> and <code>Serial.println()</code>: These lines are used to send data to the Serial Monitor. We print the raw <code>analogValue</code> and the calculated <code>voltage</code> so you can see both. <code>println()</code> adds a newline character at the end, so each reading appears on a new line.</li>
              <li><code>delay(100);</code>: This line pauses the program for 100 milliseconds (0.1 seconds). This delay is important to slow down the readings so they are easier to observe in the Serial Monitor and to prevent overwhelming the serial communication.</li>
            </ul>
          </motion.div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>What to do next?</motion.h2>
          <motion.p className="text-gray-600" variants={itemVariants}>
            Upload the code to your Arduino Uno, open the Serial Monitor (Tools &gt; Serial Monitor in the Arduino IDE), and set the baud rate to 9600. You should see the analog value and the corresponding voltage being printed. Try rotating the potentiometer knob and observe how the values change.
          </motion.p>
        </motion.section>
      </motion.div>
    </motion.div>
  )
}
