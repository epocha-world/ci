import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import framework from "@/assets/epocha-framework.webp";
import { useI18n } from "@/i18n";
import { epochaIntroduction } from "@/lib/epocha-introduction";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/news_/meet-epocha")({
  head: ({ match }) => {
    const { locale } = match.context.preferences;
    const { title, description } = epochaIntroduction[locale];
    return createSeoHead({
      locale: match.context.preferences.locale,
      title: `${title} — EPOCHA`,
      description,
      path: "/news/meet-epocha",
      image: framework,
    });
  },
  component: MeetEpochaArticle,
});

function MeetEpochaArticle() {
  const { locale } = useI18n();
  const article = epochaIntroduction[locale];
  return (
    <article className="container-x py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-semibold underline underline-offset-4"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          {locale === "ko" ? "첫 화면으로 돌아가기" : "Back to landing"}
        </Link>
        <h1 className="mt-8 text-4xl leading-tight font-bold md:text-5xl">{article.title}</h1>
        <p className="mt-5 text-xl leading-relaxed text-foreground/85">{article.lead}</p>
        <img
          src={framework}
          alt={article.imageAlt}
          width={478}
          height={270}
          className="mt-8 h-auto max-w-full rounded-2xl"
        />
        {article.blocks.map((block, index) => {
          switch (block.type) {
            case "heading":
              return (
                <h2 key={index} className="mt-10 mb-4 text-2xl font-bold">
                  {block.text}
                </h2>
              );
            case "subheading":
              return (
                <h3 key={index} className="mt-6 text-xl font-bold">
                  {block.text}
                </h3>
              );
            case "list":
              return (
                <ul
                  key={index}
                  className="mt-4 list-disc space-y-3 pl-7 text-lg leading-relaxed text-foreground/85"
                >
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="whitespace-pre-line">
                      <ArticleText text={item} />
                    </li>
                  ))}
                </ul>
              );
            case "paragraph":
              return (
                <p key={index} className="mt-5 text-lg leading-relaxed text-foreground/85">
                  <ArticleText text={block.text} />
                </p>
              );
          }
        })}
      </div>
    </article>
  );
}

function ArticleText({
  text,
}: {
  text: string | readonly (string | { label: string; href: string })[];
}) {
  if (typeof text === "string") return text;
  return text.map((part) =>
    typeof part === "string" ? (
      part
    ) : (
      <a key={part.href} href={part.href} className="underline underline-offset-4">
        {part.label}
      </a>
    ),
  );
}
