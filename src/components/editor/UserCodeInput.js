import React from 'react';

/**
 * Component for user code input
 */
const UserCodeInput = ({ code, onChange }) => {
  return (
    <div className="editor-wrapper">
      <div className="editor-label">Your Code</div>
      <textarea
        className="code-input"
        value={code}
        onChange={onChange}
        placeholder="Enter your Python code here..."
        spellCheck="false"
      />
    </div>
  );
};

export default UserCodeInput;