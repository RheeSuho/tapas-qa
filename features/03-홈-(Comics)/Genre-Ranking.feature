Feature: 장르 랭킹 (랜딩 서브탭)
  Scenario: [TPS-041] 장르명 서브탭 클릭 - Romance
    When 대메뉴 > Comics 카테고리 클릭
    And "Romance" 서브탭 클릭
    Then Comics 카테고리 페이지가 노출된다
    And 작품 목록이 노출된다
