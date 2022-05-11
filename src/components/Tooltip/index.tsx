import React from 'react';
import './style.scss';
import { TooltipProps } from './Tooltip.types';

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="tooltip-container">
      <div className={`'tooltip-box' ${show && 'visible'}`}>
        {content}
        <span className="tooltip-arrow" />
      </div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
