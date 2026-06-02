# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 뷰어 (Comic)
Feature: 진입
  Scenario: [TPS-127] 작품홈 Episode 탭 > 무료 회차 클릭
    When 작품홈 Episode 탭 > 무료 회차 클릭
    Then 뷰어 원고 이미지와 리스트 버튼이 노출된다.

  @smoke
  Scenario: [TPS-217] 검색 > 코믹 기다무 작품 > 기다무 회차 클릭
    When "I Was the Real Head of the House" 검색 후 작품 클릭
    And 기다무 회차 클릭
    Then 기다무 팝업 또는 뷰어가 노출된다.
  Scenario: [TPS-218] 검색 > 코믹 유료 작품 > 유료 회차 클릭
    When "The Eccentric Duchess" 검색 후 작품 클릭
    And 유료 회차 클릭
    Then 구매 팝업 또는 뷰어가 노출된다.
