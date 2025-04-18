import { css } from 'styled-components';

export const editorStyles = css`
  .editor-section {
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 20px 0 40px 0;
  }
  
  h2 {
    font-size: 28px;
    color: #2c3e50;
    font-weight: 600;
    margin-bottom: 25px;
  }
  
  .editor-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-bottom: 30px;
  }
  
  .editor-wrapper, .optimized-editor-wrapper {
    height: 500px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #e0e0e0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    position: relative;
    transition: all 0.3s ease;
    background-color: #1e293b;
  }
  
  .optimized-editor-wrapper {
    border: 1px solid #4CAF50;
  }
  
  .editor-wrapper:hover, .optimized-editor-wrapper:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  .editor-label {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    z-index: 10;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    color: #2c3e50;
  }
  
  .code-input {
    width: 100%;
    height: 100%;
    background-color: #1e293b;
    border: none;
    padding: 40px 15px 15px 15px;
    color: #e0e0e0;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.5;
    resize: none;
    outline: none;
  }
  
  .placeholder-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    padding: 20px;
  }
  
  .placeholder, .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
  }
  
  .placeholder p, .loading p {
    color: rgba(255, 255, 255, 0.7);
    margin: 15px 0;
    font-size: 16px;
    line-height: 1.5;
  }
  
  .highlight {
    color: #4CAF50;
    font-weight: 600;
  }
  
  .placeholder-icon {
    margin-bottom: 10px;
    opacity: 0.8;
  }
  
  .placeholder-grid {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                     linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
    background-position: center center;
    z-index: -1;
    opacity: 0.5;
  }
  
  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(76, 175, 80, 0.3);
    border-radius: 50%;
    border-top-color: #4CAF50;
    animation: spin 1s linear infinite;
    margin-bottom: 15px;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  .progress-bar {
    width: 100%;
    height: 6px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
    margin-top: 15px;
  }
  
  .progress {
    height: 100%;
    background: linear-gradient(to right, #4CAF50, #2E7D32);
    border-radius: 3px;
  }
  
  .code-editor {
    height: 100%;
    position: relative;
    overflow: auto;
    font-family: 'Courier New', monospace;
    padding: 40px 15px 15px 15px;
    scrollbar-width: thin;
    scrollbar-color: rgba(76, 175, 80, 0.5) rgba(30, 41, 59, 0.1);
  }
  
  /* Custom scrollbar for Webkit browsers */
  .code-editor::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  .code-editor::-webkit-scrollbar-track {
    background: rgba(30, 41, 59, 0.1);
    border-radius: 4px;
  }
  
  .code-editor::-webkit-scrollbar-thumb {
    background-color: rgba(76, 175, 80, 0.5);
    border-radius: 4px;
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
  .comment { color: #6A9955; }
  
  .optimization-badge {
    position: absolute;
    bottom: 15px;
    right: 15px;
    background-color: rgba(76, 175, 80, 0.9);
    color: white;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  
  .comparison-btn {
    position: absolute;
    bottom: 15px;
    left: 15px;
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
  }
  
  .editor-actions {
    display: flex;
    justify-content: center;
    margin: 30px 0;
  }
  
  .optimize-btn {
    padding: 12px 30px;
    font-size: 16px;
    font-weight: 600;
    background-color: #2ecc71;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(46, 204, 113, 0.2);
  }
  
  .optimize-btn:hover {
    background-color: #27ae60;
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(46, 204, 113, 0.3);
  }
  
  .options-panel {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 20px;
  }
  
  .option-group {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .option-label {
    font-weight: 500;
    color: #555;
  }
  
  .context-selector {
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #ddd;
    background-color: white;
    font-size: 14px;
    color: #333;
    cursor: pointer;
  }
  
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 22px;
  }
  
  .toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .toggle-slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 34px;
    transition: .4s;
    cursor: pointer;
  }
  
  .toggle-slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: .4s;
  }
  
  input:checked + .toggle-slider {
    background-color: #2ecc71;
  }
  
  input:checked + .toggle-slider:before {
    transform: translateX(22px);
  }
  
  .error-message {
    background-color: #ffebee;
    border-left: 4px solid #f44336;
    color: #d32f2f;
    padding: 12px 20px;
    margin: 20px 0;
    border-radius: 4px;
    display: flex;
    align-items: center;
    font-size: 14px;
    position: relative;
  }
  
  .error-icon {
    color: #f44336;
    margin-right: 12px;
    display: flex;
    align-items: center;
  }
  
  .dismiss-error {
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    color: #f44336;
    cursor: pointer;
    display: flex;
    align-items: center;
    opacity: 0.7;
    transition: opacity 0.2s ease;
  }
  
  .dismiss-error:hover {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    .editor-container {
      grid-template-columns: 1fr;
    }
    
    .options-panel {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export default editorStyles;