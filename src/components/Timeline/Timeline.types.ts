import { Dayjs } from 'dayjs';

export type d = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
export type oneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type YYYY = `19${7 | 8 | 9}${d}` | `20${d}${d}`;
export type MM = `0${oneToNine}` | `1${0 | 1 | 2}`;
export type DD = `${0}${oneToNine}` | `${1 | 2}${d}` | `3${0 | 1}`;

export type DateYMString = `${YYYY}-${MM}`;
export type DateYMDString = `${DateYMString}-${DD}`;

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
}

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
export interface YearItem {
  year: YYYY;
  dates: Dayjs[][];
}
export interface DatesInNestedArray extends Array<YearItem> {}

export default TimelineProps;
