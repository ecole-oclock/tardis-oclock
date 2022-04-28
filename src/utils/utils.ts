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
  const dateEnd: Dayjs = yearStart.add(interval, granularity);
  const years: string[] = getAllYearsInterval(yearStart, dateEnd);
  const months: string[] = getAllMonths();
  console.log('get month ', dayjs('2022/03/31').month(0).format('MMMM'));
  const dates = years.map((year) => {
    const yearDates = months.map((_, index) => {
      const firstDayOfTheMonth = dayjs(new Date(parseInt(year, 10), index, 1));
      let currentDate = firstDayOfTheMonth;
      const howManyDaysInMonth: number = firstDayOfTheMonth.daysInMonth();
      const allDaysInMonth = [];
      const lastDayOfTheMonth: Dayjs = dayjs(
        `${year}-${index + 1}-${howManyDaysInMonth}`
      );
      while (lastDayOfTheMonth.diff(currentDate, 'day') >= 0) {
        allDaysInMonth.push(currentDate.format());
        currentDate = currentDate.add(1, 'day');
      }
      return allDaysInMonth;
    });

    return {
      year,
      dates: yearDates,
    };
  });
  console.log(dates[0]);
  return dates;
};

const getAllMonths = (): string[] => {
  return dayjs().localeData().months();
};

const getAllYearsInterval = (startDate: Dayjs, endDate: Dayjs): string[] => {
  const years: string[] = [];
  while (endDate.diff(startDate, 'years') >= 0) {
    years.push(startDate.format('YYYY'));
    startDate = startDate.add(1, 'years');
  }
  return years;
};
