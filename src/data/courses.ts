/**
 * Video courses by PersiaJS's co-founder on Maktabkhooneh.
 *
 * Slugs and titles are copied from the gazar.dev Persian site
 * (gazar/apps/fa/src/lib/faData.ts), which read them off
 * maktabkhooneh.org/teacher/ehsan-gazar. Do not invent a slug: a wrong one is a
 * dead link. The slugs are Persian on purpose; that is the canonical URL.
 *
 * Deliberately no prices or student counts: both change and would go stale.
 */
const COURSE_BASE = "https://maktabkhooneh.org/course/";

// The instructor referral code. Per-instructor, so one code covers every
// course. `v=1` is copied from the working links Maktabkhooneh hands out.
const AFFILIATE_CODE = "yaQzOz";

export const courseUrl = (slug: string) =>
  `${COURSE_BASE}${slug}/?v=1&affiliate_code=${AFFILIATE_CODE}`;

export const courses: { slug: string; title: string; free?: boolean }[] = [
  { slug: "آموزش-جاوا-اسکریپت-mk1122", title: "آموزش جاوا اسکریپت (JavaScript)" },
  { slug: "آموزش-مقدماتی-react-js-mk1127", title: "آموزش React JS مقدماتی" },
  { slug: "آموزش-پیشرفته-ری-اکت-mk1128", title: "آموزش React JS پیشرفته" },
  { slug: "آموزش-رایگان-clean-code-mk1125", title: "آموزش Clean Code" },
  { slug: "آموزش-طراحی-وبسایت-front-end-mk1658", title: "آموزش طراحی وب‌سایت (Front-End)" },
  { slug: "آموزش-node-js-mk1313", title: "آموزش Node.js" },
  { slug: "آموزش-react-native-mk1419", title: "آموزش React Native" },
  { slug: "وبینار-مسیر-شغلی-فرانت-اند-mk2835", title: "وبینار مسیر شغلی فرانت‌اند", free: true },
];
