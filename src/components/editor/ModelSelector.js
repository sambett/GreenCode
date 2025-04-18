import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getModels, clearModelCache } from '../../services/api';
import config from '../../config';

/**
 * Component for selecting the AI model for code optimization
 */
const ModelSelector = ({ selectedModel, onModelChange }) => {
  const [models, setModels] = useState([]);
  const [defaultModel, setDefaultModel] = useState(config.defaultModel);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  // Fetch available models on component mount
  useEffect(() => {
    const fetchModels = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const data = await getModels();
        setModels(data.models || []);
        setDefaultModel(data.default_model || config.defaultModel);
      } catch (err) {
        console.error('Error fetching models:', err);
        setError('Failed to load available models');
        // Fall back to local models from config
        setModels(Object.entries(config.models).map(([key, model]) => ({
          key,
          name: model.name,
          description: model.description,
          status: model.status || 'available'
        })));
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchModels();
  }, []);

  // Handle clearing the cache
  const handleClearCache = async () => {
    if (!window.confirm('Are you sure you want to clear the model cache? This will free up memory but may slow down the next optimization.')) {
      return;
    }
    
    setIsLoading(true);
    try {
      await clearModelCache();
      window.alert('Model cache cleared successfully');
    } catch (err) {
      console.error('Error clearing cache:', err);
      window.alert('Failed to clear model cache');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="model-selector">
      <div className="selector-row">
        <label htmlFor="model-select" className="selector-label">
          AI Engine:
        </label>
        
        <div className="selector-container">
          <select
            id="model-select"
            className="model-select"
            value={selectedModel}
            onChange={(e) => onModelChange(e.target.value)}
            disabled={isLoading}
          >
            {models.map(model => (
              <option 
                key={model.key} 
                value={model.key}
                disabled={model.status === 'pending'}
              >
                {model.name}
              </option>
            ))}
          </select>
          
          <motion.button
            className="info-button"
            onClick={() => setShowInfo(!showInfo)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Model information"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </motion.button>
        </div>
      </div>
      
      <AnimatePresence>
        {showInfo && (
          <motion.div 
            className="model-info"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <h4>About the Models</h4>
            <ul>
              {models.map(model => (
                <li key={model.key}>
                  <strong>{model.name}</strong>: {model.description || 'No description available'}
                  {model.status === 'pending' && (
                    <span className="pending-badge">Coming Soon</span>
                  )}
                  {model.status === 'local' && (
                    <span className="local-badge">Local</span>
                  )}
                </li>
              ))}
            </ul>
            
            <div className="info-note">
              <strong>Note:</strong> Larger models provide better optimizations but may take longer on CPU.
              {selectedModel === 'starcoder3b' && (
                <div className="warning-note">
                  StarCoder 3B is the largest model and may be slow on CPU-only systems.
                </div>
              )}
            </div>
            
            <motion.button
              className="cache-button"
              onClick={handleClearCache}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
            >
              Clear Model Cache
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style jsx>{`
        .model-selector {
          margin-bottom: 15px;
          border-radius: var(--border-radius-sm);
          background-color: #f5f5f5;
          padding: 10px;
        }
        
        .selector-row {
          display: flex;
          align-items: center;
        }
        
        .selector-label {
          font-weight: 500;
          margin-right: 10px;
          min-width: 80px;
        }
        
        .selector-container {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .model-select {
          flex: 1;
          padding: 8px 12px;
          border-radius: var(--border-radius-sm);
          border: 1px solid #ddd;
          background-color: white;
          font-size: 14px;
          color: #333;
          cursor: pointer;
        }
        
        .model-select option[disabled] {
          color: #999;
          font-style: italic;
        }
        
        .info-button {
          background: none;
          border: none;
          color: #666;
          padding: 4px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .model-info {
          margin-top: 15px;
          padding: 15px;
          background-color: white;
          border-radius: var(--border-radius-sm);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }
        
        .model-info h4 {
          margin: 0 0 10px 0;
          font-size: 16px;
        }
        
        .model-info ul {
          margin: 0 0 15px 0;
          padding-left: 20px;
        }
        
        .model-info li {
          margin-bottom: 8px;
          font-size: 14px;
        }
        
        .local-badge {
          display: inline-block;
          margin-left: 8px;
          padding: 2px 6px;
          font-size: 11px;
          border-radius: 10px;
          background-color: #e3f2fd;
          color: #1976d2;
        }
        
        .pending-badge {
          display: inline-block;
          margin-left: 8px;
          padding: 2px 6px;
          font-size: 11px;
          border-radius: 10px;
          background-color: #fff3e0;
          color: #e65100;
        }
        
        .info-note {
          margin-top: 10px;
          padding: 10px;
          background-color: #f5f5f5;
          font-size: 13px;
          border-radius: var(--border-radius-sm);
          border-left: 3px solid #2ecc71;
        }
        
        .warning-note {
          margin-top: 8px;
          padding: 8px;
          background-color: #fff3e0;
          border-radius: var(--border-radius-sm);
          font-size: 12px;
          color: #e65100;
        }
        
        .cache-button {
          margin-top: 15px;
          padding: 8px 16px;
          background-color: #f5f5f5;
          border: 1px solid #ddd;
          border-radius: var(--border-radius-sm);
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .cache-button:hover {
          background-color: #eeeeee;
        }
      `}</style>
    </div>
  );
};

export default ModelSelector;