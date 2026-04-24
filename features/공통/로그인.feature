# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 공통
Feature: 로그인

  @TC-0005
  Scenario: [TPS-019] Facebook
    Given 기로그인한 페이스북 계정 있는 경우
    When GNB > Login 클릭
    And [Or log in with Facebook or Google] 클릭
    And {Continue with Facebook} 버튼 클릭
    And 페이스북 로그인 팝업창 > 로그인 시도
    Then 로그인 유도 화면이 노출된다.
    And 구글 / 페이스북 로그인 유도 창으로 이동된다.
    And 페이스북 로그인 팝업창이 열린다.
    And 로그인 완료되며 홈 화면으로 이동된다.

  @TC-0006
  Scenario: [TPS-020] Google
    Given 기로그인한 구글 계정 있는 경우
    When GNB > Login 클릭
    And [Or log in with Facebook or Google] 클릭
    And {Continue with Google} 버튼 클릭
    And 구글 로그인 팝업창 > 로그인 시도
    Then 로그인 유도 화면이 노출된다.
    And 구글 / 페이스북 로그인 유도 창으로 이동된다.
    And 구글 로그인 팝업창이 열린다.
    And 로그인 완료되며 홈 화면으로 이동된다.

  @TC-0007
  Scenario: [TPS-021] 이메일 - 로그인 화면 진입
    When GNB > Login 클릭
    Then 로그인 유도 창으로 이동된다.

  @TC-0008
  Scenario: [TPS-022] 이메일 - 로그인 실패
    When GNB > Login 클릭
    And 미가입된 이메일 계정/비밀번호 입력 후 Sign up 버튼 클릭
    Then 로그인 유도 창으로 이동된다.
    And 로그인되지 않으며 오류 메세지 노출되고 화면 유지된다.

  @TC-0009
  Scenario: [TPS-023] 이메일 - 로그인 성공
    When GNB > Login 클릭
    And Email 계정 입력 > Login 클릭
    Then 로그인 유도 창으로 이동된다.
    And 로그인 완료되며 홈 화면으로 이동된다.
