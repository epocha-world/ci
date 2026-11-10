import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import framework from "@/assets/epocha-framework.webp";
import { CapstoneActions } from "@/components/camp/CapstoneActions";
import { useI18n } from "@/i18n";
import { openCapstoneListings } from "@/lib/camp-capstones";
import { filterNews, publishedNews, type NewsCategory } from "@/lib/news";
import { createSeoHead } from "@/lib/seo";

const headline = "Get career-ready with industry mentors";
const introduction =
  "Delivering practicums: work-based learning experiences and micro-internships that benefit youth, educators, and employers alike.";
type LandingCategory = NewsCategory | "practicums";

const categories: { value?: LandingCategory; label: string }[] = [
  { label: "All" },
  { value: "epocha", label: "EPOCHA News" },
  { value: "sparked", label: "Sparked!" },
  { value: "practicums", label: "Practicums" },
];
const articles = publishedNews();
const capstoneOrder = [
  "bridging-cultures-through-film",
  "filipino-heritage-book-launch",
  "mapping-ai-risk",
];
const capstones = openCapstoneListings();
const landingCapstones = capstoneOrder.flatMap((id) => capstones.filter((item) => item.id === id));

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { category?: LandingCategory } => ({
    category:
      search.category === "epocha" ||
      search.category === "sparked" ||
      search.category === "practicums"
        ? search.category
        : undefined,
  }),
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "EPOCHA — Practicums and news",
      description: introduction,
      path: "/",
      image: "/promo/poster.webp",
    }),
  component: LandingPage,
});

function PromoVideo() {
  const { t } = useI18n();
  const video = useRef<HTMLVideoElement>(null);
  const [caption, setCaption] = useState("");

  useEffect(() => {
    const tracks = video.current?.textTracks;
    if (!tracks) return;
    const syncCaption = () => {
      const selected = Array.from(tracks).find((track) => track.mode === "showing");
      setCaption(selected?.language ?? "");
    };
    tracks.addEventListener("change", syncCaption);
    syncCaption();
    return () => tracks.removeEventListener("change", syncCaption);
  }, []);

  function selectCaption(language: string) {
    const tracks = video.current?.textTracks;
    if (!tracks) return;
    for (const track of Array.from(tracks)) {
      track.mode = track.language === language ? "showing" : "disabled";
    }
    setCaption(language);
  }

  return (
    <figure className="min-w-0">
      <video
        ref={video}
        controls
        playsInline
        preload="metadata"
        poster="/promo/poster.webp"
        width={1280}
        height={720}
        aria-label={t("EPOCHA introduction video")}
        className="aspect-video w-full rounded-2xl bg-ink shadow-xl"
      >
        <source src="/promo/promo.mp4" type="video/mp4" />
        <track kind="subtitles" srcLang="en" label="English" src="/promo/EPOCHA-promo.en.vtt" />
        <track kind="subtitles" srcLang="ko" label="한국어" src="/promo/EPOCHA-promo.ko.vtt" />
        <a href="/promo/promo.mp4">{t("Download the EPOCHA introduction video")}</a>
      </video>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-sm text-muted-foreground">
        <label className="flex items-center gap-2">
          {t("Subtitles")}
          <select
            className="min-h-11 rounded-full border border-border bg-card px-3 text-foreground"
            value={caption}
            onChange={(event) => selectCaption(event.currentTarget.value)}
          >
            <option value="">{t("Off")}</option>
            <option value="en" lang="en">
              English
            </option>
            <option value="ko" lang="ko">
              한국어
            </option>
          </select>
        </label>
        <span>{t("Made with AI support")}</span>
      </figcaption>
    </figure>
  );
}

function LandingPage() {
  const { t } = useI18n();
  const { category } = Route.useSearch();
  const visibleArticles = category === "practicums" ? [] : filterNews(articles, category);
  const visibleCapstones = !category || category === "practicums" ? landingCapstones : [];

  return (
    <>
      <section className="bg-secondary/60">
        <div className="landing-container grid items-center gap-8 py-12 md:grid-cols-2 md:gap-10 md:py-20 lg:gap-14">
          <div>
            <h1 className="max-w-[13ch] text-4xl leading-[1.06] font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.6rem]">
              {t(headline)}
            </h1>
            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted-foreground md:mt-8 md:text-lg xl:text-xl">
              {t(introduction)}
            </p>
          </div>
          <PromoVideo />
        </div>
      </section>

      <div className="landing-container space-y-12 py-12 md:space-y-16 md:py-16">
        <section
          aria-labelledby="featured-title"
          className="grid overflow-hidden rounded-md border border-border bg-card md:grid-cols-[3fr_2fr]"
        >
          <div className="p-6 sm:p-9 lg:p-12">
            <span className="inline-flex rounded bg-lime px-3 py-1 text-xs font-bold tracking-widest text-ink uppercase">
              {t("Featured")}
            </span>
            <h2 id="featured-title" className="mt-4 text-3xl font-bold tracking-tight lg:text-5xl">
              {t("Meet EPOCHA")}
            </h2>
            <p className="mt-3 text-xl font-medium">{t("Who gets a voice?")}</p>
            <p className="mt-3 max-w-[55ch] leading-relaxed text-muted-foreground lg:text-lg">
              {t(
                "A look at who we are, what a practicum is, and the EPOCH framework that shapes how we prepare young people for work.",
              )}
            </p>
            <Link to="/news/meet-epocha" className="btn-primary mt-6 w-fit gap-2">
              {t("Read the full article")} <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <div className="flex items-center justify-center bg-secondary p-5 sm:p-7">
            <img
              src={framework}
              width={478}
              height={270}
              loading="lazy"
              alt={t("The EPOCHA framework and its six components")}
              className="h-auto w-full max-w-[478px]"
            />
          </div>
        </section>

        <section aria-labelledby="latest-news-title">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
            <h2 id="latest-news-title" className="text-3xl font-bold tracking-tight lg:text-4xl">
              {t("Latest News")}
            </h2>
            <nav aria-label={t("News categories")} className="flex flex-wrap gap-2">
              {categories.map(({ value, label }) => (
                <Link
                  key={label}
                  to="/"
                  search={{ category: value }}
                  resetScroll={false}
                  activeOptions={{ exact: true, explicitUndefined: true }}
                  aria-current={category === value ? "page" : undefined}
                  className={
                    "inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition-colors sm:px-5 " +
                    (category === value ? "bg-lime text-ink" : "bg-secondary hover:bg-accent")
                  }
                >
                  {t(label)}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2 md:gap-6">
            {visibleCapstones.map((item) => (
              <article
                key={item.id}
                className="flex flex-col rounded-md border border-border bg-card p-6 sm:p-8"
              >
                <p className="text-sm font-semibold text-muted-foreground uppercase">
                  {t("Practicums")}
                </p>
                {item.age && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t("Ages {{range}}", { range: item.age.replace("-", "–") })}
                  </p>
                )}
                <h3 className="mt-3 text-2xl leading-tight font-bold lg:text-[1.75rem]">
                  {t(item.title)}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{t(item.summary)}</p>
                <div className="mt-auto">
                  <CapstoneActions item={item} />
                </div>
              </article>
            ))}
            {visibleArticles.map((article) => (
              <article
                key={article.id}
                className="flex flex-col rounded-md border border-border bg-card p-6 sm:p-8"
              >
                <p className="text-sm font-semibold text-muted-foreground uppercase">
                  {t(article.category === "sparked" ? "Sparked!" : "EPOCHA News")}
                </p>
                <h3 className="mt-3 text-2xl leading-tight font-bold lg:text-[1.75rem]">
                  <Link to={article.href} className="underline-offset-4 hover:underline">
                    {t(article.title)}
                  </Link>
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{t(article.summary)}</p>
                <Link
                  to={article.href}
                  className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 pt-3 font-semibold underline-offset-4 hover:underline"
                  aria-label={t("Read article {{title}}", { title: t(article.title) })}
                >
                  {t("Read full article")} <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
