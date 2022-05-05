import { Dayjs } from 'dayjs';

export type d = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
export type oneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// export type YYYY = `19${7 | 8 | 9}${d}` | `20${d}${d}`;
export type YYYY = `20${d}${d}`;
export type MM = `0${oneToNine}` | `1${0 | 1 | 2}`;
export type DD = `${0}${oneToNine}` | `${1 | 2}${d}` | `3${0 | 1}`;

export type DateYMDString = `${YYYY}-${MM}-${DD}`;
// // export type DateYMDString = `${DateYMString}-${DD}`;
// // /**
// //  * A valid formatted date ('YYYY-MM-DD') between 01/01/2000 and 31/12/2099
// //  */
// export type DateYMDStringWithoutInexistantsDates = Exclude<
//   DateYMDString,
//   | `${YYYY}-02-30`
//   | `${YYYY}-02-31`
//   | `${YYYY}-04-31`
//   | `${YYYY}-06-31`
//   | `${YYYY}-09-31`
//   | `${YYYY}-11-31`
// >;
export type DateYMDStringWithoutInexistantsDates = string;
export interface TimelineProps {
  start: DateYMDStringWithoutInexistantsDates | Dayjs | Date;
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
