import React, { useState, useEffect, useRef } from 'react';
import dayjs from 'src/utils/dayjs';
import { getDatesInArray } from 'src/utils/utils';
import { TimelineProps, DatesInNestedArray } from './Timeline.types';
import ToolsMenu from 'src/components/ToolsMenu';
import classNames from 'classnames';
import './style.scss';

/**
 * A component constructed with an array of dates

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
  console.log(getDatesInArray('2022-02-12', 36, 'days'));
  const daysEls = useRef([]);
  const [showWeekend, setShowWeekend] = useState<boolean>(true);
  const toggleWeekend = () => {
    setShowWeekend((showWeekend) => !showWeekend);
  };
  return (
    <div>
      <ul className="timeline__container">
        {days.map(
          ({ year, dates }, i) =>
            dates[i] && (
              <li key={year} className="timeline__years">
                <div className="timeline__years--info">
                  <span>{year}</span>
                </div>

                <div className="timeline__months">
                  {dates.map(
                    (month, index) =>
                      month[0] && (
                        <div
                          key={dayjs('2022-01-31').month(index).format('MMMM')}
                          className="timeline__weeks"
                        >
                          <div className="timeline__months--info">
                            <span>
                              {dayjs('2022-01-31').month(index).format('MMMM')}
                            </span>
                          </div>

                          <div className="timeline__days">
                            {month[0] &&
                              month.map((date) => (
                                <div
                                  className="timeline__days__columns"
                                  key={date && date.format('DD-MM-YYYY')}
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
                                      {
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
                                  >
                                    <span>{dayjs(date).format('ddd')}</span>
                                    <span>{dayjs(date).format('DD')}</span>
                                  </div>
                                  <div
                                    className={classNames('cols', {
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
                                </div>
                              ))}
                          </div>
                        </div>
                      )
                  )}
                </div>
              </li>
            )
        )}
      </ul>
      <ToolsMenu toggleWeekend={toggleWeekend} />
    </div>
  );
};

export default Timeline;
