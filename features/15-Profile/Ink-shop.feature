# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: Profile
Feature: Ink shop

  @TC-0227
  Scenario: [TPS-202] Profile 클릭 + Ink shop 클릭
    When GNB > Profile 클릭
    And Ink shop 클릭
    Then 하위 메뉴 노출된다.
    And Ink shop 화면 노출된다.

  @TC-0228 @skip
  Scenario: [TPS-203] 임의의 잉크 티어 클릭 + 잉크 구매 동작
    # @skip: 실제 결제 카드 필요
    When 임의의 잉크 티어 클릭
    Then 잉크 구매 팝업이 노출된다.
    When 잉크 구매 동작
    Then 잉크가 구매 되며 현재 보유 잉크량이 추가된다.
