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

export const cymFaq: Record<Locale, CapstoneFaqItem[]> = {
  en: [
    {
      question: "What is this program?",
      answer: [
        paragraph(
          "The Candon Youth Leadership & Enrichment Program 2027 is a student-led capstone run by EPOCHA and the Candon Youth Movement (CYM) for students aged 14 to 18. A team of students plans a book launch celebrating Filipino heritage from scratch and builds a companion store to go with it. Every decision, from the concept to the guest experience, is theirs.",
        ),
      ],
    },
    {
      question: "What will students do?",
      answer: [
        paragraph(
          "Organize and host a live book launch event and open a companion store. The rehearsal is on March 27, 2027, and the launch is on April 3, 2027, from 9:00 a.m. to 2:00 p.m. KST.",
        ),
      ],
    },
    {
      question: "Who is it for?",
      answer: [
        list(
          ["Teens aged 14 to 18"],
          ["IB Diploma students looking for a meaningful CAS project"],
          ["Students who want to build professional and leadership skills early"],
          [
            "Students interested in creative careers, events, marketing, communications, entrepreneurship, or cultural storytelling",
          ],
          [
            "Students looking for a portfolio project for university applications or job interviews",
          ],
        ),
      ],
    },
    {
      question: "Who will guide the students?",
      answer: [
        paragraph(
          "CYM lead mentor Joanne Ascencion Valdez, plus industry mentors including Cre8te and Yusha. Students get weekly coaching workshops, hands-on project sessions, and ongoing online mentoring from their first idea to launch day.",
        ),
      ],
    },
    {
      question: "When does the program run?",
      answer: [
        paragraph(
          "Saturdays, January 9 to April 3, 2027, from 09:00 to 11:30 KST. That is 13 sessions and 35 hours in total.",
        ),
      ],
    },
    {
      question: "Where are sessions held?",
      answer: [
        paragraph(
          "In person at Gyeonggi Suwon International School (GSIS), with ongoing online mentoring.",
        ),
      ],
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
      question: "How are teams organised?",
      answer: [
        paragraph(
          "Teams of 5 to 12 students take on professional roles and take responsibility for the event and store over about three months.",
        ),
      ],
    },
    {
      question: "What leadership training is included?",
      answer: [
        list(
          ["Introduction to Youth Leadership"],
          ["Peacebuilding and Intercultural Dialogue"],
          ["Filipino Heritage and Storytelling"],
          [
            "The Human Premium series: Empathetic Leadership, Connection before Correction, Ethical Leadership in the Age of AI, Leading for Creativity and Innovation, and Why Do Leaders Need Hope?",
          ],
          ["Leadership through Cultural Awareness"],
          ["Building Your Career Portfolio"],
          ["Decoding Korean Business Culture"],
        ),
      ],
    },
    {
      question: "What is the EPOCH Framework?",
      answer: [
        paragraph(
          "EPOCHA’s competency model, used throughout the coaching: Empathy and Emotional Intelligence, Presence through Networking and Connectedness, Opinion through Judgment and Ethics, Creativity and Imagination, and Hope through Vision and Leadership.",
        ),
      ],
    },
    {
      question: "Does the program cover AI?",
      answer: [
        paragraph(
          "Yes. Responsible AI use is part of the coaching, alongside cross-cultural understanding and the EPOCH Framework.",
        ),
      ],
    },
    {
      question: "Why should my teen register?",
      answer: [
        paragraph("Students who complete the program gain:"),
        list(
          ["Leadership and professional experience from running a live event and a store"],
          [
            "A portfolio piece: a launch event they planned and delivered, ready to show in applications and interviews",
          ],
          [
            "Material for essays and interviews about leading a team, handling setbacks, and completing a complex project",
          ],
          ["Cross-cultural communication and collaboration skills"],
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
      question: "Can this count as a CAS project?",
      answer: [
        paragraph("It is designed with CAS goals in mind:"),
        list(
          ["Collaboration: teams work toward a shared goal over about three months."],
          [
            "Creativity: students shape the event concept, design the guest experience, and build the store.",
          ],
          [
            "Service: the launch gives Filipino heritage a public stage, and 10% of every registration fee supports CYM’s work with young people in Candon City.",
          ],
          [
            "Reflection: students document their growth at every stage and leave with evidence for CAS reflections and personal portfolios.",
          ],
          ["A tangible outcome: a live event and a store, delivered with mentor guidance."],
        ),
        paragraph(
          "Each school’s CAS coordinator determines whether a project counts toward CAS. See the ",
          { text: "IB’s official CAS project guidance", href: casGuidance },
          " for details.",
        ),
        paragraph(
          "Schools and CAS coordinators can use it as a structured project with an external partner and professional mentoring.",
        ),
      ],
    },
    {
      question: "How much does it cost?",
      answer: [
        paragraph(
          "₩1,400,000 per student (US$1,100). Ten percent of each registration fee goes directly to supporting CYM’s work.",
        ),
      ],
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
          "Applications are reviewed in the order received, and acceptance notices are sent as places become available. Follow the payment instructions in your acceptance notice to confirm your place. Registration is confirmed once payment is complete.",
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
    {
      question: "Is there any discount available?",
      answer: [
        paragraph(
          "A GSIS discount is available. GSIS students receive priority and can sign up through their school’s learning management system.",
        ),
      ],
    },
  ],
  ko: [
    {
      question: "어떤 프로그램인가요?",
      answer: [
        paragraph(
          "2027 칸돈 청소년 리더십·역량 개발 프로그램은 EPOCHA와 칸돈 청년 운동(CYM)이 만 14~18세 학생을 대상으로 운영하는 학생 주도 캡스톤입니다. 학생들은 팀을 이루어 필리핀 문화유산을 기념하는 출간 행사를 처음부터 기획하고, 행사와 연계한 스토어를 만듭니다. 행사 콘셉트부터 방문객 경험까지 학생들이 직접 결정합니다.",
        ),
      ],
    },
    {
      question: "학생들은 어떤 활동을 하나요?",
      answer: [
        paragraph(
          "출간 행사를 기획해 현장에서 진행하고, 행사와 연계한 스토어를 엽니다. 리허설은 2027년 3월 27일에 진행하며, 출간 행사는 2027년 4월 3일 09:00~14:00 KST에 열립니다.",
        ),
      ],
    },
    {
      question: "누가 참여할 수 있나요?",
      answer: [
        list(
          ["만 14~18세 청소년"],
          ["의미 있는 CAS 프로젝트를 찾는 IB 디플로마 과정 학생"],
          ["실무 역량과 리더십을 일찍 키우고 싶은 학생"],
          [
            "창작 분야 진로, 행사, 마케팅, 커뮤니케이션, 창업 또는 문화 스토리텔링에 관심 있는 학생",
          ],
          ["대학 지원이나 취업 면접에 활용할 포트폴리오 프로젝트를 찾는 학생"],
        ),
      ],
    },
    {
      question: "누가 학생들을 지도하나요?",
      answer: [
        paragraph(
          "CYM의 대표 멘토 Joanne Ascencion Valdez와 Cre8te, Yusha 등 업계 멘토가 지도합니다. 학생들은 아이디어를 구상하는 단계부터 출간 행사 당일까지 매주 코칭 워크숍과 프로젝트 실습에 참여하고, 지속적으로 온라인 멘토링을 받습니다.",
        ),
      ],
    },
    {
      question: "프로그램 일정은 어떻게 되나요?",
      answer: [
        paragraph(
          "2027년 1월 9일부터 4월 3일까지 매주 토요일 09:00~11:30 KST에 진행합니다. 총 13회, 35시간입니다.",
        ),
      ],
    },
    {
      question: "수업은 어디에서 진행되나요?",
      answer: [
        paragraph(
          "대면 수업은 경기수원외국인학교(GSIS)에서 진행하며, 프로그램 기간 동안 온라인 멘토링을 병행합니다.",
        ),
      ],
    },
    {
      question: "수업은 어떤 언어로 진행되나요?",
      answer: [
        paragraph(
          "영어로 진행합니다. 학생은 영어로 수업을 듣고, 의견을 나누고, 팀원과 협업할 수 있어야 합니다.",
        ),
      ],
    },
    {
      question: "팀은 어떻게 구성되나요?",
      answer: [
        paragraph(
          "학생 5~12명이 한 팀을 이룹니다. 팀원들은 각자의 실무 역할을 맡아 약 3개월 동안 출간 행사와 스토어 운영을 책임집니다.",
        ),
      ],
    },
    {
      question: "어떤 리더십 교육이 포함되나요?",
      answer: [
        list(
          ["청소년 리더십 입문"],
          ["평화 구축과 문화 간 대화"],
          ["필리핀 문화유산과 스토리텔링"],
          [
            "휴먼 프리미엄 시리즈: 공감 리더십, 바로잡기 전에 관계 맺기, AI 시대의 윤리적 리더십, 창의성과 혁신을 이끄는 리더십, 리더에게 희망이 필요한 이유",
          ],
          ["문화적 이해를 바탕으로 한 리더십"],
          ["커리어 포트폴리오 만들기"],
          ["한국의 비즈니스 문화 이해하기"],
        ),
      ],
    },
    {
      question: "EPOCH 프레임워크란 무엇인가요?",
      answer: [
        paragraph(
          "코칭 전반에 활용하는 EPOCHA의 역량 모델입니다. 공감과 감성 지능, 네트워킹과 유대감을 통한 존재감, 판단과 윤리에 기반한 의견 형성, 창의력과 상상력, 비전과 리더십을 통한 희망으로 구성됩니다.",
        ),
      ],
    },
    {
      question: "AI 활용도 배우나요?",
      answer: [
        paragraph(
          "네. 서로 다른 문화에 대한 이해와 EPOCH 프레임워크와 함께 책임 있는 AI 활용을 배웁니다.",
        ),
      ],
    },
    {
      question: "학생들은 참여를 통해 무엇을 얻나요?",
      answer: [
        paragraph("프로그램을 마친 학생들은 다음을 얻습니다."),
        list(
          ["현장 행사와 스토어를 운영하며 쌓은 리더십과 실무 경험"],
          ["지원서와 면접에 활용할 수 있는, 직접 기획하고 진행한 출간 행사 포트폴리오"],
          [
            "팀을 이끌고 어려움을 극복하며 복합적인 프로젝트를 완수한 경험을 담을 에세이와 면접 소재",
          ],
          ["문화 간 소통과 협업 역량"],
        ),
      ],
    },
    {
      question: "수료증이 발급되나요?",
      answer: [
        paragraph(
          "네. 전 과정을 이수한 학생에게는 EPOCHA의 파트너 기관인 ",
          koreaPen,
          "과 ",
          penWorldwide,
          "의 인증을 받은 수료증이 발급됩니다.",
        ),
      ],
    },
    {
      question: "IB의 CAS 프로젝트로 인정받을 수 있나요?",
      answer: [
        paragraph("이 프로그램은 CAS의 목표를 고려해 설계했습니다."),
        list(
          ["협업: 학생들은 약 3개월 동안 공동 목표를 향해 팀으로 일합니다."],
          ["창의성: 학생들이 행사 콘셉트를 정하고, 방문객 경험을 설계하며, 스토어를 만듭니다."],
          [
            "봉사: 출간 행사를 통해 필리핀 문화유산을 알리고, 참가비의 10%는 칸돈시 청소년을 위한 CYM 활동에 쓰입니다.",
          ],
          [
            "성찰: 학생들은 각 단계에서 자신의 성장을 기록하고, CAS 성찰과 개인 포트폴리오에 활용할 자료를 남깁니다.",
          ],
          ["구체적인 결과물: 멘토의 지도를 받아 현장 출간 행사와 스토어를 완성합니다."],
        ),
        paragraph(
          "CAS 인정 여부는 각 학교의 CAS 담당자가 결정합니다. 자세한 내용은 ",
          { text: "IB 공식 CAS 프로젝트 안내", href: casGuidance },
          "를 참고하세요.",
        ),
        paragraph(
          "학교와 CAS 담당자는 이 프로그램을 외부 파트너와 전문 멘토가 참여하는 체계적인 프로젝트로 활용할 수 있습니다.",
        ),
      ],
    },
    {
      question: "참가비는 얼마인가요?",
      answer: [
        paragraph(
          "학생 1인당 1,400,000원(미화 1,100달러)입니다. 참가비의 10%는 CYM 활동을 지원하는 데 직접 쓰입니다.",
        ),
      ],
    },
    {
      question: "신청 마감은 언제인가요?",
      answer: [
        paragraph(
          "2026년 12월 19일 23:59 KST입니다. 정원이 차면 조기 마감할 수 있으며, 이후 신청자는 다음 기수 참가 대상으로 검토할 수 있습니다.",
        ),
      ],
    },
    {
      question: "신청 절차는 어떻게 되나요?",
      answer: [
        paragraph(
          "접수 순서대로 신청서를 검토하고, 정원 범위 내에서 참가 승인 안내를 보냅니다. 승인 안내에 따라 참가비를 납부하면 등록이 확정됩니다.",
        ),
      ],
    },
    {
      question: "학교나 학부모 모임에서 단체로 신청할 수 있나요?",
      answer: [
        paragraph(
          "네. 학생들이 팀을 구성하면 지정된 학교 또는 학부모 대표가 팀을 대신해 신청서를 제출합니다. 학교 외부 단체도 신청할 수 있습니다.",
        ),
      ],
    },
    {
      question: "아직 팀이 없어도 참여할 수 있나요?",
      answer: [
        paragraph("네. 개인으로 신청한 학생은 팀에 합류할 수 있도록 지원을 받을 수 있습니다."),
      ],
    },
    {
      question: "할인 혜택이 있나요?",
      answer: [
        paragraph(
          "GSIS 재학생은 할인과 우선 등록 혜택을 받을 수 있으며, 학교의 학습 관리 시스템(LMS)을 통해 신청할 수 있습니다.",
        ),
      ],
    },
  ],
};
