import React from 'react';

const Tag = ({ tag, onDeleteTag }) => (
  <div className="chip-tag">
    <span>{tag.label}</span>
    <button className="delete-button" onClick={() => onDeleteTag(tag)}>
      X
    </button>
  </div>
);

export default Tag;
