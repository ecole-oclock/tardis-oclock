import React, { useMemo, useEffect, useRef, useCallback } from 'react';
/*-------------------------------Import Types--------------------------------------------------*/
import {
  TimelineProps,
  DatesInNestedArray,
  referencesLi,
} from './Timeline.types';
/*-------------------------------Import Components---------------------------------------------*/
import ToolsMenu from 'src/components/ToolsMenu';
import Header from 'src/components/Header';
import TimelineDays from 'src/components/Timeline/TimelineDays';
import TimelineMonths from 'src/components/Timeline/TimelineMonths';
import TimelineYears from './TimelineYears';
/*-------------------------------Import Modules------------------------------------------------*/
import dayjs from 'src/utils/dayjs';
import { useToggle } from 'src/hooks';
import { getDatesInArray } from 'src/utils/utils';

import './style.scss';

/**
 * A timeline component build with an array of dates following props start which is a date, and adding interval and granularity following dayjs method dayjs(start).add(interval, granularity)
 * ### Usage
 * ```jsx
 * <Timeline start={} interval={} granularity={} />
 * ```
 */
const Timeline: React.FC<TimelineProps> = ({
  start,
  interval,
  granularity,
}: TimelineProps) => {
  /**
   * Get all the days according to props to display them in DOM
   */
  const days = useMemo(() => getDatesInArray(start, interval, granularity), []);
  /**
   * Adding references on each Element which represent a year, a month or a day
   */
  const daysElms = useRef<referencesLi[]>([]);
  const yearsElms = useRef<referencesLi[]>([]);
  const monthsElms = useRef<referencesLi[]>([]);

  /**
   * Using custom hooks Toggle to show or hide weekend days
   */
  const [isShowWeekend, toggleWeekend] = useToggle();
  /**
   * Focus on the element which have a date equal to today with the scrollIntoView method
   */
  const focusOnToday = useCallback((): void => {
    if (daysElms.current[dayjs().format('YYYY-MM-DD')]) {
      daysElms.current[dayjs().format('YYYY-MM-DD')].scrollIntoView({
        behavior: 'instant',
        inline: 'center',
        block: 'start',
      });
    }
  }, []);
  /**
   * First render will focus on the today element
   */
  useEffect(() => {
    focusOnToday();
  }, []);
  return (
    <div className="tardis__container">
      <Header handleClickToday={focusOnToday} />
      <ul className="timeline__container">
        {days.map(
          ({ year, dates }, yearIndex: number) =>
            dates[yearIndex] && (
              <TimelineYears
                key={year}
                content={year}
                ref={(elm) => {
                  yearsElms.current[year] = elm;
                }}
              >
                {dates.map(
                  (month, monthIndex: number) =>
                    month.length && (
                      <TimelineMonths
                        key={`${dayjs().month(monthIndex).format('MM')}${year}`}
                        content={dayjs().month(monthIndex).format('MMMM')}
                        ref={(elm) => {
                          monthsElms.current[
                            `${dayjs().month(monthIndex).format('MMMM')}${year}`
                          ] = elm;
                        }}
                      >
                        {month.map((date) => (
                          <TimelineDays
                            key={date.format('YYYY-MM-DD')}
                            date={date}
                            isShowWeekend={isShowWeekend}
                            ref={(elm) => {
                              daysElms.current[date.format('YYYY-MM-DD')] = elm;
                            }}
                            content={[
                              dayjs(date).format('ddd'),
                              dayjs(date).format('DD'),
                            ]}
                          />
                        ))}
                      </TimelineMonths>
                    )
                )}
              </TimelineYears>
            )
        )}
      </ul>

      <ToolsMenu toggleWeekend={toggleWeekend} isShowWeekend={isShowWeekend} />
    </div>
  );
};

export default Timeline;
