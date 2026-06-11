Feature: Popular (랭킹 랜딩 서브탭)
  @skip
  Scenario: [TPS-047] Popular 서브탭 클릭 + 상단 대분류 카테고리 필터 노출 확인
    # @skip: Novels Popular 서브탭 — 미운영 또는 locator 매칭 불가
    When 대메뉴 > Novels 카테고리 클릭
    And "Popular" 서브탭 클릭
    Then Novels 카테고리 페이지가 노출된다
    And 작품 목록이 노출된다
