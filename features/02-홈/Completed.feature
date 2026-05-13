Feature: Completed

  @TC-0011
  Scenario: [TPS-011] Completed 서브탭 진입 확인
    When 홈 > Completed 서브탭을 클릭한다
    Then Completed 서브탭 화면이 노출된다
    And Completed Comics 섹션이 노출된다
    And 작품 목록이 노출된다

  @TC-0012
  Scenario: [TPS-223] Completed 서브탭 > 빅배너 영역 노출 확인
    When 홈 > Completed 서브탭을 클릭한다
    Then 빅배너가 노출된다

  @TC-0013 @slow
  Scenario: [TPS-224] Completed 서브탭 > 빅배너 자동 슬라이드 (8초 대기)
    When 홈 > Completed 서브탭을 클릭한다
    And 빅배너 영역에서 8초 대기한다
    Then 다음 빅배너로 자동 전환된다

  @TC-0014
  Scenario: [TPS-225] Completed 서브탭 > 섹션 더보기 클릭 + 홈으로 복귀
    When 홈 > Completed 서브탭을 클릭한다
    And 더보기 링크를 클릭한다
    Then 랜딩 리스트로 이동된다
    When 뒤로가기를 한다
    Then 홈 화면으로 돌아온다
