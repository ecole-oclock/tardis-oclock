import React, { useState } from 'react';

import { ToolsMenuProps } from './ToolsMenu.types';
import { useToggle } from 'src/Hooks';
import './style.scss';
import classNames from 'classnames';
import ToggleSwitch from './ToggleSwitch';
import Tooltip from 'src/components/Tooltip';
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
      <button className="tools-menu__items">
        {isMenuOpen && (
          <Tooltip content={`${isShowWeekend ? 'Hide' : 'Show'} Weekends`}>
            <ToggleSwitch toggle={isShowWeekend} setToggle={toggleWeekend} />
          </Tooltip>
        )}
      </button>
      <button className="tools-menu__items"></button>

      <button className="tools-menu__items"></button>
    </nav>
  );
};

export default ToolsMenu;
