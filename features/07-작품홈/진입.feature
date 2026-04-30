Feature: 진입

  @TC-0088
  Scenario: [TPS-106] Popular 서브탭 작품 클릭 시 작품홈 진입
    When Comics Popular 서브탭에 접속한다
    And 첫 번째 작품을 클릭한다
    Then 작품홈으로 진입된다
