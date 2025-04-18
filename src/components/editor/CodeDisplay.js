import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { formatCodeForDisplay } from '../../utils/editorConfig';

/**
 * Component to display code with syntax highlighting
 */
const CodeDisplay = ({ code, badges = [], actions = [] }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const formattedLines = formatCodeForDisplay(code);

  // Function to handle copy to clipboard
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopySuccess(true);
        // Reset success message after 2 seconds
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy code: ', err);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="code-editor"
    >
      <pre>
        {formattedLines.map(line => (
          <div 
            key={line.key} 
            className={line.className}
            dangerouslySetInnerHTML={{ __html: line.html }}
          />
        ))}
      </pre>
      
      {/* Render badges if any */}
      {badges.map((badge, index) => 
        badge.component ? (
          <div key={index} className={badge.className || 'optimization-badge'}>
            {badge.component}
          </div>
        ) : (
          <div key={index} className={badge.className || 'optimization-badge'}>
            {badge.icon}
            <span>{badge.text}</span>
          </div>
        )
      )}
      
      {/* Copy to clipboard button */}
      <motion.button
        className="copy-btn"
        onClick={handleCopyCode}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={copySuccess ? { backgroundColor: 'rgba(76, 175, 80, 0.9)' } : {}}
      >
        {copySuccess ? (
          <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span>Copied!</span>
          </>
        ) : (
          <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Copy Code</span>
          </>
        )}
      </motion.button>

      {/* Render action buttons if any */}
      {actions.map((action, index) => (
        <motion.button
          key={index}
          className={action.className || 'comparison-btn'}
          onClick={action.onClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {action.icon}
          {action.text}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CodeDisplay;

// Add copy button styles (these will be picked up by the existing stylesheet)
document.head.appendChild(document.createElement('style')).textContent = `
  .copy-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: rgba(52, 152, 219, 0.9);
    color: white;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;
    border: none;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 20;
    transition: all 0.3s ease;
  }
  
  .copy-btn:hover {
    background-color: rgba(41, 128, 185, 0.9);
  }
  
  .copy-btn:focus {
    outline: none;
  }
`;