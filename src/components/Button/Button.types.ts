import React from 'react';

export interface ButtonProps {
  content?: string;
  classes?: string;
  handleClick: React.MouseEventHandler;
  disabled?: boolean;
}

export default ButtonProps;
