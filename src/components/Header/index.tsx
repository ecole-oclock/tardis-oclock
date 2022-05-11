import React from 'react';
import { HeaderProps } from 'src/components/Header/Header.types';
import Button from 'src/components/Button';
import './style.scss';

const Header: React.FC<HeaderProps> = ({ handleClickToday }) => {
  return (
    <header>
      <Button handleClick={handleClickToday} content={'Today'} />
    </header>
  );
};

export default Header;
