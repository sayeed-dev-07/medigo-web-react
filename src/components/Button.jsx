import React, { useState } from 'react';
import { motion } from 'motion/react';

const Button = ({text, func}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    // On mobile, briefly show the hover state
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 300);
    func();
  };

  return (
    <div onClick={handleClick}>
      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative px-10 py-2 bg-black rounded-lg overflow-hidden cursor-pointer text-white border-2 border-white shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative h-8 w-full">
          {/* Original Text */}
          <motion.span
            className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white"
            animate={{
              y: isHovered ? -40 : 0,
              opacity: isHovered ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {text}
          </motion.span>

          {/* New Text Coming from Bottom */}
          <motion.span
            className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-black"
            animate={{
              y: isHovered ? 0 : 40,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {text}
          </motion.span>
        </div>

        {/* Background Color Animation */}
        <motion.div
          className="absolute inset-0 bg-white text-black rounded-lg -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    </div>
  );
};

export default Button;