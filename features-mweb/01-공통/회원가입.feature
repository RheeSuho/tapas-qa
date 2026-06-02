Feature: 회원 가입 (Mweb)

  @skip
  Scenario: [TPS-002] 이메일 회원가입 — 자동화 제외
    When 모바일 GNB > Profile 아이콘 클릭
    Then ㄴ 신규 이메일 계정 필요 — 수동 검증

  @skip
  Scenario: [TPS-003] Facebook 회원가입 — 자동화 제외
    When 모바일 GNB > Profile 아이콘 클릭
    Then ㄴ Facebook OAuth + 신규 계정 필요 — 수동 검증

  @skip
  Scenario: [TPS-004] Google 회원가입 — 자동화 제외
    When 모바일 GNB > Profile 아이콘 클릭
    Then ㄴ Google OAuth + 신규 계정 필요 — 수동 검증
