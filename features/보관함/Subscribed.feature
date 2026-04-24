# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 보관함
Feature: Subscribed

  @TC-0163
  Scenario: [TPS-047] 케이스-163
    When Subscribed 클릭
    And Comic 작품 구독
    And ㄴ GNB > Home > Comics > 임의의 작품 클릭 > 구독 버튼 클릭 > 앱설치 유도 팝업 [Close] 클릭
    And Novel 작품 구독
    And ㄴ GNB > Home > Novels > 임의의 작품 클릭 > 구독 버튼 클릭 > 앱설치 유도 팝업 [Close] 클릭
    And GNB >보관함 클릭 > Suscribed클릭
    Then Subscribed 진입된다.
    And ㄴ 현 상태 노출 작품 확인
    And Comic 작품홈 구독 버튼이 활성화되어 노출된다.
    And ㄴ APP설치 유도 팝업이 노출된다.
    And Novel 작품홈 구독 버튼이 활성화되어 노출된다.
    And Subscribed 화면에 구독한 작품이 상단에 추가되어 노출된다.

  @TC-0164
  Scenario: [TPS-048] 케이스-164
    When 작품 클릭
    And 상단 [<] 버튼 클릭
    Then 작품뷰어회차로 진입된다.
    And Subscribed 화면으로 복귀된다.

  @TC-0165
  Scenario: [TPS-049] Subscribed 작품 목록 없는 경우
    Given Subscribed 작품 목록 없는 경우
    When Comics 필터 클릭
    And Novels 필터 클릭
    And All 필터 클릭
    Then 안내문구가 노출된다.
    And 안내문구가 노출된다.
    And 안내문구가 노출된다.
    And 목록 없을 때 안내 문구
    And - 타이틀: Never miss an update
    And - 서브 타이틀: Subscribe to your favorite series to get new episodes when they’re released.

  @TC-0166
  Scenario: [TPS-050] 케이스-166
    When [PCW]
    And 탭 하단 [Comics] 버튼 클릭
    And [Novels] 버튼 클릭
    And [All] 버튼 클릭
    And [MW]
    And 우상단 필터 > [Comics] 버튼 클릭
    And 필터 > [Novels] 버튼 클릭
    And 필터 > [All] 버튼 클릭
    Then Comics 작품리스트만 노출된다.
    And Novels 작품리스트만 노출된다.
    And 모든 작품 리스트가 노출된다.

  @TC-0167
  Scenario: [TPS-051] PCWeb only
    Given PCWeb only
    When Subscribed 클릭
    And [Mark All As Read] 버튼 클릭
    And [Setting] 버튼 클릭
    Then Subscribed 진입된다.
    And 노출되는 작품 목록의 New뱃지가 미노출된다.
    And Settings으로 진입된다.
