import { useI18n } from "@/i18n";
import { capstoneInterestUrl, type CampCapstone } from "@/lib/camp-capstones";

export function CapstoneActions({ item }: { item: CampCapstone }) {
  const { t } = useI18n();
  const button =
    "inline-flex min-h-11 items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
  return (
    <div className="mt-5 flex flex-wrap gap-3 border-t border-border pt-5">
      {item.pdfUrl && (
        <>
          <a
            href={item.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t("PREVIEW")}: ${t(item.title)} (PDF)`}
            className={button}
          >
            {t("PREVIEW")}
          </a>
          <a
            href={item.pdfUrl}
            download
            aria-label={`${t("Download PDF")}: ${t(item.title)}`}
            className={button}
          >
            {t("Download PDF")}
          </a>
        </>
      )}
      <a
        href={capstoneInterestUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${button} bg-lime text-ink`}
      >
        {t("I'm interested")}
      </a>
    </div>
  );
}
