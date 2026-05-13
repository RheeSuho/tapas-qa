Feature: Early Access

  @TC-0229
  Scenario: [TPS-NEW-17] Community 홈 > Early Access 서브탭 진입 확인
    When Community Early Access 서브탭에 접속한다
    Then 작품 목록이 노출된다

  @TC-0230
  Scenario: [TPS-NEW-18] Community 홈 > Early Access 서브탭 > 섹션 더보기 클릭 + 홈으로 복귀
    When Community Early Access 서브탭에 접속한다
    And 더보기 링크를 클릭한다
    Then 랜딩 리스트로 이동된다
    When 뒤로가기를 한다
    Then Community 홈으로 돌아온다
