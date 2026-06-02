# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: More
Feature: Forums
  Scenario: [TPS-197] More 클릭 + Forums 클릭
    When GNB > More 클릭
    Then 하위 메뉴 노출된다.
    When Forums 클릭
    Then "https://forums.tapas.io/" 새 창 노출 된다.
