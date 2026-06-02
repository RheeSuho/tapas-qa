Feature: Free Access
  Scenario: [TPS-013] Free Access 서브탭 진입 확인
    When 홈 > Free Access 서브탭을 클릭한다
    Then Free Access 서브탭 화면이 노출된다
    And 작품 목록이 노출된다
  Scenario: [TPS-226] Free Access 서브탭 > 빅배너 영역 노출 확인
    When 홈 > Free Access 서브탭을 클릭한다
    Then 빅배너가 노출된다
  Scenario: [TPS-227] Free Access 서브탭 > 섹션 더보기 클릭 + 홈으로 복귀
    When 홈 > Free Access 서브탭을 클릭한다
    And 더보기 링크를 클릭한다
    Then 랜딩 리스트로 이동되고 작품 목록이 노출된다
    When 뒤로가기를 한다
    Then 홈 화면으로 돌아온다
