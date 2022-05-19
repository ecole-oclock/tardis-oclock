import React, { forwardRef, useState } from 'react';
import './style.scss';
import { TooltipProps } from './Tooltip.types';
import classNames from 'classnames';

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, content }, ref) => {
    const [show = false, setShow] = useState<boolean>(false);
    return (
      <div className="tooltip__container" ref={ref}>
        <div
          className={classNames('tooltip__box', {
            'tooltip__box--visible': show,
          })}
        >
          {content}
          <span className="tooltip__arrow" />
        </div>
        <div
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {children}
        </div>
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';
export default Tooltip;
