import React, { forwardRef, useRef } from 'react';
import { ToolsMenuProps } from './ToolsMenu.types';
import { useToggle } from 'src/hooks';
import './style.scss';
import classNames from 'classnames';

import Button from 'src/components/Button';
/**
 * Tools Menu is a component containing the Timeline Tools (Show/hide Weekends, Granularity View)
 */
const ToolsMenu = forwardRef<HTMLMenuElement, ToolsMenuProps>(
  ({ toggleWeekend, isShowWeekend }, ref) => {
    /**
     * UseToggle to show or Hide the menu item
     */
    const [isMenuOpen, setIsMenuOpen] = useToggle(false);
    const toggleWeekendBtnElm = useRef<HTMLButtonElement>(null);
    return (
      <nav className="tools-menu" ref={ref}>
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
          classes="tools-menu__items"
        />
        <Button
          ref={toggleWeekendBtnElm}
          handleClick={toggleWeekend}
          classes="tools-menu__items"
          content={
            isMenuOpen
              ? isShowWeekend
                ? 'Hide weekends'
                : 'Show weekends'
              : ''
          }
        />
        <Button
          handleClick={() => console.log('test button 2')}
          classes="tools-menu__items"
        />
      </nav>
    );
  }
);

ToolsMenu.displayName = 'Tools Menu';
export default ToolsMenu;
