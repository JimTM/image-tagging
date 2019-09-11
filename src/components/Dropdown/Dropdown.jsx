import React from 'react';

const Dropdown = ({ tags, onSelectTag }) => {
  return (
    <div>
      <select defaultValue={'SELECTTAG'} onChange={e => onSelectTag(e)}>
        <option value="SELECTTAG">Select a tag</option>
        {tags.map(tag => (
          <option key={tag.id} value={tag.id}>
            {tag.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
