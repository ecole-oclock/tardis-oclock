import React, { useState } from 'react';

import { ToolsMenuProps } from './ToolsMenu.types';
import { useToggle } from 'src/Hooks';
import './style.scss';
import classNames from 'classnames';

/**
 * Tools Menu is a component containing the Timeline Tools (Show/hide Weekends, Granularity View)
 */
const ToolsMenu: React.FC<ToolsMenuProps> = ({
  toggleWeekend,
  isShowWeekend,
}) => {
  /**
   * UseToggle to show or Hide the menu item
   */
  const [isMenuOpen, setIsMenuOpen] = useToggle(false);

  return (
    <nav className="tools-menu">
      <div
        onClick={setIsMenuOpen}
        className={classNames('tools-menu__open-button', {
          'tools-menu--open': isMenuOpen,
        })}
      >
        <span className="tools-menu__lines tools-menu__lines--first"></span>
        <span className="tools-menu__lines tools-menu__lines--second"></span>
        <span className="tools-menu__lines tools-menu__lines--third"></span>
      </div>

      <button
        type="button"
        onClick={toggleWeekend}
        className="tools-menu__items"
      >
        {isShowWeekend ? 'Hide' : 'Show'} Weekend
      </button>

      <button className="tools-menu__items"></button>

      <button className="tools-menu__items"></button>
    </nav>
  );
};

export default ToolsMenu;
