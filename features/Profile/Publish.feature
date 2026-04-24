# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: Profile
Feature: Publish

  @TC-0192
  Scenario: [TPS-010] Mweb only
    Given Mweb only
    When GNB > Profile 클릭
    And Publish 클릭
    Then 하위 메뉴 노출된다.
    And "https://www.creators.tapas.io" 새 창 노출된다.
