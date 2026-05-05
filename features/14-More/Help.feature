# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: More
Feature: Help

  @TC-0183
  Scenario: [TPS-198] More 클릭 + Help 클릭
    When GNB > More 클릭
    Then 하위 메뉴 노출된다.
    When Help 클릭
    Then "https://help.tapas.io/hc/en-us" 새 창 노출된다.
