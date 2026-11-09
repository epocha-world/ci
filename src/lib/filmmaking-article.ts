import type { CapstoneArticleContent } from "./capstone-article";
import type { Locale } from "./preferences";

// Article copy from News_Filmmaking Capstone_EN-KR.docx, arranged as in the standalone reference.
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
            "EPOCHA and The Seagull Production are launching a short film program for students ages 14 to 18. This year’s project asks: ",
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
          photo: "lucie-charles.jpg",
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
      {
        kind: "heading",
        text: "Why learn filmmaking now?",
      },
      {
        kind: "paragraph",
        content: [
          "Filmmaking is a well-rounded learning experience where teens put a wide range of skills to real use. Finishing a film takes more than storytelling. It takes project planning and management, teamwork, clear communication, and creative problem-solving, plus the persistence to own a multi-stage project through to completion. These skills aren’t just for the film industry. They are highly valued by universities and employers and students can apply them in whatever field they choose. Through filmmaking, students learn to express their ideas and to collaborate with others to produce a finished piece of work.",
        ],
      },
      {
        kind: "heading",
        text: "A CAS project for IB Diploma students",
      },
      {
        kind: "paragraph",
        content: [
          "CAS (Creativity, Activity, Service) is the part of the IB Diploma Programme that encourages students to take on experiences outside the classroom and grow from them. A CAS project should involve collaboration lasting at least one month, and students should demonstrate initiative, perseverance, and personal growth. This filmmaking capstone is designed with those goals in mind.",
        ],
      },
      {
        kind: "list",
        items: [
          [
            {
              text: "Shared achievement through collaboration.",
              strong: true,
            },
            " Students take on roles such as director, producer, and editor. Each role is different, but everyone works toward one finished film and takes responsibility for a common goal.",
          ],
          [
            {
              text: "Creative work from concept to final cut.",
              strong: true,
            },
            " Students use their creativity at every stage, from brainstorming and scriptwriting to shooting and final editing. This ties directly to the Creativity strand of CAS.",
          ],
          [
            {
              text: "Growth through steady commitment and reflection.",
              strong: true,
            },
            " Filmmaking isn’t a short-term activity. Over several weeks, from planning through post-production, students solve problems, negotiate differing opinions with teammates, and reflect on their own growth. That experience provides concrete material for CAS reflections and personal portfolios.",
          ],
          [
            {
              text: "Learning that leads to a real product.",
              strong: true,
            },
            " Students complete an actual short film under the guidance of working film professionals. It’s more than a taste of the industry: they end up with a finished work that shows what they accomplished.",
          ],
        ],
        grid: true,
      },
      {
        kind: "paragraph",
        content: [
          "For schools and CAS coordinators, this program can serve as an external partner project with a well-organized structure and professional mentoring.",
        ],
      },
      {
        kind: "note",
        content: [
          "Note: Whether a project counts toward CAS is determined by each school’s CAS coordinator. Please refer to the ",
          {
            text: "IB’s CAS project guidance",
            href: "https://ibo.org/programmes/diploma-programme/curriculum/dp-core/creativity-activity-and-service/cas-projects/",
          },
          " on the official IB website for details.",
        ],
      },
      {
        kind: "heading",
        text: "Beyond IB: an experience that supports college and career planning",
      },
      {
        kind: "paragraph",
        content: [
          "The program is valuable not only for IB students but for any teen who wants to explore their interests and build a portfolio that stands out. Students who complete the program can gain:",
        ],
      },
      {
        kind: "list",
        items: [
          [
            {
              text: "A portfolio built on real production experience.",
              strong: true,
            },
            " A short film with your name in the credits is something you can show directly in a college application or interview. It’s concrete proof that you can turn creative ideas into finished work.",
          ],
          [
            {
              text: "Material for applications.",
              strong: true,
            },
            " Leading a project, working with teammates, and overcoming challenges along the way make strong material for personal statements and essays. Instead of just listing strengths, you can describe your growth through real experience.",
          ],
          [
            {
              text: "A practical understanding of the film industry.",
              strong: true,
            },
            " Students see how films get made and have the chance to build relationships with industry professionals. This can help them explore careers in film, media, communications, and related fields.",
          ],
          [
            {
              text: "Proof of your work through results.",
              strong: true,
            },
            " The film you finish under professional mentorship, and the production experience behind it, can support applications to related majors and internships, and your future career planning.",
          ],
        ],
        grid: true,
      },
      {
        kind: "paragraph",
        content: [
          "Whether you want to pursue a creative field or simply stand out, this program gives you the chance to show what you can do instead of just talking about it.",
        ],
      },
      {
        kind: "paragraph",
        content: ["Students who complete the capstone leave with:"],
      },
      {
        kind: "list",
        items: [
          [
            {
              text: "A portfolio piece:",
              strong: true,
            },
            " a real film production credit to show in applications and interviews",
          ],
          [
            {
              text: "A personal story:",
              strong: true,
            },
            " concrete material for personal statements and essays about initiative, collaboration, and creative challenges",
          ],
          [
            {
              text: "Industry exposure:",
              strong: true,
            },
            " insight into how film production works, and a first network of mentors and peers",
          ],
          [
            {
              text: "Documented experience:",
              strong: true,
            },
            " mentor-supported work that strengthens applications to film and media programs, internships, and early-career opportunities",
          ],
        ],
        grid: true,
      },
      {
        kind: "slider",
      },
      {
        kind: "audience",
        title: "Who this program is for",
        items: [
          ["Teens aged 14 to 18"],
          ["Students who want to explore creative careers before choosing their major"],
          ["IB Diploma students looking for a meaningful CAS project"],
          [
            "Students who want to build a portfolio for film, media, communications, or arts programs",
          ],
        ],
      },
      {
        kind: "heading",
        text: "Program details",
        id: "program-details",
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Project goal:",
            strong: true,
          },
          " Produce a short film of five minutes or less and a promotional teaser. The finished work will premiere at a public screening on ",
          {
            text: "April 17, 2027",
            strong: true,
          },
          ".",
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Schedule:",
            strong: true,
          },
          " January 9 – April 17, 2027. Classes meet every Saturday for 15 sessions, 9:00 a.m. to 12:00 p.m. (Korea Standard Time), for a total of 45 hours.",
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Format and location:",
            strong: true,
          },
          " A mix of online classes and in-person sessions.",
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Team structure:",
            strong: true,
          },
          " A production team of 12 students, who divide up roles such as director, producer, editor, etc.",
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Film formats:",
            strong: true,
          },
          " Depending on their theme and style, students can choose from documentary, drama, experimental film, interview-based video, and more.",
        ],
      },
      {
        kind: "heading",
        text: "Curriculum:",
        minor: true,
      },
      {
        kind: "list",
        items: [
          [
            {
              text: "Phase 1: Research and Planning (Sessions 1–4, online).",
              strong: true,
            },
            " Explore the film’s theme and develop your idea. Set the creative direction and build a production plan.",
          ],
          [
            {
              text: "Phase 2: Shooting and Editing (Sessions 5–9, in person).",
              strong: true,
            },
            " Shoot and edit the film based on your plan.",
          ],
          [
            {
              text: "Phase 3: Promotion, Presentation, and Public Screening.",
              strong: true,
            },
            " Present your finished film, then premiere it at the public screening.",
          ],
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Professional mentoring and leadership training:",
            strong: true,
          },
          " Alongside hands-on filmmaking, students take part in activities that build leadership and communication skills, including leadership workshops, cross-cultural understanding and communication, competency development using the EPOCH Framework, and responsible AI use. The EPOCH Framework has five components: ",
          {
            text: "E",
            strong: true,
          },
          "mpathy (& Emotional Intelligence), ",
          {
            text: "P",
            strong: true,
          },
          "resence (Networking & Connectedness), ",
          {
            text: "O",
            strong: true,
          },
          "pinion (Judgment & Ethics), ",
          {
            text: "C",
            strong: true,
          },
          "reativity (& Imagination), and ",
          {
            text: "H",
            strong: true,
          },
          "ope (Vision & Leadership).",
        ],
      },
      {
        kind: "paragraph",
        content: [
          "Students also learn how to use AI when generating ideas, doing research, and writing and revising scripts. The emphasis is on responsible filmmaking: not relying on AI, keeping your own perspective and creativity, and being transparent about where AI was used.",
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Credentials: ",
            strong: true,
          },
          "Students who complete the entire program receive a certificate of completion certified by ",
          {
            text: "KoreaPEN",
            href: "https://www.koreapen.org/pe-programs",
          },
          " and ",
          {
            text: "PEN Worldwide",
            href: "https://penworldwide.org/",
          },
          ", EPOCHA’s partner organizations.",
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Language of instruction:",
            strong: true,
          },
          " All sessions are delivered in English, so the program is best for students who can comfortably take classes, exchange ideas, and collaborate in English.",
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Intellectual property and copyright:",
            strong: true,
          },
          " Students own the films they create. The Seagull Production and EPOCHA receive a perpetual license to use the films solely for promoting the program and sharing its results.",
        ],
      },
      {
        kind: "callout",
        title: "Flexible options for schools and communities",
        paragraphs: [
          "Because schools and families have different academic calendars and constraints, the program can be adjusted. If the regular Saturday schedule doesn’t work, a separate program can be arranged to fit your school or parent community. To discuss a schedule and format that suit your students, please get in touch with Tuya Mishig.",
        ],
        link: {
          text: "Tuya Mishig · t.mishig@epocha.world",
          href: "mailto:t.mishig@epocha.world",
        },
      },
      {
        kind: "heading",
        text: "Registration and fees",
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Registration deadline:",
            strong: true,
          },
          " December 19, 2026",
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Fee:",
            strong: true,
          },
          " ₩1,700,000 per student (US $1,270)",
        ],
      },
      {
        kind: "paragraph",
        content: [
          "Registrations are reviewed in the order they are received, and acceptance notices go out on a rolling basis within the enrolment cap.",
        ],
      },
      {
        kind: "paragraph",
        content: [
          "After you receive your acceptance notice, please pay the program fee following the instructions provided. Your registration is final once payment is complete.",
        ],
      },
      {
        kind: "paragraph",
        content: [
          "Once the program is full, additional applicants may be considered for the next cohort.",
        ],
      },
      {
        kind: "registration",
        title: "How to Register",
        paragraphs: [
          [
            "Schools and parent communities can register students as a group. Once students form a film team, a designated school or parent representative submits the application on the team’s behalf. Groups outside of schools may also apply, and group registration discounts are available.",
          ],
          [
            {
              text: "Don’t have a team yet?",
              strong: true,
            },
            " Register individually, and we’ll help your teen join one.",
          ],
        ],
      },
      {
        kind: "heading",
        text: "About The Seagull Production",
      },
      {
        kind: "paragraph",
        content: [
          "EPOCHA is running this filmmaking capstone together with The Seagull Production. The Seagull Production is an international production company based in Czechia and South Korea, specializing in films, commercials, and branded content. Drawing on experience from projects around the world, The Seagull creates stories and co-productions that connect different cultures and perspectives.",
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
        kind: "heading",
        text: "Contact",
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
              href: "https://www.theseagullfilms.com/films/",
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
          photo: "lucie-charles.jpg",
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
      {
        kind: "heading",
        text: "왜 지금, 영화 제작을 배워야 할까요?",
      },
      {
        kind: "paragraph",
        content: [
          "영화 제작은 청소년들이 다양한 역량을 실제로 활용하고 성장시킬 수 있는 종합적인 학습 경험입니다. 한 편의 영화를 완성하려면 이야기를 구성하는 능력뿐 아니라 프로젝트 기획과 관리, 팀원 간 협업, 원활한 의사소통, 창의적인 문제 해결 능력이 필요합니다. 또한 여러 단계에 걸친 작업을 끝까지 책임지고 완수하는 끈기도 중요합니다. 이러한 역량은 영화 산업에만 필요한 것이 아닙니다. 대학과 기업에서도 중요하게 평가하는 역량으로, 학생들이 앞으로 어떤 분야에 진출하더라도 폭넓게 활용할 수 있습니다. 영화 제작을 통해 학생들은 자신의 생각을 표현하는 방법을 배우고, 다른 사람들과 협력해 하나의 결과물을 완성하는 경험을 쌓게 됩니다.",
        ],
      },
      {
        kind: "heading",
        text: "IB 디플로마 학생을 위한 CAS 프로젝트",
      },
      {
        kind: "paragraph",
        content: [
          "IB 디플로마 과정의 CAS(Creativity, Activity, Service)는 학생들이 교실 밖에서 다양한 경험에 참여하고, 그 과정을 통해 성장하도록 장려하는 교육 요소입니다. CAS 프로젝트에서는 최소 한 달 이상 지속되는 협업 활동을 통해 학생들이 주도성, 끈기, 개인적 성장을 보여주는 것이 중요합니다. 이번 영화 제작 캡스톤 프로그램은 이러한 CAS 프로젝트의 취지를 고려해 설계되었습니다.",
        ],
      },
      {
        kind: "list",
        items: [
          [
            "",
            {
              text: "협업을 통한 공동의 성취",
              strong: true,
            },
            " 학생들은 감독, 프로듀서, 편집자 등 제작팀 내에서 각자의 역할을 맡습니다. 서로 다른 역할을 수행하면서도 하나의 작품을 완성하기 위해 협력하며, 공동의 목표를 향해 책임감 있게 참여하는 경험을 쌓습니다.",
          ],
          [
            "",
            {
              text: "기획부터 완성까지 이어지는 창의적 활동",
              strong: true,
            },
            " 아이디어 발상부터 시나리오 작성, 촬영, 최종 편집에 이르기까지 영화 제작의 전 과정에서 창의성을 발휘합니다. 이러한 활동은 CAS의 Creativity 영역과 직접적으로 연결됩니다.",
          ],
          [
            "",
            {
              text: "꾸준한 참여와 성찰을 통한 성장",
              strong: true,
            },
            " 영화 제작은 단기간에 끝나는 활동이 아닙니다. 기획부터 후반 작업까지 수 주에 걸쳐 진행되는 동안 학생들은 다양한 문제를 해결하고, 팀원들과 의견을 조율하며, 자신의 성장 과정을 돌아보게 됩니다. 이 과정에서 얻은 경험은 CAS 성찰 기록과 개인 포트폴리오를 위한 구체적인 자료로 활용할 수 있습니다.",
          ],
          [
            "",
            {
              text: "실제 작품으로 이어지는 학습 경험",
              strong: true,
            },
            " 학생들은 현업 영화 제작 전문가의 지도를 받으며 실제 단편 영화를 완성합니다. 단순한 체험 활동에서 끝나는 것이 아니라, 자신의 노력과 성과를 눈으로 확인할 수 있는 결과물을 남깁니다.",
          ],
        ],
        grid: true,
      },
      {
        kind: "paragraph",
        content: [
          "학교와 CAS 코디네이터에게도 이 프로그램은 체계적인 활동 구성과 전문적인 멘토링을 제공하는 외부 협력 프로젝트가 될 수 있습니다.",
        ],
      },
      {
        kind: "note",
        content: [
          "※ CAS 프로젝트의 최종 인정 여부는 각 학교의 CAS 코디네이터가 결정합니다. 자세한 기준은 IB 공식 웹사이트의 ",
          {
            text: "CAS 프로젝트 안내",
            href: "https://ibo.org/programmes/diploma-programme/curriculum/dp-core/creativity-activity-and-service/cas-projects/",
          },
          "를 참고해 주세요.",
        ],
      },
      {
        kind: "heading",
        text: "IB를 넘어, 진학과 진로 준비에 도움이 되는 경험",
      },
      {
        kind: "paragraph",
        content: [
          "영화 제작 캡스톤 프로그램은 IB 학생뿐 아니라 자신의 관심 분야를 탐색하고 차별화된 포트폴리오를 만들고 싶은 모든 청소년에게 의미 있는 경험을 제공합니다. 프로그램을 성공적으로 마친 학생들은 다음과 같은 성과를 얻을 수 있습니다.",
        ],
      },
      {
        kind: "list",
        items: [
          [
            "",
            {
              text: "실제 제작 경험을 담은 포트폴리오",
              strong: true,
            },
            " 자신의 이름이 크레디트에 기재된 단편 영화는 대학 지원서나 면접에서 직접 보여줄 수 있는 결과물입니다. 창의적인 아이디어를 실제 작품으로 구현했다는 점에서 학생의 역량을 구체적으로 보여줍니다.",
          ],
          [
            "",
            {
              text: "자신만의 경험이 담긴 진학 에세이 소재",
              strong: true,
            },
            " 프로젝트를 주도하거나 팀원들과 협업했던 경험, 제작 과정에서 마주한 어려움과 이를 극복한 과정은 자기소개서와 에세이에 활용할 수 있는 좋은 소재가 됩니다. 단순히 자신의 장점을 나열하는 대신 실제 경험을 바탕으로 성장 과정을 설명할 수 있습니다.",
          ],
          [
            "",
            {
              text: "영화 산업에 대한 실질적인 이해",
              strong: true,
            },
            " 학생들은 영화 제작이 실제로 어떻게 이루어지는지 경험하고, 현업 전문가 및 함께 작업한 동료들과 관계를 형성할 기회도 갖게 됩니다. 이는 향후 영화, 미디어, 커뮤니케이션 등 관련 분야의 진로를 탐색하는 데 도움이 됩니다.",
          ],
          [
            "",
            {
              text: "결과물로 증명하는 프로젝트 경험",
              strong: true,
            },
            " 전문 멘토의 지도 아래 완성한 영화와 제작 경험은 관련 학과 진학, 인턴십 지원, 향후 진로 준비 과정에서 자신의 역량을 보여주는 자료로 활용할 수 있습니다.",
          ],
        ],
        grid: true,
      },
      {
        kind: "paragraph",
        content: [
          "창의적인 분야로 진출하고 싶은 학생이든, 자신의 강점을 차별화해 보여주고 싶은 학생이든, 이 프로그램은 ",
          {
            text: "무엇을 할 수 있는지 말로 설명하는 것을 넘어 실제 결과물로 증명할 기회",
            strong: true,
          },
          "를 제공합니다.",
        ],
      },
      {
        kind: "paragraph",
        content: ["캡스톤을 마친 학생들은 다음과 같은 성과를 얻습니다."],
      },
      {
        kind: "list",
        grid: true,
        items: [
          [
            {
              text: "포트폴리오 결과물",
              strong: true,
            },
            " · 지원서와 면접에 활용할 수 있는 실제 영화 제작 크레디트",
          ],
          [
            {
              text: "나만의 이야기",
              strong: true,
            },
            " · 주도성, 협업, 창의적 도전을 보여주는 자기소개서와 에세이 소재",
          ],
          [
            {
              text: "업계 경험",
              strong: true,
            },
            " · 영화 제작 방식에 대한 이해와 멘토 및 동료와의 교류",
          ],
          [
            {
              text: "기록으로 남는 경험",
              strong: true,
            },
            " · 영화·미디어 관련 학과, 인턴십 및 초기 진로 지원에 활용할 수 있는 멘토 지도 경험",
          ],
        ],
      },
      {
        kind: "slider",
      },
      {
        kind: "audience",
        title: "이런 학생에게 추천합니다",
        items: [
          ["만 14~18세 청소년"],
          ["대학 전공을 선택하기 전에 창의적인 분야의 진로를 탐색해 보고 싶은 학생"],
          ["의미 있는 CAS 프로젝트를 찾고 있는 IB 디플로마 학생"],
          [
            "영화, 미디어, 커뮤니케이션, 예술 관련 학과 진학을 위해 포트폴리오를 준비하고 싶은 학생",
          ],
        ],
      },
      {
        kind: "heading",
        text: "프로그램 상세 안내",
        id: "program-details",
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "프로젝트 목표",
            strong: true,
          },
          " 5분 이내의 단편 영화와 홍보용 티저 영상을 제작합니다. 완성된 작품은 2027년 4월 17일 공개 상영회에서 선보입니다.",
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "교육 일정",
            strong: true,
          },
          " 기간: 2027년 1월 9일 ~ 4월 17일, 수업: 매주 토요일, 총 15회, 시간: 오전 9시 ~ 낮 12시(한국 시간), 총 교육 시간: 45시간",
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "교육 방식 및 장소",
            strong: true,
          },
          " 온라인 수업과 한국 내 학교 현장에서 진행하는 대면 수업을 병행합니다.",
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "팀 구성",
            strong: true,
          },
          " 학생 12명이 하나의 제작팀을 구성하며, 감독, 프로듀서, 편집자 등 각자의 역할을 나누어 참여합니다.",
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "제작 가능한 영화 형식",
            strong: true,
          },
          " 학생들은 작품의 주제와 표현 방식에 따라 다큐멘터리, 드라마, 애니메이션, 실험 영화, 인터뷰 기반 영상 등 다양한 형식을 선택할 수 있습니다.",
        ],
      },
      {
        kind: "heading",
        text: "교육 과정",
        minor: true,
      },
      {
        kind: "list",
        items: [
          [
            "1단계. 조사 및 기획 (1~4회차 / 온라인) 영화의 주제를 탐구하고 아이디어를 구체화합니다. 작품의 방향을 정하고 제작 계획을 수립합니다.",
          ],
          [
            "2단계. 촬영 및 편집 (5~9회차 / 대면) 기획한 내용을 바탕으로 실제 촬영과 편집을 진행하며 작품을 완성해 나갑니다.",
          ],
          [
            "3단계. 홍보, 발표 및 공개 상영 완성된 영화를 소개하고 발표하는 과정을 거쳐 공개 상영회에서 작품을 선보입니다.",
          ],
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "전문 멘토링 및 리더십 교육",
            strong: true,
          },
          " 영화 제작 실습과 함께 학생들의 리더십과 소통 능력을 기르기 위한 다양한 활동도 진행됩니다. 주요 교육 내용은 다음과 같습니다. 리더십 워크숍, 서로 다른 문화에 대한 이해와 소통, EPOCH 프레임워크를 활용한 역량 개발, 책임 있는 인공지능(AI) 활용. EPOCH 프레임워크는 공감(Empathy), 존재감(Presence), 의견 표현(Opinion), 창의성(Creativity), 희망(Hope)의 다섯 가지 요소로 구성됩니다.",
        ],
      },
      {
        kind: "paragraph",
        content: [
          "학생들은 아이디어 발상, 자료 조사, 시나리오 작성과 수정 과정에서 AI를 활용하는 방법도 배웁니다. 다만 AI에 의존하기보다는 자신만의 관점과 창의성을 유지하고, AI를 활용한 부분을 투명하게 밝히는 책임 있는 제작 태도를 중요하게 다룹니다.",
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "수료증 ",
            strong: true,
          },
          "전 과정을 성공적으로 마친 학생은 EPOCHA의 파트너 기관인 ",
          {
            text: "KoreaPEN",
            href: "https://www.koreapen.org/pe-programs",
          },
          "과 ",
          {
            text: "PEN Worldwide",
            href: "https://penworldwide.org/",
          },
          "의 인증을 받은 수료증을 받습니다.",
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "수업 진행 언어 안내 본 프로그램의 모든 교육 과정은 영어로 진행됩니다. 따라서 영어로 수업을 듣고 다른 학생들과 의견을 나누며 협업하는 데 어려움이 없는 학생에게 적합합니다.",
            strong: true,
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "작품의 지식재산권 및 저작권",
            strong: true,
          },
          " 프로그램을 통해 학생들이 직접 제작한 작품의 소유권은 학생들에게 있습니다. 다만 The Seagull Production과 EPOCHA는 프로그램 홍보 및 성과 공유에 한해 해당 작품을 지속적으로 사용할 수 있는 영구적인 이용 허락(라이선스)을 받습니다.",
        ],
      },
      {
        kind: "callout",
        title: "학교와 커뮤니티를 위한 맞춤형 운영",
        paragraphs: [
          "학교와 가정마다 학사 일정과 활동 여건이 다르다는 점을 고려해 프로그램 운영 방식을 유연하게 조정할 수 있습니다.",
          "토요일 정규 일정에 참여하기 어려운 경우 학교 또는 학부모 커뮤니티의 상황에 맞춰 별도의 프로그램을 구성하는 것도 가능합니다.",
          "학생들에게 적합한 교육 일정과 운영 방식을 함께 논의하고 싶으시다면 문의해 주세요.",
        ],
        link: {
          text: "Tuya Mishig · t.mishig@epocha.world",
          href: "mailto:t.mishig@epocha.world",
        },
      },
      {
        kind: "heading",
        text: "참가 신청 및 비용 안내",
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "신청 마감일",
            strong: true,
          },
          " 2026년 12월 19일",
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "참가비",
            strong: true,
          },
          " 학생 1인당 ",
          {
            text: "1,700,000원",
            strong: true,
          },
          " (US $1,270)",
        ],
      },
      {
        kind: "paragraph",
        content: [
          "신청서는 접수 순서대로 검토하며 모집 정원 내에서 순차적으로 참가 안내를 드립니다.",
        ],
      },
      {
        kind: "paragraph",
        content: ["참가 안내를 받은 뒤 안내에 따라 참가비를 납부하면 등록이 확정됩니다."],
      },
      {
        kind: "paragraph",
        content: ["정원이 찬 경우 추가 신청자는 다음 기수 참가 대상으로 검토될 수 있습니다."],
      },
      {
        kind: "registration",
        title: "참가 신청 방법",
        paragraphs: [
          [
            "학교와 학부모 커뮤니티는 학생들을 단체로 신청할 수 있습니다. 학생들이 영화 제작팀을 꾸리면 학교 담당자나 학부모 대표가 팀을 대신해 신청서를 제출합니다. 학교 외 단체도 신청할 수 있으며, 단체 등록 시 할인 혜택이 제공됩니다.",
          ],
          [
            {
              text: "아직 팀이 없나요?",
              strong: true,
            },
            " 개인으로 신청하면 제작팀에 합류할 수 있도록 도와드립니다.",
          ],
        ],
      },
      {
        kind: "heading",
        text: "The Seagull Production 소개",
      },
      {
        kind: "paragraph",
        content: [
          "EPOCHA는 The Seagull Production과 함께 이번 영화 제작 캡스톤 프로그램을 운영합니다. The Seagull Production은 체코와 한국을 기반으로 활동하는 국제 영상 제작사로, 영화, 광고, 브랜드 콘텐츠 제작을 전문으로 합니다. 다양한 국제 프로젝트에서 쌓은 제작 경험을 바탕으로 서로 다른 문화와 관점을 연결하는 스토리텔링과 공동 제작에 참여하고 있습니다.",
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
        kind: "heading",
        text: "문의 안내",
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
