Feature: Daily (요일연재 랜딩 서브탭)

  @TC-0038
  Scenario: [TPS-033] Daily 서브탭 클릭 + 요일별 클릭
    When 대메뉴 > Comics 카테고리 클릭
    And Daily 서브탭 클릭
    Then Comics 카테고리 페이지가 노출된다
    And 작품 목록이 노출된다
    When "Mon" 요일 탭 클릭
    Then 작품 목록이 노출된다
