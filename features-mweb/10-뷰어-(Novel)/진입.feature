Feature: 소설 뷰어 진입 (Mweb)

  @TC-126M @smoke
  Scenario: [TPS-126] 모바일 소설 뷰어 진입 — Popular → 작품홈 경유
    Given 타파스 모바일 홈에 접속한다
    When 모바일 홈 Novels Popular 서브탭으로 이동한다
    Then Popular 서브탭이 노출된다
    When 첫 번째 소설 작품을 클릭한다
    Then 소설 작품홈으로 진입된다
    When 에피소드 1화를 선택한다
    Then 소설 뷰어로 진입된다
