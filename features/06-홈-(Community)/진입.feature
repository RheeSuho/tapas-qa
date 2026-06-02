Feature: 진입

  @smoke
  Scenario: [TPS-087] Community 클릭
    When GNB > Community 클릭
    Then Community 홈화면의 첫 번째 서브탭으로 진입된다.
    And 작품 목록이 노출된다
