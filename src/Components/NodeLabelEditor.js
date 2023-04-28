// NodeLabelEditor.js
import React, { useState, useEffect } from 'react';

const NodeLabelEditor = ({ isOpen, onClose, onSubmit, initialValue }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="node-label-editor">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default NodeLabelEditor;
