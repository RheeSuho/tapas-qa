Feature: 작품홈 진입 (Mweb)

  @TC-088M @smoke
  Scenario: [TPS-088] 모바일 Popular 서브탭 → 작품 클릭 시 작품홈으로 진입
    Given 타파스 모바일 홈에 접속한다
    When 모바일 홈 Comics Popular 서브탭으로 이동한다
    Then Popular 서브탭이 노출된다
    When 첫 번째 작품을 클릭한다
    Then 작품홈으로 진입된다
