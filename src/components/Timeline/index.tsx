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
  const [days, setDay] = useState<DatesInNestedArray>(
    getDatesInArray(start, interval, granularity)
  );
  const daysElms = useRef<(HTMLLIElement | null)[]>([]);
  const yearsElms = useRef<(HTMLLIElement | null)[]>([]);
  const monthsElms = useRef<(HTMLLIElement | null)[]>([]);
  useLayoutEffect(() => {
    console.log('useEffect YearsElms', yearsElms);
    console.log('useEffect monthsElms', monthsElms);
    console.log('useEffect daysElms', daysElms);
    console.log('date test odd', parseInt(dayjs().format('ww'), 10));
  }, [yearsElms]);
  console.log(yearsElms);
  const [showWeekend, toggleWeekend] = useToggle();
  const focusOnToday = () => {
    daysElms.current[dayjs().format('YYYY-MM-DD')].scrollIntoView({
      behavior: 'instant',
      inline: 'center',
      block: 'start',
    });
  };
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

                <ul className="timeline__months">
                  {dates.map(
                    (month, monthIndex: number) =>
                      month[0] && (
                        <li
                          key={`${dayjs()
                            .month(monthIndex)
                            .format('MM')}${year}`}
                          className="timeline__weeks"
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

                          <ul className="timeline__days">
                            {month[0] &&
                              month.map((date) => (
                                <li
                                  className={classNames(
                                    'timeline__days__columns',
                                    {
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
                                        !showWeekend,
                                    }
                                  )}
                                  key={date.format('YYYY-MM-DD')}
                                  ref={(elm) => {
                                    daysElms.current[
                                      date.format('YYYY-MM-DD')
                                    ] = elm;
                                  }}
                                  id={date.format('YYYY-MM-DD')}
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
                                        !showWeekend,
                                    })}
                                  >
                                    {dayjs(date).format('ww')}
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
                                  <div
                                    className={classNames('cols', {
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
                                        !showWeekend,
                                    })}
                                  ></div>
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
      <ToolsMenu toggleWeekend={toggleWeekend} />
    </div>
  );
};

export default Timeline;
