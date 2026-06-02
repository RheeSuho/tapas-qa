Feature: 진입

  @smoke
  Scenario: [TPS-055] 대메뉴 > Novels 카테고리 클릭
    When 대메뉴 > Novels 카테고리 클릭
    Then Novels 홈화면의 첫 번째 서브탭으로 진입된다.
    And 작품 목록이 노출된다
