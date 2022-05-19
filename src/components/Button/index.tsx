import React, { forwardRef } from 'react';
import { ButtonProps } from './Button.types';
import './style.scss';
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ content, classes, handleClick, disabled }, ref) => {
    return (
      <button
        ref={ref}
        className={classes ? classes : 'tardis-button'}
        onClick={handleClick}
        disabled={disabled}
      >
        {content}
      </button>
    );
  }
);
Button.displayName = 'Button';
export default Button;
