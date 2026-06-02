# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 보관함
Feature: Subscribed

  @TC-0201B @smoke
  Scenario: [TPS-176] Subscribed 클릭 + 구독 작품 목록 노출 확인
    When Subscribed 클릭
    Then Subscribed 진입된다.

  @TC-0202
  Scenario: [TPS-177] 작품 클릭 + 상단 < 버튼 클릭
    When 작품 클릭
    Then 작품뷰어회차로 진입된다.
    When 상단 [<] 버튼 클릭
    Then Subscribed 화면으로 복귀된다.

  @TC-0203
  Scenario: [TPS-178] Subscribed 작품 목록 없는 경우 > Comics 필터 클릭 + All 필터 클릭
    Given Subscribed 작품 목록 없는 경우
    When Comics 필터 클릭
    Then 안내문구가 노출된다.
    When Novels 필터 클릭
    Then 안내문구가 노출된다.
    When All 필터 클릭
    Then 안내문구가 노출된다.

  @TC-0204
  Scenario: [TPS-179] PCW + 필터 > All 버튼 클릭
    When [PCW]
    And 탭 하단 [Comics] 버튼 클릭
    Then Comics 작품리스트만 노출된다.
    When [Novels] 버튼 클릭
    Then Novels 작품리스트만 노출된다.
    When [All] 버튼 클릭
    Then 모든 작품 리스트가 노출된다.
    When [MW]
    And 우상단 필터 > [Comics] 버튼 클릭
    Then Comics 작품리스트만 노출된다.
    When 필터 > [Novels] 버튼 클릭
    Then Novels 작품리스트만 노출된다.
    When 필터 > [All] 버튼 클릭
    Then 모든 작품 리스트가 노출된다.

  @TC-0205
  Scenario: [TPS-180] PCWeb only > Subscribed 클릭 + Setting 버튼 클릭
    Given PCWeb only
    When Subscribed 클릭
    Then Subscribed 진입된다.
    When [Mark All As Read] 버튼 클릭
    Then 노출되는 작품 목록의 New뱃지가 미노출된다.
    When [Setting] 버튼 클릭
    Then Settings으로 진입된다.
