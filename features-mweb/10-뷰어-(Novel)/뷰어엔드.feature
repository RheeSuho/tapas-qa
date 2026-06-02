Feature: 소설 뷰어엔드 (Mweb)

  @smoke
  Scenario: [TPS-129] 모바일 소설 뷰어엔드 — See all 클릭 시 Comments 화면 이동
    Given 모바일 소설 뷰어 하단에 진입한다
    Then Comments 영역과 See all 버튼이 노출된다
    When See all 버튼을 클릭한다
    Then Comments 화면으로 이동된다
    When 뒤로가기를 한다
    Then 뷰어로 이동된다

  @smoke
  Scenario: [TPS-131] 모바일 소설 뷰어엔드 — 추천 작품 노출
    Given 모바일 소설 뷰어 하단에 진입한다
    Then 추천 작품이 노출된다
