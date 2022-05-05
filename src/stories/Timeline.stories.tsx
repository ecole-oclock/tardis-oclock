import React from 'react';
import Timeline from 'src/components/Timeline';
import 'src/scss/index.scss';
export default {
  title: 'Timeline',
};

export const oneYearTimeline = () => (
  <Timeline start="2022-02-12" interval={1} granularity="year" />
);
