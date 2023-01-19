// IMPORT REACT
import React from 'react';

// IMPORT STYLE
import './tag.css';

// RETURN TAG
const Tag = ({ tagTitle }) => {
  return (
    <span className="tag-btn">
      <p>{tagTitle}</p>
    </span>
  );
};

export default Tag;
