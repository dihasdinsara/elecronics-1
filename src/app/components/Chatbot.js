import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Chatbot = () => {
  const [isMinimized, setIsMinimized] = useState(true);

  useEffect(() => {
    setIsMinimized(true);
  }, []);

  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-gray-900 border border-gray-700 shadow-xl rounded-xl overflow-hidden"
      animate={{
        width: isMinimized ? 192 : 320,
        height: isMinimized ? 48 : 400,
        rotateX: isMinimized ? -2 : 0,
        rotateY: isMinimized ? 2 : 0,
        scale: isMinimized ? 0.95 : 1
      }}
      initial={false}
      transition={{ 
        type: "spring",
        stiffness: 300,
        mass: 0.5,
        damping: 15
      }}
      whileHover={isMinimized ? { 
        scale: 1.02,
        rotateX: 0,
        rotateY: 0,
        boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
        y: -2
      } : {}}
    >
      <div 
        className="flex items-center justify-between p-4 bg-gray-800 h-12 cursor-pointer"
        onClick={() => isMinimized && setIsMinimized(false)}
      >
        <h2 className="text-lg font-bold text-white">AI Chatbot</h2>
        {!isMinimized && (
          <motion.button 
            onClick={(e) => {
              e.stopPropagation();
              setIsMinimized(!isMinimized);
            }}
            className="text-gray-400 hover:text-red-400 transition-transform rounded-full py-2 px-3"
            whileHover={{ scale: 1.1, backgroundColor: "transparent" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            ×
          </motion.button>
        )}
      </div>
      
      {!isMinimized && (
        <>
          <div className="h-64 overflow-y-auto p-4 space-y-4 bg-gray-800">
            <div className="flex flex-col space-y-2">
              <div className="bg-gray-700 text-white p-3 rounded-lg max-w-[80%] self-start">
                How can I help you today?
              </div>
              <div className="bg-blue-600 text-white p-3 rounded-lg max-w-[80%] self-end">
                Let's build something amazing!
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
              <motion.button 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                whileHover={{ y: -1 }}
                whileTap={{ y: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Send
              </motion.button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Chatbot;