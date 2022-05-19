import { Dayjs } from 'dayjs';
import React from 'react';

/*----------------------Interfaces declaration--------------------------------------------*/

/* Props for the main Timeline Component */
export interface TimelineProps {
  start: DateYMDString | Dayjs | Date;
  interval: number;
  granularity:
    | 'day'
    | 'week'
    | 'month'
    | 'year'
    | 'days'
    | 'weeks'
    | 'months'
    | 'years';
  children?: React.ReactNode;
}
/* Props for the sub Timeline Component : TimelineDays */
export interface TimelineDaysProps {
  date: Dayjs;
  isShowWeekend: boolean;
  content?: string[];
  weekPrefix?: string;
}
/* Props for the sub Timeline Component : TimelineMonths */
export interface TimelineMonthsProps {
  children: React.ReactNode;
  content?: string;
}
/* Props for the sub Timeline Component : TimelineYears */
export interface TimelineYearsProps {
  content?: string;
  children: React.ReactNode;
}
/* Interface for the model object YearItem constructed by the function utils/getDatesInArray */
export interface YearItem {
  year: YYYY;
  dates: Dayjs[][];
}
/* Interface for the array returning by the function utils/getDatesInArray */
export interface DatesInNestedArray extends Array<YearItem> {}

/*----------------------Types declaration--------------------------------------------*/

/* types for all digits from 0 to 9 */
export type d = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
/* types for all digits from 1 to 9 */
export type oneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/* Types for matching the string pattern "YYYY-MM-DD" used by the props start in the Timeline Component */
// export type YYYY = `19${7 | 8 | 9}${d}` | `20${d}${d}`;
export type YYYY = `20${d}${d}`;
export type MM = `0${oneToNine}` | `1${0 | 1 | 2}`;
export type DD = `${0}${oneToNine}` | `${1 | 2}${d}` | `3${0 | 1}`;

export type DateYMDString = `${YYYY}-${MM}-${DD}`;

/* Type to specify an array of 12 months items, usage in utils/getAllMonthes  */
export type months = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

/* Type for the reference used in the useRef hooks in the Timeline component  */
export type referencesLi = HTMLLIElement | null;
