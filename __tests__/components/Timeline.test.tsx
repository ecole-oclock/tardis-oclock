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

  test('props.start should be the first day element', () => {
    renderComponent();
    const firstDayElm = document.getElementById(props.start as string);
    const daysElms = document.getElementsByClassName('timeline__days__day');
    expect(daysElms.item(0)).toBe(firstDayElm);
  });

  test('toggling weekend should change weekends elements classes and visibility, and textContent button', async () => {
    const { getByText } = renderComponent();
    const toggleWeekend = getByText('Hide Weekend');
    const weekendElms = document.getElementsByClassName('weekend');

    // generate a click on the toggle weekend button
    fireEvent.click(toggleWeekend);

    // after clicking weekend should be not visible and button may change is textcontent
    expect(toggleWeekend.textContent).toBe('Show Weekend');

    //generate a loop to find if each weekend element is invisible and get the good hidden classes
    for (let elm of weekendElms) {
      expect(elm).not.toBeVisible();
      expect(elm).toHaveClass('weekend weekend--hidden');
    }
    // Same thing in the other side : weekend should be visible
    fireEvent.click(toggleWeekend);
    expect(toggleWeekend.textContent).toBe('Hide Weekend');

    for (let elm of weekendElms) {
      expect(elm).toBeVisible();
      expect(elm).toHaveClass('weekend');
      expect(elm).not.toHaveClass('weekend--hidden');
    }
  });
});
