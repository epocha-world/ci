type ArticleLink = { text: string; href: string };
export type ArticleInline = string | { text: string; strong?: boolean; href?: string };

type Profile = { name: string; photo: string; photoAlt: string; credit: string; link: ArticleLink };
type Mentor = {
  name: string;
  photo: string;
  dimensions?: [width: number, height: number];
  bio: ArticleInline[][];
};
type CapstoneArticleBlock =
  | { kind: "intro"; lead: ArticleInline[]; paragraphs: ArticleInline[][]; profile?: Profile }
  | { kind: "mentors"; title: string; items: Mentor[] }
  | { kind: "paragraph" | "note"; content: ArticleInline[] }
  | { kind: "heading"; text: string; minor?: boolean; id?: "program-details" }
  | { kind: "list"; items: ArticleInline[][]; grid?: boolean }
  | { kind: "quote"; text: string; credit: string }
  | { kind: "callout"; title: string; paragraphs: string[]; link: ArticleLink }
  | { kind: "resource"; link: ArticleLink }
  | { kind: "media"; file: string; alt: string; width: number; height: number }
  | { kind: "contacts"; items: { title: string; details: string[]; links: ArticleLink[] }[] }
  | { kind: "registration"; title: string; paragraphs: ArticleInline[][] }
  | { kind: "audience"; title: string; items: ArticleInline[][] }
  | { kind: "slider" };

export type CapstoneArticleContent = {
  title: string;
  subtitle: string;
  mediaRoot: string;
  slideCount: number;
  blocks: CapstoneArticleBlock[];
};
