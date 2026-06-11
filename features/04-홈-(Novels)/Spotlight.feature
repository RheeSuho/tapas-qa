Feature: Spotlight (섹션 서브탭)

  @skip
  Scenario: [TPS-048] 프로모션 배너 섹션 노출 확인 + 프로모션 배너 클릭
    When Novels Spotlight 서브탭에 접속한다
    Then 프로모션 배너가 노출된다
    When 프로모션 배너를 클릭한다
    Then 랜딩 페이지로 이동된다
  @skip
  Scenario: [TPS-049] Top 섹션 > 빅배너 노출 영역 확인
    # @skip: 동적 콘텐츠(빅배너) — 운영 상태 의존
    When Novels Spotlight 서브탭에 접속한다
    Then 빅배너가 노출된다

  @slow @skip
  Scenario: [TPS-050] 빅배너 자동 슬라이드 (8초 대기)
    # @skip: 동적 콘텐츠(빅배너) — 운영 상태 의존
    When Novels Spotlight 서브탭에 접속한다
    And 빅배너 영역에서 8초 대기한다
    Then 다음 빅배너로 자동 전환된다
  @skip
  Scenario: [TPS-051] 빅배너 클릭 + Novels 홈으로 복귀
    # @skip: 동적 콘텐츠(빅배너) — 운영 상태 의존
    When Novels Spotlight 서브탭에 접속한다
    And 빅배너를 클릭한다
    Then 랜딩 페이지로 이동된다
    When 뒤로가기를 한다
    Then Novels 홈으로 돌아온다
  @skip
  Scenario: [TPS-052] 카드배너 클릭 + Novels 홈으로 복귀
    # @skip: 동적 콘텐츠(카드배너) — 운영 상태 의존
    When Novels Spotlight 서브탭에 접속한다
    And 카드배너를 클릭한다
    Then 랜딩 페이지로 이동된다
    When 뒤로가기를 한다
    Then Novels 홈으로 돌아온다
  @skip
  Scenario: [TPS-053] 라인배너 클릭 + Novels 홈으로 복귀
    # @skip: 동적 콘텐츠(라인배너) — 운영 상태 의존
    When Novels Spotlight 서브탭에 접속한다
    And 라인배너를 클릭한다
    Then 랜딩 페이지로 이동된다
    When 뒤로가기를 한다
    Then Novels 홈으로 돌아온다
  @skip
  Scenario: [TPS-054] 섹션메뉴 더보기 클릭 + Novels 홈으로 복귀
    # @skip: 동적 콘텐츠(섹션메뉴) — 운영 상태 의존
    When Novels Spotlight 서브탭에 접속한다
    And 더보기 링크를 클릭한다
    Then 랜딩 리스트로 이동되고 작품 목록이 노출된다
    When 뒤로가기를 한다
    Then Novels 홈으로 돌아온다
