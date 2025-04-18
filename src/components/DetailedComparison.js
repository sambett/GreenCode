import React from 'react';
import { motion } from 'framer-motion';

const DetailedComparison = ({ variants, onClose }) => {
  if (!variants || !variants.fast_version || !variants.green_version) {
    return null;
  }

  // Format code for display with syntax highlighting
  const formatCode = (code) => {
    if (!code) return [];
    
    return code.split('\n').map((line, index) => {
      const indentMatch = line.match(/^(\s+)/);
      const indentClass = indentMatch 
        ? `indent-${Math.floor(indentMatch[0].length / 4)}` 
        : '';
      
      // Simple syntax highlighting for Python
      const highlightedLine = line
        .replace(/def\s+([a-zA-Z0-9_]+)/g, '<span class="keyword">def</span> <span class="function">$1</span>')
        .replace(/import\s+([a-zA-Z0-9_]+)/g, '<span class="keyword">import</span> <span class="value">$1</span>')
        .replace(/from\s+([a-zA-Z0-9_\.]+)\s+import/g, '<span class="keyword">from</span> <span class="value">$1</span> <span class="keyword">import</span>')
        .replace(/return\s+/g, '<span class="keyword">return</span> ')
        .replace(/if\s+/g, '<span class="keyword">if</span> ')
        .replace(/else\s*:/g, '<span class="keyword">else</span>:')
        .replace(/elif\s+/g, '<span class="keyword">elif</span> ')
        .replace(/for\s+/g, '<span class="keyword">for</span> ')
        .replace(/while\s+/g, '<span class="keyword">while</span> ')
        .replace(/in\s+/g, '<span class="keyword">in</span> ')
        .replace(/True|False|None/g, '<span class="value">$&</span>')
        .replace(/([0-9]+)/g, '<span class="number">$1</span>')
        .replace(/(["'])(.*?)(["'])/g, '<span class="string">$1$2$3</span>')
        .replace(/\#.*/g, '<span class="comment">$&</span>')
        .replace(/sum\(/g, '<span class="function">sum</span>(')
        .replace(/len\(/g, '<span class="function">len</span>(')
        .replace(/range\(/g, '<span class="function">range</span>(')
        .replace(/\[\s*([^\]]*)\s*\]/g, '[<span class="value">$1</span>]');
      
      return (
        <div 
          key={index} 
          className={`code-line ${indentClass}`}
          dangerouslySetInnerHTML={{ __html: highlightedLine }}
        />
      );
    });
  };

  return (
    <motion.div 
      className="detailed-comparison-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="detailed-comparison"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="comparison-header">
          <h2>Speed vs. Green Optimization Comparison</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="comparison-explanation">
          <p className="trade-off">{variants.trade_off}</p>
          
          <div className="recommendation">
            <div className="recommendation-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div className="recommendation-text">
              <strong>Our Recommendation:</strong> {variants.recommended === 'fast' ? 'Fast Version' : variants.recommended === 'green' ? 'Green Version' : 'Both versions are comparable'}
            </div>
          </div>
        </div>
        
        <div className="comparison-grid">
          <div className={`code-section fast ${variants.recommended === 'fast' ? 'recommended' : ''}`}>
            <div className="code-header">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                Fast Version
              </h3>
              <div className="badge speed-badge">
                Speed Focused
              </div>
            </div>
            
            <div className="code-metrics">
              <div className="metric">
                <span className="metric-label">Speed:</span>
                <span className="metric-value good">{Math.round(variants.fast_version.speed || 0)}/100</span>
              </div>
              <div className="metric">
                <span className="metric-label">Energy:</span>
                <span className="metric-value bad">{Math.round(variants.fast_version.energy || 0)}/100</span>
              </div>
              <div className="metric">
                <span className="metric-label">Faster By:</span>
                <span className="metric-value good">{Math.max(0, Math.round((variants.fast_version.speed || 0) - (variants.green_version.speed || 0)))}%</span>
              </div>
            </div>
            
            <div className="code-context">
              <p><strong>Best For:</strong> {variants.fast_version.context}</p>
            </div>
            
            <div className="code-editor fast-editor">
              <pre>
                {formatCode(variants.fast_version.code)}
              </pre>
            </div>
            
            <button className="copy-btn" onClick={() => navigator.clipboard.writeText(variants.fast_version.code)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              Copy Fast Version
            </button>
          </div>
          
          <div className={`code-section green ${variants.recommended === 'green' ? 'recommended' : ''}`}>
            <div className="code-header">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17c0-3 2-5 8-5s8 2 8 5a3 3 0 0 1-3 3c-2.8 0-5-1.8-5-4"/>
                  <path d="M16 10c0 2.8-4 5-4-1-1 0-4 1-4 3-1 .5-2 1-2 2"/>
                  <path d="M12 19c-2 0-4.5-1-8-5 2 0 3 .5 4 2 2 0 3 1 4 3Z"/>
                </svg>
                Green Version
              </h3>
              <div className="badge green-badge">
                Energy Efficient
              </div>
            </div>
            
            <div className="code-metrics">
              <div className="metric">
                <span className="metric-label">Speed:</span>
                <span className="metric-value medium">{Math.round(variants.green_version.speed || 0)}/100</span>
              </div>
              <div className="metric">
                <span className="metric-label">Energy:</span>
                <span className="metric-value good">{Math.round(variants.green_version.energy || 0)}/100</span>
              </div>
              <div className="metric">
                <span className="metric-label">Energy Saved:</span>
                <span className="metric-value good">{Math.max(0, Math.round((variants.green_version.energy || 0) - (variants.fast_version.energy || 0)))}%</span>
              </div>
            </div>
            
            <div className="code-context">
              <p><strong>Best For:</strong> {variants.green_version.context}</p>
            </div>
            
            <div className="code-editor green-editor">
              <pre>
                {formatCode(variants.green_version.code)}
              </pre>
            </div>
            
            <button className="copy-btn" onClick={() => navigator.clipboard.writeText(variants.green_version.code)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              Copy Green Version
            </button>
          </div>
        </div>
        
        <div className="comparison-footer">
          <button className="close-comparison-btn" onClick={onClose}>
            Back to Quick View
          </button>
        </div>
      </motion.div>
      
      <style jsx>{`
        .detailed-comparison-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 20px;
          overflow-y: auto;
        }
        
        .detailed-comparison {
          background: white;
          border-radius: 12px;
          width: 95%;
          max-width: 1200px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          position: relative;
        }
        
        .comparison-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px;
          border-bottom: 1px solid #eee;
          position: sticky;
          top: 0;
          background: white;
          z-index: 10;
        }
        
        .comparison-header h2 {
          margin: 0;
          font-size: 24px;
          color: #2c3e50;
        }
        
        .close-btn {
          background: none;
          border: none;
          font-size: 28px;
          color: #666;
          cursor: pointer;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s ease;
        }
        
        .close-btn:hover {
          background-color: #f5f5f5;
          color: #333;
        }
        
        .comparison-explanation {
          padding: 20px 30px;
          background-color: #f9f9f9;
          border-bottom: 1px solid #eee;
        }
        
        .trade-off {
          font-size: 16px;
          line-height: 1.6;
          margin: 0 0 15px 0;
          color: #333;
        }
        
        .recommendation {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 15px;
          background-color: #eaffef;
          border-radius: 8px;
          border-left: 4px solid #2ecc71;
        }
        
        .recommendation-icon {
          color: #2ecc71;
        }
        
        .recommendation-text {
          font-size: 15px;
          color: #333;
        }
        
        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          padding: 30px;
        }
        
        .code-section {
          background-color: #fff;
          border-radius: 10px;
          border: 1px solid #e0e0e0;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        
        .code-section.recommended {
          box-shadow: 0 10px 25px rgba(46, 204, 113, 0.15);
          border: 1px solid #2ecc71;
        }
        
        .code-section.recommended:before {
          content: 'Recommended';
          position: absolute;
          top: 15px;
          right: -30px;
          background-color: #2ecc71;
          color: white;
          font-size: 12px;
          font-weight: bold;
          padding: 5px 30px;
          transform: rotate(45deg);
          z-index: 2;
        }
        
        .code-section.fast.recommended:before {
          background-color: #3498db;
        }
        
        .code-header {
          padding: 15px 20px;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f9f9f9;
        }
        
        .code-header h3 {
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 18px;
          color: #2c3e50;
        }
        
        .code-section.fast .code-header h3 {
          color: #3498db;
        }
        
        .code-section.green .code-header h3 {
          color: #2ecc71;
        }
        
        .badge {
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .speed-badge {
          background-color: rgba(52, 152, 219, 0.1);
          color: #3498db;
        }
        
        .green-badge {
          background-color: rgba(46, 204, 113, 0.1);
          color: #2ecc71;
        }
        
        .code-metrics {
          display: flex;
          justify-content: space-between;
          padding: 15px 20px;
          background-color: #fafafa;
          border-bottom: 1px solid #e0e0e0;
        }
        
        .metric {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        
        .metric-label {
          font-size: 14px;
          color: #666;
          font-weight: 500;
        }
        
        .metric-value {
          font-size: 20px;
          font-weight: 700;
        }
        
        .metric-value.good {
          color: #2ecc71;
        }
        
        .metric-value.medium {
          color: #f39c12;
        }
        
        .metric-value.bad {
          color: #e74c3c;
        }
        
        .code-context {
          padding: 15px 20px;
          border-bottom: 1px solid #e0e0e0;
          background-color: #f5f5f5;
        }
        
        .code-context p {
          margin: 0;
          font-size: 14px;
          line-height: 1.5;
          color: #555;
        }
        
        .code-editor {
          flex-grow: 1;
          overflow: auto;
          padding: 20px;
          font-family: 'Courier New', monospace;
          background-color: #1e293b;
          scrollbar-width: thin;
          scrollbar-color: rgba(76, 175, 80, 0.5) rgba(30, 41, 59, 0.1);
          min-height: 300px;
          max-height: 400px;
        }
        
        .fast-editor {
          scrollbar-color: rgba(52, 152, 219, 0.5) rgba(30, 41, 59, 0.1);
        }
        
        pre {
          margin: 0;
          color: #e0e0e0;
          font-size: 14px;
        }
        
        .code-line {
          line-height: 1.5;
          white-space: pre;
        }
        
        .indent-0 { padding-left: 0; }
        .indent-1 { padding-left: 20px; }
        .indent-2 { padding-left: 40px; }
        .indent-3 { padding-left: 60px; }
        
        .keyword { color: #569CD6; }
        .function { color: #DCDCAA; }
        .value { color: #CE9178; }
        .string { color: #CE9178; }
        .number { color: #b5cea8; }
        .comment { color: #6A9955; }
        
        .copy-btn {
          margin: 15px 20px;
          padding: 10px 15px;
          border: none;
          background-color: #f5f5f5;
          color: #333;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        
        .copy-btn:hover {
          background-color: #e0e0e0;
        }
        
        .comparison-footer {
          padding: 20px 30px;
          border-top: 1px solid #eee;
          display: flex;
          justify-content: center;
        }
        
        .close-comparison-btn {
          padding: 12px 25px;
          background-color: #2ecc71;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(46, 204, 113, 0.2);
        }
        
        .close-comparison-btn:hover {
          background-color: #27ae60;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(46, 204, 113, 0.3);
        }
        
        @media (max-width: 768px) {
          .comparison-grid {
            grid-template-columns: 1fr;
          }
          
          .detailed-comparison {
            width: 100%;
            max-height: 95vh;
          }
          
          .code-section.recommended:before {
            display: none;
          }
          
          .code-editor {
            max-height: 250px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default DetailedComparison;