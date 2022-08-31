import {
  DateLocalizer,
  DateRangeFormatFunction,
  Formats,
} from "react-big-calendar";
import * as dateFns from "date-fns-jalali";
import enUS from "date-fns-jalali/locale/en-US";
import * as dates from "date-arithmetic";

let dateRangeFormat: DateRangeFormatFunction = (
  { start, end },
  culture,
  local
) =>
  `${local?.format(start, "P", culture)} – ${local?.format(end, "P", culture)}`;

let timeRangeFormat: DateRangeFormatFunction = (
  { start, end },
  culture,
  local
) =>
  `${local?.format(start, "p", culture)} – ${local?.format(end, "p", culture)}`;

let timeRangeStartFormat: DateRangeFormatFunction = (
  { start },
  culture,
  local
) => `${local?.format(start, "h:mma", culture)} – `;

let timeRangeEndFormat: DateRangeFormatFunction = ({ end }, culture, local) =>
  ` – ${local?.format(end, "h:mma", culture)}`;

let weekRangeFormat: DateRangeFormatFunction = (
  { start, end },
  culture,
  local
) =>
  `${local?.format(start, "MMMM dd", culture)} – ${local?.format(
    end,
    dates.eq(start, end, "month") ? "dd" : "MMMM dd",
    culture
  )}`;

export let formats: Formats = {
  dateFormat: "dd",
  dayFormat: "dd eee",
  weekdayFormat: "cccc",

  selectRangeFormat: timeRangeFormat,
  eventTimeRangeFormat: timeRangeFormat,
  eventTimeRangeStartFormat: timeRangeStartFormat,
  eventTimeRangeEndFormat: timeRangeEndFormat,

  timeGutterFormat: "p",

  monthHeaderFormat: "MMMM yyyy",
  dayHeaderFormat: "cccc MMM dd",
  dayRangeHeaderFormat: weekRangeFormat,
  agendaHeaderFormat: dateRangeFormat,

  agendaDateFormat: "ccc MMM dd",
  agendaTimeFormat: "p",
  agendaTimeRangeFormat: timeRangeFormat,
};

function firstVisibleDay(date: Date) {
  return dateFns.startOfWeek(dateFns.startOfMonth(date));
}

function lastVisibleDay(date: Date) {
  return dateFns.endOfWeek(dateFns.endOfMonth(date));
}

function visibleDays(date: Date): Date[] {
  let current = firstVisibleDay(date);
  const last = lastVisibleDay(date);
  const days = [];

  while (dates.lte(current, last)) {
    days.push(current);
    current = dates.add(current, 1, "day");
  }

  return days;
}

function startOf(date: Date, unit: dates.Unit): Date {
  switch (unit) {
    case "day":
      return dateFns.startOfDay(date);
    case "decade":
      return dateFns.startOfDecade(date);
    case "hours":
      return dateFns.startOfHour(date);
    case "milliseconds":
      return dateFns.startOfMinute(date);
    case "minutes":
      return dateFns.startOfMinute(date);
    case "month":
      return dateFns.startOfMonth(date);
    case "seconds":
      return dateFns.startOfSecond(date);
    case "week":
      return dateFns.startOfWeek(date);
    case "year":
      return dateFns.startOfYear(date);
  }
  return dates.startOf(date, unit);
}

function endOf(date: Date, unit: dates.Unit): Date {
  switch (unit) {
    case "day":
      return dateFns.endOfDay(date);
    case "decade":
      return dateFns.endOfDecade(date);
    case "hours":
      return dateFns.endOfHour(date);
    case "milliseconds":
      return dateFns.endOfMinute(date);
    case "minutes":
      return dateFns.endOfMinute(date);
    case "month":
      return dateFns.endOfMonth(date);
    case "seconds":
      return dateFns.endOfSecond(date);
    case "week":
      return dateFns.endOfWeek(date);
    case "year":
      return dateFns.endOfYear(date);
  }
  return dates.startOf(date, unit);
}

function add(date: Date, adder: number, unit: dates.Unit): Date {
  return dates.add(date, adder, unit);
}

function ceil(date: Date, unit: dates.Unit): Date {
  let floor = startOf(date, unit);

  return dates.eq(floor, date) ? floor : dates.add(floor, 1, unit);
}

export const dateFnsLocalizer = new DateLocalizer({
  formats,
  firstOfWeek() {
    return dateFns.getDay(dateFns.startOfWeek(new Date(), { locale: enUS }));
  },
  format(value, formatString) {
    return dateFns.format(new Date(value), formatString, {
      locale: enUS,
    });
  },
  visibleDays,
  startOf,
  add,
  ceil,
  endOf,
});
