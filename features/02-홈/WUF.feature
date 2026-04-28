Feature: WUF

  @TC-0028
  Scenario: [TPS-029] WUF 서브탭 진입 확인
    When 홈 > WUF 서브탭을 클릭한다
    Then WUF 서브탭 화면이 노출된다
    And Wait Until Free 섹션이 노출된다
    And 작품 목록이 노출된다
