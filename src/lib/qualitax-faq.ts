import type { ArticleInline, CapstoneFaqItem } from "./capstone-article";
import type { Locale } from "./preferences";

type FaqAnswer = CapstoneFaqItem["answer"][number];

function paragraph(...content: ArticleInline[]): FaqAnswer {
  return { kind: "paragraph", content };
}

function list(...items: ArticleInline[][]): FaqAnswer {
  return { kind: "list", items };
}

const koreaPen = { text: "KoreaPEN", href: "https://www.koreapen.org/pe-programs" };
const penWorldwide = { text: "PEN Worldwide", href: "https://penworldwide.org/" };
const casGuidance =
  "https://ibo.org/programmes/diploma-programme/curriculum/dp-core/creativity-activity-and-service/cas-projects/";

export const qualitaxFaq: Record<Locale, CapstoneFaqItem[]> = {
  en: [
    {
      question: "What is this program?",
      answer: [
        paragraph(
          "Responsible AI: Mapping the Risk is an AI governance research project for students aged 17 to 18. Students step into the role of a junior policy researcher: they choose an industry, find real AI applications, and classify each one under two laws, the EU AI Act and Korea’s AI Basic Act.",
        ),
        paragraph(
          "The program ends with students presenting their research to a small panel of experts, including QualitaX leadership.",
        ),
      ],
    },
    {
      question: "Who is it for?",
      answer: [
        list(
          ["Teens aged 17 to 18"],
          ["Students curious about AI governance and where it could lead them"],
          ["Students who want a research-based portfolio piece"],
          ["Students who want a standout project for university applications or job interviews"],
          ["Students who want to build professional and leadership skills early"],
        ),
      ],
    },
    {
      question: "Why does this topic matter?",
      answer: [
        paragraph(
          "Whether students go into medicine, finance, law, education, or another field, they will work with AI systems that laws classify by risk. AI governance increasingly informs decisions in procurement, investment, insurance, and regulation, so understanding how those decisions are made gives students an early advantage.",
        ),
      ],
    },
    {
      question: "When does the program run?",
      answer: [
        paragraph(
          "Mondays, 15:30 to 17:00 KST, January 4 to March 22, 2027. That is 10 sessions of 90 minutes each.",
        ),
      ],
    },
    {
      question: "Is it online or in person?",
      answer: [paragraph("Online.")],
    },
    {
      question: "What language are classes taught in?",
      answer: [
        paragraph(
          "English. Students should be comfortable taking classes, exchanging ideas, and collaborating in English.",
        ),
      ],
    },
    {
      question: "How does the program build employability skills?",
      answer: [
        list(
          [
            "AI in the workplace: Students research responsibly, compare the EU AI Act and Korea’s AI Basic Act, and use AI to explore sources, organise findings, and test ideas, then verify every claim independently.",
          ],
          [
            "EPOCH awareness: Empathy, Presence, Opinion, Creativity, and Hope inform how students judge an AI system’s risks and its impact on real lives.",
          ],
          [
            "Leadership workshops: Students practise communication, decision-making, and team responsibility while carrying a research project from question to conclusion.",
          ],
          [
            "Intercultural dialogue: Students discuss how AI affects others’ lives and listen to people affected in their own communities.",
          ],
        ),
      ],
    },
    {
      question: "Will students use AI themselves?",
      answer: [
        paragraph(
          "Yes, but responsibly. They use AI to explore sources and organise findings, then verify every claim themselves.",
        ),
      ],
    },
    {
      question: "What is the EPOCH Framework?",
      answer: [
        paragraph(
          "EPOCHA’s competency model: Empathy and Emotional Intelligence, Presence through Networking and Connectedness, Opinion through Judgment and Ethics, Creativity and Imagination, and Hope through Vision and Leadership.",
        ),
      ],
    },
    {
      question: "Why should my teen register?",
      answer: [
        paragraph("Students who complete the project gain:"),
        list(
          [
            "Real research experience, working as junior policy researchers from the research question to the final presentation",
          ],
          ["A portfolio piece with substance, ready for applications and interviews"],
          [
            "A head start in an emerging field, including meeting QualitaX experts and discussing career pathways in AI governance",
          ],
          [
            "Skills employers look for: critical thinking, clear communication, and responsible AI use",
          ],
        ),
      ],
    },
    {
      question: "Is there a certificate?",
      answer: [
        paragraph(
          "Yes. Students who complete the full program receive a certificate of completion certified by ",
          koreaPen,
          " and ",
          penWorldwide,
          ", EPOCHA’s partner organizations.",
        ),
      ],
    },
    {
      question: "Who owns the work students create?",
      answer: [
        paragraph(
          "Students own what they create. By joining, they grant EPOCHA a permanent license to use their work for program promotion and impact only.",
        ),
      ],
    },
    {
      question: "How much does it cost?",
      answer: [paragraph("₩300,000 per student (US$225).")],
    },
    {
      question: "What is the registration deadline?",
      answer: [
        paragraph(
          "December 19, 2026 at 23:59 KST. Registration may close earlier if the program fills, and additional applicants may be considered for the next cohort.",
        ),
      ],
    },
    {
      question: "How does registration work?",
      answer: [
        paragraph(
          "Applications are reviewed in the order received, and acceptance notices are sent on a rolling basis until the program is full. After you receive your acceptance notice, follow the payment instructions. Registration is final once payment is complete.",
        ),
      ],
    },
    {
      question: "Can this count as a CAS project?",
      answer: [
        paragraph(
          "Each school’s CAS coordinator determines whether a project counts toward CAS. See ",
          { text: "the IB’s official CAS project guidance", href: casGuidance },
          " for details.",
        ),
      ],
    },
    {
      question: "Can schools or parent communities register as a group?",
      answer: [
        paragraph(
          "Yes. Once students form a team, a designated school or parent representative submits the application on their behalf. Groups outside of schools may also apply.",
        ),
      ],
    },
    {
      question: "I don’t have a team yet. Can I still join?",
      answer: [paragraph("Yes. Students who apply individually can receive help joining a team.")],
    },
  ],
  ko: [
    {
      question: "어떤 프로그램인가요?",
      answer: [
        paragraph(
          "‘책임 있는 AI: 위험 분류’는 만 17~18세 학생을 위한 AI 거버넌스 연구 프로젝트입니다. 학생들은 주니어 정책 연구원이 되어 산업 분야를 정하고 실제 AI 활용 사례를 찾은 뒤, EU AI법과 한국 AI 기본법에 따라 각 사례를 분류합니다.",
        ),
        paragraph(
          "프로그램 마지막에는 QualitaX 경영진이 포함된 소규모 전문가 패널 앞에서 연구 결과를 발표합니다.",
        ),
      ],
    },
    {
      question: "누가 참여할 수 있나요?",
      answer: [
        list(
          ["만 17~18세 청소년"],
          ["AI 거버넌스와 관련 진로에 관심 있는 학생"],
          ["연구를 바탕으로 한 결과물을 포트폴리오에 담고 싶은 학생"],
          ["대학 지원이나 취업 면접에서 소개할 만한 프로젝트를 찾는 학생"],
          ["실무 역량과 리더십을 일찍 기르고 싶은 학생"],
        ),
      ],
    },
    {
      question: "이 주제는 왜 중요한가요?",
      answer: [
        paragraph(
          "의료, 금융, 법률, 교육 등 어느 분야로 진출하든 학생들은 법에 따라 위험 수준이 분류되는 AI 시스템을 접하게 됩니다. AI 거버넌스는 조달, 투자, 보험, 규제 관련 의사결정에 점점 더 큰 영향을 미칩니다. 이러한 결정이 어떻게 이루어지는지 미리 이해하면 진로를 준비하는 데 도움이 됩니다.",
        ),
      ],
    },
    {
      question: "프로그램은 언제 진행되나요?",
      answer: [
        paragraph(
          "2027년 1월 4일부터 3월 22일까지 월요일 15:30~17:00 KST에 진행됩니다. 회당 90분씩 총 10회입니다.",
        ),
      ],
    },
    {
      question: "온라인으로 진행되나요, 대면으로 진행되나요?",
      answer: [paragraph("온라인으로 진행됩니다.")],
    },
    {
      question: "수업은 어떤 언어로 진행되나요?",
      answer: [
        paragraph(
          "영어로 진행됩니다. 학생들은 영어로 수업을 듣고, 의견을 나누고, 협업할 수 있어야 합니다.",
        ),
      ],
    },
    {
      question: "프로그램에서 어떤 진로 역량을 기르나요?",
      answer: [
        list(
          [
            "실무에서의 AI 활용: 학생들은 EU AI법과 한국 AI 기본법을 비교합니다. AI로 자료를 탐색하고 조사 결과를 정리하며 아이디어를 검토한 뒤, 각각의 주장을 직접 검증합니다.",
          ],
          [
            "EPOCH 역량: 공감, 존재감, 의견, 창의성, 희망을 바탕으로 AI 시스템의 위험과 실제 삶에 미치는 영향을 판단합니다.",
          ],
          [
            "리더십 워크숍: 연구 질문을 정하는 단계부터 결론을 도출하기까지 소통과 의사결정을 연습하고 팀에서 맡은 역할을 책임집니다.",
          ],
          [
            "문화 간 대화: AI가 다른 사람의 삶에 미치는 영향을 논의하고, 지역사회에서 AI의 영향을 받는 사람들의 이야기를 듣습니다.",
          ],
        ),
      ],
    },
    {
      question: "학생들도 직접 AI를 사용하나요?",
      answer: [
        paragraph(
          "네. AI를 책임 있게 활용합니다. AI로 자료를 탐색하고 조사 결과를 정리한 뒤, 각각의 주장을 직접 검증합니다.",
        ),
      ],
    },
    {
      question: "EPOCH 프레임워크란 무엇인가요?",
      answer: [
        paragraph(
          "EPOCHA의 역량 모델입니다. 공감과 감성지능, 네트워킹과 연결을 통한 존재감, 판단과 윤리를 바탕으로 한 의견, 창의성과 상상력, 비전과 리더십을 통한 희망으로 구성됩니다.",
        ),
      ],
    },
    {
      question: "참여하면 무엇을 얻을 수 있나요?",
      answer: [
        paragraph("프로젝트를 마치면 다음과 같은 경험과 역량을 얻습니다."),
        list(
          ["연구 질문을 정하는 단계부터 최종 발표까지 주니어 정책 연구원으로 활동하는 실전 경험"],
          ["지원서나 면접에서 활용할 수 있는 연구 결과물"],
          ["QualitaX 전문가를 만나 AI 거버넌스 분야의 진로를 살펴볼 기회"],
          ["비판적 사고, 명확한 소통, 책임 있는 AI 활용 등 실무에서 요구되는 역량"],
        ),
      ],
    },
    {
      question: "수료증이 발급되나요?",
      answer: [
        paragraph(
          "네. 전체 프로그램을 마친 학생에게 EPOCHA의 파트너 기관인 ",
          koreaPen,
          "과 ",
          penWorldwide,
          "가 인증한 수료증을 발급합니다.",
        ),
      ],
    },
    {
      question: "학생이 만든 결과물은 누구의 소유인가요?",
      answer: [
        paragraph(
          "학생이 만든 결과물은 학생 본인의 소유입니다. 참가 학생은 EPOCHA에 프로그램 홍보와 성과 공유를 목적으로만 결과물을 사용할 수 있는 영구 사용권을 부여합니다.",
        ),
      ],
    },
    {
      question: "참가비는 얼마인가요?",
      answer: [paragraph("학생 1인당 300,000원(미화 225달러)입니다.")],
    },
    {
      question: "신청 마감일은 언제인가요?",
      answer: [
        paragraph(
          "2026년 12월 19일 23:59 KST입니다. 정원이 차면 일찍 마감할 수 있으며, 이후 신청자는 다음 기수 참가 대상으로 검토할 수 있습니다.",
        ),
      ],
    },
    {
      question: "어떻게 신청하나요?",
      answer: [
        paragraph(
          "접수 순서대로 신청서를 검토하고 정원이 찰 때까지 참가 승인 안내를 순차적으로 보냅니다. 승인 안내를 받으면 안내에 따라 참가비를 결제해 주세요. 결제가 완료되면 참가가 확정됩니다.",
        ),
      ],
    },
    {
      question: "CAS 프로젝트로 인정받을 수 있나요?",
      answer: [
        paragraph(
          "CAS 인정 여부는 각 학교의 CAS 담당자가 결정합니다. 자세한 내용은 ",
          { text: "IB 공식 CAS 프로젝트 안내", href: casGuidance },
          "를 참고하세요.",
        ),
      ],
    },
    {
      question: "학교나 학부모 모임에서 단체로 신청할 수 있나요?",
      answer: [
        paragraph(
          "네. 학생들이 팀을 구성하면 학교 또는 학부모 대표가 팀을 대신해 신청할 수 있습니다. 학교 외 단체도 신청할 수 있습니다.",
        ),
      ],
    },
    {
      question: "아직 팀이 없어도 참여할 수 있나요?",
      answer: [paragraph("네. 개인으로 신청하면 팀에 합류할 수 있도록 도움을 받을 수 있습니다.")],
    },
  ],
};
