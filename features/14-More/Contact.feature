# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: More
Feature: Contact

  @TC-0220
  Scenario: [TPS-195] More 클릭 + Contact 클릭
    When GNB > More 클릭
    Then 하위 메뉴 노출된다.
    When Contact 클릭
    Then 메일 앱이 열린다.
