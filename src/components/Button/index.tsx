import React from 'react';
import { ButtonProps } from './Button.types';
import './style.scss';
const Button: React.FC<ButtonProps> = ({
  content,
  customClasses,
  handleClick,
  disabled,
}) => {
  const classes = (): string => {
    if (customClasses) {
      if (typeof customClasses !== 'string' && customClasses[0])
        return customClasses.join(' ');
      if (typeof customClasses === 'string') return customClasses;
    }
    return '';
  };
  return (
    <button
      className={customClasses ? classes() : 'tardis-button'}
      onClick={handleClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
