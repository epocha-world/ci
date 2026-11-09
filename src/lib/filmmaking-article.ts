import type { CapstoneArticleContent } from "./capstone-article";
import { filmmakingFaq } from "./filmmaking-faq.ts";
import type { Locale } from "./preferences";

const seagullFilmsUrl = "https://www.theseagullfilms.com/films/";

export const filmmakingArticle: Record<Locale, CapstoneArticleContent> = {
  en: {
    mediaRoot: "/capstones/filmmaking-article/",
    slideCount: 9,
    title: "Filmmaking Capstone",
    subtitle:
      "A real-world project for young creatives and a standout CAS project for IB Diploma students",
    blocks: [
      {
        kind: "intro",
        lead: [
          "What if, before you even start applying to university or looking for a job, students’ name were already in the credits of a film they made themselves?",
        ],
        paragraphs: [
          [
            "EPOCHA and ",
            { text: "The Seagull Production", href: seagullFilmsUrl },
            " are launching a short film program for students ages 14 to 18. This year’s project asks: ",
            {
              text: "How does artificial intelligence (AI) affect teens’ social relationships and sense of belonging?",
              strong: true,
            },
            " Students will decide for themselves whether AI helps young people build relationships or weakens them and express their conclusions on film.",
          ],
          [
            "Participants will be mentored by an international production company whose team has worked on projects for Netflix, Sony Entertainment, and Amazon Prime. Students go through the entire filmmaking process, from developing an idea to planning, shooting, editing, and a public screening. At the end, each student walks away with a film that carries their name in the credits, plus a certificate of completion. The finished film can go straight into a college or job portfolio. The experience of telling a story from start to finish is an asset in its own right!",
          ],
          [
            "The program is built around mentoring from filmmaking professionals. The Seagull Production’s founder and CEO, ",
            {
              text: "Lucie Charles",
              strong: true,
            },
            ", will guide students as they turn their own ideas and creative vision into a real film. Through the finished work, students can show creativity, teamwork, and the ability to see an idea through to the end.",
          ],
        ],
        profile: {
          photo: "lucie-charles.webp",
          dimensions: [1100, 1316],
          photoAlt: "Lucie Charles",
          name: "Lucie Charles | Production Department, Producer, Production Manager",
          credit: "Known for: The Promised Land, Extraction II, The Wheel of Time",
          link: {
            text: "IMDb",
            href: "https://www.imdb.com/name/nm14008765/",
          },
        },
      },
      {
        kind: "quote",
        text: "We hope that the audience will step into the characters' journey and discover compassion, understanding, and ultimately hope, no matter how distant the background or culture may feel.",
        credit: "Lucie Charles",
      },
      { kind: "slider" },
      { kind: "faq", title: "Frequently asked questions", items: filmmakingFaq.en },
      {
        kind: "heading",
        text: "Mentor Company",
      },
      {
        kind: "paragraph",
        content: [
          "The Seagull Production joins us as our mentor company for the filmmaking capstone. A mentor company or business mentor is a company from the real business world that provides mentoring to our students.",
        ],
      },
      {
        kind: "media",
        file: "seagull-journal.jpg",
        alt: "The Seagull Production Journal",
        width: 500,
        height: 300,
      },
      {
        kind: "resource",
        link: {
          text: "Seagull Production — Journal",
          href: "https://www.theseagullfilms.com/journal/",
        },
      },
      {
        kind: "paragraph",
        content: [
          "We are an international production company specializing in films, commercials, and branded content based in Czechia and South Korea.",
        ],
      },
      {
        kind: "resource",
        link: { text: "www.theseagullfilms.com", href: "https://www.theseagullfilms.com/" },
      },
      {
        kind: "heading",
        text: "Contact us",
      },
      {
        kind: "paragraph",
        content: [
          "Questions about how to register, the curriculum, or participation by schools and organizations?",
        ],
      },
      {
        kind: "paragraph",
        content: ["Reach out using the contacts below."],
      },
      {
        kind: "contacts",
        items: [
          {
            title: "General inquiries",
            details: [],
            links: [
              {
                text: "WhatsApp · +44 7801 202 799",
                href: "https://wa.me/447801202799",
              },
              {
                text: "Korea · 010-2815-2212",
                href: "tel:+821028152212",
              },
              {
                text: "hello@epocha.world",
                href: "mailto:hello@epocha.world",
              },
            ],
          },
          {
            title: "Corporate partnerships and collaboration",
            details: ["Tayler Burns"],
            links: [
              {
                text: "t.burns@epocha.world",
                href: "mailto:t.burns@epocha.world",
              },
            ],
          },
          {
            title: "School partnerships and group participation",
            details: ["Tuya Mishig"],
            links: [
              {
                text: "t.mishig@epocha.world",
                href: "mailto:t.mishig@epocha.world",
              },
            ],
          },
        ],
      },
    ],
  },
  ko: {
    mediaRoot: "/capstones/filmmaking-article/",
    slideCount: 9,
    title: "나의 첫 영화, 나의 첫 크레디트",
    subtitle: "청소년을 위한 실전 영화 제작 프로젝트 | IB 디플로마 학생을 위한 CAS 프로젝트",
    blocks: [
      {
        kind: "intro",
        lead: [
          "대학 진학이나 취업을 준비하기도 전에, 내가 직접 제작한 영화의 크레디트에 내 이름을 올릴 수 있다면 어떨까요?",
        ],
        paragraphs: [
          [
            "EPOCHA와 ",
            {
              text: "The Seagull Production",
              href: seagullFilmsUrl,
            },
            " 이 만 14~18세 청소년을 위한 특별한 단편 영화 제작 프로그램을 선보입니다. 이번 프로젝트에서는 ",
            {
              text: "‘인공지능(AI)은 청소년의 사회적 관계와 소속감에 어떤 영향을 미치는가?’",
              strong: true,
            },
            "라는 질문을 탐구합니다.",
          ],
          [
            "AI가 청소년들의 관계 형성에 긍정적인 역할을 하는지, 오히려 관계를 약화시키는지 학생들이 직접 고민하고 이를 영화로 표현합니다. 참가 학생들은 넷플릭스, 소니 엔터테인먼트, 아마존 프라임 관련 작품 제작에 참여한 경험이 있는 국제 제작사의 지도를 받으며, 아이디어 구상부터 기획, 촬영, 편집, 공개 상영에 이르기까지 영화 제작의 전 과정을 경험합니다. 프로그램을 마치면 자신의 이름이 크레디트에 기재된 영화 작품과 수료증을 얻게 됩니다. 완성된 작품은 진학이나 취업을 위한 포트폴리오로 활용할 수 있으며, 제작 과정에서 쌓은 경험은 자신만의 이야기를 전달하는 소중한 자산이 됩니다.",
          ],
          [
            "프로그램은 영화 제작 전문가들의 멘토링을 중심으로 진행됩니다. 특히 The Seagull Production의 창립자이자 CEO인 ",
            {
              text: "Lucie Charles",
              strong: true,
            },
            "가 학생들이 각자의 아이디어와 창의적인 시각을 실제 영화로 구현할 수 있도록 지도합니다. 학생들은 자신이 직접 참여해 완성한 작품을 통해 창의성과 협업 능력, 그리고 아이디어를 끝까지 실현하는 역량을 보여줄 수 있습니다.",
          ],
        ],
        profile: {
          photo: "lucie-charles.webp",
          dimensions: [1100, 1316],
          photoAlt: "Lucie Charles",
          name: "Lucie Charles | Production Department, Producer, Production Manager",
          credit: "Known for: The Promised Land, Extraction II, The Wheel of Time",
          link: {
            text: "IMDb",
            href: "https://www.imdb.com/name/nm14008765/",
          },
        },
      },
      {
        kind: "quote",
        text: "저희는 관객이 등장인물들의 여정 속으로 들어가, 배경이나 문화가 아무리 멀게 느껴지더라도 연민과 이해, 그리고 결국에는 희망을 발견하기를 바랍니다.",
        credit: "Lucie Charles",
      },
      { kind: "slider" },
      { kind: "faq", title: "자주 묻는 질문", items: filmmakingFaq.ko },
      {
        kind: "heading",
        text: "멘토 기업",
      },
      {
        kind: "paragraph",
        content: [
          "The Seagull Production은 이번 영화 제작 캡스톤에 멘토 기업으로 참여합니다. 멘토 기업은 실무 현장에서 쌓은 경험을 바탕으로 학생들을 지도하는 기업입니다.",
        ],
      },
      {
        kind: "media",
        file: "seagull-journal.jpg",
        alt: "The Seagull Production Journal",
        width: 500,
        height: 300,
      },
      {
        kind: "resource",
        link: {
          text: "Seagull Production — Journal",
          href: "https://www.theseagullfilms.com/journal/",
        },
      },
      {
        kind: "paragraph",
        content: [
          "저희는 체코와 한국을 기반으로 영화, 광고, 브랜드 콘텐츠를 제작하는 국제 영상 제작사입니다.",
        ],
      },
      {
        kind: "resource",
        link: { text: "www.theseagullfilms.com", href: "https://www.theseagullfilms.com/" },
      },
      {
        kind: "heading",
        text: "문의하기",
      },
      {
        kind: "paragraph",
        content: [
          "프로그램 신청 방법이나 교육 과정, 학교 및 단체 참여에 대해 궁금한 사항이 있으신가요?",
        ],
      },
      {
        kind: "paragraph",
        content: ["아래 연락처로 문의해 주시면 프로그램 참여와 관련된 내용을 안내해 드리겠습니다."],
      },
      {
        kind: "contacts",
        items: [
          {
            title: "일반 문의",
            details: [],
            links: [
              {
                text: "WhatsApp · +44 7801 202 799",
                href: "https://wa.me/447801202799",
              },
              {
                text: "한국 연락처 · 010-2815-2212",
                href: "tel:+821028152212",
              },
              {
                text: "hello@epocha.world",
                href: "mailto:hello@epocha.world",
              },
            ],
          },
          {
            title: "기업 제휴 및 협력 문의",
            details: ["Tayler Burns"],
            links: [
              {
                text: "t.burns@epocha.world",
                href: "mailto:t.burns@epocha.world",
              },
            ],
          },
          {
            title: "학교 제휴 및 단체 참여 문의",
            details: ["Tuya Mishig"],
            links: [
              {
                text: "t.mishig@epocha.world",
                href: "mailto:t.mishig@epocha.world",
              },
            ],
          },
        ],
      },
    ],
  },
};
