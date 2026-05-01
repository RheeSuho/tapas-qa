# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 보관함
Feature: 진입

  @TC-0157
  Scenario: [TPS-187] 라이브러리 메뉴 클릭
    When GNB > 라이브러리 메뉴 클릭
    Then 보관함으로 진입되며 아래 메뉴들이 노출된다.
