import React from 'react';

import { AnotherComponentProps } from './AnotherComponent.types';
import './style.scss';

const AnotherComponent: React.FC<AnotherComponentProps> = ({ handleClick }) => (
  <div>
    <button className="button-test" onClick={(event) => handleClick(event, 1)}>
      Click
    </button>
  </div>
);

export default AnotherComponent;
