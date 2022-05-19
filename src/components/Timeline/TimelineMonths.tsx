import React, { forwardRef } from 'react';
import dayjs from 'src/utils/dayjs';
import { TimelineMonthsProps } from './Timeline.types';

const TimelineMonths = forwardRef<HTMLLIElement, TimelineMonthsProps>(
  ({ content, children }, ref) => {
    return (
      <li className="timeline__months__month" ref={ref}>
        <div className="timeline__months--info">
          {content && <span>{content}</span>}
        </div>

        <ul className="timeline__days__container">{children}</ul>
      </li>
    );
  }
);

TimelineMonths.displayName = 'Timeline Month';
export default TimelineMonths;
