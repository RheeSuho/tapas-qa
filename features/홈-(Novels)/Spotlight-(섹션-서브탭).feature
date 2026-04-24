# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 홈 (Novels)
Feature: Spotlight (섹션 서브탭)

  @TC-0044
  Scenario: 프로모션 배너
    When 프로모션 배너 섹션 노출 확인
    And 프로모션 배너 클릭
    Then 프로모션 배너 이미지 및 배너 텍스트가 정상 노출된다.
    And 설정된 랜딩타겟으로 이동된다.

  @TC-0045
  Scenario: Top 섹션 - 빅배너 - 노출 확인
    When Top 섹션 > 빅배너 노출 영역 확인
    Then 빅배너 설정에 맞게 정상 노출된다.
    And ㄴ 이미지,타이틀, BM/신작/연령/이벤트 뱃지

  @TC-0046
  Scenario: Top 섹션 - 빅배너 - 스와이프
    When 빅배너 영역에서 8초 이상 대기
    And 빅배너 좌로 스와이프
    And 빅배너 우로 스와이프
    Then 다음 빅배너로 자동 스와이프된다.
    And 이전 빅배너로 스와이프되며 상단 인디케이터도 순서에 맞게 노출된다.
    And 다음 빅배너로 스와이프되며 상단 인디케이터도 순서에 맞게 노출된다.

  @TC-0047
  Scenario: Top 섹션 - 빅배너 - 클릭
    When 빅배너 클릭
    And 상단네비바 [<] 또는 단말 백버튼 클릭
    Then 빅배너 랜딩타겟으로 이동된다.
    And 이전 화면으로 돌아온다. (Novels 홈)

  @TC-0048
  Scenario: Top 섹션 - 카드배너
    When Top 섹션 > 카드배너 노출 확인
    And exc) 카드배너 영역 가려진 상태라면 노출될 때까지 스크롤 후 확인
    And 카드배너 클릭
    And 상단네비바 [<] 또는 단말 백버튼 클릭
    Then 카드배너 설정에 맞게 정상 노출된다.
    And ㄴ 이미지,타이틀, BM/신작/연령/이벤트 뱃지
    And 카드배너 랜딩타겟으로 이동된다.
    And 이전 화면으로 돌아온다. (Novels 홈)

  @TC-0049
  Scenario: 라인배너 섹션
    When 라인배너 섹션 노출 확인
    And 라인배너 클릭
    And 상단네비바 [<] 또는 단말 백버튼 클릭
    Then 라인배너 이미지 및 배너 텍스트 노출된다.
    And 설정된 랜딩타겟으로 이동된다.
    And 이전 화면으로 돌아온다. (Novels 홈)

  @TC-0050
  Scenario: Section Menu
    When 섹션메뉴 노출 확인
    And 더보기[>] 영역 클릭
    Then 각 섹션 메뉴 작품 노출된다.
    And 섹션 랜딩리스트 진입되고, 전체 작품 노출된다.
