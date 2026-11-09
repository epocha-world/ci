import type { CapstoneArticleContent } from "./capstone-article";
import type { Locale } from "./preferences";

type MentorsBlock = Extract<CapstoneArticleContent["blocks"][number], { kind: "mentors" }>;

export const qualitaxMentors: Record<Locale, MentorsBlock> = {
  en: {
    kind: "mentors",
    title: "Meet your mentors",
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
  ko: {
    kind: "mentors",
    title: "멘토 소개",
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
};
