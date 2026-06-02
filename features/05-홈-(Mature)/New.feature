Feature: New
  Scenario: [TPS-236] Mature 홈 > New 서브탭 > Comics 날짜별 신작 목록 노출
    When Mature New 서브탭에 접속한다
    Then 날짜별 신작 목록이 노출된다
  Scenario: [TPS-237] Mature 홈 > New 서브탭 > Comics/Novels 전환 + 날짜별 신작 노출
    When Mature New 서브탭에 접속한다
    And Mature Novels 필터를 클릭한다
    Then Mature Novels 작품 목록으로 전환된다
    And 날짜별 신작 목록이 노출된다
