import type { ArticleInline, CapstoneArticleContent } from "./capstone-article";
import { cymFaq } from "./cym-faq.ts";
import type { Locale } from "./preferences";

type Block = CapstoneArticleContent["blocks"][number];

const mediaRoot = "/capstones/cym-article/";
const slideCount = 8;
const mentorProfile =
  "https://www.unesco.org/en/interculturaldialogue/youthforpeace/joanne-ascencion-valdez";
const cym = "https://www.facebook.com/CandonYouthMovement/";
const cymAbout = cym + "about";
const cre8te = "https://kr.wecre8te.com/";
const yusha = "https://www.yusha.ai/";

const strong = (text: string): ArticleInline => ({ text, strong: true });
const link = (text: string, href: string): ArticleInline => ({ text, href });
const paragraph = (...content: ArticleInline[]): Block => ({ kind: "paragraph", content });

function mentorCompanies(locale: Locale): Block[] {
  const ko = locale === "ko";
  return [
    { kind: "heading", text: ko ? "멘토 기업" : "Mentor Companies" },
    paragraph(
      ko
        ? "Cre8te와 Yusha가 멘토 기업으로 참여합니다. 멘토 기업은 실무 경험을 바탕으로 학생들을 지도하는 기업입니다."
        : "Cre8te and Yusha join us as our mentor companies. A mentor company or business mentor is a company from the real business world that provides mentoring to our students.",
    ),
    { kind: "heading", minor: true, text: "Cre8te" },
    { kind: "media", file: "cre8te-logo.png", alt: "", width: 376, height: 150 },
    paragraph(
      ko
        ? "학교를 위해 교복과 캠퍼스 문화·창의 상품의 디자인, 연구개발, 판매, 생산 및 관련 서비스를 제공합니다."
        : "We provide better solutions for schools engaging in the design, R&D, sales, production and services of school uniforms and campus cultural and creative products.",
    ),
    { kind: "resource", link: { text: "kr.wecre8te.com", href: cre8te } },
    {
      kind: "media",
      file: "cre8te-brochure.jpg",
      alt: ko ? "Cre8te 제품 브로슈어" : "Cre8te product brochure",
      width: 845,
      height: 480,
    },
    { kind: "heading", minor: true, text: "Yusha" },
    {
      kind: "media",
      file: "yusha.webp",
      alt: ko ? "Yusha의 일러스트 캐릭터 예시" : "Yusha’s illustrated character examples",
      width: 1400,
      height: 822,
    },
    paragraph(
      ko
        ? "그림을 움직이고 상호작용하는 캐릭터로 만들 수 있도록 돕습니다. 만든 캐릭터를 공유하거나, 워크숍에 활용하거나, 웹사이트에 마스코트로 추가할 수 있습니다."
        : "We help you turn drawings into animated, interactive characters. Make something to share, bring your workshop to life, or put your mascot on your website.",
    ),
    { kind: "resource", link: { text: "www.yusha.ai", href: yusha } },
  ];
}

function contacts(locale: Locale): Block {
  const ko = locale === "ko";
  return {
    kind: "contacts",
    items: [
      {
        title: ko ? "일반 문의" : "General inquiries",
        details: [],
        links: [
          { text: "WhatsApp · +44 7801 202 799", href: "https://wa.me/447801202799" },
          {
            text: ko ? "한국 · 010-2815-2212" : "Korea · 010-2815-2212",
            href: "tel:+821028152212",
          },
          { text: "hello@epocha.world", href: "mailto:hello@epocha.world" },
        ],
      },
      {
        title: ko ? "기업 파트너십 및 협업" : "Corporate partnerships and collaboration",
        details: ["Tayler Burns"],
        links: [{ text: "t.burns@epocha.world", href: "mailto:t.burns@epocha.world" }],
      },
      {
        title: ko ? "학교 파트너십 및 단체 참여" : "School partnerships and group participation",
        details: ["Tuya Mishig"],
        links: [{ text: "t.mishig@epocha.world", href: "mailto:t.mishig@epocha.world" }],
      },
    ],
  };
}

export const cymArticle: Record<Locale, CapstoneArticleContent> = {
  en: {
    title: "Student-led CAS project",
    subtitle: "A youth leadership and enrichment program with the Candon Youth Movement",
    mediaRoot,
    slideCount,
    blocks: [
      {
        kind: "intro",
        lead: [
          "On April 3, 2027, a team of students will open the doors to a book launch they planned from scratch, with a store they built to go with it. Every decision, from the concept to the guest experience, will be theirs.",
        ],
        paragraphs: [
          [
            "EPOCHA and ",
            link("the Candon Youth Movement", cymAbout),
            " (CYM) are inviting students aged 14 to 18 to take on that challenge in the Candon Youth Leadership & Enrichment Program 2027. Weekly coaching workshops, hands-on project sessions, and ongoing online mentoring from CYM lead mentor ",
            link("Joanne Ascencion Valdez", mentorProfile),
            " and industry mentors, including ",
            link("Cre8te", cre8te),
            " and ",
            link("Yusha", yusha),
            ", guide students from their first idea to launch day.",
          ],
        ],
      },
      {
        kind: "mentors",
        title: "Meet your CYM lead mentor",
        items: [
          {
            name: "Joanne Ascencion Valdez",
            photo: "mentor-joanne.jpg",
            dimensions: [480, 639],
            bio: [
              [
                strong("2016–2025"),
                " · Served three terms as a Candon City Councilor in Ilocos Sur.",
              ],
              [
                strong("2022–2023"),
                " · Honored by JCI among the Ten Outstanding Young Men of the Philippines and as a Young Person of the World.",
              ],
              [
                strong("2025–2026"),
                " · Recognized among 50 young leaders by UNESCO and as an Obama Foundation Asia-Pacific Leader.",
              ],
            ],
          },
        ],
      },
      {
        kind: "quote",
        text: "Five stories are now published. But the real work begins when the books leave our hands. When a child reads a story and begins to ask why. When a teacher uses it to start a conversation. When a young person realizes that peace is not an idea reserved for conferences or classrooms, but something we practice in the way we listen, include, and understand one another. These books are our small contribution to that work. We hope they travel to more classrooms, more communities, and more young people. And perhaps, somewhere along the way, a simple story can help someone see another person a little differently. That is the kind of peacebuilding we want to keep doing.",
        credit: "Joanne Valdez",
      },
      { kind: "slider" },
      {
        kind: "note",
        content: [
          "For current registration options, including individual and group applications, see the FAQ below.",
        ],
      },
      { kind: "faq", title: "Frequently asked questions", items: cymFaq.en },
      { kind: "heading", text: "About the Candon Youth Movement" },
      paragraph(
        "EPOCHA is running this capstone with the Candon Youth Movement, a youth-led, volunteer-driven nonprofit based in Candon City, Ilocos Sur, Philippines. CYM equips young people for active citizenship and community leadership through youth development, democratic participation, gender equality, education, peacebuilding, and sustainable development. The capstone supports CYM’s work with young people in the Philippines.",
      ),
      {
        kind: "media",
        file: "cym-organization.png",
        alt: "Candon Youth Movement community activities",
        width: 1428,
        height: 658,
      },
      { kind: "resource", link: { text: "Candon Youth Movement", href: cym } },
      ...mentorCompanies("en"),
      { kind: "heading", text: "Contact us" },
      paragraph(
        "Questions about registration, the curriculum, or participation by schools and organizations? Reach out using the contacts below.",
      ),
      contacts("en"),
    ],
  },
  ko: {
    title: "학생 주도 CAS 프로젝트",
    subtitle: "칸돈 청년 운동과 함께하는 청소년 리더십·역량 개발 프로그램",
    mediaRoot,
    slideCount,
    blocks: [
      {
        kind: "intro",
        lead: [
          "2027년 4월 3일, 학생들은 처음부터 직접 기획한 출간 행사를 열고, 책과 연계한 스토어도 선보입니다. 행사의 콘셉트부터 관객이 현장에서 경험할 내용까지 학생들이 직접 결정합니다.",
        ],
        paragraphs: [
          [
            "EPOCHA와 ",
            link("칸돈 청년 운동", cymAbout),
            "(CYM)은 2027 칸돈 청소년 리더십·역량 개발 프로그램에 만 14~18세 학생을 초대합니다. 매주 코칭 워크숍과 프로젝트 실습이 진행되며, CYM의 대표 멘토 ",
            link("조앤 아센시온 발데스", mentorProfile),
            "와 ",
            link("Cre8te", cre8te),
            ", ",
            link("Yusha", yusha),
            " 등 업계 멘토가 첫 아이디어부터 행사 당일까지 온라인 멘토링을 이어갑니다.",
          ],
        ],
      },
      {
        kind: "mentors",
        title: "CYM 대표 멘토 소개",
        items: [
          {
            name: "조앤 아센시온 발데스",
            photo: "mentor-joanne.jpg",
            dimensions: [480, 639],
            bio: [
              [
                strong("2016~2025년"),
                " · 필리핀 일로코스수르주 칸돈시 시의원으로 세 차례 재임했습니다.",
              ],
              [
                strong("2022~2023년"),
                " · JCI 필리핀 우수 청년 10인과 세계 우수 청년으로 선정됐습니다.",
              ],
              [
                strong("2025~2026년"),
                " · 유네스코 청년 리더 50인과 오바마 재단 아시아·태평양 리더로 선정됐습니다.",
              ],
            ],
          },
        ],
      },
      {
        kind: "quote",
        text: "이제 다섯 편의 이야기가 출간됐습니다. 책이 우리 손을 떠날 때 비로소 본격적인 일이 시작됩니다. 아이가 이야기를 읽으며 왜 그런지 묻고, 교사가 그 책으로 대화의 물꼬를 트는 순간이 있습니다. 청소년이 평화란 회의나 교실에 머무는 개념이 아니라 서로의 말을 듣고, 포용하고, 이해하는 방식으로 실천하는 것임을 깨닫는 순간도 있습니다. 이 책들은 그 일에 보태는 우리의 작은 기여입니다. 더 많은 교실과 지역사회, 더 많은 청소년에게 닿기를 바랍니다. 어쩌면 이야기 한 편을 통해 누군가가 다른 사람을 조금 다르게 바라볼 수도 있습니다. 우리가 계속해 나가고 싶은 평화 구축은 바로 그런 일입니다.",
        credit: "조앤 발데스",
      },
      { kind: "slider" },
      {
        kind: "note",
        content: ["개인 및 단체 신청을 포함한 최신 신청 방법은 아래 자주 묻는 질문을 참고하세요."],
      },
      { kind: "faq", title: "자주 묻는 질문", items: cymFaq.ko },
      { kind: "heading", text: "칸돈 청년 운동(CYM) 소개" },
      paragraph(
        "EPOCHA는 필리핀 일로코스수르주 칸돈시에 기반을 둔 청년 주도 자원봉사 비영리단체 칸돈 청년 운동과 함께 이 캡스톤을 운영합니다. CYM은 청소년 역량 강화, 민주적 참여, 성평등, 교육, 평화 구축, 지속가능한 발전을 통해 청소년이 적극적으로 사회에 참여하고 지역사회 리더로 성장하도록 돕습니다. 이 캡스톤은 필리핀 청소년을 위한 CYM의 활동을 지원합니다.",
      ),
      {
        kind: "media",
        file: "cym-organization.png",
        alt: "칸돈 청년 운동의 지역사회 활동",
        width: 1428,
        height: 658,
      },
      { kind: "resource", link: { text: "칸돈 청년 운동", href: cym } },
      ...mentorCompanies("ko"),
      { kind: "heading", text: "문의하기" },
      paragraph("신청 방법, 교육 과정, 학교 및 단체 참여에 관한 문의는 아래 연락처로 보내 주세요."),
      contacts("ko"),
    ],
  },
};
