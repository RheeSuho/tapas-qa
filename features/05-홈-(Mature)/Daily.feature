Feature: Daily (요일연재 랜딩 서브탭)

  @TC-0080
  Scenario: [TPS-062] Daily 서브탭 클릭 + 요일별 클릭
    When GNB > mature 클릭
    And Daily 서브탭 클릭
    Then Mature 카테고리 페이지가 노출된다
    And 작품 목록이 노출된다
    When "Mon" 요일 탭 클릭
    Then 작품 목록이 노출된다
