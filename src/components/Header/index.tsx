import React from 'react';
import { HeaderProps } from 'src/components/Header/Header.types';
const Header: React.FC<HeaderProps> = ({ handleClickToday }) => {
  return (
    <header>
      <button onClick={handleClickToday}>Today</button>
    </header>
  );
};

export default Header;
