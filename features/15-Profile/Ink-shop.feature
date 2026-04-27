# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: Profile
Feature: Ink shop

  Background:
    When GNB > Profile 클릭
    And Ink shop 클릭

  @TC-0193
  Scenario: [TPS-202] Profile 클릭 + Ink shop 클릭
    When GNB > Profile 클릭
    And Ink shop 클릭
    Then 하위 메뉴 노출된다.
    And Ink shop 화면 노출된다.
    And - 보유 잉크량 / Buy 탭 / 잉크 티어별 노출 된다.

  @TC-0194
  Scenario: [TPS-203] 임의의 잉크 티어 클릭 + 잉크 구매 동작
    # Test DATA: QA 환경 테스트 결제 카드 번호
    When 임의의 잉크 티어 클릭
    And 잉크 구매 동작
    Then 잉크 구매 팝업이 노출된다.
    And 잉크가 구매 되며 현재 보유 잉크량이 추가된다.
