import assert from "node:assert/strict";
import test from "node:test";
import { getCapstoneDetail } from "../src/lib/capstone-details.ts";
import { filmmakingArticle } from "../src/lib/filmmaking-article.ts";

test("the filmmaking article follows the updated outline in both languages", () => {
  for (const locale of ["en", "ko"] as const) {
    const article = filmmakingArticle[locale];
    const [intro, quote, slides, faq, mentor, , , , , , contact] = article.blocks;
    assert.equal(intro.kind, "intro");
    assert.equal(quote.kind, "quote");
    assert.equal(slides.kind, "slider");
    assert.equal(article.slideCount, 9);
    assert.equal(faq.kind, "faq");
    assert.equal(faq.items.length, 21);
    assert.equal(new Set(faq.items.map(({ question }) => question)).size, 21);
    assert.equal(mentor.kind, "heading");
    assert.equal(mentor.text, locale === "ko" ? "멘토 기업" : "Mentor Company");
    assert.equal(contact.kind, "heading");
    assert.equal(contact.text, locale === "ko" ? "문의하기" : "Contact us");
    assert.equal(article.blocks.at(-1)?.kind, "contacts");
  }
});

test("the filmmaking schedule and FAQ agree on April 17, 2027", () => {
  for (const locale of ["en", "ko"] as const) {
    const date = locale === "ko" ? /4월\s*17일/ : /April\s+17/;
    const detail = getCapstoneDetail("bridging-cultures-through-film", locale);
    const faq = filmmakingArticle[locale].blocks.find((block) => block.kind === "faq");
    assert.ok(detail);
    assert.ok(faq);
    assert.match(detail.schedule, date);
    for (const item of [faq.items[3], faq.items[6]]) {
      assert.match(JSON.stringify(item.answer), date);
    }
  }
});
