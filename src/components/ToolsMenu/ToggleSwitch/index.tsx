import React, { useState } from 'react';
import { ToggleSwitchProps } from './ToggleSwitch.types';
import { useToggle } from 'src/Hooks';
import './index.scss';

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ toggle, setToggle }) => {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={toggle} onChange={setToggle} />
      <span className="switch" />
    </label>
  );
};
export default ToggleSwitch;
