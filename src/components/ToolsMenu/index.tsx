import React from 'react';

import { ToolsMenuProps } from './ToolsMenu.types';

import './style.scss';

const ToolsMenu: React.FC<ToolsMenuProps> = ({ toggleWeekend }) => {
  return (
    <div className="tools-menu__container">
      <h1>Tools</h1>
      <button onClick={toggleWeekend}>Show/Hide Weekend</button>
    </div>
  );
};

export default ToolsMenu;
