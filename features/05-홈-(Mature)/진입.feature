Feature: 진입

  @TC-0087 @smoke
  Scenario: [TPS-073] mature 클릭
    When GNB > mature 클릭
    Then mature 홈화면의 첫 번째 서브탭으로 진입된다.
    And 작품 목록이 노출된다
