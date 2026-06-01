Feature: 뷰어 하단 툴바 (Mweb)

  @TC-207M @smoke
  Scenario: [TPS-207] 모바일 뷰어 — 이전 유료회차 언락 시 잉크샵 페이지로 이동
    # Pre: 이전회차가 유료, 보유 이용권/잉크 없음
    Given 모바일 코믹 뷰어에 진입한다
    When 이전회차 버튼을 클릭한다
    And Unlock Episode 버튼을 클릭한다
    Then 회차 구매 팝업이 노출된다
    When 잉크 구매 옵션을 클릭한다
    Then 잉크샵 페이지로 이동된다
    When 뒤로가기를 한다
    Then 뷰어로 복귀된다

  @TC-212M @smoke
  Scenario: [TPS-212] 모바일 뷰어 — 다음 유료회차 언락 시 잉크샵 페이지로 이동
    # Pre: 다음회차가 유료, 보유 이용권/잉크 없음
    Given 모바일 코믹 뷰어에 진입한다
    When 다음회차 버튼을 클릭한다
    And Unlock Episode 버튼을 클릭한다
    Then 회차 구매 팝업이 노출된다
    When 잉크 구매 옵션을 클릭한다
    Then 잉크샵 페이지로 이동된다
    When 뒤로가기를 한다
    Then 뷰어로 이동된다
    When 뒤로가기를 한다
    Then 작품홈으로 이동된다
    When 뒤로가기를 한다
    Then 홈 화면으로 이동된다
