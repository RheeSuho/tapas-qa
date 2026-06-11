# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: Profile
Feature: Ink shop
  @skip
  Scenario: [TPS-202] Profile 클릭 + Ink shop 클릭
    # @skip: Ink shop 티어 버튼 로드 실패 — 잉크샵 모달 비동기 로딩 이슈
    When GNB > Profile 클릭
    And Ink shop 클릭
    Then 하위 메뉴 노출된다.
    And Ink shop 화면 노출된다.

  @qa
  Scenario: [TPS-203] 임의의 잉크 티어 클릭 + 잉크 구매 동작
    # @qa: QA 전용 — Stripe 테스트 카드로 결제 (Prod에서는 자동 skip)
    When GNB > Profile 클릭
    And Ink shop 클릭
    And 임의의 잉크 티어 클릭
    Then 잉크 구매 팝업이 노출된다.
    When 잉크 구매 동작
    Then 구매 성공 메시지가 노출된다.
