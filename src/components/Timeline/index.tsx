import React, { useState, useEffect } from 'react';
import dayjs from 'src/utils/dayjs';
import { getDatesInArray } from '../../utils/utils';
import { TimelineProps } from './Timeline.types';

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
        {days.map(({ year, dates }) => (
          <li key={year} className="timeline__years">
            <span className="timeline__years--info">{year}</span>
            <div className="timeline__months">
              {dates.map((month, index) => (
                <div
                  key={dayjs('2022-01-31').month(index).format('MMMM')}
                  className="timeline__weeks"
                >
                  <span className="timeline__months--info">
                    {dayjs('2022-01-31').month(index).format('MMMM')}
                  </span>
                  <div className="timeline__days">
                    {month.map((date) => (
                      <div className="timeline__days__columns" key={date}>
                        {dayjs(date).weekday() === 0 && (
                          <span className="timeline__weeks--info">
                            {dayjs(date).format('ww')}
                          </span>
                        )}
                        <div
                          className={`timeline__days--info 
                          ${dayjs(date).isToday() ? 'today' : ''}
                          ${
                            dayjs(date).weekday() === 5 ||
                            dayjs(date).weekday() === 6
                              ? 'weekend'
                              : ''
                          }
                          ${
                            (dayjs(date).weekday() === 5 ||
                              dayjs(date).weekday() === 6) &&
                            !showWeekend
                              ? 'weekend--hidden'
                              : ''
                          }
                          `}
                        >
                          <span>{dayjs(date).format('ddd')}</span>
                          <span>{dayjs(date).format('DD')}</span>
                        </div>
                        <div
                          className={`cols ${
                            dayjs(date).isToday() ? 'today' : ''
                          }${
                            dayjs(date).weekday() === 5 ||
                            dayjs(date).weekday() === 6
                              ? 'weekend'
                              : ''
                          }
                          ${
                            (dayjs(date).weekday() === 5 ||
                              dayjs(date).weekday() === 6) &&
                            !showWeekend
                              ? 'weekend--hidden'
                              : ''
                          }
                          `}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <button onClick={toggleWeekend}>Show/Hide Weekend</button>
    </div>
  );
};

export default Timeline;
