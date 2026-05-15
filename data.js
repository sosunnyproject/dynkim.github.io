/* ================================================
   PROJECT DATA — edit this array to add/remove work
   Each project needs:
     - id: unique slug
     - name, tag, wip (boolean)
     - description, year, software, role
     - thumb: main image shown on home
     - images: array of { src, caption } for the detail gallery
   ================================================ */
const PROJECTS = [
  {
    id: "secret-garden",
    name: { en: "Secret Garden", ko: "비밀의 정원" },
    tag: { en: "Environment", ko: "환경" },
    wip: false,
    description: { en: "A gothic cloister reclaimed by nature, built around a photogrammetry-scanned cupid fountain. Combines modular architecture with hand-scanned statuary, wrought-iron lighting, and a procedural floor material.", 
      ko: "포토그래메트리와 기존 방식의 3D 모델링으로 넷플릭스 더 라스트 킹덤의 배경을 재구성한 프로젝트." },
    year: "2025",
    software: "Unreal 5 · Maya · Blender · ZBrush · Substance · Reality Scan",
    role: { en: "Full Environment — Modelling, Materials, Lighting", ko: "환경 전반 — 모델링, 머티리얼, 라이팅" },
    tags: { en: ["hard-surface modeling", "organic modeling", "game ready", "photogrammetry"], ko: ["하드서페이스 모델링", "오가닉 모델링", "game ready", "포토그래메트리"] },
    thumb: "sg-03.jpg",
    images: [
      { src: "sg-01.jpg", caption: { en: "Establishing shot — fountain and cloister", ko: "전경 — 분수와 회랑" } },
      { src: "sg-02.jpg", caption: { en: "Cupid statue — hero closeup", ko: "큐피드 조각상 — 히어로 클로즈업" } },
      { src: "sg-03.jpg", caption: { en: "Cloister interior — overgrown arches", ko: "회랑 내부 — 식물로 뒤덮인 아치" } },
      { src: "sg-04.jpg", caption: { en: "Vaulted ceiling and wrought-iron chandelier", ko: "볼트 천장과 단조 철 샹들리에" } },
      { src: "sg-05.jpg", caption: { en: "Chandelier detail", ko: "샹들리에 디테일" } },
      { src: "sg-06.jpg", caption: { en: "Light rays through gothic tracery", ko: "고딕 트레이서리를 통과하는 빛줄기" } },
      { src: "sg-07.jpg", caption: { en: "Stone planter and fallen leaves", ko: "석재 화분과 낙엽" } },
      { src: "sg-08.jpg", caption: { en: "Cloister hallway", ko: "회랑 통로" } },
      { src: "sg-09.jpg", caption: { en: "Modular asset kit", ko: "모듈러 에셋 키트" } },
      { src: "sg-10.jpg", caption: { en: "Fountain — isolated render", ko: "분수 — 단일 렌더" } },
      { src: "sg-11.jpg", caption: { en: "Photogrammetry workflow — capture to sculpt", ko: "포토그래메트리 워크플로우 — 캡처에서 스컬프트까지" } },
      { src: "sg-12.jpg", caption: { en: "Cupid statue — textured and wireframe", ko: "큐피드 조각상 — 텍스처드/와이어프레임" } },
      { src: "sg-13.jpg", caption: { en: "Cupid statue — rear view and topology", ko: "큐피드 조각상 — 후면도와 토폴로지" } },
      { src: "sg-14.jpg", caption: { en: "Iron wall torches — variants and wireframe", ko: "벽걸이 철 토치 — 베리에이션과 와이어프레임" } },
      { src: "sg-15.jpg", caption: { en: "Chandelier closeup", ko: "샹들리에 클로즈업" } },
      { src: "sg-16.jpg", caption: { en: "Chandelier — wireframe breakdown", ko: "샹들리에 — 와이어프레임 브레이크다운" } },
      { src: "sg-17.jpg", caption: { en: "Floor material — graph, vertex paint, lighting", ko: "바닥 머티리얼 — 그래프, 버텍스 페인트, 라이팅" } },
      { video: "sg-18.mp4", src: "sg-18-poster.jpg", caption: { en: "Camera flythrough", ko: "카메라 플라이스루" } },
      { video: "sg-19.mp4", src: "sg-19-poster.jpg", caption: { en: "Scene reveal sequence", ko: "씬 리빌 시퀀스" } },
    ]
  },
  {
    id: "sienar-chall-utilipede",
    name: { en: "Star Wars: Sienar-Chall Utilipede Transport", ko: "스타워즈: 시나르-챌 유틸리피드 트랜스포트" },
    tag: { en: "Star Wars, Vehicle", ko: "스타워즈, 비히클" },
    wip: false,
    description: { en: "A hard-surface study of the Sienar-Chall Utilipede Transport — a Star Wars canon utility freighter. Focus on mechanical paneling, weathered industrial metal, and faithful silhouette work from reference.", 
    ko: "올란도 디즈니 월드에 설치된 스타워즈 우주선. 버추얼 프로덕션용으로 제작. '시나르-챌 유틸리피드 트랜스포트'의 3D 모델링. SciFi 풍의 패널링, 풍화된 메탈, 레퍼런스에 충실한 프로젝트." },
    year: "2026",
    software: "Maya · Substance 3D Painter · Substance 3D Designer · Photoshop · Marmoset",
    role: { en: "Modelling, Texturing", ko: "모델링, 텍스처링" },
    tags: { en: ["Star Wars", "hard-surface modeling", "mechanics", "sci-fi vehicle", "game ready"], ko: ["스타워즈", "하드서페이스 모델링", "메커닉", "SF", "game ready"] },
    thumb: "sn-01.jpg",
    images: [
      { src: "sn-01.jpg", caption: { en: "Hero render — Sienar-Chall Utilipede Transport", ko: "히어로 렌더 — 시나르-챌 유틸리피드 트랜스포트" } },
    ]
  },
  {
    id: "vintage-telephone",
    name: { en: "Vintage Telephone", ko: "빈티지 전화기" },
    tag: { en: "Prop", ko: "프롭" },
    wip: false,
    description: { en: "A mid-century German industrial wall telephone — Fernsig-branded, cast housing, bakelite handset. Modelled and textured with a focus on worn paint, tarnished metal, and the brass nameplate.", 
    ko: "Fernsig의 캐스트 하우징과 베이클라이트 핸드셋을 갖춘, 20세기 중반 독일 광업용 전화기. 닳은 페인트, 변색된 메탈, 황동 명판에 초점을 맞춘 프로젝트" },
    year: "2025",
    software: "Blender · ZBrush · Substance · Marmoset",
    role: { en: "Modelling + Texturing", ko: "모델링 + 텍스처링" },
    tags: { en: ["hard-surface modeling", "mechanics", "game ready"], ko: ["하드서페이스 모델링", "메커닉", "game ready"] },
    thumb: "vt-04.jpg",
    images: [
      { src: "vt-01.jpg", caption: { en: "Front hero shot", ko: "정면 히어로 샷" } },
      { src: "vt-02.jpg", caption: { en: "Three-quarter view", ko: "3/4 뷰" } },
      { src: "vt-03.jpg", caption: { en: "Side profile", ko: "측면 프로파일" } },
      { src: "vt-04.jpg", caption: { en: "Dial and nameplate — hero closeup", ko: "다이얼과 명판 — 히어로 클로즈업" } },
      { src: "vt-05.jpg", caption: { en: "Dial detail — light backdrop", ko: "다이얼 디테일 — 밝은 배경" } },
      { src: "vt-06.jpg", caption: { en: "Environment context — factory window", ko: "환경 맥락 — 공장 창문" } },
      { src: "vt-07.jpg", caption: { en: "Earpiece detail", ko: "이어피스 디테일" } },
      { src: "vt-08.jpg", caption: { en: "Mouthpiece detail", ko: "마우스피스 디테일" } },
      { src: "vt-09.jpg", caption: { en: "Handset — front, side, back", ko: "핸드셋 — 정면/측면/후면" } },
      { src: "vt-10.jpg", caption: { en: "Handset — three-quarter views", ko: "핸드셋 — 3/4 뷰" } },
      { src: "vt-11.jpg", caption: { en: "Wireframe — three-quarter", ko: "와이어프레임 — 3/4" } },
      { src: "vt-12.jpg", caption: { en: "Wireframe — angled", ko: "와이어프레임 — 앵글드" } },
      { src: "vt-13.jpg", caption: { en: "Handset — wireframe breakdown", ko: "핸드셋 — 와이어프레임 브레이크다운" } },
      { src: "vt-14.jpg", caption: { en: "Texture map — Base Color", ko: "텍스처 맵 — Base Color" } },
      { src: "vt-15.jpg", caption: { en: "Texture map — Roughness", ko: "텍스처 맵 — Roughness" } },
      { src: "vt-16.jpg", caption: { en: "Texture map — Normal", ko: "텍스처 맵 — Normal" } },
      { src: "vt-17.jpg", caption: { en: "Texture map — Metallic", ko: "텍스처 맵 — Metallic" } },
      { src: "vt-18.jpg", caption: { en: "Texture map — Ambient Occlusion", ko: "텍스처 맵 — Ambient Occlusion" } },
    ]
  },
  {
    id: "japanese-izakaya",
    name: { en: "Japanese Izakaya", ko: "일본식 이자카야" },
    tag: { en: "Environment", ko: "환경" },
    wip: false,
    description: { en: "A late-night Tokyo izakaya — red leather stools, brass trim, paper lanterns, exposed ductwork. Focus on warm practical lighting, densely-dressed shelves of sake and whisky, and the interplay between industrial ceiling and traditional decor.", 
    ko: "VR 체험용 가상 공간 프로젝트. 한밤의 이자카야 — 빨간 가죽 스툴, 황동 트림, 종이 등롱, 노출 덕트로 구성한 환경. 따뜻한 실용 조명, 사케와 위스키로 빼곡한 선반, 산업적 천장과 전통적 장식의 대비에 집중." },
    year: "2025",
    software: "Unreal 5 · Blender · Substance",
    role: { en: "Full Environment — Modelling, Materials, Lighting", ko: "환경 전반 — 모델링, 머티리얼, 라이팅" },
    tags: { en: ["hard-surface modeling", "game ready", "VR"], ko: ["하드서페이스 모델링", "game ready", "VR"] },
    thumb: "jb-01.jpg",
    images: [
      { src: "jb-01.jpg", caption: { en: "Establishing shot — bar interior", ko: "전경 — 바 내부" } },
      { src: "jb-02.jpg", caption: { en: "Espresso machine and tap handles", ko: "에스프레소 머신과 탭 핸들" } },
      { src: "jb-03.jpg", caption: { en: "Shelf dressing — top-down detail", ko: "선반 드레싱 — 탑다운 디테일" } },
      { src: "jb-04.jpg", caption: { en: "Paper lanterns and ductwork", ko: "종이 등롱과 덕트" } },
      { src: "jb-05.jpg", caption: { en: "Bar counter — wide angle", ko: "바 카운터 — 와이드 앵글" } },
      { src: "jb-06.jpg", caption: { en: "Stools and back bar — atmospheric shot", ko: "스툴과 백바 — 분위기 컷" } },
      { src: "jb-07.jpg", caption: { en: "Beer tap + CRT monitor — wireframe breakdown", ko: "맥주 탭 + CRT 모니터 — 와이어프레임 브레이크다운" } },
      { src: "jb-08.jpg", caption: { en: "Wall fan + bar stool — wireframe breakdown", ko: "벽걸이 선풍기 + 바 스툴 — 와이어프레임 브레이크다운" } },
      { video: "jb-09.mp4", src: "jb-09-poster.jpg", caption: { en: "Camera flythrough", ko: "카메라 플라이스루" } },
    ]
  },
  {
    id: "espresso-machine",
    name: { en: "Espresso Machine", ko: "에스프레소 머신" },
    tag: { en: "Prop", ko: "프롭" },
    wip: false,
    description: { en: "A Dalla Corte EVO2 commercial espresso machine, dressed with travel stickers, a sticky note, and years of cafe wear. Modelled and textured as a hero prop for the Japanese Izakaya scene — the red anchor piece behind the bar.", 
    ko: "Dalla Corte EVO2 상업용 에스프레소 머신을 여행 스티커, 포스트잇, 수년간의 카페 사용감으로 드레싱." },
    year: "2025",
    software: "Blender · Substance · Marmoset",
    role: { en: "Modelling, Materials, Lighting", ko: "모델링, 머티리얼, 라이팅" },
    tags: { en: ["hard-surface modeling", "mechanics", "game ready"], ko: ["하드서페이스 모델링", "메커닉", "game ready"] },
    thumb: "em-02.jpg",
    images: [
      { src: "em-01.jpg", caption: { en: "Three-quarter hero render", ko: "3/4 히어로 렌더" } },
      { src: "em-02.jpg", caption: { en: "Opposite side — California stickers", ko: "반대편 — California 스티커" } },
      { src: "em-03.jpg", caption: { en: "Wireframe overlay on grid", ko: "그리드 위 와이어프레임 오버레이" } },
      { video: "em-04.mp4", src: "em-04-poster.jpg", caption: { en: "Turntable", ko: "턴테이블" } },
      { src: "em-05.jpg", caption: { en: "Texture map — Base Color", ko: "텍스처 맵 — Base Color" } },
      { src: "em-06.jpg", caption: { en: "Texture map — Roughness", ko: "텍스처 맵 — Roughness" } },
      { src: "em-07.jpg", caption: { en: "Texture map — Normal", ko: "텍스처 맵 — Normal" } },
      { src: "em-08.jpg", caption: { en: "Texture map — Metallic", ko: "텍스처 맵 — Metallic" } },
      { src: "em-09.jpg", caption: { en: "Texture map — Ambient Occlusion", ko: "텍스처 맵 — Ambient Occlusion" } },
    ]
  },
  {
    id: "cyberpunk-seoul",
    name: { en: "A.D. 2077 Seoul — Riders", ko: "A.D. 2077 서울 — 라이더스" },
    tag: { en: "Environment", ko: "환경" },
    wip: false,
    description: { en: "Cyberpunk Seoul — an alley lined with neon signage in Korean, Japanese, Russian, and Arabic, volumetric holograms drifting overhead, and a sunset haze. Title graphics for a fictional short, 'Riders: Deliver for Future.'", 
    ko: "사이버펑크 서울 — 기후 변화와 초국적 기업의 지배가 도래한 근미래를 상상한 풀 CG 애니메이션. 팬데믹 시기 24시간 돌아다니는 배달 라이더에 영감을 얻어 시작된 프로젝트." },
    year: "2025",
    software: "Unreal 5 · Maya · 3Ds Max · Zbrush · Substance · Photoshop · Nuke · After Effects",
    role: { en: "Full Environment — Modelling, Materials, Lighting, Rigging, Animation, Composition", ko: "환경 전반 — 모델링, 머티리얼, 라이팅, 리깅, 애니메이션, 컴포지션" },
    tags: { en: ["hard-surface modeling", "sci-fi", "futuristic", "animation", "environment design", "rigging", "composition"], ko: ["하드서페이스 모델링", "SF", "퓨처리스틱", "game ready", "애니메이션", "환경 디자인", "리깅", "컴포지션"] },
    thumb: "cp-01.jpg",
    images: [
      { src: "cp-01.jpg", caption: { en: "Key art — A.D. 2077 Seoul", ko: "키 아트 — A.D. 2077 서울" } },
      { video: "cp-02.mp4", src: "cp-02-poster.jpg", caption: { en: "Camera flythrough", ko: "카메라 플라이스루" } },
      { video: "cp-03.mp4", src: "cp-03-poster.jpg", caption: { en: "Alternate angle / cut", ko: "다른 앵글 / 컷" } },
    ]
  },
];

/* Secondary section — "Selected Projects" row.
   Uses a separate id namespace so URL hashes can't collide with PROJECTS. */
const PROJECTS_SECONDARY = [
  {
    id: "wizard-of-oz-sphere",
    name: { en: "Wizard of OZ at Sphere Las Vegas, Magnopus", ko: "스피어 라스베이거스의 〈오즈의 마법사〉, Magnopus" },
    tag: { en: "Cross-Reality, Environment", ko: "크로스 리얼리티, 환경" },
    wip: false,
    description: { en: "An immersive 16K Wizard of Oz experience for the 366-foot Las Vegas Sphere, built as a digital twin in Magnopus' OKO cross-reality platform alongside Sphere Entertainment, Google, and Warner Bros. Optimized a 6 GB BIM model into a real-time space testable from web, iOS, Android, and VR.", 
      ko: "라스베이거스 스피어에서 상영된 〈The Wizard of Oz〉 프로젝트에 참여, Magnopus의 cross-reality 플랫폼 ‘OKO’를 활용해 영화 테마를 모티브로 디지털 공간 디자인. Web/mobile/Unreal 환경에서 접근 가능한 실시간 시뮬레이션 공간으로 최적화." },
    year: "2025",
    client: 'Sphere Entertainment',
    externalPartner: 'Google, Warner Bros.',
    status: { en: 'Released', ko: '출시됨' },
    software: "Unreal 5 · OKO · Maya · Substance 3D Designer, Substance 3D Painter",
    role: { en: "3D Artist — Spatial Design, BIM Optimization, Digital Twin", ko: "3D 아티스트 — 공간 디자인, BIM 최적화, 디지털 트윈" },
    tags: { en: ["hard-surface modeling", "AR/VR", "game ready"], ko: ["하드서페이스 모델링", "AR/VR", "game ready"] },
    thumb: "spwz-01.jpg",
    images: [
      { summary: true, text: { en: "In a groundbreaking collaboration with Sphere Entertainment, Google, and Warner Bros., Magnopus successfully delivered an immersive Wizard of Oz experience for the 16K-resolution Las Vegas Sphere. As a key 3D artist on the project, I optimized a massive physical venue model into an accessible digital twin using the proprietary OKO cross-reality platform.", 
        ko: "핵심 참여 내용: 3D 아티스트로서 약 6GB 규모의 Sphere BIM 데이터를 cross-reality 환경에 맞춰 최적화하고, Web/mobile/Unreal 기반에서 실시간 테스트 가능한 디지털 트윈 제작을 담당. 아트와 개발팀 간 협업을 조율하고 스피어의 실제와 디지털 공간 디자인과 구현에 기여." } },
      { src: "spwz-04.webp", caption: "" },
      { text: { en: "In August 2025, Sphere Entertainment presented an immersive version of the classic film The Wizard of Oz at the 366-foot-tall, 16K-resolution grand-size Sphere. In collaboration with Google, Warner Bros., and Magnopus, the world-leading entertainment venue brought the 1939 film into the present, expanding the frames of the original movie to completely enclose the audience in a marvelous, interactive experience of its magical world.", 
        ko: "프로젝트 배경: 〈The Wizard of Oz〉의 현장 공연과 공간 디자인을 위해 스피어의 디지털 트윈 제작을 추진했다. Sphere Entertainment, Google, Warner Bros., Magnopus는 Sphere에서 〈The Wizard of Oz〉를 immersive entertainment 경험으로 재구성했으며, Magnopus는 자체 플랫폼 OKO를 활용해 Sphere의 디지털 트윈 환경을 구축하고, 실제 공연 이전 단계에서 시뮬레이션·리허설·비주얼 테스트를 수행할 수 있는 제작 파이프라인을 마련했다." } },
        { src: "spwz-02.jpg", caption: "" },
        { src: "spwz-03.jpg", caption: "" },
      { text: { en: "The Wizard of Oz at Sphere was realized through a joint effort between Sphere Entertainment, Magnopus, Warner Bros., and Google. As a 3D artist brought onto the project at Magnopus, I supported the team in making our artists\u2019 imagination and creativity tangible. Magnopus\u2019 proprietary cross-reality platform, OKO, played a crucial role in making this possible. Serving as our main tool, OKO allowed our team to craft a digital-twin simulated space of the Las Vegas Sphere, where all work was pre-rendered, tested, examined, and rehearsed before being put on the physical stage.", 
        ko: "핵심 역량: Maya, Blender, Unreal Engine 기반 워크플로우를 활용해 Sphere의 대규모 BIM 데이터를 실시간 cross-reality 환경에 최적화하고, OKO 기반 디지털 트윈 구축 및 〈The Wizard of Oz〉의 테마 라이팅·공간 비주얼 디자인 구현을 수행했다. 또한 아트 디렉터와 협업해 스피어 로비 공연에 활용될 〈The Wizard of Oz〉의 오즈 왕좌 디자인 작업에 참여했다." } },
      { src: "spwz-05.png", caption: "" },
      { text: 
        { en: "We began with the fundamental step of digital construction: examining the BIM model of the Sphere, which was incredibly heavy at around 6 GB. Even after cropping the sections we needed for real-time simulation, half the size remained\u2014still far too heavy for cross-reality workflows. This required a dedicated team effort to reduce the size and optimize the environment, making it accessible across all client devices\u2014such as web, iOS, and Android\u2014while establishing the theme of the Wizard of Oz show in the digital space. This optimization opened up vast potential for testing and sharing among studio teams, on-site teams, and clients.", 
          ko: "성과 및 협업 경험: 6GB 규모의 Sphere 건축 데이터를 WebGL 기반 cross-reality 환경에 최적화해 실시간 원격 협업·시뮬레이션 환경을 구축하고, 다양한 디바이스에서 접근 가능한 cross-platform 제작 파이프라인 구현에 기여했다. 이를 통해, 스튜디오·현장·클라이언트 간의 실시간 협업을 가능케 하고, 실제 공연 이전 단계에서 다양한 연출과 특수효과 테스트가 가능한 제작 환경을 마련했다." } ,},
      { video: "spwz-video-01.mp4", src: "sspwz-video-01-poster.jpg", caption: "" },
      { video: "spwz-video-02.mp4", src: "sspwz-video-02-poster.jpg", caption: "" },
      { text:
        { en: "After optimizing the Sphere\u2019s interior, we were left with its integral framework, allowing us to dive into the artistic tasks alongside other artists from Magnopus and Sphere Entertainment. We anchored the experience around two distinct visual moments from the movie: the prevailing sepia tones representing Kansas at the beginning, and the vibrant emerald tones of the Emerald City later on. Through numerous iterations, the optimized space gained color and was prepared for additional visual, architectural, and even pyrotechnic tests.", 
          ko: "협업을 통한 문제 해결 사례: 대용량 BIM 데이터로 인한 병목 문제를 해결하기 위해 데이터 구조 재정비와 리소스 최적화를 주도하며, 다양한 팀이 실시간으로 협업 가능한 안정적인 cross-reality 제작 환경을 구축했다. 팀 차원의 최적화를 주도해 실시간 협업 환경을 구축했으며, 다양한 팀이 동시에 디지털 공간 테스트를 진행할 수 있도록 지원해 실제 공연과 디지털 환경 간 품질 격차를 최소화했다." } ,},
      { video: "spwz_testvid_01.mp4", src: "spwz_testvid_01-poster.jpg", caption: "", narrow: true },
      { text: [
        { en: "Building a digital-twin space of the Sphere in a cross-reality platform eliminated the distance between the actual venue, the studio, and all involved teams, regardless of their physical location. This was made possible entirely by the platform\u2019s real-time interoperability, which allowed simulations to be conducted and shared with anyone, whether they were using a PC, Mac, mobile phone, or VR headset. To fully harness this magical technology, the 3D art team was essential in logically and artistically optimizing the data to minimize potential bottlenecks while connecting teams. Beyond technical optimization, we meticulously conveyed the design, feel, and mood of The Wizard of Oz, ensuring its original theme blended seamlessly into the digital space, and ultimately, the physical venue. The Wizard of Oz at Sphere was a mind-boggling project in terms of both technology and art, and at this intersection, Magnopus\u2019 solutions team and 3D artists pioneered one of the most advanced methods in creating an immersive experience.", 
          ko: "핵심 및 성과: 세계 최대 규모의 immersive entertainment 프로젝트에 참여해 cross-reality 기반 디지털 공간 디자인, 실시간 협업 워크플로우 구축, 그리고 Web/mobile/Unreal 환경 엔터테인먼트 프로젝트 실행 역량을 입증했다. 아트와 기술의 균형을 고려한 공간 디자인 작업을 통해 몰입형 경험의 완성도를 높이며, Magnopus의 cross-reality 기술력과 immersive entertainment 제작 파이프라인의 가능성을 효과적으로 보여주었다." }
      ] },
    ]
  },
  {
    id: "la-2028-olympics",
    name: { en: "LA 2028 Olympics Experience Center's Cross-reality Space Design, Magnopus", ko: "LA 2028 올림픽 익스피리언스 센터 XR 전시관 디자인, Magnopus" },
    tag: { en: "Cross-Reality, Architecture", ko: "XR 경험, 전시관 디자인" },
    wip: false,
    description: { en: "A digital twin of SoFi Stadium reimagined as the LA28 Olympic aquatic center — built on Magnopus' OKO platform with Gensler as the centerpiece of a winning pitch for the 14,000-square-foot Olympics Experience Center. Cut load times in half and lifted runtime performance ~60% across web, mobile, and VR.", 
      ko: "LA 컨벤션 센터 인근 400평 규모의 ‘올림픽 익스피리언스 센터’ 조성 사업 최종 선정. Magnopus의 cross-reality 플랫폼 ‘OKO’를 활용해 디지털 공간 제작. 올림픽 수영장으로 탈바꿈한 LA SoFi 스타디움을 가상으로 체험할 수 있는 공간을 디자인. Gensler와 협업 통해 LA28 올림픽대회조직위원회로부터 제안안 최종 선정을 이끌어냄." },
    client: 'LA28 Olympic Games Organizing Committee',
    externalPartner: 'Gensler',
    status: { en: 'Awarded Through RFP', ko: '최종 선정' },
    year: "2025",
    software: "Unreal 5 · OKO · Maya · Substance 3D Designer",
    role: { en: "3D Artist — Visual Direction, Performance Test, Team Lead (5 artists)", ko: "3D 아티스트 — 비주얼 디렉션, 성능 테스트, 5인 팀 공동 리드" },
    tags: { en: ["hard-surface modeling", "AR/VR", "XR", "game ready"], ko: ["하드서페이스 모델링", "AR/VR", "XR", "game ready"] },
    thumb: "laoly-01.jpg",
    images: [
      { summary: true, text: { en: "Ahead of the 2028 Los Angeles Olympic Games, Magnopus received an RFP from the LA28 Organizing Committee to design an immersive Olympics Experience Center. As a 3D Artist at Magnopus, I developed a digital twin of SoFi Stadium within the OKO cross-reality platform, serving as the centerpiece of the pitch that won the commission.", 
        ko: "핵심 참여 내용: 5인 팀을 공동 리드하며 Web/AR/VR 크로스 플랫폼에서 구동 가능한 올림픽 경기장 3D 공간 제작 및 디자인 협업을 담당하여 최종 RFP 선정에 기여.Gensler와 협력해 전체 익스피리언스 센터 디자인을 완성하고  LA28 올림픽대회조직위원회로부터 최종 선정." } },
      { video: "LA28_video_FINAL-crop.mp4", src: "LA28_video_FINAL-crop-poster.jpg", caption: "" },
      { src: "LAConventionCenter_Solar.webp", caption: "" },
      { text: { en: "The Olympics Experience Center is a 14,000-square-foot(1,300-square-meter) immersive venue planned near the Los Angeles Convention Center, designed to give visitors a behind-the-scenes look at the upcoming Olympic Games. To secure the project, Magnopus partnered with Gensler to demonstrate how integrating digital entertainment with architectural design can elevate the visitor experience. We anchored our pitch around a virtual replica of SoFi Stadium, building it as a fully navigable digital environment.", 
        ko: "프로젝트 배경: 본 프로젝트는 LA28 올림픽대회조직위원회가 관광 및 후원 증진을 위해 XR 기술 기반의 대규모 체험형 올림픽 익스피리언스 센터를 조성하기 위해 시작됐다. 단순한 전시를 넘어 cross-reality 기반의 인터랙티브 기술을 접목해, LA의 주요 랜드마크와 스타디움을 체험할 수 있는 엔터테인먼트 공간 구축을 목표로 삼았다. 이에 따라 Magnopus와 Disney를 포함한 글로벌 기업 10개 사를 대상으로 RFP가 발송되며 프로젝트가 시작됐다." } },
        { text: { en: "", 
        ko: "핵심 역량: Maya, Blender, Unreal 5 등의 3D DCC 툴을 활용하여 10만 명 규모의 LA SoFi 스타디움을 AR/VR 환경에 최적화된 디지털 트윈으로 제작했다. 게임 배경 제작 지식을 기반으로 스타디움 모듈화 및 최적화 공정을 리딩하며, UE5 기반의 최적화된 전시 라이팅과 무드를 구축했다. Cross-reality 플랫폼 운용 역량을 발휘해 Gensler와 실시간으로 협력해 체험관(Hype Room)을 디자인하며, 테마적으로 완성된 공간을 구현했다." } },
      { pair: [
        { src: "InglewoodStadiumDesktop.webp", caption: "" },
        { src: "sofi_fly_over.gif", caption: "" }
      ] },
      { text: { en: "I was responsible for establishing the visual direction and coordinating a team of five artists to build the stadium\u2019s architecture, including the swimming venue, broadcasting area, and surrounding plaza. The environment was heavily optimized to run seamlessly across web, mobile, and VR, allowing the LA28 committee to explore the proposed space from any device. Through rigorous iteration, we balanced performance and atmosphere, cutting load times in half and improving runtime performance by 60%, all while preserving the grand scale of an Olympic venue.", 
        ko: "성과 및 협업 경험: 기가바이트(GB) 규모의 스타디움 3D 데이터를 100MB 미만으로 최적화하고, Gensler와의 긴밀한 협력을 통해 전체 체험관 디자인을 완성하여 최종 RFP 선정에 기여했다. 아트 및 개발로 구성된 5인 팀을 공동 리드하며, 모바일 및 AR/VR 환경에서도 원활하게 구동될 수 있도록 기가바이트 단위의 디지털 스타디움을 라이팅 포함 100MB 미만으로 최적화했다. 이를 위해 아트 디렉터와 긴밀히 협업하며 시각적 완성도를 유지하는 방향으로 개발·아트 팀 간 목표를 조율했고, 인터랙션 개발자들이 렉 없이 작업할 수 있는 환경을 구축했다. 또한 외부 협력사인 Gensler와의 미팅에 참여해 디자인 피드백을 수용하고, Unreal 5 BP 지식을 활용해 실제 클라이언트 플랫폼 적용 가능 여부를 빠르게 검증해 각 팀에 공유했다." } },
      { pair: [
        { src: "laoly_06.jpg", caption: "" },
        { src: "laoly_07.jpg", caption: "" }
      ] },
      { text: { en: "Our visual goal was to capture the immense scale and openness of SoFi Stadium converted into an Olympic aquatic center. Given the stadium\u2019s massive interior volume, we developed a comprehensive set design to seamlessly connect the competition area with the spectator experience. Leveraging our team\u2019s firsthand experience visiting the physical venue, we efficiently blocked out the foundational layouts for key areas, including the competition and practice pools, broadcasting zones, camera rails, and referee stations. We also drew inspiration from the Paris Olympic swimming facilities and the Lucas Oil Stadium, which served as an excellent real-world precedent for transforming a large arena into a swimming venue. Because our baseline requirement was to enable full interactivity within the OKO platform, we actively utilized its native VR and AR features to review and iterate our designs in a true spatial context.", 
        ko: "협업을 통한 문제 해결 사례: 3D 아트와 인터랙션 개발 팀 간의 KPI 충돌을 조율해 합의점을 도출했으며, 성능 최적화를 통해 Meta Quest 3 기준 공간 접속 시간을 20초 이내로 단축하는 등 완성도와 안정성 문제를 해결했다. 5인 규모의 SoFi 스타디움 제작 팀을 공동 리드하며, 3D 아트와 인터랙션 개발 간 충돌을 조율하고 각 개발 파트의 목표치를 합리적으로 조정했다. 웹·모바일 환경에서 반복적인 성능 테스트와 기존 프로젝트 데이터 분석을 바탕으로 리소스 사용률을 최적화하고 인터랙션 안정성을 높였다. 그 결과 체험관의 핵심 콘텐츠인 ‘Hype Room’ 데모를 성공적으로 구현했으며, 프로젝트가 RFP 최종 선정에 기여할 수 있도록 했다." } },
      { src: "laoly_15.png", caption: "" },
      { text: { en: "The demo successfully illustrated how visitors would interact with the future Experience Center, helping Magnopus win the bid over ten competing studios. For our team, the project was an opportunity to realize the full potential of cross-reality technology: collaborative iteration across geographies, simulation prior to construction, and the creation of a digital space that goes beyond previewing a physical venue. We built an interactive Olympic stadium where users can experience the space not just as visitors, but through a variety of engaging roles.", 
        ko: "핵심 및 성과: High-profile 프로젝트를 성공적으로 수행하며 공동 리더십과 커뮤니케이션 역량 등 미드 레벨 이상의 협업 능력을 입증했으며, Unreal 5 워크플로우 문서화를 통해 후속 프로젝트의 디버깅 시간을 단축하는 등 기술적 기여도 함께 이끌어냈다. 프로젝트를 진행하며 다양한 분야의 전문가들로 구성된 팀의 협업 구조를 세분화하고 팀 내 결속을 강화했다. 또한 영어 환경에서 아트 디렉터와 긴밀히 소통하며, 주도적으로 태스크를 실행하는 등 협업 역량을 입증했다. 이후 Unreal 5 기반 워크플로우 문서를 제작·배포했고, 이를 통해 후속 프로젝트인 Wizard of OZ의 시각적 완성도 향상에 기여했다. 나아가 Magnopus의 cross-reality 기술력과 건축·엔터테인먼트 기술 융합 프로젝트의 가능성을 효과적으로 보여주었다." } },
    ]
  },
  {
    id: "welcome-to-oko",
    name: { en: "Cross-reality Platform Space Design—Welcome to OKO, Magnopus", ko: "크로스 리얼리티 플랫폼 공간 디자인 — Welcome to OKO, Magnopus" },
    tag: { en: "Cross-Reality, Environment", ko: "크로스 리얼리티, 환경" },
    wip: false,
    description: { en: "The tutorial space for Magnopus' OKO cross-reality platform — a futuristic museum that introduces new users to the studio's work. Authored a small library of tiling and trim materials (warm wood, polished marble, brushed metal, emissive planets) and established a Miro-based version-control workflow. Now the front door of OKO for 10+ clients including Deloitte, Gensler, and Amazon Studios.", 
      ko: "Magnopus의 cross-reality 플랫폼 ‘OKO’의 튜토리얼 및 온보딩 공간인 스페이스 뮤지엄 프로젝트. 신규 가입자와 외부 클라이언트에게 Magnopus의 기술과 행보를 스토리텔링하기 위해 제작됐다." },
    year: "2024",
    client: 'Magnopus',                        // plain string
    externalPartner: 'Gensler',
    status: { en: 'Released', ko: '출시됨' }, // or bilingual object
    software: "Unreal 5 · OKO · Substance · Miro",
    role: { en: "3D Artist — Environment, Material Library, Workflow", ko: "3D 아티스트 — 환경, 머티리얼 라이브러리, 워크플로우" },
    tags: { en: ["hard-surface modeling", "futuristic", "AR/VR", "game ready"], ko: ["하드서페이스 모델링", "퓨처리스틱", "AR/VR", "game ready"] },
    thumb: "welcomeoko-01.jpg",
    images: [
      { summary: true, text: { en: "Welcome to OKO is the tutorial space for Magnopus' proprietary cross-reality platform, OKO—a futuristic museum designed to introduce new users to the studio's work and storytelling lineage. As a 3D Artist at Magnopus, I translated the concept into a fully realized environment and helped establish the workflow that supported the platform's wider rollout.", 
        ko: "핵심 참여 내용: 3D 아티스트로서 공간 전체 디자인 및 제작을 담당. Unreal 5을 기반으로 웹·모바일·VR 클라이언트 어디서든 탐험하고 상호작용할 수 있는 cross-platform 공간을 구현. Amazon Studios, Epic Games, Gensler, Deloitte 등 10여 개 이상의 글로벌 조직에 OKO를 소개하는 대표 공간으로 활용 중이다." } },
      { src: "welcomeoko-01.jpg", caption: "" },
      { text: { en: "OKO is Magnopus' real-time, cross-reality platform that lets teams and clients collaborate inside the same digital space across PC, mobile, and VR. The Welcome to OKO map serves as the front door of that platform—a guided walkthrough that introduces visitors to the studio's identity, capabilities, and past projects. The brief called for a futuristic museum that could feel grounded yet imaginative, with enough narrative pacing to carry first-time users through unfamiliar terrain while staying performant on every supported device.", 
        ko: "프로젝트 배경: Welcome to OKO는 기존 로우폴리의 튜토리얼 공간을 대체해, Unreal 5 기반의 게이미피케이션과 스토리텔링 경험을 통해 Magnopus의 cross-reality 플랫폼 ‘OKO’와 글로벌 프로젝트 역량을 효과적으로 소개하기 위해 제작된 공식 온보딩·브랜딩 공간이다. 단순한 튜토리얼을 넘어 Magnopus의 프로젝트와 기술 방향성을 소개하는 미래 박물관 콘셉트의 가이디드 워크스루 경험을 목표로 삼았다." } },
      { src: "magoko_page_1.jpg", caption: "" },
      { pair: [
        { src: "magoko_page_2.webp", caption: "" },
        { src: "magoko_page_3.webp", caption: "" }
      ] },
      { text: { en: "Welcome to OKO replaced an earlier iteration of the tutorial space, with the brief calling for a refreshed visual identity that aligned with the platform's evolving brand direction. Working from a minimal set of concept sketches, I translated the level design into the museum environment, breaking the look down into a small library of distinctive material studies—warm wood, polished marble, brushed metal, and emissive planets that sit in the gallery like miniature suns. Each material was authored as a tiling or trim set, then layered through modular architecture to keep file sizes low without flattening the atmosphere. To keep the team aligned across iterations, I helped establish a visual version-control and feedback workflow in Miro, which made it easier to converge on shared decisions across reviews.", 
        ko: "핵심 역량: Unreal 5와 Maya, Blender, Substance, OKO 플랫폼 기반으로 스페이스 뮤지엄 에셋과 배경을 구축하고, cross-platform 워크플로우 및 Miro 기반 협업 프로세스를 정립해 제작 효율을 동시에 향상시켰다. 아트 디렉터 및 다른 자매 공간을 제작하던 시니어 엔바이러먼트 아티스트와의 긴밀한 협업을 위해, 주도적으로 Miro 기반의 비주얼 버전 관리 체계를 제안했으며 리뷰 및 피드백 프로세스를 체계화하는 데 기여했다." } },
      { src: "okodevelopgif.gif", caption: "" },
      { text: { en: "", 
        ko: "성과 및 협업 경험: OKO와 Unreal Engine 간의 호환성 이슈를 해결하기 위한 워크플로우 가이드를 정리·배포해 플랫폼 안정성과 협업 효율을 개선했으며, 이를 통해 후속 프로젝트의 프로덕션 시간을 약 50% 단축했다. 또한, 새로운 가이드로 20명 이상의 아티스트의 OKO 워크플로우 온보딩을 지원했다. 나아가 OKO 솔루션에 속한 플랫폼별 비주얼 편차를 유발하는 머티리얼 알고리즘들을 문서화해 엔지니어링 팀과 협업하며 리팩터링 방향을 제안했다." } },
      { src: "welcomeoko-02.png", caption: "" },
      { src: "Planeterium_blockout_WIP.png", caption: "" },
      { src: "Planeterium_WIP.jpg", caption: "" },
      { text: { en: "Welcome to OKO has since served as the primary introduction to Magnopus' platform for clients across more than ten organizations, including Deloitte, Gensler, and Amazon Studios. Beyond its role as a demo, it became a working blueprint—a space that proved how cross-reality environments can carry a studio's narrative while staying lightweight enough to live anywhere. Even now, it remains the first stop most new users take into OKO: a small museum that quietly does the work of welcoming an entire platform.", 
        ko: "협업을 통한 문제 해결 사례: Cross-reality 환경에서 발생하는 디바이스별 렌더링 편차 문제를 해결하기 위해 머티리얼 워크플로우를 분석·문서화하고 엔지니어링 팀과 협업해 표준화된 제작 가이드를 구축함으로써, 다양한 플랫폼에서도 안정적인 비주얼 품질을 유지할 수 있도록 했다." } },
      { pair: [
        { src: "Deloitte_onboarding_01.jpg", caption: "" },
        { src: "Deloitte_onboarding_02.jpg", caption: "" }
      ] },
            { text: { en: "Welcome to OKO has since served as the primary introduction to Magnopus' platform for clients across more than ten organizations, including Deloitte, Gensler, and Amazon Studios. Beyond its role as a demo, it became a working blueprint—a space that proved how cross-reality environments can carry a studio's narrative while staying lightweight enough to live anywhere. Even now, it remains the first stop most new users take into OKO: a small museum that quietly does the work of welcoming an entire platform.", 
        ko: "핵심 및 성과: Welcome to OKO는 Amazon Studios, Epic Games, Gensler, Deloitte 등 글로벌 조직에 Magnopus의 cross-reality 기술력과 immersive storytelling 역량을 소개하는 대표 데모 공간으로 자리 잡았으며, 프로젝트를 통해 환경 제작·워크플로우 설계·협업 프로세스를 개선하는 데 기여했다. 특히 Welcome to OKO의 스페이스 뮤지엄 제작 과정에서 발견된 문제들을 리팩터링하며 개발 및 타 부서와 협업해 축적한 데이터는, 이후 OKO 기반 프로젝트에 투입된 신규 팀원들이 워크플로우에 빠르게 적응할 수 있도록 돕는 핵심 가이드라인과 참고 자료로 활용되었다." } },
      //{ src: "Deloitte_onboarding_01.jpg", caption: "" },
      //{ src: "Deloitte_onboarding_02.jpg", caption: "" },
    ]
  },
  {
    id: "fallout-vault-33",
    name: { en: "The World of Fallout Sizzle—Vault 33, Magnopus", ko: "The World of Fallout 시즐 — Vault 33, Magnopus" },
    tag: { en: "Cross-Reality, Environment", ko: "크로스 리얼리티, 환경" },
    wip: false,
    description: { en: "A high-fidelity Vault 33 sizzle for Amazon Studios' Fallout Season 2 — a slice of the show's signature location, optimized for browser and AR delivery on Magnopus' OKO platform. Tightened source assets from 100+ MB per piece down to runtime weights that ran cleanly on every supported client. The pitch led to the launch of The World of Fallout at fallout-s2.amazonstudios.com.", 
      ko: "Amazon Studios의 〈Fallout〉 시즌 2 홍보를 위한 웹 기반 인터랙티브(게임) 프로젝트. Magnopus의 cross-reality 플랫폼 ‘OKO’에 〈Fallout〉의 ‘Vault 33’ 공간 구축에 참여. 〈Fallout〉의 시그니처 배경을 웹·AR 환경에서 실시간으로 탐험 가능한 고퀄리티 디지털 공간으로 구현했다." },
    year: "2025",
    client: 'Amazon Studios',                        // plain string
    status: { en: 'Released', ko: '출시됨' }, // or bilingual object
    software: "Unreal 5 · OKO · Maya · Substance",
    role: { en: "3D Artist — Asset Optimization", ko: "3D 아티스트 — 에셋 최적화" },
    tags: { en: ["hard-surface modeling", "sci-fi", "AR/VR", "game ready"], ko: ["하드서페이스 모델링", "SF", "AR/VR", "game ready"] },
    thumb: "flout-01.jpg",
    images: [
      { summary: true, text: { en: "Before Amazon Studios commissioned Magnopus to launch The World of Fallout—an interactive web experience timed to the show's second season—the OKO team built a Vault 33 sizzle to anchor the pitch. As a 3D Artist on the OKO side, I optimized assets pulled from the series and helped stress-test whether the platform could carry Fallout's world at game-grade fidelity, straight into a web browser and on AR.", 
        ko: "핵심 참여 내용: 3D 아티스트로서 고사양 프로덕션 에셋을 웹·AR 환경에 최적화하고, 원작 특유의 포스트 아포칼립스 무드와 시네마틱 퀄리티를 유지한 채 브라우저에서 실시간으로 탐험 가능한 〈Fallout〉 세계를 구현하는 작업을 담당했다." } },
      { src: "flout-01.jpg", caption: "" },
      { text: { en: "Amazon Studios was looking for a way to extend the Fallout universe beyond the screen for Season 2—not a typical behind-the-scenes featurette, but an immersive, fully interactive space that fans could explore from any device. Magnopus' OKO platform sat at the center of those conversations, and the studio needed to show, not tell, what cross-reality could do for a property of this scale. The bet was that a high-fidelity slice of Vault 33—one of the show's signature locations—could land in a browser without a download, an install, or a compromise to the post-apocalyptic patina fans already loved.", 
        ko: "프로젝트 배경: Amazon Studios의 〈Fallout〉 시즌 2 홍보를 위해, Magnopus는 OKO 플랫폼 기반의 인터랙티브 웹 경험을 제작하며 원작 게임 수준의 공간 탐험을 웹·AR 환경에서 구현하고자 했다. 이를 통해 OKO 플랫폼이 대형 시네마틱 IP를 cross-reality 기반의 실시간 인터랙티브 경험으로 확장할 수 있음을 입증하고자 했다." } },
      { video: "IMG_9608.mp4", src: "IMG_9608-poster.jpg", caption: { en: "AR Test", ko: "AR 테스트" }, narrow: true },
      // AR test footage / stills slot in here — pair { } or video { } block
      { text: { en: "On the OKO side, my focus was asset optimization. The source assets came straight from the production pipeline—high-fidelity Unreal builds originally authored for LED volumes and visual effects—which meant the platform's brief asked for the opposite of what those assets were tuned for: a real-time experience that had to stream cleanly to web and AR clients. The first stress test made the gap obvious—a single Vault asset weighed in at over 100 MB, far too heavy for cross-reality workflows to carry without stuttering. I worked through Vault 33 piece by piece, tightening geometry and material setups so the environment could hold its visual weight while running cleanly on browser and AR sessions alike. Every iteration was measured against runtime performance across clients; the goal was a hands-off, hiccup-free demo for an audience of decision-makers.", 
        ko: "핵심 역량: Maya, Substance, Unreal 5 기반의 환경 제작 및 최적화 역량을 활용해, 고사양 Vault 33 에셋을 웹·AR 런타임 환경에 맞춰 재구성하고 다양한 디바이스에서도 안정적인 퍼포먼스와 시각적 완성도를 유지했다. 3D 에셋과 텍스처를 최적화하고, cross-reality 플랫폼 특성을 고려한 반복적인 런타임 테스트를 통해 안정적인 워크플로우를 구축했다." } },
      { text: { en: "", 
        ko: "성과 및 협업 경험: 기가바이트 단위의 고사양 Vault 에셋을 웹·AR 기반 실시간 스트리밍 환경에 최적화하고, 버추얼프로덕션 아트팀과 OKO 개발 팀과의 협업을 통해 별도 설치 없이 안정적으로 구동되는 Vault 33 데모 구현 및 〈The World of Fallout〉 릴리즈에 기여했다. 타 팀과의 긴밀한 협업을 위해 반복적인 성능 검증을 수행하고, 이를 기반으로 한 구체적인 수치를 제시해 최적화에 필요한 리팩토링을 이끌어냈다. " } },
        // Second AR / web-build comparison shot ideal here
      { link: "https://fallout-s2.amazonstudios.com/#/caswennan", poster: "falloutsizzleloading.jpg", label: { en: "Step inside The World of Fallout", ko: "The World of Fallout 속으로 들어가기" }, aspect: "16/9" },
      { text: { en: "The pitch landed. Amazon Studios commissioned Magnopus to take the experience to launch as The World of Fallout, a web-based 360° exploration of locations from across both seasons that anyone can step into through a browser at fallout-s2.amazonstudios.com. For the team, the project was a clean demonstration of what OKO had been built for—turning a heavy, cinematic IP into a real-time space the public could explore from any device, no install required.", 
        ko: "협업을 통한 문제 해결 사례: 실시간 웹·AR 환경에서 반복적으로 발생하던 성능 병목 문제를 해결하기 위해 ‘Vault 33’ 에셋 구조를 재정비하고 플랫폼별 런타임 테스트를 반복 수행하며, 안정적인 플레이 데모 구현을 위한 최적화 기준과 팀 간 합의된 목표치를 수립했다.  이를 통해 프로젝트의 최종 의사 결정권자 대상 피칭 환경에서도 끊김 없이 동작하는 cross-reality 데모 구현에 기여했다." } },
      { text: { en: "", 
        ko: "핵심 성과 및 기여: 본 프로젝트를 통해 Unreal 5 기반의 고사양 시네마틱 IP를 웹·AR 기반 게임 경험으로 최적화하는 실무 역량과 아트·개발 간 협업 조율 능력을 입증했으며, 결과적으로 〈The World of Fallout〉 정식 프로젝트 공개와 OKO 플랫폼의 기술력 검증에 기여했다." } }
    ]
  },
  {
    id: "gap-cross-reality-retail",
    name: { en: "Gap — Cross-Reality Retail Experience, Magnopus", ko: "Gap — 크로스 리얼리티 리테일 익스피리언스, Magnopus" },
    tag: { en: "Cross-Reality, Retail", ko: "크로스 리얼리티, 리테일" },
    wip: false,
    description: { en: "A cross-reality retail environment for Gap, built on Magnopus' OKO platform — a navigable digital flagship store optimized for web, mobile, and AR. Focus on accurate brand materiality, modular store fixtures, and real-time lighting that mirrors Gap's physical retail language.", ko: "Magnopus의 OKO 플랫폼 기반으로 제작한 Gap 크로스 리얼리티 리테일 환경. 웹·모바일·AR에 최적화된 탐색 가능한 디지털 플래그십 스토어. 브랜드 머티리얼 정확도, 모듈러 매장 집기, Gap 오프라인 리테일 언어를 반영한 실시간 라이팅에 집중." },
    year: "2025",
    client: "Gap",
    software: "Unreal 5 · OKO · Maya · Blender",
    role: { en: "3D Artist — Environment, Materials, Optimization", ko: "3D 아티스트 — 환경, 머티리얼, 최적화" },
    tags: { en: ["hard-surface modeling", "AR/VR", "retail", "game ready"], ko: ["하드서페이스 모델링", "AR/VR", "리테일", "게임 레디"] },
    thumb: "gap-01.jpg",
    images: [
      { src: "gap-01.jpg", caption: { en: "Hero render — digital flagship interior", ko: "히어로 렌더 — 디지털 플래그십 내부" } },
    ]
  },
];

/* Combined lookup so openProject() can resolve any id from either section. */
const ALL_PROJECTS = [...PROJECTS, ...PROJECTS_SECONDARY];

/* ================================================
   VARIANT SYSTEM — controls project order per domain
   Edit the id arrays below to reorder for each audience.
   ================================================ */
const VARIANTS = {
  default: {
    row1: ['secret-garden', 'sienar-chall-utilipede', 'vintage-telephone', 'japanese-izakaya', 'espresso-machine', 'cyberpunk-seoul'],
    row2: ['wizard-of-oz-sphere', 'la-2028-olympics', 'welcome-to-oko', 'fallout-vault-33', 'gap-cross-reality-retail'],
    label1: { en: 'Selected Work · 2026',              ko: '주요 작업 · 2026' },
    label2: { en: 'Selected Projects',                  ko: '다른 작업' },
  },
  vfx: {
    // VFX studios: 3D environments & modeling-heavy work first
    row1: ['secret-garden', 'japanese-izakaya', 'cyberpunk-seoul', 'sienar-chall-utilipede', 'vintage-telephone', 'espresso-machine'],
    row2: ['wizard-of-oz-sphere', 'la-2028-olympics', 'welcome-to-oko', 'fallout-vault-33', 'gap-cross-reality-retail'],
    label1: { en: '3D · Environments & Animation · 2026', ko: '3D · 환경 & 애니메이션 · 2026' },
    label2: { en: 'Selected Projects',                    ko: '다른 작업' },
  },
  lbe: {
    // Location/XR studios: real-world & location-based projects first
    row1: ['la-2028-olympics', 'wizard-of-oz-sphere', 'welcome-to-oko', 'fallout-vault-33'],
    row2: ['secret-garden', 'japanese-izakaya', 'cyberpunk-seoul', 'sienar-chall-utilipede', 'vintage-telephone', 'espresso-machine'],
    label1: { en: 'Featured Project Contributions',       ko: '주요 작업' },
    label2: { en: 'Selected Work · 2026',                 ko: '주요 참여 프로젝트' },
  },
  game: {
    // Game studios: game-engine environments & props first
    row1: ['cyberpunk-seoul', 'sienar-chall-utilipede', 'japanese-izakaya', 'secret-garden', 'vintage-telephone', 'espresso-machine'],
    row2: ['fallout-vault-33', 'wizard-of-oz-sphere', 'la-2028-olympics', 'welcome-to-oko'],
    label1: { en: 'Game Environment Art · 2026',          ko: '게임 환경 아트 · 2026' },
    label2: { en: 'Selected Projects',                    ko: '다른 작업' },
  },
};

/* Returns 'vfx', 'lbe', 'game', or 'default'.
   Matches against hostname (production: vfx.doyeonkim.com, doyeonkim-lbe.netlify.app, …),
   URL path (local/dev: /LBE/, /Game/, /vfx/), or URL hash (#LBE / #game / #vfx).
   Once detected, the variant is saved in sessionStorage so clicking into a
   project (which overwrites the hash with the project id) doesn't reset the
   visitor back to the default variant. */
function detectVariant() {
  const host = window.location.hostname;
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase().replace(/^#/, '');

  let variant = null;
  if      (host.includes('vfx')  || path.startsWith('/vfx')  || hash === 'vfx')  variant = 'vfx';
  else if (host.includes('lbe')  || path.startsWith('/lbe')  || hash === 'lbe')  variant = 'lbe';
  else if (host.includes('game') || path.startsWith('/game') || hash === 'game') variant = 'game';

  if (variant) {
    try { sessionStorage.setItem('variant', variant); } catch (e) {}
    return variant;
  }
  try {
    const saved = sessionStorage.getItem('variant');
    if (saved && VARIANTS[saved]) return saved;
  } catch (e) {}
  return 'default';
}
