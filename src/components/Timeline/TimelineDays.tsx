import React from 'react';
import { TimelineDaysProps } from './Timeline.types';
import classNames from 'classnames';
import dayjs from 'src/utils/dayjs';
import { isOdd } from 'src/utils/utils';

const TimelineDays: React.FC<TimelineDaysProps> = ({
  date,
  isShowWeekend,
  daysElms,
  content,
}) => {
  return (
    <li
      className={classNames('timeline__days__day', {
        'odd-weeks': isOdd(parseInt(dayjs(date).format('ww'), 10)),
        today: dayjs(date).isToday(),
        weekend: dayjs(date).weekday() === 5 || dayjs(date).weekday() === 6,
        'weekend--hidden':
          (dayjs(date).weekday() === 5 || dayjs(date).weekday() === 6) &&
          !isShowWeekend,
      })}
      ref={(elm) => {
        daysElms.current[date.format('YYYY-MM-DD')] = elm;
      }}
      id={date.format('YYYY-MM-DD')}
      hidden={
        (dayjs(date).weekday() === 5 || dayjs(date).weekday() === 6) &&
        !isShowWeekend
      }
    >
      <span
        className={classNames({
          'timeline__weeks--info': dayjs(date).weekday() === 0,
          'timeline__weeks--info--hidden': dayjs(date).weekday() !== 0,
          'weekend--hidden':
            (dayjs(date).weekday() === 5 || dayjs(date).weekday() === 6) &&
            !isShowWeekend,
        })}
        hidden={dayjs(date).weekday() !== 0}
      >
        W{dayjs(date).format('ww')}
      </span>
      <div className="timeline__days--info">
        {content && (
          <>
            {/* Content for TimelineDay is an array with two items: First is the abbreviation day, second is the day number of the month */}
            <span>{content[0]}</span>
            <span>{content[1]}</span>
          </>
        )}
      </div>
    </li>
  );
};

export default TimelineDays;
