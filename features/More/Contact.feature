# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: More
Feature: Contact

  @TC-0187
  Scenario: 케이스-187
    When GNB > More 클릭
    And Contact 클릭
    Then 하위 메뉴 노출된다.
    And 메일 앱이 열린다.
