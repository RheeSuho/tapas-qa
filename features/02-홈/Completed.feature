Feature: Completed

  @TC-0029
  Scenario: [TPS-011] Completed 서브탭 진입 확인
    When 홈 > Completed 서브탭을 클릭한다
    Then Completed 서브탭 화면이 노출된다
    And Completed Comics 섹션이 노출된다
    And 작품 목록이 노출된다
