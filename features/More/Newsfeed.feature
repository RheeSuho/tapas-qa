# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: More
Feature: Newsfeed

  @TC-0186
  Scenario: [TPS-006] 케이스-186
    When GNB > More 클릭
    And Newsfeed 클릭
    And 뉴스 리스트 클릭
    Then 하위 메뉴 노출된다.
    And 뉴스 리스트가 노출된다.
    And 뉴스 상세화면으로 노출된다.
