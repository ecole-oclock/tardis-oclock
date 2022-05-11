import React from 'react';

export interface ButtonProps {
  content?: string;
  customClasses?: string | string[];

  handleClick: React.MouseEventHandler;
  disabled?: boolean;
}

export default ButtonProps;
