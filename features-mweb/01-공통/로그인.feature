Feature: 로그인 (Mweb)

  @TC-M003 @smoke
  Scenario: [TPS-M003] Login 버튼 클릭 시 로그인 폼 진입
    Given 모바일 미로그인 상태다
    When 모바일 Login 버튼을 클릭한다
    Then 이메일 로그인 폼이 노출된다

  @TC-M005 @smoke
  Scenario: [TPS-M005] 이메일 계정으로 로그인 성공
    Given 모바일 미로그인 상태다
    When 모바일 Login 버튼을 클릭한다
    And 이메일과 비밀번호를 입력하고 Login을 클릭한다
    Then 로그인이 완료되고 모바일 홈 화면으로 이동된다
