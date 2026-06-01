Feature: 로그인 (Mweb)

  @TC-M003 @smoke
  Scenario: [TPS-003] Login 버튼 클릭 시 로그인 폼 진입
    Given 모바일 미로그인 상태다
    When 모바일 Login 버튼을 클릭한다
    Then 이메일 로그인 폼이 노출된다

  @TC-M005 @smoke
  Scenario: [TPS-005] 이메일 계정으로 로그인 성공
    Given 모바일 미로그인 상태다
    When 모바일 Login 버튼을 클릭한다
    And 이메일과 비밀번호를 입력하고 Login을 클릭한다
    Then 로그인이 완료되고 모바일 홈 화면으로 이동된다

  @TC-008M @smoke
  Scenario: [TPS-008] 이메일 로그인 실패 — 오류 메시지 노출
    Given 모바일 미로그인 상태다
    When 모바일 Login 버튼을 클릭한다
    And 잘못된 이메일과 비밀번호를 입력하고 Login을 클릭한다
    Then 오류 메시지가 노출되고 로그인 화면에 머무른다

  @TC-005M @skip
  Scenario: [TPS-005] Facebook 로그인 — 자동화 제외
    Given 모바일 미로그인 상태다
    When 모바일 Login 버튼을 클릭한다
    Then ㄴ Facebook OAuth 팝업 자동화 어려움 — 수동 검증

  @TC-006M @skip
  Scenario: [TPS-006] Google 로그인 — 자동화 제외
    Given 모바일 미로그인 상태다
    When 모바일 Login 버튼을 클릭한다
    Then ㄴ Google OAuth 팝업 자동화 어려움 — 수동 검증
