Feature: 코믹 뷰어 진입 (Mweb)

  @TC-107M @smoke
  Scenario: [TPS-107] 모바일 코믹 뷰어 진입 — 원고 이미지 노출
    Given 모바일 코믹 작품홈에 진입한다
    When 무료 회차를 클릭한다
    Then 회차로 진입되며 원고 이미지가 노출된다
