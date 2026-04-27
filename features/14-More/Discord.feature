# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: More
Feature: Discord

  @TC-0184
  Scenario: [TPS-196] More 클릭 + Discord 클릭
    When GNB > More 클릭
    And Discord 클릭
    Then 하위 메뉴 노출된다.
    And "https://discord.com/invite/tapas" 새 창 노출된다.
