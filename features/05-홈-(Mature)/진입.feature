# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 홈 (Mature)
Feature: 진입

  @TC-0070
  Scenario: [TPS-073] mature 클릭
    # Test DATA: QA : popular Prod : Spotlight
    When GNB > mature 클릭
    Then mature 홈화면의 첫 번째 서브탭으로 진입된다.
