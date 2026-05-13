Feature: Shortcut

  @TC-0023 @smoke
  Scenario: [TPS-016] 로그인 상태 > 홈 진입 + GNB 숏컷 확인
    Given 로그인 상태다
    When 타파스 홈에 접속한다
    Then Library 링크가 노출된다
    And Inbox 링크가 노출된다
    And Publish 버튼이 노출된다
    And 검색 필드가 노출된다

  @TC-0024
  Scenario: [TPS-017] 미로그인 상태 > 홈 진입 + GNB 숏컷 확인
    Given 로그인하지 않은 상태다
    When 타파스 홈에 접속한다
    Then Login 버튼이 노출된다
    And Publish 버튼이 노출된다
    And 검색 필드가 노출된다

  @TC-0025 @smoke
  Scenario: [TPS-018] 검색 필드 클릭 + 키워드 검색
    When 검색 필드를 클릭한다
    And 검색어를 입력한다
    Then 검색 결과 화면이 노출된다
    And Comics/Novels/People/Tags 탭이 노출된다
