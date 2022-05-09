import React from 'react';
import Timeline from 'src/components/Timeline';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import dayjs from 'src/utils/dayjs';
export default {
  title: 'UI/Timeline',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    start: {
      control: false,
    },
    interval: {
      control: {
        type: 'number',
      },
    },
    granularity: {
      options: [
        'day',
        'week',
        'month',
        'year',
        'days',
        'weeks',
        'months',
        'years',
      ],
      control: { type: 'select' },
    },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Timeline>;

const TimelineTemplate: ComponentStory<typeof Timeline> = ({
  start,
  interval,
  granularity,
}) => {
  console.log(dayjs(start).format());
  return (
    <Timeline
      start={'2022-02-12'}
      interval={interval}
      granularity={granularity}
    />
  );
};

export const TestTimeline = TimelineTemplate.bind({});
TestTimeline.args = {
  start: '2022-02-12',
  granularity: 'day',
  interval: 3,
};
