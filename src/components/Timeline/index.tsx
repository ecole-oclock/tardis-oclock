import React, { useState, useEffect } from 'react';
import dayjs from 'src/utils/dayjs';
import { getDatesInArray } from '../../utils/utils';
import { TimelineProps } from './Timeline.types';
import classNames from 'classnames';
import './style.scss';

const Timeline: React.FC<TimelineProps> = ({
  start,
  interval,
  granularity,
}) => {
  const [days, setDay] = useState(
    getDatesInArray(start, interval, granularity)
  );
  const [showWeekend, setShowWeekend] = useState(true);
  const toggleWeekend = () => {
    console.log(showWeekend);
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
                            {month.map((date) => (
                              <div
                                className="timeline__days__columns"
                                key={date.format()}
                              >
                                {dayjs(date).weekday() === 0 ? (
                                  <span className="timeline__weeks--info">
                                    {dayjs(date).format('ww')}
                                  </span>
                                ) : (
                                  <span className="timeline__weeks--info--hidden">
                                    {dayjs(date).format('ww')}
                                  </span>
                                )}
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
      <button onClick={toggleWeekend}>Show/Hide Weekend</button>
    </div>
  );
};

export default Timeline;
