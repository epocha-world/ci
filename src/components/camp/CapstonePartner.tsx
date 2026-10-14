import type { CampCapstone } from "@/lib/camp-capstones";
export function CapstonePartner({ item }: { item: CampCapstone }) {
  return (
    <div className="mt-4 flex items-center gap-3">
      <p className="font-semibold" data-capstone-partner>
        {item.partnerUrl ? (
          <a
            href={item.partnerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-lime"
          >
            {item.partner}
          </a>
        ) : (
          item.partner
        )}
      </p>
    </div>
  );
}
