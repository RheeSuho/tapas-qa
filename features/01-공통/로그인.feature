Feature: 로그인

  @TC-0001 @skip
  Scenario: [TPS-001] 페이스북 소셜 로그인
    Given 로그인하지 않은 상태다
    When Login 버튼을 클릭한다
    And 페이스북으로 로그인을 시도한다
    Then 로그인이 완료되고 홈 화면으로 이동된다

  @TC-0002 @skip
  Scenario: [TPS-002] 구글 소셜 로그인
    Given 로그인하지 않은 상태다
    When Login 버튼을 클릭한다
    And 구글로 로그인을 시도한다
    Then 로그인이 완료되고 홈 화면으로 이동된다

  @TC-0003 @smoke
  Scenario: [TPS-003] Login 버튼 클릭 시 로그인 폼 진입
    Given 로그인하지 않은 상태다
    When Login 버튼을 클릭한다
    Then 이메일 로그인 폼이 노출된다

  @TC-0004
  Scenario: [TPS-004] 미가입 이메일로 로그인 시도 시 오류 노출
    Given 로그인하지 않은 상태다
    When Login 버튼을 클릭한다
    And 미가입 이메일과 비밀번호를 입력하고 Login을 클릭한다
    Then 오류 메시지가 노출되고 로그인 페이지가 유지된다

  @TC-0005 @smoke
  Scenario: [TPS-005] 이메일 계정으로 로그인 성공
    Given 로그인하지 않은 상태다
    When Login 버튼을 클릭한다
    And 이메일과 비밀번호를 입력하고 Login을 클릭한다
    Then 로그인이 완료되고 홈 화면으로 이동된다
