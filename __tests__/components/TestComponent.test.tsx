import React from 'react';
import { render } from '@testing-library/react';

import TestComponentProps from 'components/TestComponent/TestComponent.types';
import TestComponent from 'components/TestComponent';

describe('Test Component', () => {
  let props: TestComponentProps;

  beforeEach(() => {
    props = {
      theme: 'primary',
    };
  });

  const renderComponent = () => render(<TestComponent {...props} />);

  it('should have primary className with default props', () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId('test-component');

    expect(testComponent).toHaveClass('test-component-primary');
  });

  it('should have secondary className with theme set as secondary', () => {
    props.theme = 'secondary';
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId('test-component');

    expect(testComponent).toHaveClass('test-component-secondary');
  });
});
