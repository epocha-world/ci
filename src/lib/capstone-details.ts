import type { Locale } from "./preferences";

type Resource = { label: string; href: string };

type Section = {
  title: string;
  paragraphs: string[];
  resources?: Resource[];
};

export type CapstoneDetailContent = {
  lead?: string;
  schedule: string;
  format: string;
  sections: Section[];
};

const ibGuidance =
  "https://ibo.org/programmes/diploma-programme/curriculum/dp-core/creativity-activity-and-service/cas-projects/";

const details: Record<string, Record<Locale, CapstoneDetailContent>> = {
  "bridging-cultures-through-film": {
    en: {
      schedule: "January 9–April 17, 2027 · Saturdays, 09:00–12:00 KST",
      format: "Hybrid · Online classes and in-person sessions",
      sections: [],
    },
    ko: {
      schedule: "2027년 1월 9일~4월 17일 · 매주 토요일 09:00~12:00 KST",
      format: "혼합형 · 온라인 수업과 대면 활동 병행",
      sections: [],
    },
  },
  "filipino-heritage-book-launch": {
    en: {
      schedule: "January 9–April 3, 2027 · Saturdays, 09:00–11:30 KST",
      format: "In-person sessions at Gyeonggi Suwon International School (GSIS)",
      sections: [],
    },
    ko: {
      schedule: "2027년 1월 9일~4월 3일 · 매주 토요일 09:00~11:30 KST",
      format: "경기수원외국인학교(GSIS) 대면 수업",
      sections: [],
    },
  },
  "mapping-ai-risk": {
    en: {
      schedule: "January 4–March 22, 2027 · Mondays, 15:30–17:00 KST · 10 sessions of 90 minutes",
      format: "Online",
      sections: [],
    },
    ko: {
      schedule: "2027년 1월 4일~3월 22일 · 월요일 15:30~17:00 KST · 회당 90분, 총 10회",
      format: "온라인",
      sections: [],
    },
  },
};

export function getCapstoneDetail(id: string, locale: Locale): CapstoneDetailContent | undefined {
  return Object.hasOwn(details, id) ? details[id][locale] : undefined;
}
