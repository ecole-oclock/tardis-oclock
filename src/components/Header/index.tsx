import React, { useRef } from 'react';
import { HeaderProps } from 'src/components/Header/Header.types';
import Button from 'src/components/Button';
import './style.scss';

const Header: React.FC<HeaderProps> = ({ handleClickToday }) => {
  const btnElm = useRef<HTMLButtonElement>(null);
  return (
    <header>
      <Button ref={btnElm} handleClick={handleClickToday} content="Today" />
    </header>
  );
};

export default Header;
