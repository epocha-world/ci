import assert from "node:assert/strict";
import test from "node:test";
import { getCapstoneDetail } from "../src/lib/capstone-details.ts";
import { qualitaxArticle } from "../src/lib/qualitax-article.ts";

test("QualitaX follows the updated bilingual outline and keeps mentor photos paired", () => {
  for (const locale of ["en", "ko"] as const) {
    const { blocks, slideCount } = qualitaxArticle[locale];
    const [intro, quote, slides, note, faq] = blocks;
    assert.equal(intro.kind, "intro");
    assert.ok(quote.kind === "quote");
    assert.equal(quote.credit, "QualitaX");
    assert.equal(slides.kind, "slider");
    assert.equal(slideCount, 7);
    assert.equal(note.kind, "note");
    assert.ok(faq.kind === "faq");
    assert.equal(faq.items.length, 18);
    assert.equal(new Set(faq.items.map(({ question }) => question)).size, 18);
    assert.deepEqual(
      blocks.filter((block) => block.kind === "heading").map((block) => block.text),
      locale === "en"
        ? ["About QualitaX", "Mentor Company", "Contact us"]
        : ["QualitaX 소개", "멘토 기업", "문의하기"],
    );
    const mentors = blocks.find((block) => block.kind === "mentors");
    assert.ok(mentors);
    assert.deepEqual(
      mentors.items.map(({ name, photo }) => [name, photo]),
      [
        ["Anaïs Ofranc", "mentor-anais.jpg"],
        [locale === "en" ? "Dr. Danya Nusseir" : "Danya Nusseir 박사", "mentor-danya.jpg"],
      ],
    );
    assert.equal(blocks.at(-1)?.kind, "contacts");

    const detail = getCapstoneDetail("mapping-ai-risk", locale);
    const date = locale === "en" ? /March 22/ : /3월 22일/;
    assert.ok(detail);
    assert.match(detail.schedule, date);
    assert.match(JSON.stringify(faq.items[3].answer), date);
  }
});
