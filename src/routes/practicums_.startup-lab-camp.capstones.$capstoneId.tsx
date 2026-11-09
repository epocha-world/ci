import { CapstonePartner } from "@/components/camp/CapstonePartner";
import { CapstoneActions } from "@/components/camp/CapstoneActions";
import { CapstoneArticle } from "@/components/camp/CapstoneArticle";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useI18n } from "@/i18n";
import { createSeoHead } from "@/lib/seo";
import { publishedCapstones, capstoneFieldLabel, type CampCapstone } from "@/lib/camp-capstones";
import { getCapstoneDetail, type CapstoneDetailContent } from "@/lib/capstone-details";
import type { CapstoneArticleContent } from "@/lib/capstone-article";
import { filmmakingArticle } from "@/lib/filmmaking-article";
import { qualitaxArticle } from "@/lib/qualitax-article";

const capstoneArticles: Partial<Record<string, typeof filmmakingArticle>> = {
  "bridging-cultures-through-film": filmmakingArticle,
  "mapping-ai-risk": qualitaxArticle,
};
export const Route = createFileRoute("/practicums_/startup-lab-camp/capstones/$capstoneId")({
  loader: ({ params }) => {
    const capstone = publishedCapstones().find((item) => item.id === params.capstoneId);
    if (!capstone) throw notFound();
    return capstone;
  },
  head: ({ loaderData, match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: loaderData ? loaderData.title + " — EPOCHA" : "Capstone unavailable — EPOCHA",
      description: loaderData?.summary ?? "This capstone is not currently published.",
      path: "/practicums/startup-lab-camp/capstones/" + (loaderData?.id ?? "unavailable"),
      noIndex: !loaderData,
    }),
  component: CapstoneDetail,
  notFoundComponent: CapstoneUnavailable,
});
function CapstoneUnavailable() {
  const { t } = useI18n();
  return (
    <section className="container-x py-24">
      <h1 className="text-4xl font-bold">{t("Capstone unavailable")}</h1>
      <p className="mt-6">{t("This capstone is not currently published.")}</p>
      <Link
        className="mt-8 inline-flex rounded-full bg-lime px-6 py-3 font-semibold text-ink"
        to="/practicums/startup-lab-camp/open-capstones"
      >
        {t("Browse capstones")}
      </Link>
    </section>
  );
}
function CapstoneDetail() {
  const item = Route.useLoaderData();
  const { t, locale } = useI18n();
  const detail = getCapstoneDetail(item.id, locale);
  const article = capstoneArticles[item.id]?.[locale];
  return (
    <section className="bg-background text-foreground">
      {article && (
        <header className="bg-[#1a120d] text-cream">
          <div className="container-x py-14 sm:py-20">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest">
              {t("Practicums")}
              <span aria-hidden="true" className="h-px w-12 bg-lime" />
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl leading-tight font-bold sm:text-6xl md:text-7xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed font-semibold sm:text-xl">
              {article.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
              <CapstoneActions item={item} variant="detail" />
              <a
                href="#program-details"
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
              >
                {locale === "ko" ? "프로그램 상세 안내" : "Program details"}{" "}
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </header>
      )}
      <div className={article ? "container-x pb-16 md:pb-24" : "container-x py-16 md:py-24"}>
        {!article && (
          <>
            <Link
              to="/practicums/startup-lab-camp/open-capstones"
              className="font-semibold underline underline-offset-4"
            >
              {t("Back to open capstones")}
            </Link>
            <p className="mt-10 text-sm text-muted-foreground">
              {t(item.track)} · {t(item.fieldLabel ?? capstoneFieldLabel(item.field))}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold md:text-6xl">{t(item.title)}</h1>
            <CapstonePartner item={item} />
            <p className="mt-8 max-w-3xl text-lg leading-relaxed">
              {detail?.lead ?? t(item.summary)}
            </p>
          </>
        )}
        {detail ? (
          <ProgramDetails item={item} detail={detail} article={article} />
        ) : (
          <LegacyCapstoneDetails item={item} />
        )}
      </div>
    </section>
  );
}

function ProgramDetails({
  item,
  detail,
  article,
}: {
  item: CampCapstone;
  detail: CapstoneDetailContent;
  article?: CapstoneArticleContent;
}) {
  const { t, locale } = useI18n();
  const isKorean = locale === "ko";
  const fee = item.intake?.feeUsd ? `${item.fees} (${item.intake.feeUsd})` : item.fees;
  const deadline = item.intake?.closesAt;
  const deadlineText = deadline
    ? new Intl.DateTimeFormat(isKorean ? "ko-KR" : "en-US", {
        timeZone: "Asia/Seoul",
        dateStyle: "long",
        timeStyle: "short",
        hourCycle: "h23",
      }).format(new Date(deadline))
    : undefined;
  const facts: { label: string; value: ReactNode }[] = [
    { label: t("Age"), value: item.age ? t(item.age) : undefined },
    { label: t("Schedule"), value: detail.schedule },
    { label: t("Format"), value: detail.format },
    {
      label: isKorean ? "수업 언어" : "Language of instruction",
      value: isKorean ? "영어" : "English",
    },
    { label: isKorean ? "학생 1인당 참가비" : "Fee per student", value: fee },
  ];
  if (deadlineText) {
    facts.push({
      label: isKorean ? "신청 마감" : "Registration deadline",
      value: <time dateTime={deadline}>{deadlineText} KST</time>,
    });
  }

  return (
    <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
      <aside
        className={
          "rounded-3xl border border-border bg-card p-6 sm:p-8 lg:col-start-2 " +
          (article ? "lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto" : "")
        }
      >
        <h2 className="text-2xl font-bold">
          {isKorean ? "신청 및 참가비" : "Registration and fees"}
        </h2>
        <dl className="mt-6 space-y-4">
          {facts.map(({ label, value }) =>
            value ? (
              <div key={label}>
                <dt className="text-sm text-muted-foreground">{label}</dt>
                <dd className="mt-1 font-semibold">{value}</dd>
              </div>
            ) : null,
          )}
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          {isKorean
            ? "정원이 차면 조기 마감하며, 이후 신청자는 다음 기수 참가 대상이 될 수 있습니다."
            : "Registration closes early if the program fills. Additional applicants may be considered for the next cohort."}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {isKorean
            ? "접수 순서대로 신청서를 검토합니다. 참가 안내를 받은 뒤 참가비를 납부하면 등록이 확정됩니다."
            : "We review applications in the order we receive them. Registration is confirmed once you pay the fee after receiving your acceptance notice."}
        </p>
        <CapstoneActions item={item} variant="detail" />
        {item.pdfUrl && (
          <a
            href={item.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center font-semibold underline underline-offset-4"
          >
            {isKorean ? "프로그램 슬라이드 보기 (PDF)" : "View program slides (PDF)"}
          </a>
        )}
      </aside>

      {article ? (
        <CapstoneArticle article={article} item={item} />
      ) : (
        <div className="space-y-9 lg:col-start-1 lg:row-start-1">
          {detail.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-relaxed text-foreground/85">
                  {paragraph}
                </p>
              ))}
              {section.resources && (
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                  {section.resources.map(({ href, label }) => (
                    <li key={href}>
                      <a
                        href={href}
                        className="inline-flex min-h-11 items-center underline underline-offset-4"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <section>
            <h2 className="text-2xl font-bold">
              {isKorean ? "수료증" : "Certificate of completion"}
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/85">
              {isKorean
                ? "전 과정을 마친 학생은 KoreaPEN과 PEN Worldwide의 인증을 받은 수료증을 받습니다."
                : "Students who complete the entire program receive a certificate of completion certified by KoreaPEN and PEN Worldwide."}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
              <li>
                <a
                  href="https://www.koreapen.org/pe-programs"
                  className="inline-flex min-h-11 items-center underline underline-offset-4"
                >
                  KoreaPEN
                </a>
              </li>
              <li>
                <a
                  href="https://penworldwide.org/"
                  className="inline-flex min-h-11 items-center underline underline-offset-4"
                >
                  PEN Worldwide
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold">{t("Contact Us")}</h2>
            <p className="mt-4 leading-relaxed text-foreground/85">
              {isKorean
                ? "신청, 교육 과정, 학교 및 단체 참여에 관한 문의는 EPOCHA로 연락해 주세요."
                : "Contact EPOCHA with questions about registration, the program, or group participation."}
            </p>
            <Link
              to="/connect"
              className="mt-3 inline-flex min-h-11 items-center font-semibold underline underline-offset-4"
            >
              {t("Contact EPOCHA")}
            </Link>
          </section>
        </div>
      )}
    </div>
  );
}

function LegacyCapstoneDetails({ item }: { item: CampCapstone }) {
  const { t } = useI18n();
  return (
    <>
      <CapstoneActions item={item} variant="detail" />
      <div className="mt-12 grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div>
          {item.brief !== item.summary && (
            <>
              <h2 className="text-2xl font-bold">{t("Project brief")}</h2>
              <p className="mt-5 whitespace-pre-line leading-relaxed">{t(item.brief)}</p>
            </>
          )}
          {item.deliverables && (
            <>
              <h2 className="mt-10 text-2xl font-bold">{t("What you will deliver")}</h2>
              <ul className="mt-5 list-disc space-y-3 pl-5">
                {item.deliverables.map((text) => (
                  <li key={text}>{t(text)}</li>
                ))}
              </ul>
            </>
          )}
          <h2 className="mt-10 text-2xl font-bold">{t("Skills")}</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <li className="rounded-full border border-border px-4 py-2" key={skill}>
                {t(skill)}
              </li>
            ))}
          </ul>
        </div>
        <aside className="rounded-3xl border border-border bg-card p-7">
          <dl className="space-y-6">
            {[
              ["Age", item.age],
              ["Format", item.kind === "document-listing" ? undefined : item.format],
              ["Location", item.location],
              ["Dates", item.dates],
              ["Fees", item.fees],
              ["w/h add on", item.workshopAddon],
            ]
              .filter(([, value]) => value)
              .map(([label, value]) => (
                <div key={label}>
                  <dt className="text-sm text-muted-foreground">{t(label!)}</dt>
                  <dd className="mt-2 font-semibold">{t(value!)}</dd>
                </div>
              ))}
          </dl>
          {item.registrationUrl && (
            <>
              <a
                href={item.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-lime px-6 py-3 font-semibold text-ink"
              >
                {t("Register for this capstone")}
              </a>
              <p className="mt-3 text-sm text-muted-foreground">
                {t("Opens the registration provider in a new tab.")}
              </p>
            </>
          )}
        </aside>
      </div>
    </>
  );
}
