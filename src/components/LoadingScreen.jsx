import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import openBookShelf from '../images/woodtexturee.jpg'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [splitting, setSplitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplitting(true);
      setTimeout(onLoadingComplete, 1000); // Call onLoadingComplete after split animation
    }, 2000); // Start splitting after 4 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-black">
      <div className="relative h-full w-full">
        <img 
          src={openBookShelf} 
          alt="Loading"
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: splitting ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-black origin-left"
        />
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: splitting ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-black origin-right"
        />
        {!splitting && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;


