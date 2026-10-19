import { Fragment, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { createSeoHead } from "@/lib/seo";
import { korcosTitle, korcosSummary, korcosBlocks } from "@/lib/korcos-story";
export const Route = createFileRoute("/news_/reflecting-on-korcos-iec-2026")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: korcosTitle,
      description: korcosSummary,
      path: "/news/reflecting-on-korcos-iec-2026",
      image: "/news/korcos-image1.png",
    }),
  component: KorcosArticle,
});
function KorcosArticle() {
  const { t } = useI18n();
  return (
    <article className="container-x py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        {korcosBlocks.map((block, index) =>
          block.type === "image-row" ? (
            <div key={index} className="my-10 grid w-full grid-cols-3 items-start gap-3 sm:gap-4">
              {block.images.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={t(image.alt)}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  className="aspect-[2/3] h-auto w-full rounded-2xl object-cover"
                />
              ))}
            </div>
          ) : block.type === "image" ? (
            <img
              key={index}
              src={block.src}
              alt={t(block.alt)}
              loading={index === 0 ? "eager" : "lazy"}
              className="my-10 h-auto w-full rounded-2xl"
            />
          ) : block.type === "title" ? (
            <h1 key={index} className="my-8 text-4xl font-bold leading-tight md:text-5xl">
              {t(block.text)}
            </h1>
          ) : block.type === "heading" ? (
            <h2 key={index} className="mt-10 mb-4 text-2xl font-bold">
              {t(block.text)}
            </h2>
          ) : block.type === "list-item" ? (
            <ul
              key={index}
              className="mt-3 list-disc pl-7 text-lg leading-relaxed text-foreground/85"
            >
              <li>{t(block.text)}</li>
            </ul>
          ) : (
            <LinkedParagraph
              key={index}
              text={block.text}
              links={"links" in block ? block.links : []}
            />
          ),
        )}
      </div>
    </article>
  );
}

function LinkedParagraph({
  text,
  links,
}: {
  text: string;
  links: readonly { label: string; href: string }[];
}) {
  const { t } = useI18n();
  const content = t(text);
  const parts: ReactNode[] = [];
  let cursor = 0;
  for (const link of links) {
    const label = t(link.label);
    const position = content.indexOf(label, cursor);
    if (position < 0) continue;
    parts.push(
      <Fragment key={link.href}>
        {content.slice(cursor, position)}
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          {label}
        </a>
      </Fragment>,
    );
    cursor = position + label.length;
  }
  return (
    <p className="mt-5 text-lg leading-relaxed text-foreground/85">
      {parts}
      {content.slice(cursor)}
    </p>
  );
}
