import React from 'react';

import TestComponentProps from './TestComponent.types';

import './style.scss';

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
    <h2>Another title in my test component</h2>
  </div>
);

export default TestComponent;
