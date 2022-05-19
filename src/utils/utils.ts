import dayjs from './dayjs';
import {
  TimelineProps,
  DatesInNestedArray,
  YYYY,
  months,
} from 'src/components/Timeline/Timeline.types';

/**
 * Function which return an array of object containing year and array of dates
 * 
 * @param {TimelineProps['start']} start
 * @param {TimelineProps['interval']} interval
 * @param {TimelineProps['granularity']} granularity
 * @returns {DatesInNestedArray} an array of object representing the year and the dates in a months nested array
 * 
 * @example
 *  * getDatesInArray('2022-02-12', 36, 'days')
 * // returns
 * [{dates: (12) [Array(0), Array(17), Array(20), Array(0), Array(0), Array(0), Array(0), Array(0), Array(0), Array(0), Array(0), Array(0) year: "2022"}]

 */
export const getDatesInArray = (
  start: TimelineProps['start'],
  interval: TimelineProps['interval'],
  granularity: TimelineProps['granularity']
): DatesInNestedArray => {
  let yearStart: dayjs.Dayjs = dayjs(start).dayOfYear(1);
  const dateEnd: dayjs.Dayjs = dayjs(start).add(interval, granularity);
  const years: YYYY[] = getAllYearsInterval(yearStart, dateEnd);
  const months: months = getAllMonths();

  const dates = years.map((year) => {
    const yearDates: dayjs.Dayjs[][] = months.map((_, index) => {
      const firstDayOfTheMonth: dayjs.Dayjs = dayjs(
        new Date(parseInt(year, 10), index, 1)
      );
      let currentDate: dayjs.Dayjs;
      if (firstDayOfTheMonth.isSameOrBefore(dayjs(start))) {
        currentDate = dayjs(start);
      } else {
        currentDate = firstDayOfTheMonth;
      }
      const howManyDaysInMonth: number = firstDayOfTheMonth.daysInMonth();
      const allDaysInMonth: dayjs.Dayjs[] = [];
      const lastDayOfTheMonth: dayjs.Dayjs = dayjs(
        `${year}-${index + 1}-${howManyDaysInMonth}`
      );
      while (
        dayjs(currentDate).isBetween(dayjs(start), dateEnd, null, '[]') &&
        lastDayOfTheMonth.diff(currentDate, 'day') >= 0
      ) {
        allDaysInMonth.push(currentDate);
        currentDate = currentDate.add(1, 'day');
      }
      return allDaysInMonth;
    });
    return {
      year,
      dates: yearDates,
    };
  });

  return dates;
};

/**
 * Fonction to get a 12 items array to represent local months
 * @returns an array of local months
 */
const getAllMonths = (): months => {
  return dayjs().localeData().months();
};

/**
 * Representing all the years in an interval according to params
 * @param startDate representing the beginning date
 * @param endDate representing the end date
 * @returns an array of all years in the interval between startDate and endDate
 */
const getAllYearsInterval = (
  startDate: dayjs.Dayjs,
  endDate: dayjs.Dayjs
): YYYY[] => {
  const years: YYYY[] = [];
  while (startDate.isBefore(endDate) && endDate.diff(startDate, 'years') >= 0) {
    years.push(startDate.format('YYYY') as YYYY);
    startDate = startDate.add(1, 'years');
  }
  return years;
};

/**
 * Function to define if a number is odd or even
 * @param number
 * @returns true if number is odd; false if number is even
 */
export const isOdd = (number: number): boolean => {
  if (number % 2 === 0) {
    return false;
  } else {
    return true;
  }
};