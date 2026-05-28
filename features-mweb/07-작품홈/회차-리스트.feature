Feature: 작품홈 회차 리스트 (Mweb)

  @TC-201M @smoke
  Scenario: [TPS-201M] 모바일 유료 회차 클릭 — 잉크샵 페이지로 이동
    # Pre: 유료 회차, 보유 잉크 < 회차 금액
    Given 모바일 유료 작품홈에 진입한다
    When 유료 회차를 클릭한다
    Then 회차 구매 팝업이 노출된다
    When 잉크 구매 옵션을 클릭한다
    Then 잉크샵 페이지로 이동된다
    When 뒤로가기를 한다
    Then 작품홈으로 복귀된다
