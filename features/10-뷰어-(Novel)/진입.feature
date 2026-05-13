# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 뷰어 (Novel)
Feature: 진입

  @TC-0168
  Scenario: [TPS-144] Home > Novels > Daily 서브탭 진입 + 첫 번째 작품 클릭
    When GNB > Home > Novels > Daily 서브탭 진입
    Then 소설 목록이 노출된다.
    When 첫 번째 에피소드 클릭
    Then 에피소드 1화로 진입된다.

  @TC-0169 @smoke
  Scenario: [TPS-219] 검색 > 소설 기다무 작품 > 기다무 회차 클릭
    When "The Villain's Sidekick" 검색 후 작품 클릭
    And 기다무 회차 클릭
    Then 기다무 팝업 또는 뷰어가 노출된다.

  @TC-0170
  Scenario: [TPS-220] 검색 > 소설 유료 작품 > 유료 회차 클릭
    When "Overlord" 검색 후 작품 클릭
    And 유료 회차 클릭
    Then 구매 팝업 또는 뷰어가 노출된다.
