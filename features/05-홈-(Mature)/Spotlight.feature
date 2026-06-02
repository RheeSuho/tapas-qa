Feature: Spotlight (섹션 서브탭)
  Scenario: [TPS-064] 미로그인/미인증 상태 > mature 클릭
    Given 미로그인 / 미인증 상태
    When 미로그인 / 미인증 아이디 로그인 상태
    And GNB > mature 클릭
    Then mature 작품이 M 뱃지와 함께 딤드되어 노출된다.

  @skip
  Scenario: [TPS-065] 미인증 상태 > M 뱃지 작품 클릭 + 연령 인증
    Given 미로그인 / 미인증 상태
    When M 뱃지 노출되는 작품 클릭
    And 미성년에 해당되는 연/월/일 입력
    And 성인에 해당되는 연/월/일 입력
    And Submit 버튼 클릭
    Then 연령 인증 페이지 랜딩된다.
    And 해당 작품홈으로 진입된다.

  @skip
  Scenario: [TPS-066] 프로모션 배너 섹션 노출 확인 + 프로모션 배너 클릭
    When Mature Spotlight 서브탭에 접속한다
    Then 프로모션 배너가 노출된다
    When 프로모션 배너를 클릭한다
    Then 랜딩 페이지로 이동된다
  Scenario: [TPS-067] Top 섹션 > 빅배너 노출 영역 확인
    When Mature Spotlight 서브탭에 접속한다
    Then 빅배너가 노출된다
  Scenario: [TPS-068] 빅배너 자동 슬라이드 (8초 대기)
    When Mature Spotlight 서브탭에 접속한다
    And 빅배너 영역에서 8초 대기한다
    Then 다음 빅배너로 자동 전환된다
  Scenario: [TPS-069] 빅배너 클릭 + Mature 홈으로 복귀
    When Mature Spotlight 서브탭에 접속한다
    And 빅배너를 클릭한다
    Then 랜딩 페이지로 이동된다
    When 뒤로가기를 한다
    Then Mature 홈으로 돌아온다
  Scenario: [TPS-070] 카드배너 클릭 + Mature 홈으로 복귀
    When Mature Spotlight 서브탭에 접속한다
    And 카드배너를 클릭한다
    Then 랜딩 페이지로 이동된다
    When 뒤로가기를 한다
    Then Mature 홈으로 돌아온다
  Scenario: [TPS-071] 라인배너 클릭 + Mature 홈으로 복귀
    When Mature Spotlight 서브탭에 접속한다
    And 라인배너를 클릭한다
    Then 랜딩 페이지로 이동된다
    When 뒤로가기를 한다
    Then Mature 홈으로 돌아온다
  Scenario: [TPS-072] 섹션메뉴 더보기 클릭 + Mature 홈으로 복귀
    When Mature Spotlight 서브탭에 접속한다
    And 더보기 링크를 클릭한다
    Then 랜딩 리스트로 이동되고 작품 목록이 노출된다
    When 뒤로가기를 한다
    Then Mature 홈으로 돌아온다
