import React from 'react';
import { motion } from 'framer-motion';
import { optimizationContexts } from '../../utils/editorConfig';

/**
 * Component for editor options panel
 */
const EditorOptions = ({ 
  context, 
  onContextChange,
  useAdvanced,
  onToggleAdvanced,
  showVariants,
  onToggleVariants
}) => {
  return (
    <div className="options-panel">
      <div className="option-group">
        <span className="option-label">Optimization Focus:</span>
        <select 
          className="context-selector" 
          value={context} 
          onChange={onContextChange}
        >
          {optimizationContexts.map(ctx => (
            <option key={ctx.id} value={ctx.id}>
              {ctx.icon} {ctx.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="option-group">
        <span className="option-label">Advanced Analysis:</span>
        <label className="toggle-switch">
          <input 
            type="checkbox" 
            checked={useAdvanced} 
            onChange={onToggleAdvanced} 
          />
          <span className="toggle-slider"></span>
        </label>
      </div>
      
      <div className="option-group">
        <span className="option-label">Show Alternatives:</span>
        <label className="toggle-switch">
          <input 
            type="checkbox" 
            checked={showVariants} 
            onChange={onToggleVariants} 
          />
          <span className="toggle-slider"></span>
        </label>
      </div>
    </div>
  );
};

export default EditorOptions;