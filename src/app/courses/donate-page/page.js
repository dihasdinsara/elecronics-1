import React from "react";
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function page() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-md rounded-lg p-8 text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-8">
            Support IoT Academy
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Your generous donations help us to continue providing high-quality
            educational content and resources for free. By supporting us, you are
            enabling us to reach more students and make a greater impact in the
            field of IoT and web development.
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://wa.me/0719599991" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              <FaWhatsapp className="mr-2" /> WhatsApp
            </a>
            <a href="mailto:your-email@example.com" className="inline-flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <FaEnvelope className="mr-2" /> Contact Us
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Thank you for your support!
          </p>
        </div>
      </div>
    </div>
  );
}
