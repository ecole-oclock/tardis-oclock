import React from 'react';
import { render } from '@testing-library/react';
import dayjs from 'src/utils/dayjs';
import TimelineProps from 'src/components/Timeline/Timeline.types';
import Timeline from 'src/components/Timeline';

const today = dayjs().format('YYYY-MM-DD');
describe('Timeline Component', () => {
  let props: TimelineProps;

  beforeEach(() => {
    props = {
      start: today,
      interval: 31,
      granularity: 'week',
    };
  });

  const renderComponent = () => render(<Timeline {...props} />);
  console.log(renderComponent);
  it('should have class today on today date element', () => {
    renderComponent();
    const todayElm = document.getElementById(today);
    expect(todayElm).toHaveClass('today');
  });
});
