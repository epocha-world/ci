import type { ArticleInline, CapstoneArticleContent } from "./capstone-article";
import type { Locale } from "./preferences";

type Block = CapstoneArticleContent["blocks"][number];

const mediaRoot = "/capstones/cym-article/";
const slideCount = 8;
const mentorProfile =
  "https://www.unesco.org/en/interculturaldialogue/youthforpeace/joanne-ascencion-valdez";
const ibGuidance =
  "https://ibo.org/programmes/diploma-programme/curriculum/dp-core/creativity-activity-and-service/cas-projects/";
const gsis = "https://www.gsis.sc.kr/";
const cym = "https://www.facebook.com/CandonYouthMovement/";

const strong = (text: string): ArticleInline => ({ text, strong: true });
const link = (text: string, href: string): ArticleInline => ({ text, href });
const paragraph = (...content: ArticleInline[]): Block => ({ kind: "paragraph", content });

function features(items: [title: string, description: string][]): Block {
  return {
    kind: "list",
    grid: true,
    items: items.map(([title, description]) => [strong(title), " ", description]),
  };
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

// Article copy from News_CYM Capstone_EN.docx with a Korean translation.
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
            "EPOCHA and the Candon Youth Movement (CYM) are inviting students aged 14 to 18 to take on that challenge in the Candon Youth Leadership & Enrichment Program 2027. Weekly coaching workshops, hands-on project sessions, and ongoing online mentoring from CYM lead mentor ",
            link("Joanne Ascencion Valdez", mentorProfile),
            " and industry mentors, including ",
            link("Cre8te", "https://kr.wecre8te.com/"),
            " and ",
            link("Yusha", "https://www.yusha.ai/"),
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
      { kind: "heading", text: "Why register?" },
      paragraph(
        "The program gives students a chance to build leadership skills and develop their career portfolios. Students who complete it gain:",
      ),
      features([
        [
          "Leadership and professional experience.",
          "Students run a live event and a store, taking on professional roles.",
        ],
        [
          "A portfolio piece.",
          "A launch event they planned and delivered is concrete evidence of what they can do, ready to show in applications and interviews.",
        ],
        [
          "Material for essays and interviews.",
          "Leading a team, handling setbacks, and completing a complex project give students specific experiences to discuss.",
        ],
        [
          "Cross-cultural skills.",
          "Students learn to communicate and collaborate across cultures, a strength in any global field.",
        ],
      ]),
      { kind: "heading", text: "A CAS project for IB Diploma students" },
      paragraph(
        "CAS (Creativity, Activity, Service) encourages IB Diploma students to learn through experiences outside the classroom. A CAS project should involve collaboration lasting at least one month and demonstrate initiative, perseverance, and personal growth. This capstone is designed with those goals in mind.",
      ),
      features([
        [
          "Collaboration toward a shared goal.",
          "In teams of 5 to 12, students take on professional roles and take responsibility for an event and a store over about three months.",
        ],
        [
          "Creativity from concept to launch.",
          "Students shape the event’s concept, design the guest experience, and build the companion store, connecting their work to the Creativity strand of CAS.",
        ],
        [
          "Service to a community.",
          "The book launch gives Filipino heritage a public stage, and 10% of every registration fee supports CYM’s work with young people in Candon City.",
        ],
        [
          "Reflection throughout.",
          "Students document their growth at every stage and leave with evidence for their CAS reflections and personal portfolios.",
        ],
        [
          "A tangible outcome.",
          "Students deliver a live event and a store with guidance from mentors.",
        ],
      ]),
      paragraph(
        "Schools and CAS coordinators can use the program as a structured project with an external partner and professional mentoring.",
      ),
      {
        kind: "note",
        content: [
          "Each school’s CAS coordinator determines whether a project counts toward CAS. See ",
          link("the official IB CAS project guidance", ibGuidance),
          " for details.",
        ],
      },
      { kind: "slider" },
      {
        kind: "audience",
        title: "Who this program is for",
        items: [
          ["Teens aged 14 to 18"],
          ["IB Diploma students looking for a meaningful CAS project"],
          ["Students who want to build professional and leadership skills early"],
          [
            "Students interested in creative careers, events, marketing, communications, entrepreneurship, or cultural storytelling",
          ],
          [
            "Students looking for a portfolio project for university applications or job interviews",
          ],
        ],
      },
      { kind: "heading", id: "program-details", text: "Program details" },
      paragraph(
        strong("Project goal"),
        " · Organize a book launch celebrating Filipino culture and build a companion store. The rehearsal is on March 27, 2027, and the launch is on April 3, 2027, from 9:00 a.m. to 2:00 p.m. KST.",
      ),
      paragraph(
        strong("Schedule"),
        " · Saturdays, January 9 to April 3, 2027, from 9:00 a.m. to 11:30 a.m. KST. The project runs for 13 sessions and 35 hours in total.",
      ),
      paragraph(
        strong("Format and location"),
        " · In-person project sessions at ",
        link("Gyeonggi Suwon International School (GSIS)", gsis),
        ", with ongoing online mentoring.",
      ),
      paragraph(
        strong("Coaching and mentoring"),
        " · Students develop leadership and communication skills through cross-cultural understanding, responsible AI use, and the EPOCH Framework. EPOCH covers Empathy and Emotional Intelligence, Presence through Networking and Connectedness, Opinion through Judgment and Ethics, Creativity and Imagination, and Hope through Vision and Leadership.",
      ),
      { kind: "heading", minor: true, text: "Leadership training" },
      {
        kind: "list",
        items: [
          ["Introduction to Youth Leadership"],
          ["Peacebuilding and Intercultural Dialogue"],
          ["Filipino Heritage and Storytelling"],
          [
            "The Human Premium series · Empathetic Leadership, Connection before Correction, Ethical Leadership in the Age of AI, Leading for Creativity and Innovation, and Why Do Leaders Need Hope?",
          ],
          ["Leadership through Cultural Awareness"],
          ["Building Your Career Portfolio"],
          ["Decoding Korean Business Culture"],
        ],
      },
      paragraph(
        strong("Credentials"),
        " · Students who complete the full program receive a certificate of completion certified by ",
        link("KoreaPEN", "https://www.koreapen.org/pe-programs"),
        " and ",
        link("PEN Worldwide", "https://penworldwide.org/"),
        ".",
      ),
      paragraph(
        strong("Language of instruction"),
        " · All sessions are delivered in English. Students should be comfortable taking classes, exchanging ideas, and collaborating in English.",
      ),
      {
        kind: "resource",
        link: { text: "View the CYM parent guide (PNG)", href: mediaRoot + "parent-guide.png" },
      },
      { kind: "heading", text: "Registration and fees" },
      paragraph(strong("Registration deadline"), " · December 19, 2026 at 23:59 KST."),
      paragraph(
        strong("Fee"),
        " · ₩1,400,000 per student (US$1,100). Ten percent of each registration fee goes directly to supporting CYM’s work.",
      ),
      paragraph(
        "Applications are reviewed in the order received, and acceptance notices are sent as places become available. Follow the payment instructions in your acceptance notice to confirm your place. If the program fills up, additional applicants may be considered for the next cohort.",
      ),
      {
        kind: "registration",
        title: "How to register",
        paragraphs: [
          [
            "Schools and parent communities can register as a group. Once students form a team, a designated school or parent representative submits the application on their behalf. Groups outside of schools may also apply.",
          ],
          ["Students who apply individually can receive help joining a team."],
        ],
      },
      {
        kind: "callout",
        title: "For GSIS families",
        paragraphs: [
          "GSIS students receive priority and can sign up through their school’s learning management system. A GSIS discount is available.",
        ],
        link: { text: "Gyeonggi Suwon International School", href: gsis },
      },
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
      { kind: "heading", text: "Contact" },
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
            "EPOCHA와 칸돈 청년 운동(CYM)은 2027 칸돈 청소년 리더십·역량 개발 프로그램에 만 14~18세 학생을 초대합니다. 매주 코칭 워크숍과 프로젝트 실습이 진행되며, CYM의 대표 멘토 ",
            link("조앤 아센시온 발데스", mentorProfile),
            "와 ",
            link("Cre8te", "https://kr.wecre8te.com/"),
            ", ",
            link("Yusha", "https://www.yusha.ai/"),
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
      { kind: "heading", text: "왜 참여해야 할까요?" },
      paragraph(
        "이 프로그램에서 학생들은 리더십을 기르고 진로 포트폴리오를 만들 수 있습니다. 프로그램을 마치면 다음과 같은 경험과 성과를 얻습니다.",
      ),
      features([
        ["리더십과 실무 경험", "실제 행사와 스토어를 운영하며 각자 맡은 실무 역할을 수행합니다."],
        [
          "포트폴리오 결과물",
          "직접 기획하고 운영한 출간 행사는 지원서와 면접에서 역량을 구체적으로 보여주는 자료가 됩니다.",
        ],
        [
          "에세이와 면접 소재",
          "팀을 이끌고 난관을 해결하며 복잡한 프로젝트를 마무리한 경험을 자기 언어로 이야기할 수 있습니다.",
        ],
        ["문화 간 소통 능력", "다양한 문화권의 사람들과 소통하고 협업하는 능력을 기릅니다."],
      ]),
      { kind: "heading", text: "IB 디플로마 학생을 위한 CAS 프로젝트" },
      paragraph(
        "CAS(Creativity, Activity, Service)는 IB 디플로마 학생이 교실 밖에서 경험을 쌓고 성장하도록 돕는 과정입니다. CAS 프로젝트는 최소 한 달 이상 이어지는 협업을 포함하고, 학생의 주도성, 끈기, 개인적 성장을 보여줘야 합니다. 이 캡스톤은 이러한 목표를 반영해 설계됐습니다.",
      ),
      features([
        [
          "공동의 목표를 향한 협업",
          "학생 5~12명이 한 팀을 이뤄 실무 역할을 나누고 약 3개월 동안 행사와 스토어를 책임집니다.",
        ],
        [
          "기획부터 출시까지 발휘하는 창의성",
          "학생들이 행사 콘셉트와 관객 경험을 설계하고 연계 스토어를 만들어 CAS의 창의성 영역과 연결합니다.",
        ],
        [
          "지역사회에 기여하는 경험",
          "출간 행사는 필리핀 문화유산을 대중에게 소개하는 자리입니다. 참가비의 10%는 칸돈시 청소년을 위한 CYM의 활동에 쓰입니다.",
        ],
        [
          "전 과정에서의 성찰",
          "프로젝트 단계마다 성장 과정을 기록해 CAS 성찰 기록과 개인 포트폴리오에 활용합니다.",
        ],
        ["구체적인 결과물", "멘토의 지도 아래 실제 행사를 열고 스토어를 완성합니다."],
      ]),
      paragraph(
        "학교와 CAS 코디네이터는 이 프로그램을 전문 멘토링과 체계적인 활동을 갖춘 외부 협력 프로젝트로 활용할 수 있습니다.",
      ),
      {
        kind: "note",
        content: [
          "CAS 프로젝트의 최종 인정 여부는 각 학교의 CAS 코디네이터가 결정합니다. 자세한 내용은 ",
          link("IB 공식 CAS 프로젝트 안내", ibGuidance),
          "를 참고해 주세요.",
        ],
      },
      { kind: "slider" },
      {
        kind: "audience",
        title: "이런 학생에게 추천합니다",
        items: [
          ["만 14~18세 청소년"],
          ["의미 있는 CAS 프로젝트를 찾는 IB 디플로마 학생"],
          ["실무 역량과 리더십을 미리 기르고 싶은 학생"],
          [
            "창의 분야 진로, 행사, 마케팅, 커뮤니케이션, 창업 또는 문화 스토리텔링에 관심 있는 학생",
          ],
          ["대학 지원이나 취업 면접에서 소개할 포트폴리오 프로젝트를 찾는 학생"],
        ],
      },
      { kind: "heading", id: "program-details", text: "프로그램 상세 안내" },
      paragraph(
        strong("프로젝트 목표"),
        " · 필리핀 문화를 알리는 출간 행사를 기획하고 연계 스토어를 만듭니다. 리허설은 2027년 3월 27일, 출간 행사는 2027년 4월 3일 09:00~14:00 KST에 진행합니다.",
      ),
      paragraph(
        strong("교육 일정"),
        " · 2027년 1월 9일~4월 3일, 매주 토요일 09:00~11:30 KST에 진행합니다. 총 13회, 35시간입니다.",
      ),
      paragraph(
        strong("교육 방식 및 장소"),
        " · ",
        link("경기수원외국인학교(GSIS)", gsis),
        "에서 대면 프로젝트 수업을 진행하며 온라인 멘토링도 이어집니다.",
      ),
      paragraph(
        strong("코칭 및 멘토링"),
        " · 문화 간 이해와 소통, 책임 있는 AI 활용, EPOCH 프레임워크를 통해 리더십과 소통 능력을 기릅니다. EPOCH는 공감과 정서 지능(Empathy), 관계 형성과 연결(Presence), 판단과 윤리(Opinion), 창의성과 상상력(Creativity), 희망과 비전 및 리더십(Hope)으로 구성됩니다.",
      ),
      { kind: "heading", minor: true, text: "리더십 교육" },
      {
        kind: "list",
        items: [
          ["청소년 리더십 입문"],
          ["평화 구축과 문화 간 대화"],
          ["필리핀 문화유산과 스토리텔링"],
          [
            "Human Premium 시리즈 · 공감하는 리더십, 지적하기 전에 관계 맺기, AI 시대의 윤리적 리더십, 창의성과 혁신을 이끄는 리더십, 리더에게 희망이 필요한 이유",
          ],
          ["문화적 이해를 바탕으로 한 리더십"],
          ["진로 포트폴리오 만들기"],
          ["한국의 비즈니스 문화 이해하기"],
        ],
      },
      paragraph(
        strong("수료증"),
        " · 전 과정을 마친 학생은 ",
        link("KoreaPEN", "https://www.koreapen.org/pe-programs"),
        "과 ",
        link("PEN Worldwide", "https://penworldwide.org/"),
        "의 인증을 받은 수료증을 받습니다.",
      ),
      paragraph(
        strong("수업 언어"),
        " · 모든 수업은 영어로 진행합니다. 영어로 수업을 듣고 의견을 나누며 협업할 수 있는 학생에게 적합합니다.",
      ),
      {
        kind: "resource",
        link: { text: "CYM 학부모 안내문 보기 (영문 PNG)", href: mediaRoot + "parent-guide.png" },
      },
      { kind: "heading", text: "신청 및 참가비" },
      paragraph(strong("신청 마감"), " · 2026년 12월 19일 23:59 KST."),
      paragraph(
        strong("참가비"),
        " · 학생 1인당 ₩1,400,000 (US$1,100). 참가비의 10%는 CYM 활동 지원에 직접 사용됩니다.",
      ),
      paragraph(
        "신청서를 접수 순서대로 검토하며 모집 정원 내에서 순차적으로 참가 안내를 드립니다. 안내에 따라 참가비를 납부하면 등록이 확정됩니다. 정원이 찬 경우 추가 신청자는 다음 기수 참가 대상으로 검토될 수 있습니다.",
      ),
      {
        kind: "registration",
        title: "참가 신청 방법",
        paragraphs: [
          [
            "학교나 학부모 커뮤니티는 단체로 신청할 수 있습니다. 학생들이 팀을 구성하면 지정된 학교 담당자나 학부모 대표가 팀을 대신해 신청서를 제출합니다. 학교 외 단체도 신청할 수 있습니다.",
          ],
          ["개인으로 신청한 학생에게는 팀에 합류할 수 있도록 안내합니다."],
        ],
      },
      {
        kind: "callout",
        title: "GSIS 재학생 안내",
        paragraphs: [
          "GSIS 재학생은 우선 선발 대상이며 학교 학습관리시스템(LMS)에서 신청할 수 있습니다. GSIS 재학생 할인도 제공됩니다.",
        ],
        link: { text: "경기수원외국인학교", href: gsis },
      },
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
      { kind: "heading", text: "문의 안내" },
      paragraph("신청 방법, 교육 과정, 학교 및 단체 참여에 관한 문의는 아래 연락처로 보내 주세요."),
      contacts("ko"),
    ],
  },
};
