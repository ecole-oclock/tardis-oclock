import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import dayjs from 'src/utils/dayjs';
import { TimelineProps } from 'src/components/Timeline/Timeline.types';
import Timeline from 'src/components/Timeline';
import ToolsMenu from 'src/components/ToolsMenu';

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
  });

  test('props.start date should be the first day element', () => {
    renderComponent();
    const firstDayElm = document.getElementById(props.start as string);
    const daysElms = document.getElementsByClassName('timeline__days__day');
    expect(daysElms.item(0)).toBe(firstDayElm);
  });

  test('toggling weekend should change textContent button', async () => {
    const { getByText } = renderComponent();
    // We want to test with the tools Menu open
    const toolsMenuButton = document.getElementById('tools-menu-button');
    if (toolsMenuButton) fireEvent.click(toolsMenuButton);

    const toggleWeekend = getByText('Hide weekends');

    // generate a click on the toggle weekend button to hide weekends days
    fireEvent.click(toggleWeekend);

    // after clicking, button may change is textcontent
    expect(toggleWeekend.textContent).toBe('Show weekends');

    // Same thing in the other side :
    // generate a click on the toggle weekend button to show weekends days
    fireEvent.click(toggleWeekend);

    // after clicking, button may change is textcontent
    expect(toggleWeekend.textContent).toBe('Hide weekends');
  });

  test('toggling weekend should change weekends elements classes', () => {
    const { getByText } = renderComponent();
    // We want to test with the tools Menu open
    const toolsMenuButton = document.getElementById('tools-menu-button');
    if (toolsMenuButton) fireEvent.click(toolsMenuButton);
    const toggleWeekend = getByText('Hide weekends');
    const weekendElms = document.getElementsByClassName('weekend');

    // generate a click on the toggle weekend button to hide weekends days
    fireEvent.click(toggleWeekend);

    //generate a loop to find if each weekend element have the good hidden classes
    for (let elm of weekendElms) {
      expect(elm).toHaveClass('weekend weekend--hidden');
    }
    // generate a click on the toggle weekend button to show weekends days
    fireEvent.click(toggleWeekend);

    // Same thing in the other side : weekend should have class weekend but shoudn't have class weekend--hidden
    for (let elm of weekendElms) {
      expect(elm).toHaveClass('weekend');
      expect(elm).not.toHaveClass('weekend--hidden');
    }
  });

  test('toggling weekend should change weekends elements visibility', () => {
    const { getByText } = renderComponent();
    // We want to test with the tools Menu open
    const toolsMenuButton = document.getElementById('tools-menu-button');
    if (toolsMenuButton) fireEvent.click(toolsMenuButton);
    const toggleWeekend = getByText('Hide weekends');
    const weekendElms = document.getElementsByClassName('weekend');

    // generate a click on the toggle weekend button
    fireEvent.click(toggleWeekend);

    //generate a loop to find if each weekend element is invisible
    for (let elm of weekendElms) {
      expect(elm).not.toBeVisible();
    }
    // Same thing in the other side : after clicking "Show Weekends" weekends should be visible
    fireEvent.click(toggleWeekend);

    for (let elm of weekendElms) {
      expect(elm).toBeVisible();
    }
  });
});
