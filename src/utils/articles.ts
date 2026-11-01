import { getCollection, type CollectionEntry } from "astro:content";
import { withBase } from "./url";

export type Lang = "fa" | "en";
export type Article = CollectionEntry<"articles">;

/** Published articles of one language, newest first. Drafts show only in dev. */
export async function getArticles(lang: Lang): Promise<Article[]> {
  const all = await getCollection("articles", ({ data }) => {
    if (data.lang !== lang) return false;
    return import.meta.env.PROD ? !data.draft : true;
  });
  return all.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/** Every published article (both languages), newest first. */
export async function getAllArticles(): Promise<Article[]> {
  const both = await Promise.all([getArticles("en"), getArticles("fa")]);
  return both.flat().sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/** About 200 words per minute, at least 1 minute. */
export function getReadingMinutes(body: string | undefined): number {
  const words = (body ?? "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

const locales: Record<Lang, string> = { fa: "fa-IR", en: "en-US" };

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(locales[lang], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatNumber(n: number, lang: Lang): string {
  return new Intl.NumberFormat(locales[lang]).format(n);
}

export const articlesBase = (lang: Lang) =>
  withBase(lang === "fa" ? "/fa/articles" : "/articles");

export const ui = {
  fa: {
    label: "مقالات",
    title: "مقالات PersiaJS",
    subtitle: "نوشته‌هایی از اعضای جامعه درباره‌ی جاوااسکریپت و توسعه وب",
    search: "جستجو در عنوان مقالات...",
    all: "همه",
    empty: "مقاله‌ای پیدا نشد.",
    prev: "قبلی",
    next: "بعدی",
    minutes: "دقیقه مطالعه",
    toc: "فهرست مطالب",
    back: "همه مقالات",
    discuss: "گفت‌وگو درباره این مقاله",
    onLinkedIn: "ادامه بحث در لینکدین",
    onTelegram: "ادامه بحث در تلگرام",
    aboutAuthor: "درباره نویسنده",
    linkedinProfile: "پروفایل لینکدین",
    updated: "به‌روزرسانی",
    switchLang: "همه مقالات (All articles)",
    switchHref: "/articles",
  },
  en: {
    label: "ARTICLES",
    title: "PersiaJS Articles",
    subtitle: "Writing from community members on JavaScript and web development",
    search: "Search article titles...",
    all: "All",
    empty: "No articles found.",
    prev: "Previous",
    next: "Next",
    minutes: "min read",
    toc: "Table of contents",
    back: "All articles",
    discuss: "Discuss this article",
    onLinkedIn: "Join the discussion on LinkedIn",
    onTelegram: "Join the discussion on Telegram",
    aboutAuthor: "About the author",
    linkedinProfile: "LinkedIn profile",
    updated: "Updated",
    switchLang: "مقالات فارسی",
    switchHref: "/fa/articles",
  },
} as const;
