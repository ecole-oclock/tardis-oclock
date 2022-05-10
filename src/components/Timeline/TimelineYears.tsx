import React from 'react';
import { TimelineYearsProps } from './Timeline.types';
const TimelineYears: React.FC<TimelineYearsProps> = ({
  year,
  content,
  yearsElms,
  children,
}) => {
  return (
    <li
      ref={(elm) => {
        yearsElms.current[year] = elm;
      }}
      id={`year${year}`}
      className="timeline__years"
    >
      <div className="timeline__years--info">
        {content && <span>{content}</span>}
      </div>

      <ul className="timeline__months__container">{children}</ul>
    </li>
  );
};
export default TimelineYears;
