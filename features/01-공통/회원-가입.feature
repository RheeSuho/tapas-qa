Feature: 회원 가입

  @skip
  Scenario: [TPS-008] 이메일로 신규 회원 가입
    # @skip: 신규 이메일 계정 필요 — 재실행 시 중복 가입 오류
    Given 로그인하지 않은 상태다
    When Login 버튼을 클릭한다
    And 이메일로 회원가입을 시도한다
    Then 회원가입 화면이 노출된다

  @skip
  Scenario: [TPS-009] 페이스북으로 신규 회원 가입
    Given 로그인하지 않은 상태다
    When Login 버튼을 클릭한다
    And 페이스북으로 로그인을 시도한다
    Then 회원가입 화면이 노출된다

  @skip
  Scenario: [TPS-010] 구글로 신규 회원 가입
    Given 로그인하지 않은 상태다
    When Login 버튼을 클릭한다
    And 구글로 로그인을 시도한다
    Then 회원가입 화면이 노출된다
