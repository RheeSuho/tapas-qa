# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: More
Feature: Forums

  @TC-0185
  Scenario: [TPS-197] 케이스-185
    When GNB > More 클릭
    And Forums 클릭
    Then 하위 메뉴 노출된다.
    And "https://forums.tapas.io/" 새 창 노출 된다.
