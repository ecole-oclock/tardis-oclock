import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import dayjs from 'src/utils/dayjs';
import { useToggle } from 'src/Hooks';
import { getDatesInArray, isOdd } from 'src/utils/utils';
import { TimelineProps, DatesInNestedArray } from './Timeline.types';
import ToolsMenu from 'src/components/ToolsMenu';
import Header from 'src/components/Header';
import classNames from 'classnames';
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
  const daysElms = useRef<(HTMLLIElement | null)[]>([]);
  const yearsElms = useRef<(HTMLLIElement | null)[]>([]);
  const monthsElms = useRef<(HTMLLIElement | null)[]>([]);

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
              <li
                key={year}
                ref={(elm) => {
                  yearsElms.current[year] = elm;
                }}
                id={`year${year}`}
                className="timeline__years"
              >
                <div className="timeline__years--info">
                  <span>{year}</span>
                </div>

                <ul className="timeline__months__container">
                  {dates.map(
                    (month, monthIndex: number) =>
                      month[0] && (
                        <li
                          key={`${dayjs()
                            .month(monthIndex)
                            .format('MM')}${year}`}
                          className="timeline__months__month"
                          id={dayjs().month(monthIndex).format('YYYY-MM')}
                          ref={(elm) => {
                            monthsElms.current[
                              `${dayjs()
                                .month(monthIndex)
                                .format('MMMM')}${year}`
                            ] = elm;
                          }}
                        >
                          <div className="timeline__months--info">
                            <span>
                              {dayjs().month(monthIndex).format('MMMM')}
                            </span>
                          </div>

                          <ul className="timeline__days__container">
                            {month[0] &&
                              month.map((date) => (
                                <li
                                  className={classNames('timeline__days__day', {
                                    'odd-weeks': isOdd(
                                      parseInt(dayjs(date).format('ww'), 10)
                                    ),
                                    today: dayjs(date).isToday(),
                                    weekend:
                                      dayjs(date).weekday() === 5 ||
                                      dayjs(date).weekday() === 6,
                                    'weekend--hidden':
                                      (dayjs(date).weekday() === 5 ||
                                        dayjs(date).weekday() === 6) &&
                                      !isShowWeekend,
                                  })}
                                  key={date.format('YYYY-MM-DD')}
                                  ref={(elm) => {
                                    daysElms.current[
                                      date.format('YYYY-MM-DD')
                                    ] = elm;
                                  }}
                                  id={date.format('YYYY-MM-DD')}
                                  hidden={
                                    (dayjs(date).weekday() === 5 ||
                                      dayjs(date).weekday() === 6) &&
                                    !isShowWeekend
                                  }
                                >
                                  <span
                                    className={classNames({
                                      'timeline__weeks--info':
                                        dayjs(date).weekday() === 0,
                                      'timeline__weeks--info--hidden':
                                        dayjs(date).weekday() !== 0,
                                      'weekend--hidden':
                                        (dayjs(date).weekday() === 5 ||
                                          dayjs(date).weekday() === 6) &&
                                        !isShowWeekend,
                                    })}
                                    hidden={dayjs(date).weekday() !== 0}
                                  >
                                    W{dayjs(date).format('ww')}
                                  </span>
                                  <div
                                    className={classNames(
                                      'timeline__days--info',
                                      {}
                                    )}
                                  >
                                    <span>{dayjs(date).format('ddd')}</span>
                                    <span>{dayjs(date).format('DD')}</span>
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </li>
                      )
                  )}
                </ul>
              </li>
            )
        )}
      </ul>
      <ToolsMenu toggleWeekend={toggleWeekend} isShowWeekend={isShowWeekend} />
    </div>
  );
};

export default Timeline;
