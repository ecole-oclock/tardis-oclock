import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import dayjs from 'src/utils/dayjs';
import TimelineProps from 'src/components/Timeline/Timeline.types';
import Timeline from 'src/components/Timeline';

// declare this variable to access the today date
const today = dayjs().format('YYYY-MM-DD');

describe('Timeline Component', () => {
  let props: TimelineProps;

  beforeEach(() => {
    props = {
      start: today,
      interval: 31,
      granularity: 'day',
    };
  });
  // Necessary => without it error is popping (scrollIntoView is not a function)
  window.HTMLElement.prototype.scrollIntoView = function () {};
  //Function to mount the component
  const renderComponent = () => render(<Timeline {...props} />);

  test('should have class today on today date element', () => {
    renderComponent();
    const todayElm = document.getElementById(today);
    expect(todayElm).toHaveClass('today');
    expect(todayElm).to;
  });

  test('props.start should be the first visible day', () => {
    renderComponent();
    const firstDayElm = document.getElementById(props.start as string);
    const daysElms = document.getElementsByClassName('timeline__days__day');
    expect(daysElms.item(0)).toBe(firstDayElm);
  });

  test('toggling weekend should change weekends elements classes and visibility, and textContent button', async () => {
    const { getByText } = renderComponent();
    const toggleWeekend = getByText('Hide Weekend');
    const weekendElms = document.getElementsByClassName('weekend');
    fireEvent.click(toggleWeekend);
    expect(toggleWeekend.textContent).toBe('Show Weekend');
    // await waitFor(() => {
    for (let elm of weekendElms) {
      expect(elm).not.toBeVisible();
      expect(elm).toHaveClass('weekend weekend--hidden');
    }
    // });
    fireEvent.click(toggleWeekend);
    expect(toggleWeekend.textContent).toBe('Hide Weekend');
    // await waitFor(() => {
    for (let elm of weekendElms) {
      expect(elm).toBeVisible();
      expect(elm).toHaveClass('weekend');
      expect(elm).not.toHaveClass('weekend--hidden');
    }
    // });
  });
});
