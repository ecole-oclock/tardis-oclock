import React from 'react';
import { render } from '@testing-library/react';

import TimelineProps from 'components/Timeline/Timeline.types';
import Timeline from 'components/Timeline';

describe('Timeline Component', () => {
  let props: TimelineProps;

  beforeEach(() => {
    props = {
      start: '2022-01-31',
      interval: 31,
      granularity: 'day',
    };
  });

  const renderComponent = () => render(<Timeline {...props} />);

  it('should have start date matching pattern', () => {
    // const { getByTestId } = renderComponent();
    // const testComponent = getByTestId('test-component');
    // expect(testComponent).toHaveClass('test-component-primary');
  });
});
