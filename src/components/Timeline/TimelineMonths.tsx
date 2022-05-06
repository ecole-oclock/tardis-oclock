import React from 'react';
import dayjs from 'src/utils/dayjs';
import { TimelineMonthsProps } from './Timeline.types';

const TimelineMonths: React.FC<TimelineMonthsProps> = ({
  monthIndex,
  year,
  monthsElms,
  children,
}) => {
  return (
    <li
      key={`${dayjs().month(monthIndex).format('MM')}${year}`}
      className="timeline__months__month"
      id={dayjs().month(monthIndex).format('YYYY-MM')}
      ref={(elm) => {
        monthsElms.current[
          `${dayjs().month(monthIndex).format('MMMM')}${year}`
        ] = elm;
      }}
    >
      <div className="timeline__months--info">
        <span>{dayjs().month(monthIndex).format('MMMM')}</span>
      </div>

      <ul className="timeline__days__container">{children}</ul>
    </li>
  );
};

export default TimelineMonths;
