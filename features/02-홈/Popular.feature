Feature: Popular
  Scenario: [TPS-015] Popular 서브탭 진입 + Comics/Novels 필터 동작 확인
    When 홈 > Popular 서브탭을 클릭한다
    Then Popular 서브탭 화면이 노출된다
    And Comics/Novels 필터가 노출된다
    And 작품 목록이 노출된다
    When Novels 필터를 클릭한다
    Then Novels 작품 목록으로 전환된다
  Scenario: [TPS-222] Popular 서브탭 > 최하단 스크롤 후 랭킹 300위 이내 노출 확인
    When 홈 > Popular 서브탭을 클릭한다
    And 페이지 최하단까지 스크롤한다
    Then 작품 랭킹이 최대 300위까지 노출된다
