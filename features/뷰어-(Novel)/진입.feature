# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 뷰어 (Novel)
Feature: 진입

  @TC-0126
  Scenario: 케이스-126
    When GNB > Home > Novels > Popular 서브탭 진입
    And 첫 번째 작품 클릭
    Then Popular 서브탭 노출된다.
    And 에피소드 1화로 진입된다.
