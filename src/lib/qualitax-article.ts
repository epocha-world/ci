import type { ArticleInline, CapstoneArticleContent } from "./capstone-article";
import type { Locale } from "./preferences";

type Block = CapstoneArticleContent["blocks"][number];

const mediaRoot = "/capstones/qualitax-article/";
const slideCount = 7;

const strong = (text: string): ArticleInline => ({ text, strong: true });
const link = (text: string, href: string): ArticleInline => ({ text, href });

function paragraph(...content: ArticleInline[]): Block {
  return { kind: "paragraph", content };
}

function featureList(items: [title: string, description?: string][]): Block {
  return {
    kind: "list",
    grid: true,
    items: items.map(([title, description]) =>
      description ? [strong(title), " ", description] : [strong(title)],
    ),
  };
}

function credentials(locale: Locale): Block {
  const korean = locale === "ko";
  return paragraph(
    strong(korean ? "수료증" : "Credentials"),
    korean
      ? " · 전 과정을 성공적으로 마친 학생은 EPOCHA의 파트너인 "
      : " · Students who complete the entire program receive a certificate of completion certified by EPOCHA’s partners ",
    link("KoreaPEN", "https://www.koreapen.org/pe-programs"),
    korean ? "과 " : " and ",
    link("PEN Worldwide", "https://penworldwide.org/"),
    korean ? "의 인증을 받은 수료증을 받습니다." : ".",
  );
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

// Article copy from News_QX Capstone_EN.docx with a Korean translation.
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
            link("QualitaX", "https://www.qualitax.io/"),
            " is inviting students aged 17–18 to step into the shoes of a junior policy researcher in ",
            strong("Responsible AI: Mapping the Risk"),
            ". Students choose an industry, find real AI applications, and classify each one under two laws: the EU AI Act and Korea’s AI Basic Act. They explain their reasoning, record their evidence, and flag where a classification is uncertain. The program ends with students presenting their research to a small panel of experts, including QualitaX leadership.",
          ],
        ],
      },
      {
        kind: "mentors",
        title: "QualitaX Mentors",
        items: [
          {
            name: "Anaïs Ofranc",
            photo: "mentor-anais.jpg",
            bio: [
              [
                "Anaïs Ofranc is the founder and Managing Director of QualitaX and a certified ISO/IEC 42001 Lead Implementer.",
              ],
              [
                "Anaïs has more than 15 years of enterprise IT consultancy experience, working with clients such as Yahoo, Informa, New Scientist, Dopay, and Disguise.one. Before founding QualitaX in 2023, she spent 10 years on post-merger and acquisition integration programs involving Salesforce, Oracle, SAP, and enterprise integration platforms (EIP). She holds an MSc in International Strategic Management (2009) and an MSc in Computer Science (2008) from Oxford Brookes University. She is a former British Standards Institution (BSI) committee member and was part of the UK delegation to ISO Technical Committee 307 from 2023 to 2025.",
              ],
            ],
          },
          {
            name: "Dr. Danya Nusseir",
            photo: "mentor-danya.jpg",
            bio: [
              [
                "Dr. Danya Nusseir is the Director of AI Assurance at QualitaX and a certified ISO/IEC 42001 Lead Auditor.",
              ],
              [
                "Danya has more than 15 years of experience in business operations, technology, research, and consultancy. She held executive roles at Digital, part of iMENA Group, and Arab Advisors Group, and served stakeholders across the Middle East and North Africa, the UK, and Europe, including Zain, STC, ITU, ictQatar, USAID, Booz Allen, and UN ESCWA. She holds a BSc in Computer Science and Business Administration from the University of Kent, a PhD from the University of Warwick on technology use by marginalised groups, and an MBA and an MSc in Social Sciences from UCL. She was awarded a UK Economic and Social Research Council (ESRC) fellowship in 2025 and serves as a board trustee at GRACEaid.",
              ],
            ],
          },
        ],
      },
      { kind: "heading", text: "Why this project matters" },
      featureList([
        [
          "AI rules will shape their careers.",
          "Whether students go into medicine, finance, law, education, or another field, they will work with AI systems that laws classify by risk. AI governance increasingly informs decisions in procurement, investment, insurance, and regulation. Understanding how those decisions are made gives students an early advantage.",
        ],
        [
          "They learn to question AI.",
          "Classifying a real system under two laws means asking what it does, who it affects, and where the evidence is thin. Students practice explaining where they are uncertain and why.",
        ],
        [
          "They practice using AI responsibly.",
          "Students use AI to explore sources and organize findings, then verify every claim themselves. That habit matters in school, at work, and in everyday life.",
        ],
        [
          "They get a voice in a conversation that affects them.",
          "Today’s teenagers will live with the consequences of AI decisions made now. Through intercultural dialogue, they hear from people in their own communities who are affected by AI.",
        ],
        [
          "They produce work with a practical purpose.",
          "Students build research skills, critical thinking, and global citizenship through an AI governance project. They develop an evidence-backed classification table and present it to experts, giving them work experience, a portfolio piece, and a first look at a growing field.",
        ],
      ]),
      { kind: "heading", text: "Why register?" },
      paragraph(
        "Most students have heard that AI needs rules. Few have read the rules, applied them, and defended their reasoning to an expert. Students who complete this project gain:",
      ),
      featureList([
        [
          "Real research experience.",
          "Students work as junior policy researchers, from the research question to the final presentation.",
        ],
        [
          "A portfolio piece with substance.",
          "They leave with an evidence-backed classification table and a five-minute presentation, ready for applications and interviews.",
        ],
        [
          "A head start in an emerging field.",
          "They meet QualitaX experts and discuss career pathways in AI governance.",
        ],
        [
          "Skills employers look for.",
          "Students practice critical thinking, clear communication, and responsible AI use through coaching.",
        ],
        ["A certificate of completion."],
      ]),
      { kind: "heading", text: "How students build employability skills" },
      featureList([
        [
          "AI in the workplace",
          "Research responsibly. Compare the EU AI Act and Korea’s AI Basic Act. Use AI to explore sources, organize findings, and test ideas, then verify every claim independently.",
        ],
        [
          "EPOCH awareness",
          "Classify with people in mind. Empathy, Presence, Opinion, Creativity, and Hope inform how students judge an AI system’s risks and its impact on real lives.",
        ],
        [
          "Leadership workshops",
          "Lead through real tasks. Practice communication, decision-making, and team responsibility while carrying a research project from question to conclusion.",
        ],
        [
          "Intercultural dialogue",
          "Collaborate across differences. Discuss how AI affects others’ lives and listen to the perspectives of people affected in your own community.",
        ],
      ]),
      { kind: "slider" },
      {
        kind: "audience",
        title: "Who this program is for",
        items: [
          ["Teens aged 17–18"],
          ["Students curious about AI governance and where it could lead them"],
          ["Students who want a research-based portfolio piece"],
          ["Students who want a standout project for university applications or job interviews"],
          ["Students who want to build professional and leadership skills early"],
        ],
      },
      { kind: "heading", id: "program-details", text: "Program details" },
      paragraph(strong("Format"), " · Online"),
      paragraph(strong("Schedule"), " · Mondays, 3:30–5:00 p.m. KST, January 4 to March 22, 2027"),
      paragraph(strong("Sessions"), " · 10 sessions of 90 minutes"),
      paragraph(
        strong("Coaching and mentoring"),
        " · Activities build leadership and communication through cross-cultural understanding, the EPOCH Framework, and responsible AI use. EPOCH covers Empathy and Emotional Intelligence, Presence through Networking and Connectedness, Opinion through Judgment and Ethics, Creativity and Imagination, and Hope through Vision and Leadership.",
      ),
      credentials("en"),
      paragraph(
        strong("Language of instruction"),
        " · All sessions are delivered in English. Students should be comfortable taking classes, exchanging ideas, and collaborating in English.",
      ),
      paragraph(
        strong("Intellectual property and copyright"),
        " · Students own what they create. By joining, students grant EPOCHA a permanent license to use their work for program promotion and impact only.",
      ),
      { kind: "heading", text: "Registration and fees" },
      paragraph(strong("Registration deadline"), " · December 19, 2026 at 23:59 KST"),
      paragraph(strong("Fee"), " · ₩300,000 per student (US$225)"),
      paragraph(
        "We review applications in the order we receive them and send acceptance notices on a rolling basis until the program is full.",
      ),
      paragraph(
        "After you receive your acceptance notice, follow the payment instructions. Your registration is final once payment is complete.",
      ),
      paragraph(
        "If the program is full, additional applicants may be considered for the next cohort.",
      ),
      { kind: "registration", title: "How to register", paragraphs: [] },
      { kind: "heading", text: "About QualitaX" },
      paragraph(
        "EPOCHA runs this capstone with QualitaX, which is led by experienced, certified ISO/IEC 42001 Lead Implementers and Lead Auditors.",
      ),
      {
        kind: "media",
        file: "qualitax-site.png",
        alt: "QualitaX website",
        width: 1359,
        height: 583,
      },
      paragraph(
        "QualitaX helps organizations develop and use AI systems safely and responsibly, with auditing that helps earn stakeholders’ trust.",
      ),
      { kind: "resource", link: { text: "Visit QualitaX", href: "https://www.qualitax.io/" } },
      { kind: "heading", text: "Contact" },
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
            link("QualitaX", "https://www.qualitax.io/"),
            "는 17–18세 청소년을 ",
            strong("책임 있는 AI와 위험 분류"),
            " 프로젝트에 초대합니다. 학생들은 주니어 정책 연구원이 되어 관심 산업을 고르고, 실제 AI 활용 사례를 찾은 뒤 EU AI법과 한국의 AI 기본법에 따라 각각을 분류합니다. 판단 근거와 증거를 기록하고 분류가 불확실한 부분도 표시합니다. 과정 마지막에는 QualitaX 리더가 참여하는 전문가 심사단 앞에서 연구 결과를 발표합니다.",
          ],
        ],
      },
      {
        kind: "mentors",
        title: "QualitaX 멘토",
        items: [
          {
            name: "Anaïs Ofranc",
            photo: "mentor-anais.jpg",
            bio: [
              [
                "Anaïs Ofranc는 QualitaX의 창립자 겸 대표이며, ISO/IEC 42001 선임 구축 전문가 자격을 보유하고 있습니다.",
              ],
              [
                "15년 넘게 기업 IT 컨설팅을 하며 Yahoo, Informa, New Scientist, Dopay, Disguise.one 등과 일했습니다. 2023년 QualitaX를 설립하기 전에는 10년간 Salesforce, Oracle, SAP와 기업 통합 플랫폼(EIP)을 활용한 인수합병 후 통합 프로젝트를 담당했습니다. 영국 옥스퍼드 브룩스대학교에서 국제전략경영 석사(2009년)와 컴퓨터과학 석사(2008년) 학위를 받았습니다. 영국표준협회(BSI) 위원으로 활동했으며 2023년부터 2025년까지 ISO 기술위원회 307의 영국 대표단에 참여했습니다.",
              ],
            ],
          },
          {
            name: "Danya Nusseir 박사",
            photo: "mentor-danya.jpg",
            bio: [
              [
                "Danya Nusseir 박사는 QualitaX의 AI 보증 책임자이며, ISO/IEC 42001 선임 심사원 자격을 보유하고 있습니다.",
              ],
              [
                "사업 운영, 기술, 연구, 컨설팅 분야에서 15년 넘게 활동했습니다. iMENA Group의 Digital과 Arab Advisors Group에서 임원으로 일했으며, 중동·북아프리카, 영국, 유럽에서 Zain, STC, ITU, ictQatar, USAID, Booz Allen, 유엔 서아시아경제사회위원회(UN ESCWA) 등과 협업했습니다. 켄트대학교에서 컴퓨터과학·경영학 학사 학위를 받았고, 워릭대학교에서 소외 집단의 기술 이용을 연구해 박사 학위를 받았습니다. UCL에서 MBA와 사회과학 석사 학위를 받았으며, 2025년 영국 경제사회연구위원회(ESRC) 펠로십에 선정됐습니다. GRACEaid 이사회 이사로도 활동합니다.",
              ],
            ],
          },
        ],
      },
      { kind: "heading", text: "이 프로젝트가 중요한 이유" },
      featureList([
        [
          "AI 규칙은 앞으로의 진로에 영향을 줍니다.",
          "의료, 금융, 법률, 교육 등 어느 분야에 가더라도 법이 위험도에 따라 분류하는 AI 시스템을 접하게 됩니다. AI 거버넌스는 조달, 투자, 보험, 규제의 판단 기준이 되고 있습니다. 이런 판단이 어떻게 이루어지는지 일찍 배울 수 있습니다.",
        ],
        [
          "AI에 질문하는 법을 배웁니다.",
          "하나의 AI 시스템을 두 법에 따라 분류하려면 무엇을 하는지, 누구에게 영향을 주는지, 근거가 어디에서 부족한지 살펴봐야 합니다. 학생들은 어떤 판단이 불확실한지와 그 이유를 설명하는 연습을 합니다.",
        ],
        [
          "AI를 책임 있게 사용하는 습관을 기릅니다.",
          "AI로 자료를 찾고 연구 결과를 정리한 뒤 모든 주장을 스스로 검증합니다. 학교와 직장, 일상 어디서든 활용할 수 있는 습관입니다.",
        ],
        [
          "자신에게 영향을 미치는 논의에 참여합니다.",
          "오늘의 청소년은 지금 내려지는 AI 관련 결정의 결과를 경험하게 됩니다. 문화 간 대화를 통해 지역사회에서 AI의 영향을 받는 사람들의 관점을 듣습니다.",
        ],
        [
          "실제로 활용할 수 있는 결과물을 만듭니다.",
          "AI 거버넌스 프로젝트를 통해 조사 역량, 비판적 사고, 세계 시민 의식을 기릅니다. 증거에 근거한 분류표를 만들고 전문가 앞에서 발표하며, 실무 경험과 포트폴리오를 쌓고 성장하는 분야를 미리 살펴봅니다.",
        ],
      ]),
      { kind: "heading", text: "참가하면 무엇을 얻나요?" },
      paragraph(
        "AI에 규칙이 필요하다는 말은 익숙합니다. 직접 법을 읽고 실제 사례에 적용해 전문가 앞에서 판단 근거를 설명할 기회는 드뭅니다. 이 프로젝트를 마치면 다음과 같은 경험을 얻습니다.",
      ),
      featureList([
        ["실제 연구 경험.", "주니어 정책 연구원처럼 연구 질문을 세우고 최종 발표까지 진행합니다."],
        [
          "지원서에 활용할 포트폴리오.",
          "증거에 근거한 분류표와 5분 발표 자료를 완성해 지원서나 면접에 활용할 수 있습니다.",
        ],
        [
          "새로운 분야를 먼저 경험할 기회.",
          "QualitaX 전문가를 만나 AI 거버넌스 분야의 진로를 이야기합니다.",
        ],
        [
          "고용주가 찾는 역량.",
          "코칭을 통해 비판적 사고, 명확한 의사소통, 책임 있는 AI 활용을 연습합니다.",
        ],
        ["프로그램 수료증."],
      ]),
      { kind: "heading", text: "학생들은 진로 역량을 어떻게 기르나요?" },
      featureList([
        [
          "업무에서의 AI 활용",
          "EU AI법과 한국의 AI 기본법을 비교하며 책임 있는 연구 방법을 익힙니다. AI를 활용해 자료를 찾고, 조사 결과를 정리하고, 생각을 점검한 뒤 모든 주장을 스스로 확인합니다.",
        ],
        [
          "EPOCH 역량 이해",
          "공감, 존재감, 판단, 창의성, 희망의 관점에서 AI 시스템의 위험과 실제 삶에 미치는 영향을 평가합니다.",
        ],
        [
          "리더십 워크숍",
          "연구 질문부터 결론까지 실제 과제를 수행하며 의사소통, 의사결정, 팀 안에서의 책임을 연습합니다.",
        ],
        [
          "문화 간 대화",
          "AI가 다른 사람들의 삶에 미치는 영향을 논의하고, 지역사회에서 영향을 받는 사람들의 관점을 들으며 협업합니다.",
        ],
      ]),
      { kind: "slider" },
      {
        kind: "audience",
        title: "이런 학생에게 추천합니다",
        items: [
          ["17–18세 청소년"],
          ["AI 거버넌스와 관련 진로가 궁금한 학생"],
          ["연구 중심의 포트폴리오를 만들고 싶은 학생"],
          ["대학 지원이나 취업 면접에서 소개할 프로젝트를 찾는 학생"],
          ["실무 역량과 리더십을 일찍 기르고 싶은 학생"],
        ],
      },
      { kind: "heading", id: "program-details", text: "프로그램 상세 안내" },
      paragraph(strong("운영 방식"), " · 온라인"),
      paragraph(strong("일정"), " · 2027년 1월 4일부터 3월 22일까지 월요일 오후 3시 30분–5시(KST)"),
      paragraph(strong("수업 횟수"), " · 90분씩 총 10회"),
      paragraph(
        strong("코칭 및 멘토링"),
        " · 문화 간 이해와 소통, EPOCH 프레임워크, 책임 있는 AI 활용을 통해 리더십과 의사소통 역량을 기릅니다. EPOCH는 공감과 감성 지능, 존재감과 네트워킹·유대감, 의견과 판단·윤리, 창의성과 상상력, 희망과 비전·리더십을 다룹니다.",
      ),
      credentials("ko"),
      paragraph(
        strong("수업 언어"),
        " · 모든 수업은 영어로 진행합니다. 영어로 수업을 듣고, 의견을 나누고, 협업할 수 있는 학생에게 적합합니다.",
      ),
      paragraph(
        strong("지식재산권 및 저작권"),
        " · 학생은 자신의 결과물에 대한 소유권을 유지합니다. 참가 학생은 프로그램 홍보와 성과 공유에 한해 EPOCHA에 결과물을 사용할 영구 라이선스를 부여합니다.",
      ),
      { kind: "heading", text: "참가 신청 및 비용 안내" },
      paragraph(strong("신청 마감"), " · 2026년 12월 19일 23:59 KST"),
      paragraph(strong("참가비"), " · 학생 1인당 ₩300,000 (US$225)"),
      paragraph(
        "신청서는 접수 순서대로 검토하며 모집 정원 내에서 순차적으로 참가 안내를 드립니다.",
      ),
      paragraph("참가 안내를 받은 뒤 안내에 따라 참가비를 납부하면 등록이 확정됩니다."),
      paragraph("정원이 찬 경우 추가 신청자는 다음 기수 참가 대상으로 검토될 수 있습니다."),
      { kind: "registration", title: "참가 신청 방법", paragraphs: [] },
      { kind: "heading", text: "QualitaX 소개" },
      paragraph(
        "EPOCHA는 ISO/IEC 42001 선임 구축 전문가와 선임 심사원 자격을 갖춘 팀이 이끄는 QualitaX와 함께 이 캡스톤을 운영합니다.",
      ),
      {
        kind: "media",
        file: "qualitax-site.png",
        alt: "QualitaX 웹사이트",
        width: 1359,
        height: 583,
      },
      paragraph(
        "QualitaX는 조직이 안전하고 책임 있게 AI 시스템을 개발하고 사용하며, 감사 가능한 방식으로 이해관계자의 신뢰를 얻도록 돕습니다.",
      ),
      { kind: "resource", link: { text: "QualitaX 웹사이트", href: "https://www.qualitax.io/" } },
      { kind: "heading", text: "문의 안내" },
      paragraph("등록, 수업 내용, 학교 및 단체 참가에 관한 문의는 아래 연락처로 보내 주세요."),
      contacts("ko"),
    ],
  },
};
