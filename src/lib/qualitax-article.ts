import type { ArticleInline, CapstoneArticleContent } from "./capstone-article";
import type { Locale } from "./preferences";
import { qualitaxFaq } from "./qualitax-faq.ts";
import { qualitaxMentors } from "./qualitax-mentors.ts";

type Block = CapstoneArticleContent["blocks"][number];

const mediaRoot = "/capstones/qualitax-article/";
const slideCount = 7;
const qualitaxUrl = "https://www.qualitax.io/";

const strong = (text: string): ArticleInline => ({ text, strong: true });
const link = (text: string, href: string): ArticleInline => ({ text, href });

function paragraph(...content: ArticleInline[]): Block {
  return { kind: "paragraph", content };
}

function contacts(locale: Locale): Block {
  const korean = locale === "ko";
  return {
    kind: "contacts",
    items: [
      {
        title: korean ? "일반 문의" : "General inquiries",
        details: [],
        links: [
          { text: "WhatsApp · +44 7801 202 799", href: "https://wa.me/447801202799" },
          {
            text: korean ? "한국 · 010-2815-2212" : "Korea · 010-2815-2212",
            href: "tel:+821028152212",
          },
          { text: "hello@epocha.world", href: "mailto:hello@epocha.world" },
        ],
      },
      {
        title: korean ? "기업 파트너십 및 협업" : "Corporate partnerships and collaboration",
        details: ["Tayler Burns"],
        links: [{ text: "t.burns@epocha.world", href: "mailto:t.burns@epocha.world" }],
      },
      {
        title: korean
          ? "학교 파트너십 및 단체 참여"
          : "School partnerships and group participation",
        details: ["Tuya Mishig"],
        links: [{ text: "t.mishig@epocha.world", href: "mailto:t.mishig@epocha.world" }],
      },
    ],
  };
}

export const qualitaxArticle: Record<Locale, CapstoneArticleContent> = {
  en: {
    title: "Responsible AI",
    subtitle: "An AI governance research project with industry leader QualitaX",
    mediaRoot,
    slideCount,
    blocks: [
      {
        kind: "intro",
        lead: [
          "AI is already part of how people learn, apply for jobs, get medical care, and manage money. The laws that decide how AI can be used are being written right now, and the students who understand them will be the ones working under those rules and shaping them.",
        ],
        paragraphs: [
          [
            link("QualitaX", qualitaxUrl),
            " is inviting students aged 17–18 to step into the shoes of a junior policy researcher in ",
            strong("Responsible AI: Mapping the Risk"),
            ". Students choose an industry, find real AI applications, and classify each one under two laws: the EU AI Act and Korea’s AI Basic Act. They explain their reasoning, record their evidence, and flag where a classification is uncertain. The program ends with students presenting their research to a small panel of experts, including QualitaX leadership.",
          ],
        ],
      },
      {
        kind: "quote",
        text: "AI governance is fast becoming a diligence gate — in procurement, investment, insurance, and regulation. Our job is to make sure you clear it, not with paperwork that fails the first time it’s checked, but with real controls that stand up to scrutiny.",
        credit: "QualitaX",
      },
      { kind: "slider" },
      {
        kind: "note",
        content: [
          "See the FAQ below for class hours and current registration options, including individual and group applications.",
        ],
      },
      { kind: "faq", title: "Frequently asked questions", items: qualitaxFaq.en },
      { kind: "heading", text: "About QualitaX" },
      paragraph(
        "EPOCHA runs this capstone with QualitaX, which is led by experienced, certified ISO/IEC 42001 Lead Implementers and Lead Auditors.",
      ),
      paragraph(
        "QualitaX helps organizations develop and use AI systems safely and responsibly, with auditing that helps earn stakeholders’ trust.",
      ),
      { kind: "resource", link: { text: "Visit QualitaX", href: qualitaxUrl } },
      { kind: "heading", text: "Mentor Company" },
      paragraph(
        strong("Who is QualitaX?"),
        " An organisation that helps companies develop and use AI systems safely and responsibly, with auditing that helps earn stakeholders’ trust. It is led by experienced, certified ISO/IEC 42001 Lead Implementers and Lead Auditors.",
      ),
      qualitaxMentors.en,
      { kind: "heading", text: "Contact us" },
      paragraph(
        "Questions about registration, the curriculum, or participation by schools and organizations? Reach out using the contacts below.",
      ),
      contacts("en"),
    ],
  },
  ko: {
    title: "책임 있는 AI",
    subtitle: "QualitaX와 함께하는 AI 거버넌스 연구 프로젝트",
    mediaRoot,
    slideCount,
    blocks: [
      {
        kind: "intro",
        lead: [
          "AI는 이미 우리가 배우고, 일자리에 지원하고, 의료 서비스를 받고, 돈을 관리하는 방식에 영향을 주고 있습니다. AI를 어떻게 사용할 수 있는지 정하는 법이 지금 만들어지고 있습니다. 이 규칙을 이해하는 학생들은 앞으로 그 규칙을 따르며 일하고, 규칙을 만드는 데에도 참여하게 됩니다.",
        ],
        paragraphs: [
          [
            link("QualitaX", qualitaxUrl),
            "는 17–18세 청소년을 ",
            strong("책임 있는 AI와 위험 분류"),
            " 프로젝트에 초대합니다. 학생들은 주니어 정책 연구원이 되어 관심 산업을 고르고, 실제 AI 활용 사례를 찾은 뒤 EU AI법과 한국의 AI 기본법에 따라 각각을 분류합니다. 판단 근거와 증거를 기록하고 분류가 불확실한 부분도 표시합니다. 과정 마지막에는 QualitaX 리더가 참여하는 전문가 심사단 앞에서 연구 결과를 발표합니다.",
          ],
        ],
      },
      {
        kind: "quote",
        text: "조달, 투자, 보험, 규제 분야에서 AI 거버넌스는 빠르게 실사의 핵심 기준이 되고 있습니다. 저희는 첫 점검에서 한계가 드러나는 서류에 의존하는 대신, 면밀한 검증을 견딜 수 있는 실질적인 통제 체계를 갖추도록 돕습니다.",
        credit: "QualitaX",
      },
      { kind: "slider" },
      {
        kind: "note",
        content: [
          "수업 시간과 개인·단체 신청을 포함한 최신 신청 방법은 아래 자주 묻는 질문을 참고하세요.",
        ],
      },
      { kind: "faq", title: "자주 묻는 질문", items: qualitaxFaq.ko },
      { kind: "heading", text: "QualitaX 소개" },
      paragraph(
        "EPOCHA는 ISO/IEC 42001 선임 구축 전문가와 선임 심사원 자격을 갖춘 팀이 이끄는 QualitaX와 함께 이 캡스톤을 운영합니다.",
      ),
      paragraph(
        "QualitaX는 조직이 안전하고 책임 있게 AI 시스템을 개발하고 사용하며, 감사 가능한 방식으로 이해관계자의 신뢰를 얻도록 돕습니다.",
      ),
      { kind: "resource", link: { text: "QualitaX 웹사이트", href: qualitaxUrl } },
      { kind: "heading", text: "멘토 기업" },
      paragraph(
        strong("QualitaX는 어떤 기업인가요?"),
        " 기업이 AI 시스템을 안전하고 책임 있게 개발하고 사용하도록 지원하며, 감사를 통해 이해관계자의 신뢰를 얻도록 돕습니다. ISO/IEC 42001 선임 구축 전문가와 선임 심사원 자격을 갖춘 팀이 이끌고 있습니다.",
      ),
      qualitaxMentors.ko,
      { kind: "heading", text: "문의하기" },
      paragraph("등록, 수업 내용, 학교 및 단체 참가에 관한 문의는 아래 연락처로 보내 주세요."),
      contacts("ko"),
    ],
  },
};
