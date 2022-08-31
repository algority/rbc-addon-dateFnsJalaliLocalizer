import {} from 'react-big-calendar';
import { Unit } from 'date-arithmetic';

declare module 'react-big-calendar' {
  interface DateLocalizerSpec {
    firstOfWeek: (culture: Culture) => number;
    formats: Formats;
    propType?: Validator<any> | undefined;
    visibleDays: (date: Date) => Date[];
    startOf: (date: Date, unit: Unit) => Date;
    add: (date: Date, adder: number, unit: Unit) => Date;
    ceil: (date: Date, unit: Unit) => Date;
    continuesAfter?: (start: Date, end: Date, last: Date) => boolean;
    continuesPrior?: (start: Date, first: Date) => boolean;
    diff?: (a: Date, b: Date, unit: Unit) => number;
    endOf?: (date: Date, unit: Unit) => Date;
    eq?: (a: Date, b: Date, unit: Unit) => boolean;
    firstVisibleDay?: (date: Date) => Date;
    format?: (value: Date, format: string) => string;
    getDstOffset?: (start: Date, end: Date) => number;
    getMinutesFromMidnight?: (start: Date) => number;
    getSlotDate?: (
      dt: Date,
      minutesFromMidnight: number,
      offset: number,
    ) => Date;
    getTimezoneOffset?: (date: Date) => number;
    getTotalMin?: (start: Date, end: Date) => number;
    gt?: (a: Date, b: Date, unit: Unit) => boolean;
    gte?: (a: Date, b: Date, unit: Unit) => boolean;
    inEventRange?: ({
      event: { start: Date, end: Date },
      range: { start: Date, end: Date },
    }) => boolean;
    inRange?: (day: Date, start: Date, end: Date, unit: Unit) => boolean;
    isSameDate?: (date1: Date, date2: Date) => boolean;
    lastVisibleDay?: (date: Date) => Date;
    lt?: (a: Date, b: Date, unit: Unit) => boolean;
    lte?: (a: Date, b: Date, unit: Unit) => boolean;
    max?: (dateA: Date, dateB: Date) => Date;
    merge?: (date: Date, time: Date) => Date;
    min?: (dateA: Date, dateB: Date) => Date;
    minutes?: (date: Date) => number;
    neq?: (a: Date, b: Date, unit: Unit) => boolean;
    range?: (start: Date, end: Date, unit: Unit) => Array[Date];
    sortEvents?: ({
      evtA: { start: Date, end: Date, allDay: boolean },
      evtB: { start: Date, end: Date, allDay: boolean },
    }) => number;
    startAndEndAreDateOnly?: (start: Date, end: Date) => boolean;
    startOf?: (date: Date, unit: Unit) => Date;
    startOfWeek?: (culture) => number;
  }
}
