import React from 'react';
import { motion } from 'framer-motion';

/**
 * Component for selecting optimization context
 */
const ContextSelector = ({ selectedContext, onContextChange }) => {
  // Available optimization contexts
  const contexts = [
    { id: 'energy_efficiency', name: 'Energy Efficiency', icon: '⚡', 
      description: 'Optimize for minimal power consumption and carbon footprint' },
    { id: 'performance', name: 'Performance', icon: '🚀', 
      description: 'Optimize for maximum execution speed' },
    { id: 'memory_efficiency', name: 'Memory Efficiency', icon: '📊', 
      description: 'Optimize for minimal memory usage' },
    { id: 'readability', name: 'Readability', icon: '📝', 
      description: 'Optimize for code clarity and maintainability' }
  ];

  return (
    <div className="context-selector">
      <div className="selector-label">Optimization Context:</div>
      <div className="context-options">
        {contexts.map(context => (
          <motion.button
            key={context.id}
            className={`context-option ${selectedContext === context.id ? 'active' : ''}`}
            onClick={() => onContextChange(context.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="context-icon">{context.icon}</span>
            <span className="context-name">{context.name}</span>
          </motion.button>
        ))}
      </div>
      
      <style jsx>{`
        .context-selector {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .selector-label {
          font-weight: 600;
          color: #555;
          font-size: 14px;
        }
        
        .context-options {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        
        .context-option {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          background-color: #f5f5f5;
          color: #555;
          border: 1px solid #e0e0e0;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .context-option:hover {
          background-color: #f0f0f0;
          border-color: #d0d0d0;
        }
        
        .context-option.active {
          background-color: #e8f5e9;
          border-color: #2ecc71;
          color: #2ecc71;
        }
        
        .context-icon {
          font-size: 16px;
        }
        
        @media (max-width: 768px) {
          .context-options {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default ContextSelector;