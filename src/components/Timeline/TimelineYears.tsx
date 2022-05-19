import React, { forwardRef } from 'react';
import { TimelineYearsProps } from './Timeline.types';
const TimelineYears = forwardRef<HTMLLIElement, TimelineYearsProps>(
  ({ content, children }, ref) => {
    return (
      <li className="timeline__years" ref={ref}>
        <div className="timeline__years--info">
          {content && <span>{content}</span>}
        </div>

        <ul className="timeline__months__container">{children}</ul>
      </li>
    );
  }
);

TimelineYears.displayName = 'Timeline Year';
export default TimelineYears;
