import type { Locale } from "./preferences";

type Resource = { label: string; href: string };

type Section = {
  title: string;
  paragraphs: string[];
  resources?: Resource[];
};

export type CapstoneDetailContent = {
  lead?: string;
  schedule: string;
  format: string;
  sections: Section[];
};

const ibGuidance =
  "https://ibo.org/programmes/diploma-programme/curriculum/dp-core/creativity-activity-and-service/cas-projects/";

const details: Record<string, Record<Locale, CapstoneDetailContent>> = {
  "bridging-cultures-through-film": {
    en: {
      schedule: "January 9–April 17, 2027 · Saturdays, 09:00–12:00 KST · 15 sessions, 45 hours",
      format: "Hybrid · Online classes and in-person sessions",
      sections: [],
    },
    ko: {
      schedule: "2027년 1월 9일~4월 17일 · 매주 토요일 09:00~12:00 KST · 총 15회, 45시간",
      format: "혼합형 · 온라인 수업과 대면 활동 병행",
      sections: [],
    },
  },
  "filipino-heritage-book-launch": {
    en: {
      lead: "Plan a public book launch celebrating Filipino heritage and build a companion store with the Candon Youth Movement (CYM). Your team shapes the event from its concept through to the guest experience.",
      schedule: "January 9–April 3, 2027 · Saturdays, 09:00–11:30 KST · 13 sessions, 35 hours",
      format: "In-person sessions at Gyeonggi Suwon International School (GSIS)",
      sections: [
        {
          title: "Lead a live event",
          paragraphs: [
            "Students take responsibility for an event and a store, working in teams of 5–12. Weekly coaching and project sessions help them practice event planning, cultural storytelling, and cross-cultural communication. The launch gives students a concrete piece of work to share in applications and interviews.",
          ],
        },
        {
          title: "A student-led CAS project",
          paragraphs: [
            "Students work toward a shared goal over about three months, develop the event’s creative concept, and reflect on their progress. The launch shares Filipino heritage with the community. Each school’s CAS coordinator determines whether the project counts toward CAS.",
          ],
          resources: [{ label: "IB guidance on CAS projects", href: ibGuidance }],
        },
        {
          title: "Program details",
          paragraphs: [
            "The rehearsal takes place on March 27. The book launch is on April 3, 2027, from 09:00 to 14:00 KST. Coaching covers youth leadership, peacebuilding, intercultural dialogue, Filipino heritage, storytelling, and building a career portfolio.",
          ],
          resources: [
            { label: "Gyeonggi Suwon International School", href: "https://www.gsis.sc.kr/" },
          ],
        },
        {
          title: "Candon Youth Movement and your mentors",
          paragraphs: [
            "CYM is a youth-led nonprofit based in Candon City, Philippines. It supports active citizenship and community leadership through education, democratic participation, peacebuilding, and other youth initiatives. Ten percent of each registration fee supports CYM’s work.",
            "Lead mentor Joanne Ascencion Valdez and industry mentors including Cre8te and Yusha guide students from the first idea to launch day.",
          ],
          resources: [
            {
              label: "Candon Youth Movement",
              href: "https://www.facebook.com/CandonYouthMovement/",
            },
            {
              label: "Joanne Ascencion Valdez",
              href: "https://www.unesco.org/en/interculturaldialogue/youthforpeace/joanne-ascencion-valdez",
            },
            { label: "Cre8te", href: "https://kr.wecre8te.com/" },
            { label: "Yusha", href: "https://www.yusha.ai/" },
          ],
        },
      ],
    },
    ko: {
      lead: "칸돈 청년 운동(CYM)과 함께 필리핀 문화유산을 소개하는 공개 출간 행사와 연계 스토어를 만들어 보세요. 행사 콘셉트부터 관객 경험까지 학생들이 직접 설계합니다.",
      schedule: "2027년 1월 9일~4월 3일 · 매주 토요일 09:00~11:30 KST · 총 13회, 35시간",
      format: "경기수원외국인학교(GSIS) 대면 수업",
      sections: [
        {
          title: "실제 행사를 직접 운영하는 경험",
          paragraphs: [
            "학생 5~12명이 한 팀을 꾸려 행사와 스토어를 책임지고 운영합니다. 매주 코칭과 프로젝트 실습을 통해 행사 기획, 문화 스토리텔링, 문화 간 소통을 연습합니다. 완성한 행사는 대학 지원이나 면접에서 직접 보여 줄 수 있는 결과물이 됩니다.",
          ],
        },
        {
          title: "학생 주도형 CAS 프로젝트",
          paragraphs: [
            "약 3개월 동안 팀으로 공동의 목표를 향해 협업하고 행사 콘셉트를 구체화하며 자신의 성장을 돌아봅니다. 행사는 필리핀 문화유산을 지역사회에 소개하는 자리이기도 합니다. CAS 인정 여부는 각 학교의 CAS 코디네이터가 결정합니다.",
          ],
          resources: [{ label: "IB 공식 CAS 프로젝트 안내", href: ibGuidance }],
        },
        {
          title: "프로그램 상세",
          paragraphs: [
            "리허설은 3월 27일, 출간 행사는 2027년 4월 3일 09:00~14:00 KST에 열립니다. 코칭에서는 청소년 리더십, 평화 구축, 문화 간 대화, 필리핀 문화유산과 스토리텔링, 진로 포트폴리오 제작을 다룹니다.",
          ],
          resources: [{ label: "경기수원외국인학교", href: "https://www.gsis.sc.kr/" }],
        },
        {
          title: "칸돈 청년 운동과 멘토 소개",
          paragraphs: [
            "CYM은 필리핀 칸돈시의 청년 주도 비영리단체입니다. 교육, 민주적 참여, 평화 구축 등 청소년을 위한 활동을 통해 적극적인 시민 참여와 지역사회 리더십을 키웁니다. 참가비의 10%는 CYM 활동을 지원하는 데 쓰입니다.",
            "대표 멘토 조앤 아센시온 발데스와 Cre8te, Yusha 등 업계 멘토가 첫 아이디어부터 행사 당일까지 학생들을 지도합니다.",
          ],
          resources: [
            { label: "칸돈 청년 운동", href: "https://www.facebook.com/CandonYouthMovement/" },
            {
              label: "조앤 아센시온 발데스",
              href: "https://www.unesco.org/en/interculturaldialogue/youthforpeace/joanne-ascencion-valdez",
            },
            { label: "Cre8te", href: "https://kr.wecre8te.com/" },
            { label: "Yusha", href: "https://www.yusha.ai/" },
          ],
        },
      ],
    },
  },
  "mapping-ai-risk": {
    en: {
      lead: "Work as a junior policy researcher with QualitaX. Compare how the EU AI Act and Korea’s AI Basic Act classify real AI applications, and explain your findings to industry experts.",
      schedule: "January 4–March 22, 2027 · Mondays, 15:30–17:00 KST · 10 sessions of 90 minutes",
      format: "Online",
      sections: [
        {
          title: "Why research AI governance?",
          paragraphs: [
            "Students choose an industry, find real AI applications, and classify their risks under the two laws. They explain what each system does, who it affects, and where the evidence leaves the classification uncertain.",
            "The project ends with an evidence-backed classification table and a five-minute presentation to a panel that includes QualitaX experts. Students build a research portfolio and explore career paths in AI governance.",
          ],
        },
        {
          title: "Program details",
          paragraphs: [
            "Students use AI to explore sources and organize findings, then verify their claims independently. Leadership workshops, intercultural dialogue, and the EPOCH Framework help students consider how the systems they study affect different people and communities.",
            "Students keep ownership of their work. They grant EPOCHA a permanent license to use the work solely for program promotion and to share its impact.",
          ],
        },
        {
          title: "QualitaX and your mentors",
          paragraphs: [
            "QualitaX helps organizations develop and use safe, responsible, auditable AI systems. Founder and Managing Director Anaïs Ofranc is a certified ISO/IEC 42001 Lead Implementer. Director of AI Assurance Dr. Danya Nusseir is a certified ISO/IEC 42001 Lead Auditor.",
          ],
          resources: [{ label: "QualitaX", href: "https://www.qualitax.io/" }],
        },
      ],
    },
    ko: {
      lead: "QualitaX와 함께 주니어 정책 연구원이 되어 보세요. 실제 AI 활용 사례를 EU AI법과 한국 AI 기본법에 따라 분류하고, 그 근거를 업계 전문가에게 발표합니다.",
      schedule: "2027년 1월 4일~3월 22일 · 월요일 15:30~17:00 KST · 회당 90분, 총 10회",
      format: "온라인",
      sections: [
        {
          title: "AI 거버넌스를 연구하는 이유",
          paragraphs: [
            "학생들은 한 산업을 선택해 실제 AI 활용 사례를 찾고 두 법에 따라 위험을 분류합니다. 각 시스템이 어떤 일을 하고 누구에게 영향을 주는지 설명하고, 근거가 부족해 분류하기 어려운 부분도 기록합니다.",
            "과정이 끝나면 근거를 담은 분류표를 완성하고 QualitaX 전문가가 참여하는 심사단 앞에서 5분간 발표합니다. 연구 포트폴리오를 만들고 AI 거버넌스 분야의 진로도 탐색합니다.",
          ],
        },
        {
          title: "프로그램 상세",
          paragraphs: [
            "학생들은 자료를 찾고 연구 결과를 정리하는 데 AI를 활용한 뒤, 근거를 직접 확인합니다. 리더십 워크숍, 문화 간 대화, EPOCH 프레임워크를 통해 AI가 다양한 사람과 공동체에 어떤 영향을 주는지도 살펴봅니다.",
            "학생은 자신이 만든 결과물의 소유권을 유지합니다. EPOCHA는 프로그램 홍보와 성과 공유를 위해서만 결과물을 사용할 수 있는 영구 이용 허락을 받습니다.",
          ],
        },
        {
          title: "QualitaX와 멘토 소개",
          paragraphs: [
            "QualitaX는 조직이 안전하고 책임감 있게 관리하며 감사할 수 있는 AI 시스템을 개발하고 사용하도록 돕습니다. 창립자이자 대표인 아나이스 오프랑은 ISO/IEC 42001 선임 구축 전문가이며, AI 보증 부문 이사 다냐 누세이르 박사는 같은 표준의 선임 심사원입니다.",
          ],
          resources: [{ label: "QualitaX", href: "https://www.qualitax.io/" }],
        },
      ],
    },
  },
};

export function getCapstoneDetail(id: string, locale: Locale): CapstoneDetailContent | undefined {
  return Object.hasOwn(details, id) ? details[id][locale] : undefined;
}
