export interface TimelineProps {
  start: string;
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

export default TimelineProps;
