Feature: Popular

  @TC-0027
  Scenario: [TPS-015] Popular 서브탭 진입 + Comics/Novels 필터 동작 확인
    When 홈 > Popular 서브탭을 클릭한다
    Then Popular 서브탭 화면이 노출된다
    And Comics/Novels 필터가 노출된다
    And 작품 목록이 노출된다
    When Novels 필터를 클릭한다
    Then Novels 작품 목록으로 전환된다
