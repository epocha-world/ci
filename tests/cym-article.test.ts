import assert from "node:assert/strict";
import test from "node:test";
import { getCapstoneDetail } from "../src/lib/capstone-details.ts";
import { cymArticle } from "../src/lib/cym-article.ts";

test("CYM uses the updated article outline and schedule in both languages", () => {
  for (const locale of ["en", "ko"] as const) {
    const { blocks, slideCount } = cymArticle[locale];
    const quote = blocks.findIndex((block) => block.kind === "quote");
    assert.ok(quote >= 0);
    assert.equal(blocks[quote + 1]?.kind, "slider");
    assert.equal(slideCount, 8);

    const faq = blocks[quote + 3];
    assert.ok(faq?.kind === "faq");
    assert.equal(faq.items.length, 20);
    assert.equal(new Set(faq.items.map(({ question }) => question)).size, 20);
    assert.deepEqual(
      blocks.filter((block) => block.kind === "heading" && !block.minor).map((block) => block.text),
      locale === "en"
        ? ["About the Candon Youth Movement", "Mentor Companies", "Contact us"]
        : ["칸돈 청년 운동(CYM) 소개", "멘토 기업", "문의하기"],
    );
    assert.equal(blocks.at(-1)?.kind, "contacts");

    const detail = getCapstoneDetail("filipino-heritage-book-launch", locale);
    const date = locale === "en" ? /April 3/ : /4월 3일/;
    assert.ok(detail);
    assert.match(detail.schedule, date);
    assert.match(JSON.stringify(faq.items[4].answer), date);
  }
});
