Feature: Popular (랭킹 랜딩 서브탭)

  @TC-0081
  Scenario: [TPS-063] Popular 서브탭 클릭 + 상단 대분류 카테고리 필터 노출 확인
    When GNB > mature 클릭
    And "Popular" 서브탭 클릭
    Then Mature 카테고리 페이지가 노출된다
    And 작품 목록이 노출된다

  @TC-0234
  Scenario: [TPS-234] Mature 홈 > Popular 서브탭 > Comics/Novels 전환 확인
    When Mature Popular 서브탭에 접속한다
    Then 작품 목록이 노출된다
    When Mature Novels 필터를 클릭한다
    Then Mature Novels 작품 목록으로 전환된다

  @TC-0235 @slow
  Scenario: [TPS-235] Mature 홈 > Popular 서브탭 > 최하단 스크롤 후 랭킹 300위 이내 노출
    When Mature Popular 서브탭에 접속한다
    And 페이지 최하단까지 스크롤한다
    Then 작품 랭킹이 최대 300위까지 노출된다
