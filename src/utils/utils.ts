import { Dayjs } from 'dayjs';
import dayjs from './dayjs';

export const getDatesInArray = (
  start: string,
  interval: number,
  granularity:
    | 'day'
    | 'week'
    | 'month'
    | 'year'
    | 'days'
    | 'weeks'
    | 'months'
    | 'years'
) => {
  let yearStart: Dayjs = dayjs(start).dayOfYear(1);
  const dateEnd: Dayjs = dayjs(start).add(interval, granularity);
  console.log('end date', dateEnd);
  const years: string[] = getAllYearsInterval(yearStart, dateEnd);
  const months: string[] = getAllMonths();
  const dates = years.map((year) => {
    const yearDates = months.map((_, index) => {
      const firstDayOfTheMonth = dayjs(new Date(parseInt(year, 10), index, 1));
      let currentDate;
      if (firstDayOfTheMonth.isSameOrBefore(dayjs(start))) {
        currentDate = dayjs(start);
      } else {
        currentDate = firstDayOfTheMonth;
      }
      const howManyDaysInMonth: number = firstDayOfTheMonth.daysInMonth();
      const allDaysInMonth: Dayjs[] = [];
      const lastDayOfTheMonth: Dayjs = dayjs(
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
    console.log(yearDates);
    return {
      year,
      dates: yearDates,
    };
  });
  console.log(dates);
  return dates;
};

const getAllMonths = (): string[] => {
  return dayjs().localeData().months();
};

const getAllYearsInterval = (startDate: Dayjs, endDate: Dayjs): string[] => {
  const years: string[] = [];
  while (startDate.isBefore(endDate) && endDate.diff(startDate, 'years') >= 0) {
    years.push(startDate.format('YYYY'));
    startDate = startDate.add(1, 'years');
  }
  return years;
};
