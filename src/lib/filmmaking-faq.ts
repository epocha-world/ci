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
const tuyaEmail = { text: "t.mishig@epocha.world", href: "mailto:t.mishig@epocha.world" };

export const filmmakingFaq: Record<Locale, CapstoneFaqItem[]> = {
  en: [
    {
      question: "What is the Filmmaking Capstone?",
      answer: [
        paragraph(
          "A short film program for students aged 14 to 18, run by EPOCHA and The Seagull Production. Students go through the whole filmmaking process, from developing an idea to planning, shooting, editing, and a public screening.",
        ),
      ],
    },
    {
      question: "What is this year’s project theme?",
      answer: [
        paragraph(
          "How does artificial intelligence (AI) affect teens’ social relationships and sense of belonging? Students decide for themselves whether AI helps young people build relationships or weakens them, and express their conclusions on film.",
        ),
      ],
    },
    {
      question: "Who is it for?",
      answer: [
        list(
          ["Teens aged 14 to 18"],
          ["Students who want to explore creative careers before choosing a major"],
          ["IB Diploma students looking for a meaningful CAS project"],
          ["Students building a portfolio for film, media, communications, or arts programs"],
        ),
      ],
    },
    {
      question: "When does the program run?",
      answer: [
        paragraph(
          "January 9 to April 17, 2027. Classes meet on Saturdays from 09:00 to 12:00 KST, for 15 sessions and 45 hours in total.",
        ),
      ],
    },
    {
      question: "Is it online or in person?",
      answer: [
        paragraph(
          "Hybrid. Sessions 1–4 (research and planning) are online, and sessions 5–9 (shooting and editing) are in person.",
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
      question: "What will students produce?",
      answer: [
        paragraph(
          "A short film of five minutes or less and a promotional teaser. Both premiere at a public screening on April 17, 2027.",
        ),
      ],
    },
    {
      question: "What kinds of films can students make?",
      answer: [
        paragraph(
          "Depending on their theme and style, they can choose documentary, drama, experimental film, interview-based video, and more.",
        ),
      ],
    },
    {
      question: "How are teams organised?",
      answer: [
        paragraph(
          "A production team has 12 students, who divide roles such as director, producer, and editor.",
        ),
      ],
    },
    {
      question: "Is there anything beyond filmmaking skills?",
      answer: [
        paragraph(
          "Yes. Alongside hands-on filmmaking, students take part in leadership workshops, cross-cultural understanding and communication activities, competency development using the EPOCH Framework (Empathy, Presence, Opinion, Creativity, Hope), and training in responsible AI use.",
        ),
      ],
    },
    {
      question: "What do students take away?",
      answer: [
        list(
          [
            "A film with their name in the credits, which can go straight into a college or job portfolio",
          ],
          [
            "A certificate of completion, certified by ",
            koreaPen,
            " and ",
            penWorldwide,
            ", EPOCHA’s partner organizations.",
          ],
          [
            "Material for personal statements and essays about initiative, collaboration, and creative challenges",
          ],
          ["Insight into how film production works, and a first network of mentors and peers"],
        ),
      ],
    },
    {
      question: "Who owns the films?",
      answer: [
        paragraph(
          "Students own the films they create. The Seagull Production and EPOCHA receive a perpetual license to use the films solely for promoting the program and sharing its results.",
        ),
      ],
    },
    {
      question: "Do I need to finish the whole program to get the certificate?",
      answer: [
        paragraph("Yes. The certificate goes to students who complete 90% of the entire program."),
      ],
    },
    {
      question: "Can this count as a CAS project?",
      answer: [
        paragraph(
          "The program is designed with CAS goals in mind. It involves collaboration over several weeks, creativity at every stage, initiative, perseverance, and reflection on personal growth. However, whether it counts toward CAS is determined by each school’s CAS coordinator. See the ",
          { text: "IB’s CAS project guidance", href: casGuidance },
          " for details.",
        ),
      ],
    },
    {
      question: "Can schools partner with the program?",
      answer: [
        paragraph(
          "Yes. Schools and CAS coordinators can use it as an external partner project with a structured format and professional mentoring.",
        ),
      ],
    },
    {
      question: "How much does it cost?",
      answer: [paragraph("₩1,700,000 per student (US$1,270).")],
    },
    {
      question: "What is the registration deadline?",
      answer: [
        paragraph(
          "December 19, 2026 at 23:59 KST. Registration may close earlier if the program fills. Additional applicants may be considered for the next cohort.",
        ),
      ],
    },
    {
      question: "How does registration work?",
      answer: [
        paragraph(
          "Applications are reviewed in the order received, and acceptance notices go out on a rolling basis within the enrolment cap. After you receive your acceptance notice, you pay the fee following the instructions provided. Registration is final once payment is complete.",
        ),
      ],
    },
    {
      question: "I don’t have a team yet. Can I still join?",
      answer: [paragraph("Yes. Register individually and EPOCHA will help your teen join a team.")],
    },
    {
      question: "Can schools or parent communities register a group?",
      answer: [
        paragraph(
          "Yes. Once students form a film team, a designated school or parent representative submits the application on the team’s behalf. Groups outside of schools may also apply, and group registration discounts are available.",
        ),
      ],
    },
    {
      question: "What if the Saturday schedule doesn’t work for our school or community?",
      answer: [
        paragraph(
          "A separate program can be arranged to fit your school or parent community. Contact Tuya Mishig at ",
          tuyaEmail,
          ".",
        ),
      ],
    },
  ],
  ko: [
    {
      question: "영화 제작 캡스톤은 어떤 프로그램인가요?",
      answer: [
        paragraph(
          "EPOCHA와 The Seagull Production이 만 14~18세 학생을 대상으로 운영하는 단편 영화 제작 프로그램입니다. 학생들은 아이디어 발상부터 기획, 촬영, 편집, 공개 상영까지 영화 제작의 전 과정을 경험합니다.",
        ),
      ],
    },
    {
      question: "올해 프로젝트의 주제는 무엇인가요?",
      answer: [
        paragraph(
          "인공지능(AI)은 청소년의 대인관계와 소속감에 어떤 영향을 미칠까요? 학생들은 AI가 또래 관계 형성에 도움이 되는지, 관계를 약화하는지 스스로 판단하고 자신의 결론을 영화로 표현합니다.",
        ),
      ],
    },
    {
      question: "누가 참여할 수 있나요?",
      answer: [
        list(
          ["만 14~18세 청소년"],
          ["전공을 정하기 전에 창작 분야의 진로를 탐색하고 싶은 학생"],
          ["의미 있는 CAS 프로젝트를 찾는 IB 디플로마 과정 학생"],
          ["영화, 미디어, 커뮤니케이션 또는 예술 분야 진학을 위해 포트폴리오를 준비하는 학생"],
        ),
      ],
    },
    {
      question: "프로그램 일정은 어떻게 되나요?",
      answer: [
        paragraph(
          "2027년 1월 9일부터 4월 17일까지입니다. 수업은 매주 토요일 09:00~12:00 KST에 진행하며, 총 15회 45시간입니다.",
        ),
      ],
    },
    {
      question: "온라인 수업인가요, 대면 수업인가요?",
      answer: [
        paragraph(
          "온라인과 대면 수업을 병행합니다. 1~4회차(조사 및 기획)는 온라인으로, 5~9회차(촬영 및 편집)는 대면으로 진행합니다.",
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
      question: "학생들은 어떤 작품을 제작하나요?",
      answer: [
        paragraph(
          "5분 이내의 단편 영화와 홍보용 예고편을 제작합니다. 두 작품 모두 2027년 4월 17일 공개 상영회에서 처음 선보입니다.",
        ),
      ],
    },
    {
      question: "어떤 종류의 영화를 만들 수 있나요?",
      answer: [
        paragraph(
          "주제와 표현 방식에 따라 다큐멘터리, 드라마, 실험 영화, 인터뷰 영상 등 다양한 형식을 선택할 수 있습니다.",
        ),
      ],
    },
    {
      question: "팀은 어떻게 구성되나요?",
      answer: [
        paragraph(
          "제작팀은 학생 12명으로 구성되며, 팀원들이 감독, 프로듀서, 편집자 등의 역할을 나눠 맡습니다.",
        ),
      ],
    },
    {
      question: "영화 제작 외에 무엇을 배우나요?",
      answer: [
        paragraph(
          "영화 제작 실습과 함께 리더십 워크숍, 서로 다른 문화에 대한 이해와 소통 활동, EPOCH 프레임워크(공감, 존재감, 의견 표현, 창의성, 희망)를 활용한 역량 개발, 책임 있는 AI 활용 교육에 참여합니다.",
        ),
      ],
    },
    {
      question: "프로그램을 통해 무엇을 얻을 수 있나요?",
      answer: [
        list(
          ["진학 또는 취업 포트폴리오에 활용할 수 있는, 본인의 이름이 크레디트에 올라간 영화"],
          ["EPOCHA의 파트너 기관인 ", koreaPen, "과 ", penWorldwide, "의 인증을 받은 수료증"],
          ["주도성, 협업, 창의적 도전에 관한 자기소개서와 에세이에 활용할 경험"],
          ["영화 제작 과정에 대한 이해와 멘토 및 동료와의 첫 인맥"],
        ),
      ],
    },
    {
      question: "제작한 영화의 소유권은 누구에게 있나요?",
      answer: [
        paragraph(
          "학생이 제작한 영화의 소유권은 학생에게 있습니다. The Seagull Production과 EPOCHA는 프로그램 홍보와 성과 공유 목적으로만 영화를 사용할 수 있는 영구 이용 허락을 받습니다.",
        ),
      ],
    },
    {
      question: "수료증을 받으려면 전 과정을 마쳐야 하나요?",
      answer: [paragraph("수료증은 전체 프로그램의 90%를 이수한 학생에게 발급됩니다.")],
    },
    {
      question: "IB의 CAS 프로젝트로 인정받을 수 있나요?",
      answer: [
        paragraph(
          "이 프로그램은 CAS의 목표를 고려해 설계했습니다. 학생들은 여러 주에 걸쳐 협업하고, 모든 단계에서 창의성, 주도성, 끈기를 발휘하며 자신의 성장을 돌아봅니다. CAS 인정 여부는 각 학교의 CAS 담당자가 결정합니다. 자세한 내용은 ",
          { text: "IB의 CAS 프로젝트 안내", href: casGuidance },
          "를 참고하세요.",
        ),
      ],
    },
    {
      question: "학교가 프로그램에 파트너로 참여할 수 있나요?",
      answer: [
        paragraph(
          "네. 학교와 CAS 담당자는 체계적인 진행 방식과 전문 멘토링을 갖춘 외부 협력 프로젝트로 이 프로그램을 활용할 수 있습니다.",
        ),
      ],
    },
    {
      question: "참가비는 얼마인가요?",
      answer: [paragraph("학생 1인당 1,700,000원(미화 1,270달러)입니다.")],
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
          "접수 순서대로 신청서를 검토하고, 정원 범위 내에서 참가 승인 여부를 순차적으로 알립니다. 승인 안내에 따라 참가비를 납부하면 등록이 확정됩니다.",
        ),
      ],
    },
    {
      question: "아직 팀이 없어도 참여할 수 있나요?",
      answer: [paragraph("네. 개인으로 신청하면 EPOCHA가 학생의 팀 배정을 돕습니다.")],
    },
    {
      question: "학교나 학부모 모임에서 단체로 신청할 수 있나요?",
      answer: [
        paragraph(
          "네. 학생들이 제작팀을 구성하면 지정된 학교 또는 학부모 대표가 팀을 대신해 신청서를 제출합니다. 학교 외부 단체도 신청할 수 있으며, 단체 등록 할인이 적용됩니다.",
        ),
      ],
    },
    {
      question: "학교나 학부모 모임이 토요일 일정에 참여하기 어렵다면 어떻게 하나요?",
      answer: [
        paragraph(
          "학교나 학부모 모임의 일정에 맞춰 별도 프로그램을 마련할 수 있습니다. Tuya Mishig(",
          tuyaEmail,
          ")에게 문의하세요.",
        ),
      ],
    },
  ],
};
