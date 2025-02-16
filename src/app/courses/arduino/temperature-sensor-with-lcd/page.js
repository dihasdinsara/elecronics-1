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

export default function TemperatureSensorLCDPage() {
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
          Temperature Sensor with LCD Display
        </motion.h1>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Introduction
          </motion.h2>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            In this project, you will learn how to interface a DHT11 temperature and humidity sensor with an LCD screen using Arduino.
            This project is a step up from basic projects and involves displaying sensor readings on a digital display.
          </motion.p>
          <motion.p className="text-gray-600" variants={itemVariants}>
            You will learn about reading data from sensors, processing that data, and displaying it in a human-readable format.
            This is a fundamental skill in IoT (Internet of Things) and environmental monitoring applications.
          </motion.p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Components Required
          </motion.h2>
          <motion.p className="text-gray-600 mb-2" variants={itemVariants}>
            <span className="font-semibold">Arduino Uno board:</span> The microcontroller that will process sensor data and control the LCD.
          </motion.p>
          <motion.p className="text-gray-600 mb-2" variants={itemVariants}>
            <span className="font-semibold">DHT11 Sensor:</span> A digital sensor that measures temperature and humidity.
          </motion.p>
          <motion.p className="text-gray-600 mb-2" variants={itemVariants}>
            <span className="font-semibold">LCD Screen (16x2):</span> To display the temperature and humidity readings.
          </motion.p>
          <motion.p className="text-gray-600 mb-2" variants={itemVariants}>
            <span className="font-semibold">Breadboard:</span> For easy prototyping and connecting components.
          </motion.p>
          <motion.p className="text-gray-600" variants={itemVariants}>
            <span className="font-semibold">Jumper wires:</span> To connect the components on the breadboard.
          </motion.p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Step-by-step Instructions
          </motion.h2>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            Detailed instructions for setting up the circuit and uploading the code will be provided here.
            This will include wiring diagrams and code snippets.
          </motion.p>
          {/* Add detailed steps, code snippets, and wiring diagrams here */}
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Code Example
          </motion.h2>
          <motion.div className="text-gray-600" variants={itemVariants}>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-gray-800">
                {`#include <DHT.h>
#include <LiquidCrystal.h>

// Define DHT sensor pin
#define DHTPIN 2
#define DHTTYPE DHT11   // DHT 11

// Define LCD pins
const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

// Initialize DHT sensor
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
  lcd.begin(16, 2);
  lcd.print("Temperature:");
  lcd.setCursor(0, 1);
  lcd.print("Humidity:");
}

void loop() {
  // Read temperature and humidity
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  // Check if any reads failed and exit early (to try again).
  if (isnan(h) || isnan(t)) {
    Serial.println(F("Failed to read from DHT sensor!"));
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("Sensor Error");
    delay(2000);
    return;
  }

  // Print temperature and humidity to Serial Monitor
  Serial.print(F("Humidity: "));
  Serial.print(h);
  Serial.print(F("%  Temperature: "));
  Serial.print(t);
  Serial.println(F("°C "));

  // Display temperature on the first line of LCD
  lcd.clear();
  lcd.setCursor(12, 0); // Move to the right side for temperature value
  lcd.print(t);
  lcd.print(" C");

  // Display humidity on the second line of LCD
  lcd.setCursor(9, 1); // Move to the right side for humidity value
  lcd.print(h);
  lcd.print(" %");

  delay(2000); // Wait for 2 seconds before next reading
}
`}
              </code>
            </pre>
          </motion.div>
          {/* Add code example here */}
        </motion.section>

        <motion.section variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Conclusion
          </motion.h2>
          <motion.p className="text-gray-600" variants={itemVariants}>
            By completing this project, you will have a better understanding of sensor interfacing, LCD displays, and basic data handling with Arduino.
            This project can be expanded upon for more complex environmental monitoring systems.
          </motion.p>
        </motion.section>
      </motion.div>
    </motion.div>
  )
}
