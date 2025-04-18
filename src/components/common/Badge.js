import React from 'react';
import { motion } from 'framer-motion';

/**
 * Badge component for displaying metrics like "N/A% Faster"
 * 
 * @param {Object} props Component props
 * @param {string} props.text Text to display inside badge
 * @param {string} props.backgroundColor Background color of the badge
 * @param {string} props.textColor Text color of the badge
 * @param {string} props.icon Optional icon to display before text
 * @param {Object} props.style Additional style overrides
 * @param {string} props.className Additional class names
 */
const Badge = ({ 
  text = 'N/A% Faster',
  backgroundColor = '#f39c12',
  textColor = 'white',
  icon,
  style = {},
  className = '',
  ...rest
}) => {
  return (
    <motion.div
      className={`badge ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      style={{
        backgroundColor,
        color: textColor,
        ...style
      }}
      {...rest}
    >
      {icon && <span className="badge-icon">{icon}</span>}
      <span className="badge-text">{text}</span>
      
      <style jsx>{`
        .badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          gap: 5px;
        }
        
        .badge-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .badge-text {
          white-space: nowrap;
        }
      `}</style>
    </motion.div>
  );
};

export default Badge;