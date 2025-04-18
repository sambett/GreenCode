import React from 'react';
import { motion } from 'framer-motion';

/**
 * Component to display when the code editor is in initial state
 */
export const InitialPlaceholder = () => (
  <motion.div 
    className="placeholder"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="placeholder-icon">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
        <path d="M7 17c0-3 2-5 8-5s8 2 8 5a3 3 0 0 1-3 3c-2.8 0-5-1.8-5-4" />
        <path d="M16 10c0 2.8-4 5-4-1-1 0-4 1-4 3-1 .5-2 1-2 2" />
        <path d="M12 19c-2 0-4.5-1-8-5 2 0 3 .5 4 2 2 0 3 1 4 3Z" />
      </svg>
    </div>
    <p>Click <span className="highlight">'Optimize Code'</span> to see your optimized code here!</p>
    <div className="placeholder-grid"></div>
  </motion.div>
);

/**
 * Component to display during optimization
 */
export const LoadingState = () => (
  <motion.div 
    className="loading"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="spinner"></div>
    <p>Optimizing your code for sustainability...</p>
    <div className="progress-bar">
      <motion.div 
        className="progress"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.8 }}
      ></motion.div>
    </div>
  </motion.div>
);

/**
 * Container component for placeholder states based on current state
 */
export const PlaceholderContainer = ({ state }) => (
  <div className="placeholder-container">
    {state === 'initial' ? <InitialPlaceholder /> : <LoadingState />}
  </div>
);

export default PlaceholderContainer;