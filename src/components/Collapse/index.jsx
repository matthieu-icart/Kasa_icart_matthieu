// IMPORT REACT
import React from 'react';
import { useState } from 'react';

// IMPORT STYLE
import './collapse.css';

// IMPORT IMAGE COLLAPSE
import collapseDown from '../../assets/collapseDown.png';

// RETURN COLLAPSE
const Collapse = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="informations">
      <button
        className="collapse-btn"
        onClick={() => setIsCollapsed((state) => !state)}
      >
        <div className="collapse-title">
          {props.title}
          <span
            className={`collapse-icon ${
              isCollapsed ? 'collapsed' : 'expanded'
            }`}
          >
            {<img src={collapseDown} alt="arrow-collapse" />}
          </span>
        </div>
      </button>

      <div
        className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
        aria-expanded={isCollapsed}
      >
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default Collapse;
