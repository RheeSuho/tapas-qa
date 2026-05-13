Feature: Daily

  @TC-0015
  Scenario: [TPS-012] Daily 서브탭 진입 + Comics/Novels 필터 동작 확인
    When 홈 > Daily 서브탭을 클릭한다
    Then Daily 서브탭 화면이 노출된다
    And Comics/Novels 필터와 요일 탭이 노출된다
    And 작품 목록이 노출된다
    When Novels 필터를 클릭한다
    Then Novels 작품 목록으로 전환된다
