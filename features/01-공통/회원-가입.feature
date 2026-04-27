# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 공통
Feature: 회원 가입

  @TC-0002
  Scenario: [TPS-008] 이메일
    When GNB > Login 클릭
    And [Sign up] 버튼 클릭
    And 신규 Email 계정 입력 > [Sign up] 클릭
    And 성인 기준으로 연령 세팅
    And [Submit] 버튼 클릭
    Then 로그인 유도 창으로 이동된다.
    And Email 회원가입 유도 창으로 이동된다.
    And 연령 인증 화면이 노출된다.
    And 세팅한 생년월일이 필드에 반영되어 노출된다.
    And 회원가입 완료되며 유저홈 화면으로 이동된다.

  @TC-0003
  Scenario: [TPS-009] Facebook
    When GNB > Login 클릭
    And [Or log in with Facebook or Google] 클릭
    And {Continue with Facebook} 버튼 클릭
    And 신규 페이스북 계정 입력
    And 성인 기준으로 연령 세팅
    And [Submit] 버튼 클릭
    Then 로그인 유도 창으로 이동된다.
    And 구글 / 페이스북 로그인 유도 창으로 이동된다.
    And 페이스북 로그인 팝업창이 열린다.
    And 연령 인증 화면이 노출된다.
    And 세팅한 생년월일이 필드에 반영되어 노출된다.
    And 회원가입 완료되며 Edit profile 화면으로 이동된다.

  @TC-0004
  Scenario: [TPS-010] Google
    When GNB > Login 클릭
    And [Or log in with Facebook or Google] 클릭
    And {Continue with Google} 버튼 클릭
    And 신규 구글 계정 입력
    And 성인 기준으로 연령 세팅
    And [Submit] 버튼 클릭
    Then 로그인 유도 창으로 이동된다.
    And 구글 / 페이스북 로그인 유도 창으로 이동된다.
    And 구글 로그인 팝업창이 열린다.
    And 연령 인증 화면이 노출된다.
    And 세팅한 생년월일이 필드에 반영되어 노출된다.
    And 회원가입 완료되며 Edit profile 화면으로 이동된다.
