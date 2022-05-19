import React, { forwardRef, useMemo } from 'react';
import { TimelineDaysProps } from './Timeline.types';
import classNames from 'classnames';
import dayjs from 'src/utils/dayjs';
import { isOdd } from 'src/utils/utils';

const TimelineDays = forwardRef<HTMLLIElement, TimelineDaysProps>(
  ({ date, isShowWeekend, content, weekPrefix = 'S' }, ref) => {
    /** Optimization using useMemo for the Li Element to render only if isShowWeekend props change*/
    const liClasseNames = useMemo((): object => {
      return {
        //classname odd-weeks to change the bgColor if weeks is odd or even
        'odd-weeks': isOdd(parseInt(dayjs(date).format('ww'), 10)),
        //classname today to visually identify today day element
        today: dayjs(date).isToday(),
        //classname weekend to visually identify weekend days elements
        weekend: dayjs(date).weekday() === 5 || dayjs(date).weekday() === 6,
        //classname weekend--hidden to hide weekends if isShowWeekend=false
        'weekend--hidden':
          (dayjs(date).weekday() === 5 || dayjs(date).weekday() === 6) &&
          !isShowWeekend,
      };
    }, [isShowWeekend]);

    /** Optimization using useMemo for the span Element to render only if isShowWeekend props change*/
    const spanClassNames = useMemo((): object => {
      return {
        // classname to symbolize the week number on top of the first day of the week
        'timeline__weeks--info': dayjs(date).weekday() === 0,
        // classname to hide the week number on other days of the week
        'timeline__weeks--info--hidden': dayjs(date).weekday() !== 0,
        //classname to hide the week number if wekeends are hidden
        'weekend--hidden':
          (dayjs(date).weekday() === 5 || dayjs(date).weekday() === 6) &&
          !isShowWeekend,
      };
    }, [isShowWeekend]);

    return (
      <li
        className={classNames('timeline__days__day', liClasseNames)}
        ref={ref}
        id={dayjs(date).format('YYYY-MM-DD')}
        hidden={
          (dayjs(date).weekday() === 5 || dayjs(date).weekday() === 6) &&
          !isShowWeekend
        }
      >
        <span
          className={classNames(spanClassNames)}
          hidden={dayjs(date).weekday() !== 0}
        >
          {weekPrefix}
          {dayjs(date).format('ww')}
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
  }
);

TimelineDays.displayName = 'Timeline Day';
export default TimelineDays;
