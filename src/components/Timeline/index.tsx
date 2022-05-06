import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
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
import { useToggle } from 'src/Hooks';
import { getDatesInArray, isOdd } from 'src/utils/utils';

import './style.scss';

/**
 * A timeline component build with an array of dates
 * @returns the main Timeline Component
 */
const Timeline: React.FC<TimelineProps> = ({
  start,
  interval,
  granularity,
}: TimelineProps) => {
  /**
   * Get all the days according to props to display them in DOM
   */
  const [days, setDay] = useState<DatesInNestedArray>(
    getDatesInArray(start, interval, granularity)
  );

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
  const focusOnToday = (): void => {
    daysElms.current[dayjs().format('YYYY-MM-DD')].scrollIntoView({
      behavior: 'instant',
      inline: 'center',
      block: 'start',
    });
  };
  /**
   * First render will focus on the today element
   */
  useEffect(() => {
    focusOnToday();
  }, [daysElms.current[dayjs().format('YYYY-MM-DD')]]);
  return (
    <div>
      <Header handleClickToday={focusOnToday} />
      <ul className="timeline__container">
        {days.map(
          ({ year, dates }, yearIndex) =>
            dates[yearIndex] && (
              <TimelineYears year={year} yearsElms={yearsElms}>
                {dates.map(
                  (month, monthIndex: number) =>
                    month[0] && (
                      <TimelineMonths
                        monthIndex={monthIndex}
                        year={year}
                        monthsElms={monthsElms}
                      >
                        {month[0] &&
                          month.map((date) => (
                            <TimelineDays
                              date={date}
                              isShowWeekend={isShowWeekend}
                              daysElms={daysElms}
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
