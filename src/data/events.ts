/**
 * Event configuration and constants
 * This file centralizes event data to ensure consistency across components
 */

export const EVENT_SLUG =
  "persiajs-december-2025-design-systems-web-components";

export const EVENT_TITLE =
  "PersiaJS December 2025: Design Systems & Web Components";

/**
 * Past events, newest first. Only events with a real record go here: both of
 * these were listed on Luma. Events have not run on a fixed schedule, so the
 * site never promises a next date; it sends people to Telegram instead.
 */
export const PAST_EVENTS = [
  {
    title: EVENT_TITLE,
    date: "۱ دسامبر ۲۰۲۵",
    day: "۱",
    month: "دسامبر ۲۵",
    location: "آنلاین",
    href: `/events/${EVENT_SLUG}`,
  },
  {
    title: "PersiaJS #11: Devconnect Argentina Warmup",
    date: "۱۲ اکتبر ۲۰۲۵",
    day: "۱۲",
    month: "اکتبر ۲۵",
    location: "آنلاین",
  },
];

/**
 * Running totals as the old site (persiajs.github.io/website) showed them,
 * read 16 Nov 2026. They are PAST totals and must stay labelled that way.
 */
export const PAST_TOTALS = [
  { value: "۱۰", label: "رویداد" },
  { value: "۳۹۲", label: "شرکت‌کننده" },
  { value: "۴", label: "شهر" },
  { value: "۱۷", label: "سخنران" },
  { value: "۸۲", label: "شرکت" },
];
