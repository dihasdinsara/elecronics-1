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

export default function HomeAutomationWithRelayPage() {


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
          Arduino Home Automation with Relay
        </motion.h1>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Introduction to Home Automation with Relays
          </motion.h2>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            In this lesson, you will learn how to control household appliances using an Arduino and a relay module. Home automation can greatly enhance convenience and efficiency in your living space. Relays act as electronically controlled switches, allowing your Arduino to turn on or off higher voltage devices safely.
          </motion.p>
          <motion.p className="text-gray-600" variants={itemVariants}>
            This project is a stepping stone to creating smart homes and automated systems. Let's dive in and learn how to make your home smarter!
          </motion.p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Components Required
          </motion.h2>
          <motion.ul className="list-disc list-inside text-gray-600" variants={itemVariants}>
            <li>Arduino Uno board</li>
            <li>Relay module (single or multi-channel)</li>
            <li>LED (for visual feedback, optional)</li>
            <li>220Ω resistor (if using LED)</li>
            <li>Breadboard</li>
            <li>Jumper wires</li>
            <li>Household appliance to control (e.g., lamp)</li>
            <li>Power source for appliance</li>
          </motion.ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Circuit Diagram
          </motion.h2>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            Connect the components as follows:
          </motion.p>
          <motion.ul className="list-disc list-inside text-gray-600" variants={itemVariants}>
            <li>Connect Arduino digital pin (e.g., pin 7) to the relay module's control pin (IN).</li>
            <li>Connect Arduino GND to relay module VCC and GND.</li> {/* Corrected connection */}
            <li>If using an LED, connect it in series with a 220Ω resistor to Arduino digital pin and GND for visual feedback.</li>
            <li>Connect the household appliance to the relay module's normally open (NO) and common (COM) terminals. Ensure the appliance is connected to a power source.</li>
          </motion.ul>
          <motion.p className="text-gray-600" variants={itemVariants}>
            <b>Warning:</b> Working with household appliances involves mains voltage. Ensure all safety precautions are taken and if you are not comfortable, seek help from someone experienced with electrical wiring.
          </motion.p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Arduino Code
          </motion.h2>
          <div variants={itemVariants}>
            <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto">
              <code className="text-sm text-gray-800">
                {`const int relayPin = 7; // Pin connected to relay control

void setup() {
  pinMode(relayPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(relayPin, LOW); // Turn relay ON (usually LOW activates relay)
  Serial.println("Relay ON");
  delay(5000); // Wait for 5 seconds

  digitalWrite(relayPin, HIGH); // Turn relay OFF (usually HIGH deactivates relay)
  Serial.println("Relay OFF");
  delay(5000); // Wait for 5 seconds
}
`}
              </code>
            </pre>
          </div>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Explanation of the Code
          </motion.h2>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            This code is straightforward and easy to understand:
          </motion.p>
          <motion.ul className="list-disc list-inside text-gray-600" variants={itemVariants}>
            <li><strong>const int relayPin = 7;:</strong>  This line defines the Arduino pin connected to the relay module's control pin. We've used pin 7 in this example.</li>
            <li><strong>pinMode(relayPin, OUTPUT);:</strong> In the <code>setup()</code> function, we set the <code>relayPin</code> as an OUTPUT because we will be sending signals to control the relay.</li>
            <li><strong>digitalWrite(relayPin, LOW);:</strong> To turn the relay ON, we send a LOW signal to the relay pin.  Relay modules are often designed to be activated by a LOW signal.</li>
            <li><strong>digitalWrite(relayPin, HIGH);:</strong> To turn the relay OFF, we send a HIGH signal to the relay pin.</li>
            <li><strong>delay(5000);:</strong> The <code>delay(5000);</code> function pauses the program for 5000 milliseconds (5 seconds). This creates a 5-second interval for the relay to be ON and then 5 seconds OFF.</li>
            <li><strong>Serial.begin(9600); and Serial.println(...);:</strong> These lines are used for serial communication, allowing you to see the status of the relay (ON or OFF) in the Arduino Serial Monitor. This is helpful for debugging and monitoring.</li>
          </motion.ul>
        </motion.section>

        <motion.section variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Conclusion
          </motion.h2>
          <motion.p className="text-gray-600" variants={itemVariants}>
            Congratulations! You have successfully learned how to control a relay module with Arduino and automate a household appliance. This project opens the door to many home automation possibilities. You can expand this project by adding sensors, timers, and internet connectivity to create more complex and intelligent home automation systems.
          </motion.p>
        </motion.section>
      </motion.div>
    </motion.div>
  );
}
