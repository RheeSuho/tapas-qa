Feature: New
  Scenario: [TPS-014] New 서브탭 진입 + Comics/Novels 필터 동작 확인
    When 홈 > New 서브탭을 클릭한다
    Then New 서브탭 화면이 노출된다
    And Comics/Novels 필터가 노출된다
    And 작품 목록 또는 "No results were found." 문구가 노출된다
    When Novels 필터를 클릭한다
    Then Novels 작품 목록으로 전환된다
  Scenario: [TPS-221] New 서브탭 > 날짜별 신작 목록 노출 확인
    When 홈 > New 서브탭을 클릭한다
    Then New 서브탭 화면이 노출된다
    And 날짜별 신작 목록이 노출된다
