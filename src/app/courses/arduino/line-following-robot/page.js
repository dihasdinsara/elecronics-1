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

export default function LineFollowingRobotPage() {
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
          Arduino Line Following Robot
        </motion.h1>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Introduction to Line Following Robots
          </motion.h2>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            In this lesson, you will learn how to build a simple line following robot using Arduino. Line following robots are autonomous vehicles that can detect and follow a line drawn on the floor. This project is a fantastic way to understand basic robotics principles, sensor integration, and motor control.
          </motion.p>
          <motion.p className="text-gray-600" variants={itemVariants}>
            You will use infrared (IR) sensors to detect the line and control two DC motors to navigate the robot along the line. Let's get started and build your own line follower!
          </motion.p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Components Required
          </motion.h2>
          <motion.ul className="list-disc list-inside text-gray-600" variants={itemVariants}>
            <li>1 x Arduino Uno board</li>
            <li>1 x Robot chassis with wheels and DC motors</li>
            <li>1 x Motor driver module (e.g., L298N)</li>
            <li>2 x Infrared (IR) line sensors</li>
            <li>Jumper wires</li>
            <li>Breadboard (optional, but recommended for easier setup)</li>
            <li>9V Battery with battery connector or USB power supply for Arduino</li>
          </motion.ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Step-by-step Instructions
          </motion.h2>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            Follow these steps to build your line following robot:
          </motion.p>
          <motion.ol className="list-decimal list-inside text-gray-600" variants={itemVariants}>
            <li>Assemble the robot chassis and attach the DC motors and wheels.</li>
            <li>Mount the IR line sensors at the front bottom of the chassis, ensuring they are close to the ground and can detect the line.</li>
            <li>Connect the motor driver to the Arduino:
              <ul className="list-disc list-inside ml-5 mt-2">
                <li>Connect motor driver input pins to Arduino digital pins (e.g., IN1, IN2, IN3, IN4 to pins 8, 9, 10, 11).</li>
                <li>Connect motor driver enable pins (ENA, ENB) to Arduino PWM pins (e.g., pins 5, 6) for speed control (optional for basic line following).</li>
                <li>Connect motors to the motor driver output terminals.</li>
                <li>Connect power supply to the motor driver (check motor driver voltage requirements).</li>
              </ul>
            </li>
            <li>Connect the IR line sensors to the Arduino:
              <ul className="list-disc list-inside ml-5 mt-2">
                <li>Connect IR sensor VCC pins to Arduino 5V.</li>
                <li>Connect IR sensor GND pins to Arduino GND.</li>
                <li>Connect IR sensor signal pins (OUT) to Arduino digital input pins (e.g., pins A0, A1).</li>
              </ul>
            </li>
            <li>Upload the Arduino code provided in the 'Code Example' section to your Arduino Uno board.</li>
            <li>Place your robot on a track with a black line (e.g., black electrical tape on a white surface).</li>
            <li>Power on your robot and observe it following the line. You may need to adjust sensor sensitivity and motor control parameters in the code for optimal performance.</li>
          </motion.ol>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <motion.h2 className="text-xl font-semibold text-gray-700 mb-4" variants={itemVariants}>
            Code Example
          </motion.h2>
          <motion.div className="text-gray-600" variants={itemVariants}>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-gray-800">
                {`// Define motor driver pins
const int motorRight_PWM = 5;  // PWM control for right motor speed
const int motorRight_IN1 = 8;  // Direction control for right motor
const int motorRight_IN2 = 9;  // Direction control for right motor
const int motorLeft_PWM = 6;   // PWM control for left motor speed
const int motorLeft_IN3 = 10;  // Direction control for left motor
const int motorLeft_IN4 = 11;  // Direction control for left motor

// Define IR sensor pins
const int sensorRightPin = A0; // Analog pin for right IR sensor
const int sensorLeftPin = A1;  // Analog pin for left IR sensor

void setup() {
  // Set motor control pins as output
  pinMode(motorRight_PWM, OUTPUT);
  pinMode(motorRight_IN1, OUTPUT);
  pinMode(motorRight_IN2, OUTPUT);
  pinMode(motorLeft_PWM, OUTPUT);
  pinMode(motorLeft_IN3, OUTPUT);
  pinMode(motorLeft_IN4, OUTPUT);

  // Set sensor pins as input
  pinMode(sensorRightPin, INPUT);
  pinMode(sensorLeftPin, INPUT);

  Serial.begin(9600); // Start serial communication for debugging
}

void loop() {
  // Read sensor values
  int rightSensorValue = analogRead(sensorRightPin);
  int leftSensorValue = analogRead(sensorLeftPin);

  Serial.print("Right Sensor: ");
  Serial.print(rightSensorValue);
  Serial.print(" | Left Sensor: ");
  Serial.println(leftSensorValue);

  // Line detection threshold (adjust based on your sensor and line color)
  int threshold = 500;

  // Check line position and control motors
  if (leftSensorValue > threshold && rightSensorValue > threshold) {
    // Both sensors on white (no line), move forward
    moveForward();
  } else if (leftSensorValue < threshold && rightSensorValue > threshold) {
    // Left sensor on black line, turn left
    turnLeft();
  } else if (leftSensorValue > threshold && rightSensorValue < threshold) {
    // Right sensor on black line, turn right
    turnRight();
  } else {
    // Both sensors on black line or line not detected, stop
    stopRobot();
  }

  delay(50); // Small delay to control loop speed
}

// Function to move robot forward
void moveForward() {
  setMotorSpeed(motorRight_PWM, motorRight_IN1, motorRight_IN2, 200, 1); // Right motor forward
  setMotorSpeed(motorLeft_PWM, motorLeft_IN3, motorLeft_IN4, 200, 1);  // Left motor forward
}

// Function to turn robot left
void turnLeft() {
  setMotorSpeed(motorRight_PWM, motorRight_IN1, motorRight_IN2, 200, 1); // Right motor forward
  setMotorSpeed(motorLeft_PWM, motorLeft_IN3, motorLeft_IN4, 150, 0);   // Left motor backward (or stop/slow backward for sharper turn)
}

// Function to turn robot right
void turnRight() {
  setMotorSpeed(motorRight_PWM, motorRight_IN1, motorRight_IN2, 150, 0);  // Right motor backward (or stop/slow backward for sharper turn)
  setMotorSpeed(motorLeft_PWM, motorLeft_IN3, motorLeft_IN4, 200, 1);  // Left motor forward
}

// Function to stop the robot
void stopRobot() {
  setMotorSpeed(motorRight_PWM, motorRight_IN1, motorRight_IN2, 0, 0);   // Right motor stop
  setMotorSpeed(motorLeft_PWM, motorLeft_IN3, motorLeft_IN4, 0, 0);    // Left motor stop
}

// Function to control motor speed and direction
void setMotorSpeed(int pwmPin, int in1Pin, int in2Pin, int speed, int direction) {
  analogWrite(pwmPin, speed); // Set speed (0-255 for PWM)
  if (direction == 1) {      // Forward direction
    digitalWrite(in1Pin, HIGH);
    digitalWrite(in2Pin, LOW);
  } else {                   // Backward direction (or stop if speed is 0)
    digitalWrite(in1Pin, LOW);
    digitalWrite(in2Pin, HIGH);
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
            Congratulations! You have successfully built and programmed a line following robot with Arduino. This project introduces you to fundamental concepts in robotics, including sensor feedback, motor control, and basic programming logic. You can expand this project by adding more sensors, implementing more sophisticated control algorithms, or designing a more complex robot chassis.
          </motion.p>
        </motion.section>
      </motion.div>
    </motion.div>
  )
}
