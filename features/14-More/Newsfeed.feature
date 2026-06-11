# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: More
Feature: Newsfeed
  Scenario: [TPS-200] Newsfeed 클릭 + 뉴스 리스트 클릭
    When Newsfeed 클릭
    Then 뉴스 리스트가 노출된다.
    When 뉴스 리스트 클릭
    Then 뉴스 상세화면으로 노출된다.
