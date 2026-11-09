import type { Locale } from "@/lib/preferences";

type ArticleText = string | readonly (string | { label: string; href: string })[];

type IntroBlock =
  | { type: "heading" | "subheading"; text: string }
  | { type: "paragraph"; text: ArticleText }
  | { type: "list"; items: readonly ArticleText[] };

type Introduction = {
  title: string;
  description: string;
  lead: string;
  imageAlt: string;
  blocks: readonly IntroBlock[];
};

export const epochaIntroduction: Record<Locale, Introduction> = {
  en: {
    title: "Meet EPOCHA",
    description:
      "A look at who we are, what a practicum is, and the EPOCH framework that shapes how we prepare young people for work.",
    lead: "Who gets a voice? Who decides the rules and values that shape the world we live in?",
    imageAlt: "The EPOCHA framework shown over a team fitting puzzle pieces together",
    blocks: [
      {
        type: "paragraph",
        text: "For too long, young people have been told to wait their turn. What happens when we change the narrative? What happens when youth are trusted to build the answers themselves, step into the room, and take an active lead in important conversations?",
      },
      {
        type: "heading",
        text: "About EPOCHA",
      },
      {
        type: "paragraph",
        text: [
          {
            label: "EPOCHA",
            href: "/",
          },
          "  is a career-readiness hub dedicated to empowering youth aged 14–29. By combining targeted coaching with work-based learning with industry mentors, we help young people translate their academic knowledge into real-world career momentum.",
        ],
      },
      {
        type: "paragraph",
        text: "Through our practicums students build the professional portfolios and self-confidence they need to thrive. Our goal is to cultivate a unified ecosystem: a space where youth lead through action, employers seamlessly access job-ready talent, and communities increase their collective impact.",
      },
      {
        type: "heading",
        text: "What is a practicum?",
      },
      {
        type: "paragraph",
        text: "Practicums are structured learning experiences where students apply their knowledge to projects, under the coaching, mentoring, and guidance of EPOCHA professionals and mentor companies. They assume formal roles with genuine responsibilities, work on live projects in partnership with organizations, and walk away with a clearer sense of direction, a documented portfolio, proof of both what they did and how they showed up.",
      },
      {
        type: "heading",
        text: "Our Vision",
      },
      {
        type: "paragraph",
        text: "We envision a future where every young person graduates with a career-ready portfolio built through authentic, high-stakes projects, and every educational institution serves as a direct pipeline for emerging leaders. By accelerating meaningful skill development, we empower youth to transition from passive students to active, impactful changemakers.",
      },
      {
        type: "heading",
        text: "What we do",
      },
      {
        type: "paragraph",
        text: "To turn this vision into reality, we have developed three practicum pathways designed to meet young leaders exactly where they are:",
      },
      {
        type: "list",
        items: [
          "Ages 14–18: Start-up Lab Camp\nThis pathway embeds entrepreneurial learning directly into school curricula and study-abroad partner programs. Students build hands-on skills across three immersive phases: delivering a collaborative capstone project, running a Practice Enterprise, and testing a micro-startup in the live market.",
          "Ages 19–29: Hanaro Leadership Practicum\nDesigned for young adults looking to make a social impact, this program partners students directly with NGOs and charities. Students take the driver's seat on real-world advocacy campaigns, driving tangible awareness and measurable impact for causes that matter.",
          "Ages 19–29: Mirae Industry Practicum\nThis pathway connects students directly with forward-thinking businesses. Students tackle live corporate briefs from real companies, building strategic leadership skills and a standout professional portfolio that catches the eyes of top-tier employers.",
        ],
      },
      {
        type: "heading",
        text: "The meaning behind our name",
      },
      {
        type: "paragraph",
        text: "An epoch is a turning point and the beginning of a new era. Young people today are entering a rapidly changing workforce at exactly such a moment, and our name is a promise to prepare them for it. Our name points to the framework at the heart of our work: EPOCH.",
      },
      {
        type: "heading",
        text: "The EPOCH framework",
      },
      {
        type: "paragraph",
        text: [
          "EPOCH comes from labour economics research at MIT Sloan. ",
          {
            label: "Isabella Loaiza and Roberto Rigobon",
            href: "https://mitsloan.mit.edu/press/new-mit-sloan-research-suggests-ai-more-likely-to-complement-not-replace-human-workers",
          },
          " developed it to map the human capabilities that complement artificial intelligence. Their paper, ",
          {
            label: "The EPOCH of AI: Human-Machine Complementarities at Work",
            href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5028371",
          },
          ", goes beyond asking which jobs are at risk. It asks where human capabilities remain essential as AI spreads. EPOCH stands for:",
        ],
      },
      {
        type: "list",
        items: [
          "E: Empathy and Emotional Intelligence",
          "P: Presence, Networking, and Connectedness",
          "O: Opinion, Judgment, and Ethics",
          "C: Creativity and Imagination",
          "H: Hope, Vision, and Leadership",
        ],
      },
      {
        type: "paragraph",
        text: [
          "Rigobon is careful not to call these “soft skills.” He points out that they are much harder to teach than a technical skill, which is why they deserve deliberate attention. If you would like to hear it from him directly, ",
          {
            label: "watch his talk on the EPOCH of AI",
            href: "https://www.youtube.com/watch?v=5f6x7qhhzzk",
          },
          ".",
        ],
      },
      {
        type: "paragraph",
        text: "The A in EPOCHA stands for Artificial Intelligence. The five EPOCH capabilities are what make people valuable alongside AI, so every trainee also learns to use AI confidently and responsibly.",
      },
      {
        type: "heading",
        text: "Why EPOCH is at the heart of everything we do",
      },
      {
        type: "paragraph",
        text: "Inspired by these findings, we put EPOCH at the core of our leadership model and embedded it across all our practicums. There are three reasons.",
      },
      {
        type: "list",
        items: [
          "It shifts the conversation from fear to agency. The research suggests AI is more likely to complement human workers than to replace them. A young person who hears only “AI will take your job” can feel there is nothing to do. One who learns what humans do best has somewhere to start.",
          "It names what traditional education often leaves out. Most systems measure what is easy to test. Empathy, judgment, and hope rarely appear on a report card, yet they matter enormously at work and in life. We develop them with intention, not by chance.",
          "It can be practised. In a practicum, students negotiate, disagree, lead, and recover from mistakes in a safe environment where they can try, fail, and try again. Those are exactly the situations where EPOCH capabilities grow.",
        ],
      },
      {
        type: "heading",
        text: "What it looks like in practice",
      },
      {
        type: "paragraph",
        text: "Alongside their project work, students receive coaching and ongoing mentoring while practicing the EPOCH competencies. They finish with leadership and professional experience and a concrete portfolio piece they can use in university applications and job interviews. Every practicum includes:",
      },
      {
        type: "list",
        items: [
          "Leadership workshops: practical sessions on communication, decision-making, team dynamics, and leading with purpose, building adaptability, empathy, and effective communication.",
          "Intercultural dialogues: structured conversations that build cross-cultural awareness, perspective-taking, and the knowledge, skills, and attitudes to interact respectfully and effectively with people who are culturally, linguistically, and socially different from oneself.",
          "AI in the workplace: AI foundations and ethics, so students can use AI responsibly to boost productivity and social impact.",
        ],
      },
      {
        type: "paragraph",
        text: "Across all three, students practice identifying real-world friction points, designing solutions, and creating initiatives that generate tangible value and address global challenges.",
      },
      {
        type: "heading",
        text: "Curious about your EPOCH?",
      },
      {
        type: "paragraph",
        text: "Find out in under five minutes. Spin a wheel, get a question, and see which competency it brings up.",
      },
      {
        type: "paragraph",
        text: [
          "For professionals: ",
          {
            label: "Open the professionals’ wheel",
            href: "https://interactives-sepia.vercel.app/",
          },
          ". Educators spin the wheel to reflect on their competencies and map out their next actionable steps.",
        ],
      },
      {
        type: "paragraph",
        text: [
          "For students (ages 14–29): Along many other activities, our students’ wheel is part of our ",
          {
            label: "practicum experience",
            href: "/practicums",
          },
          ". As students work on their project, they use it to reflect on how they apply the five EPOCH competencies both inside and outside the classroom.",
        ],
      },
      {
        type: "heading",
        text: "Contact us",
      },
      {
        type: "subheading",
        text: "General inquiry",
      },
      {
        type: "paragraph",
        text: [
          {
            label: "hello@epocha.world",
            href: "mailto:hello@epocha.world",
          },
        ],
      },
      {
        type: "paragraph",
        text: "010 2815 2212 (KR)",
      },
      {
        type: "paragraph",
        text: "+44 7801 202 799 (WhatsApp)",
      },
      {
        type: "subheading",
        text: "Partnership inquiry",
      },
      {
        type: "paragraph",
        text: [
          "Schools: Tuya Mishig ",
          {
            label: "t.mishig@epocha.world",
            href: "mailto:t.mishig@epocha.world",
          },
        ],
      },
      {
        type: "paragraph",
        text: [
          "Companies: Tayler Burns ",
          {
            label: "t.burns@epocha.world",
            href: "mailto:t.burns@epocha.world",
          },
        ],
      },
      {
        type: "paragraph",
        text: "+44 7801 202 799 (WhatsApp)",
      },
    ],
  },
  ko: {
    title: "EPOCHA 소개",
    description:
      "청소년과 청년이 실제 프로젝트를 통해 진로를 탐색하고, 자신이 해낸 일을 포트폴리오로 남기는 곳입니다.",
    lead: "누구에게 발언권이 있을까요? 우리가 살아가는 세상의 규칙과 가치는 누가 정할까요?",
    imageAlt: "팀이 퍼즐 조각을 맞추는 모습 위에 표시된 EPOCHA 프레임워크",
    blocks: [
      {
        type: "paragraph",
        text: "청소년과 청년은 오랫동안 자기 차례를 기다리라는 말을 들어왔습니다. 이제 그들에게 스스로 답을 찾을 기회를 준다면 어떨까요? 중요한 논의에 함께하고 그 대화를 주도할 수 있다면 무엇이 달라질까요?",
      },
      {
        type: "heading",
        text: "EPOCHA는 어떤 곳인가요",
      },
      {
        type: "paragraph",
        text: [
          {
            label: "EPOCHA",
            href: "/",
          },
          "는 14~29세 청소년과 청년이 진로를 준비할 수 있도록 돕는 곳입니다. 맞춤형 코칭과 현업 멘토가 함께하는 실무 학습을 통해, 학교에서 배운 지식을 실제 일에 적용하고 진로의 발판을 마련하도록 돕습니다.",
        ],
      },
      {
        type: "paragraph",
        text: "참가자는 실무 프로젝트를 수행하며 포트폴리오를 만들고 자신감을 키웁니다. 우리는 청소년과 청년이 직접 행동하며 리더십을 발휘하고, 고용주는 실무를 준비한 인재를 만나며, 지역사회는 협력을 통해 더 큰 변화를 만들어 가는 환경을 만들고자 합니다.",
      },
      {
        type: "heading",
        text: "프랙티컴이란 무엇인가요",
      },
      {
        type: "paragraph",
        text: "프랙티컴은 배운 지식을 실제 프로젝트에 적용하는 실무형 학습 프로그램입니다. 참가자는 EPOCHA 전문가와 멘토 기업의 코칭과 지도를 받으며, 협력 기관과 함께 진행하는 프로젝트에서 정해진 역할과 그에 따른 책임을 맡습니다.",
      },
      {
        type: "paragraph",
        text: "프로젝트가 끝나면 앞으로의 방향이 더 분명해집니다. 무엇을 해냈고 어떤 태도로 일했는지 보여 주는 포트폴리오도 남습니다.",
      },
      {
        type: "heading",
        text: "우리가 그리는 미래",
      },
      {
        type: "paragraph",
        text: "우리는 모든 청소년과 청년이 중요한 의사결정과 결과가 따르는 실제 프로젝트를 경험하고, 진로에 활용할 포트폴리오를 갖춰 졸업하는 미래를 그립니다. 교육기관이 차세대 리더를 키우는 출발점이 되기를 바랍니다. 학생들이 필요한 역량을 일찍부터 키워 스스로 행동하고 변화를 만드는 사람이 되도록 돕는 것이 우리의 목표입니다.",
      },
      {
        type: "heading",
        text: "연령과 관심사에 맞춘 세 가지 프로그램",
      },
      {
        type: "list",
        items: [
          "14~18세 | Start-up Lab Camp\n학교 교육과정과 유학 파트너 프로그램에 창업 학습을 접목합니다. 팀으로 캡스톤 프로젝트를 완수하고, 모의기업(Practice Enterprise)을 운영한 뒤, 소규모 창업 아이디어를 실제 시장에서 검증하는 세 단계를 경험합니다.",
          "19~29세 | Hanaro Leadership Practicum\n사회에 긍정적인 변화를 만들고 싶은 청년을 위한 프로그램입니다. 비정부기구(NGO) 및 자선단체와 함께 사회문제에 대한 인식 개선 캠페인을 직접 이끌고, 관심을 얼마나 높였는지와 어떤 변화가 있었는지를 살펴봅니다.",
          "19~29세 | Mirae Industry Practicum\n기업이 실제로 의뢰한 과제를 수행합니다. 전략적으로 판단하고 팀을 이끄는 역량을 기르며, 채용 과정에서 자신의 실무 경험을 보여 줄 포트폴리오를 만듭니다.",
        ],
      },
      {
        type: "heading",
        text: "EPOCHA라는 이름의 의미",
      },
      {
        type: "paragraph",
        text: "영어 단어 ‘epoch’는 새로운 시대가 시작되는 전환점을 뜻합니다. 빠르게 바뀌는 일의 세계에 첫발을 내딛는 청소년과 청년이 이 전환기를 준비할 수 있도록 돕겠다는 뜻을 이름에 담았습니다. 그 중심에는 EPOCH 프레임워크가 있습니다.",
      },
      {
        type: "heading",
        text: "EPOCH 프레임워크",
      },
      {
        type: "paragraph",
        text: [
          "MIT 슬론의 노동경제학 연구에서 출발한 EPOCH는 인공지능과 함께 일할 때 중요한 인간의 역량을 정리한 프레임워크입니다. ",
          {
            label: "이사벨라 로아이사(Isabella Loaiza)와 로베르토 리고본(Roberto Rigobon)",
            href: "https://mitsloan.mit.edu/press/new-mit-sloan-research-suggests-ai-more-likely-to-complement-not-replace-human-workers",
          },
          "은 논문 ",
          {
            label: "The EPOCH of AI: Human-Machine Complementarities at Work",
            href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5028371",
          },
          "에서 AI가 확산될수록 어떤 일에서 인간의 역량이 여전히 중요한지 살펴봅니다.",
        ],
      },
      {
        type: "list",
        items: [
          "E | Empathy — 공감과 정서 지능",
          "P | Presence — 관계 형성과 연결",
          "O | Opinion — 의견 형성, 판단과 윤리",
          "C | Creativity — 창의력과 상상력",
          "H | Hope — 희망, 비전과 리더십",
        ],
      },
      {
        type: "paragraph",
        text: [
          "리고본은 이 역량에 ‘소프트 스킬’이라는 이름을 붙이는 데 신중합니다. 기술을 가르치는 것보다 훨씬 어렵기 때문에, 의식적으로 가르치고 연습할 기회를 마련해야 한다고 말합니다. 더 자세한 이야기는 ",
          {
            label: "리고본의 EPOCH of AI 강연",
            href: "https://www.youtube.com/watch?v=5f6x7qhhzzk",
          },
          "에서 들을 수 있습니다.",
        ],
      },
      {
        type: "paragraph",
        text: "EPOCHA의 마지막 글자 A는 인공지능(Artificial Intelligence)을 뜻합니다. 참가자는 EPOCH의 다섯 역량을 기르는 동시에 AI를 자신 있게, 책임감 있게 활용하는 법을 배웁니다.",
      },
      {
        type: "heading",
        text: "모든 프로그램에서 EPOCH를 기르는 이유",
      },
      {
        type: "paragraph",
        text: "변화 속에서 내가 할 수 있는 일을 찾습니다. 연구는 AI가 사람을 대체하기보다 사람의 일을 보완할 가능성이 더 크다고 봅니다. ‘AI가 내 일자리를 가져갈 거야’라는 말만 들으면 막막할 수 있습니다. 사람이 잘하는 일을 이해하면 어디서부터 준비할지 보입니다.",
      },
      {
        type: "paragraph",
        text: "성적표에 담기 어려운 역량을 기릅니다. 교육에서는 시험으로 측정하기 쉬운 능력을 주로 평가합니다. 공감이나 판단력, 미래를 향한 희망은 성적표에 잘 드러나지 않아도 일과 삶에서 큰 역할을 합니다. 그래서 이런 역량을 기를 기회를 프로그램에 마련합니다.",
      },
      {
        type: "paragraph",
        text: "프로젝트에서 직접 연습합니다. 참가자는 의견을 조율하고, 이견을 다루고, 팀을 이끕니다. 실수해도 다시 시도할 수 있는 환경에서 문제를 해결하는 동안 EPOCH 역량이 자랍니다.",
      },
      {
        type: "heading",
        text: "프랙티컴에서 경험하는 것",
      },
      {
        type: "paragraph",
        text: "참가자는 프로젝트를 수행하면서 코칭과 지속적인 멘토링을 받습니다. 리더십과 실무 경험을 쌓고, 대학 지원이나 취업 면접에서 보여 줄 포트폴리오 결과물도 완성합니다. 모든 프랙티컴에는 다음 활동이 포함됩니다.",
      },
      {
        type: "list",
        items: [
          "리더십 워크숍 — 소통과 의사결정, 팀에서 생기는 갈등과 협력, 공동의 목표를 중심으로 팀을 이끄는 법을 연습합니다. 이를 통해 적응력과 공감 능력, 소통 역량을 기릅니다.",
          "문화 간 대화 — 문화·언어·사회적 배경이 다른 사람의 관점을 이해하고, 서로 존중하며 소통하는 데 필요한 지식과 태도를 익힙니다.",
          "업무에서의 AI 활용 — AI의 기초와 윤리를 배우고, 업무 효율을 높이거나 사회에 긍정적인 변화를 만드는 데 AI를 책임 있게 활용합니다.",
        ],
      },
      {
        type: "paragraph",
        text: "세 활동을 통해 참가자는 현장에서 사람들이 겪는 어려움을 발견하고, 해결책을 설계하며, 실제 가치를 만들고 세계가 마주한 과제에 기여할 수 있는 활동을 기획합니다.",
      },
      {
        type: "heading",
        text: "나의 EPOCH 알아보기",
      },
      {
        type: "paragraph",
        text: "5분이면 시작할 수 있습니다. 룰렛을 돌려 질문을 하나 뽑고, 그 질문이 나의 어떤 역량을 돌아보게 하는지 살펴보세요.",
      },
      {
        type: "list",
        items: [
          [
            "교육자와 현업 종사자 — ",
            {
              label: "전문가용 룰렛",
              href: "https://interactives-sepia.vercel.app/",
            },
            "을 돌려 자신의 역량을 돌아보고, 다음에 실천할 행동을 정해 보세요.",
          ],
          [
            "학생과 청년 참가자(14~29세) — ",
            {
              label: "프랙티컴",
              href: "/practicums",
            },
            "에서는 학생용 룰렛으로 프로젝트를 진행하며 교실 안팎에서 EPOCH의 다섯 역량을 어떻게 발휘하는지 돌아봅니다.",
          ],
        ],
      },
      {
        type: "heading",
        text: "문의",
      },
      {
        type: "paragraph",
        text: [
          "일반 문의 · ",
          {
            label: "hello@epocha.world",
            href: "mailto:hello@epocha.world",
          },
          " · 국내 010-2815-2212",
        ],
      },
      {
        type: "subheading",
        text: "파트너십 문의",
      },
      {
        type: "paragraph",
        text: [
          "학교 · Tuya Mishig ",
          {
            label: "t.mishig@epocha.world",
            href: "mailto:t.mishig@epocha.world",
          },
        ],
      },
      {
        type: "paragraph",
        text: [
          "기업 · Tayler Burns ",
          {
            label: "t.burns@epocha.world",
            href: "mailto:t.burns@epocha.world",
          },
        ],
      },
      {
        type: "paragraph",
        text: "WhatsApp +44 7801 202 799",
      },
    ],
  },
};
