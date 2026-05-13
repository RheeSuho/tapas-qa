# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: More
Feature: Merch shop

  @TC-0224
  Scenario: [TPS-199] More 클릭 + Merch Shop 클릭
    When GNB > More 클릭
    Then 하위 메뉴 노출된다.
    When Merch Shop 클릭
    Then Merch shop 이동된다.
