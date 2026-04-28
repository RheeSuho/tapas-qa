Feature: Spotlight

  @TC-0014 @skip
  Scenario: [TPS-019] Spotlight 서브탭 + 프로모션 배너 클릭
    When 홈 > Spotlight 서브탭을 클릭한다
    Then Spotlight 서브탭 화면이 노출된다
    And 프로모션 배너가 노출된다
    When 프로모션 배너를 클릭한다
    Then 랜딩 페이지로 이동된다

  @TC-0015
  Scenario: [TPS-020] Spotlight 화면 + 빅배너 노출 확인
    When 타파스 홈에 접속한다
    Then Spotlight 서브탭 화면이 노출된다
    And 섹션 컨텐츠가 노출된다

  @TC-0016 @skip
  Scenario: [TPS-021] 빅배너 자동 슬라이드 (8초 대기)
    When 타파스 홈에 접속한다
    And 빅배너 영역에서 8초 대기한다
    Then 다음 빅배너로 자동 전환된다

  @TC-0017 @skip
  Scenario: [TPS-022] 빅배너 클릭 + 홈으로 복귀
    When 타파스 홈에 접속한다
    And 빅배너를 클릭한다
    Then 랜딩 페이지로 이동된다
    When 뒤로가기를 한다
    Then 홈 화면으로 돌아온다

  @TC-0018 @skip
  Scenario: [TPS-023] 카드배너 클릭 + 홈으로 복귀
    When 타파스 홈에 접속한다
    And 카드배너를 클릭한다
    Then 랜딩 페이지로 이동된다
    When 뒤로가기를 한다
    Then 홈 화면으로 돌아온다

  @TC-0019
  Scenario: [TPS-024] 라인배너 클릭 + 홈으로 복귀
    When 타파스 홈에 접속한다
    And 라인배너를 클릭한다
    Then 랜딩 페이지로 이동된다
    When 뒤로가기를 한다
    Then 홈 화면으로 돌아온다

  @TC-0020
  Scenario: [TPS-025] 최근 본 작품 섹션 노출 확인
    When 타파스 홈에 접속한다
    Then 섹션 컨텐츠가 노출된다

  @TC-0021 @skip
  Scenario: [TPS-026] 배너 섹션 클릭 + 홈으로 복귀
    When 타파스 홈에 접속한다
    And 배너 섹션 내 작품을 클릭한다
    Then 랜딩 페이지로 이동된다
    When 뒤로가기를 한다
    Then 홈 화면으로 돌아온다

  @TC-0022 @skip
  Scenario: [TPS-027] 섹션메뉴 더보기 클릭 + 홈으로 복귀
    When 타파스 홈에 접속한다
    And 더보기 링크를 클릭한다
    Then 랜딩 리스트로 이동된다
    When 뒤로가기를 한다
    Then 홈 화면으로 돌아온다

  @TC-0023 @skip
  Scenario: [TPS-028] 섹션 더보기 클릭 + 홈으로 복귀
    When 타파스 홈에 접속한다
    And 더보기 링크를 클릭한다
    Then 랜딩 리스트로 이동된다
    When 뒤로가기를 한다
    Then 홈 화면으로 돌아온다
