import { Link } from "@tanstack/react-router";
import { ArrowRight, Info } from "lucide-react";
import { useI18n } from "@/i18n";
import {
  capstoneApplicationUrl,
  capstoneInterestUrl,
  isCapstoneRegistrationOpen,
  type CampCapstone,
} from "@/lib/camp-capstones";

export function CapstoneActions({
  item,
  variant = "card",
}: {
  item: CampCapstone;
  variant?: "card" | "detail";
}) {
  const { t } = useI18n();
  const button =
    "inline-flex min-h-11 min-w-0 items-center justify-center whitespace-nowrap rounded-full border border-border px-2 py-3 text-sm font-semibold sm:px-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
  if (item.intake) {
    const isOpen = isCapstoneRegistrationOpen(item.intake);
    const waitlistSubject = encodeURIComponent(`Waitlist inquiry — ${item.title}`);
    return (
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <a
          href={
            isOpen ? capstoneApplicationUrl : `mailto:hello@epocha.world?subject=${waitlistSubject}`
          }
          target={isOpen ? "_blank" : undefined}
          rel={isOpen ? "noopener noreferrer" : undefined}
          className="btn-primary min-h-11 px-5 py-2.5"
        >
          {t(isOpen ? "Register" : "Ask about the waitlist")}
          <ArrowRight aria-hidden="true" className="size-4" />
        </a>
        {variant === "card" && (
          <Link
            to="/practicums/startup-lab-camp/capstones/$capstoneId"
            params={{ capstoneId: item.id }}
            aria-label={t("Info for {{program}}", { program: t(item.title) })}
            title={t("Program information")}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background hover:bg-lime hover:text-ink"
          >
            <Info aria-hidden="true" className="size-5" />
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-5">
      {item.pdfUrl && (
        <a
          href={item.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t("PREVIEW")}: ${t(item.title)} (PDF)`}
          className={button}
        >
          {t("PREVIEW")}
        </a>
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
