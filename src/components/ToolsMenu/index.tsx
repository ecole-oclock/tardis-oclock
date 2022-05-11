import React, { useState } from 'react';

import { ToolsMenuProps } from './ToolsMenu.types';
import { useToggle } from 'src/Hooks';
import './style.scss';
import classNames from 'classnames';

import Button from 'src/components/Button';
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
      <Button
        handleClick={() => console.log('test button 1')}
        customClasses="tools-menu__items"
      />
      <Button
        handleClick={toggleWeekend}
        customClasses="tools-menu__items"
        content={
          isMenuOpen ? (isShowWeekend ? 'Hide weekends' : 'Show weekends') : ''
        }
      />
      <Button
        handleClick={() => console.log('test button 2')}
        customClasses="tools-menu__items"
      />
    </nav>
  );
};

export default ToolsMenu;
