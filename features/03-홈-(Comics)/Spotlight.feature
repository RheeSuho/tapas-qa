Feature: Spotlight (섹션 서브탭)

  @TC-0031 @skip
  Scenario: [TPS-034] 프로모션 배너 섹션 노출 확인 + 프로모션 배너 클릭
    When Comics Spotlight 서브탭에 접속한다
    Then 프로모션 배너가 노출된다
    When 프로모션 배너를 클릭한다
    Then 랜딩 페이지로 이동된다

  @TC-0032
  Scenario: [TPS-035] Top 섹션 > 빅배너 노출 영역 확인
    When Comics Spotlight 서브탭에 접속한다
    Then 빅배너가 노출된다

  @TC-0033 @slow
  Scenario: [TPS-036] 빅배너 자동 슬라이드 (8초 대기)
    When Comics Spotlight 서브탭에 접속한다
    And 빅배너 영역에서 8초 대기한다
    Then 다음 빅배너로 자동 전환된다

  @TC-0034
  Scenario: [TPS-037] 빅배너 클릭 + Comics 홈으로 복귀
    When Comics Spotlight 서브탭에 접속한다
    And 빅배너를 클릭한다
    Then 랜딩 페이지로 이동된다
    When 뒤로가기를 한다
    Then Comics 홈으로 돌아온다

  @TC-0035
  Scenario: [TPS-038] 카드배너 클릭 + Comics 홈으로 복귀
    When Comics Spotlight 서브탭에 접속한다
    And 카드배너를 클릭한다
    Then 랜딩 페이지로 이동된다
    When 뒤로가기를 한다
    Then Comics 홈으로 돌아온다

  @TC-0036
  Scenario: [TPS-039] 라인배너 클릭 + Comics 홈으로 복귀
    When Comics Spotlight 서브탭에 접속한다
    And 라인배너를 클릭한다
    Then 랜딩 페이지로 이동된다
    When 뒤로가기를 한다
    Then Comics 홈으로 돌아온다

  @TC-0037
  Scenario: [TPS-040] 섹션메뉴 더보기 클릭 + Comics 홈으로 복귀
    When Comics Spotlight 서브탭에 접속한다
    And 더보기 링크를 클릭한다
    Then 랜딩 리스트로 이동된다
    When 뒤로가기를 한다
    Then Comics 홈으로 돌아온다
