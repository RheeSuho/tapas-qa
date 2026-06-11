Feature: WUF
  @skip
  Scenario: [TPS-029] WUF 서브탭 진입 확인
    When 홈 > WUF 서브탭을 클릭한다
    Then WUF 서브탭 화면이 노출된다
    And Wait Until Free 섹션이 노출된다
    And 작품 목록이 노출된다
  Scenario: [TPS-228] WUF 서브탭 > 섹션 더보기 클릭 + 홈으로 복귀
    When 홈 > WUF 서브탭을 클릭한다
    And 더보기 링크를 클릭한다
    Then 랜딩 리스트로 이동되고 작품 목록이 노출된다
    When 뒤로가기를 한다
    Then 홈 화면으로 돌아온다
