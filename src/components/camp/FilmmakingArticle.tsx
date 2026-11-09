import { useEffect, useState } from "react";
import { ArrowDownToLine, ArrowUpRight, Mail } from "lucide-react";
import { CapstoneActions } from "@/components/camp/CapstoneActions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useI18n } from "@/i18n";
import type { CampCapstone } from "@/lib/camp-capstones";
import type { ArticleInline, FilmArticleContent } from "@/lib/filmmaking-article";

const mediaRoot = "/capstones/filmmaking-article/";
const articleLink = "font-semibold underline underline-offset-4 hover:text-foreground";
const slideCount = 9;

function ArticleText({ content }: { content: ArticleInline[] }) {
  return content.map((part, index) => {
    if (typeof part === "string") return part;
    if (part.href) {
      return (
        <a key={index} href={part.href} className={articleLink}>
          {part.text}
        </a>
      );
    }
    return <strong key={index}>{part.text}</strong>;
  });
}

function SlideViewer({ pdfUrl }: { pdfUrl: string }) {
  const { locale } = useI18n();
  const ko = locale === "ko";
  const [api, setApi] = useState<CarouselApi>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!api) return;
    const update = () => setPage(api.selectedScrollSnap() + 1);
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <Carousel
      aria-label={ko ? "영화 제작 캡스톤 PDF 슬라이드" : "Filmmaking Capstone PDF slides"}
      setApi={setApi}
      className="rounded-lg border border-border bg-card p-2 sm:p-3"
    >
      <CarouselContent>
        {Array.from({ length: slideCount }, (_, index) => (
          <CarouselItem key={index}>
            <img
              src={mediaRoot + "slide-" + String(index + 1).padStart(2, "0") + ".png"}
              alt={ko ? `영문 PDF 슬라이드 ${index + 1}` : `PDF slide ${index + 1}`}
              loading="lazy"
              className="aspect-video w-full rounded-sm bg-muted object-contain"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-sm">
        <div className="flex items-center gap-2">
          <CarouselPrevious
            aria-label={ko ? "이전 슬라이드" : "Previous slide"}
            className="static size-10 translate-y-0 rounded-md"
          />
          <span role="status" className="min-w-11 text-center tabular-nums">
            {page} / {slideCount}
          </span>
          <CarouselNext
            aria-label={ko ? "다음 슬라이드" : "Next slide"}
            className="static size-10 translate-y-0 rounded-md"
          />
        </div>
        <div className="flex items-center gap-2">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-1 px-1 font-medium hover:underline"
          >
            <ArrowUpRight aria-hidden="true" className="size-4" />
            {ko ? "PDF 열기" : "Open PDF"}
          </a>
          <a
            href={pdfUrl}
            download
            aria-label={ko ? "PDF 다운로드" : "Download PDF"}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border hover:bg-muted"
          >
            <ArrowDownToLine aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </Carousel>
  );
}

export function FilmmakingArticle({
  article,
  item,
}: {
  article: FilmArticleContent;
  item: CampCapstone;
}) {
  return (
    <article className="min-w-0 space-y-5 text-base leading-relaxed text-foreground/90 lg:col-start-1 lg:row-start-1">
      {article.blocks.map((block, index) => {
        switch (block.kind) {
          case "intro":
            return (
              <section key={index} className="space-y-8">
                <p className="max-w-2xl text-xl leading-relaxed font-medium sm:text-2xl">
                  <ArticleText content={block.lead} />
                </p>
                <div className="grid items-start gap-6 sm:grid-cols-[3fr_2fr]">
                  <div className="space-y-4">
                    {block.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>
                        <ArticleText content={paragraph} />
                      </p>
                    ))}
                  </div>
                  <figure className="space-y-2 border-t border-foreground/70 pt-3 text-sm">
                    <img
                      src={mediaRoot + "lucie-charles.jpg"}
                      alt="Lucie Charles"
                      width={500}
                      height={300}
                      className="h-auto w-full"
                    />
                    <figcaption className="space-y-1">
                      <p className="font-semibold">{block.profile.name}</p>
                      <p className="text-muted-foreground">{block.profile.credit}</p>
                      <a href={block.profile.link.href} className={articleLink}>
                        {block.profile.link.text}
                      </a>
                    </figcaption>
                  </figure>
                </div>
              </section>
            );
          case "paragraph":
          case "note":
            return (
              <p
                key={index}
                className={
                  block.kind === "note"
                    ? "border-l border-foreground/60 pl-4 text-sm italic"
                    : "whitespace-pre-line"
                }
              >
                <ArticleText content={block.content} />
              </p>
            );
          case "heading":
            return block.minor ? (
              <h3 key={index} className="pt-2 text-lg font-bold text-foreground">
                {block.text}
              </h3>
            ) : (
              <h2
                key={index}
                id={
                  block.text === "Program details" || block.text === "프로그램 상세 안내"
                    ? "program-details"
                    : undefined
                }
                className="scroll-mt-24 pt-5 text-2xl leading-tight font-bold text-foreground"
              >
                {block.text}
              </h2>
            );
          case "list":
            return block.grid ? (
              <ol key={index} className="grid gap-x-6 sm:grid-cols-2">
                {block.items.map((content, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3 border-t border-border py-4">
                    <span
                      aria-hidden="true"
                      className="shrink-0 pt-1 text-xs text-muted-foreground tabular-nums"
                    >
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <ArticleText content={content} />
                    </span>
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={index} className="list-disc space-y-2 pl-6">
                {block.items.map((content, itemIndex) => (
                  <li key={itemIndex}>
                    <ArticleText content={content} />
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <figure key={index} className="border-y border-border px-5 py-8 text-center sm:px-12">
                <blockquote className="text-lg leading-relaxed italic sm:text-xl">
                  {block.text}
                </blockquote>
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  {block.credit}
                </figcaption>
              </figure>
            );
          case "callout":
            return (
              <section
                key={index}
                className="space-y-3 border-l-2 border-foreground/70 bg-muted/65 p-5 sm:p-6"
              >
                <h3 className="text-lg font-bold">{block.title}</h3>
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <a href={block.link.href} className={articleLink}>
                  {block.link.text}
                </a>
              </section>
            );
          case "resource":
            return (
              <p key={index}>
                <a href={block.link.href} className={articleLink}>
                  {block.link.text}
                </a>
              </p>
            );
          case "media":
            return (
              <img
                key={index}
                src={mediaRoot + "seagull-journal.jpg"}
                alt="The Seagull Production Journal"
                width={500}
                height={300}
                loading="lazy"
                className="h-auto max-w-full"
              />
            );
          case "slider":
            return item.pdfUrl && <SlideViewer key={index} pdfUrl={item.pdfUrl} />;
          case "audience":
            return (
              <section
                key={index}
                className="grid gap-4 bg-ink p-6 text-cream sm:grid-cols-[2fr_3fr] sm:gap-6 sm:p-8"
              >
                <h2 className="text-2xl leading-tight font-bold">{block.title}</h2>
                <ul className="divide-y divide-cream/15">
                  {block.items.map((content, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3 py-3 first:pt-0 last:pb-0">
                      <ArrowUpRight aria-hidden="true" className="mt-1 size-4 shrink-0 text-lime" />
                      <span>
                        <ArticleText content={content} />
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          case "registration":
            return (
              <section key={index} className="space-y-4 bg-muted/65 p-5 sm:p-6">
                <h2 className="text-2xl leading-tight font-bold">{block.title}</h2>
                {block.paragraphs.map((paragraph, i) => (
                  <p key={i}>
                    <ArticleText content={paragraph} />
                  </p>
                ))}
                <CapstoneActions item={item} variant="detail" />
              </section>
            );
          case "contacts":
            return (
              <dl key={index} className="grid gap-4 sm:grid-cols-3">
                {block.items.map(({ title, details, links }) => (
                  <div key={title} className="min-w-0 border-t border-border pt-4 text-sm">
                    <Mail aria-hidden="true" className="mb-3 size-4" />
                    <dt className="font-bold">{title}</dt>
                    <dd className="mt-1 space-y-1">
                      {details.map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                      {links.map(({ href, text }) => (
                        <a key={href} href={href} className={`block break-words ${articleLink}`}>
                          {text}
                        </a>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            );
        }
      })}
    </article>
  );
}
