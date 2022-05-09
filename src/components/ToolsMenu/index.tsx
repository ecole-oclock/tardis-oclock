import React from 'react';

import { ToolsMenuProps } from './ToolsMenu.types';

import './style.scss';

const ToolsMenu: React.FC<ToolsMenuProps> = ({
  toggleWeekend,
  isShowWeekend,
}) => {
  return (
    <div className="tools-menu__container">
      <h1>Tools</h1>
      <button onClick={toggleWeekend}>
        {isShowWeekend ? 'Hide' : 'Show'} Weekend
      </button>
      <input type="range" className="tools-menu__granularity-range" />
    </div>
  );
};

export default ToolsMenu;
