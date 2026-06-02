# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 뷰어
Feature: 하단 툴바

  @skip
  Scenario: [TPS-110] 이전회차 : 기다무 회차 / 기다무 이용권 있음 > 뷰어 하단 툴바 > 이전회차 버튼 클릭 + Yes 버튼 클릭 (계정 상태 의존 - @skip)
    Given 이전회차 : 기다무 회차
    And 기다무 이용권 있음
    When 뷰어 하단 툴바 > [이전회차] 버튼 클릭
    And [Unlock Episode] 버튼 클릭
    And [Yes] 버튼 클릭
    Then 회차 언락 안내 화면이 노출된다.
    And 기다무 이용권 사용 안내 팝업이 노출된다.
    And 기다무 이용권이 차감되며 이전회차로 이동된다.
    And ㄴ 토스트 : Episode unlocked for 72 hours

  @skip
  Scenario: [TPS-111] 이전회차 : 유료회차 / 대여 이용권 있음 > 뷰어 하단 툴바 > 이전회차 버튼 클릭 + Unlock Episode 버튼 클릭 (계정 상태 의존 - @skip)
    Given 이전회차 : 유료회차
    And 대여 이용권 있음
    When 뷰어 하단 툴바 > [이전회차] 버튼 클릭
    And [Unlock Episode] 버튼 클릭
    Then 회차 언락 안내 화면이 노출된다.
    And 대여 이용권이 자동으로 차감되며 이전회차로 이동된다.
    And ㄴ 토스트 : Episode unlocked for 72 hours

  @skip
  Scenario: [TPS-112] 이전회차 : 유료회차 / 선물 이용권 있음 > 뷰어 하단 툴바 > 이전회차 버튼 클릭 + Unlock Episode 버튼 클릭 (계정 상태 의존 - @skip)
    Given 이전회차 : 유료회차
    And 선물 이용권 있음
    When 뷰어 하단 툴바 > [이전회차] 버튼 클릭
    And [Unlock Episode] 버튼 클릭
    Then 회차 언락 안내 화면이 노출된다.
    And 선물 이용권이 자동으로 차감되며 이전회차로 이동된다.
    And ㄴ 토스트 : Episode unlocked

  @skip
  Scenario: [TPS-113] 이전회차 : 유료회차 / 보유 이용권 없음 / 보유 잉크 >= 회차 금액 > 뷰어 하단 툴바 > 이전회차 버튼 클릭 + 회차 구매 옵션 클릭 (계정 상태 의존 - @skip)
    Given 이전회차 : 유료회차
    And 보유 이용권 없음
    And 보유 잉크 >= 회차 금액
    When 뷰어 하단 툴바 > [이전회차] 버튼 클릭
    And [Unlock Episode] 버튼 클릭
    And 회차 구매 옵션 클릭
    Then 회차 언락 안내 화면이 노출된다.
    And 회차 구매 팝업이 노출된다.
    And 회차가 구매되며 이전회차로 이동된다.
    And ㄴ 토스트 : Episode unlocked

  @skip
  Scenario: [TPS-114] 이전회차 : 유료회차 / 보유 이용권 없음 / 보유 잉크 < 회차 금액 > 뷰어 하단 툴바 > 이전회차 버튼 클릭 + 회차 구매 옵션 클릭 (계정 상태 의존 - @skip)
    Given 이전회차 : 유료회차
    And 보유 이용권 없음
    And 보유 잉크 < 회차 금액
    When 뷰어 하단 툴바 > [이전회차] 버튼 클릭
    And [Unlock Episode] 버튼 클릭
    And 회차 구매 옵션 클릭
    And 뒤로가기/[X] 버튼 클릭
    Then 회차 언락 안내 화면이 노출된다.
    And 회차 구매 팝업이 노출된다.
    And 잉크샵이 팝업 형태로 노출된다.
    And 잉크샵 팝업이 종료되며 뷰어에 머무른다.

  @skip
  Scenario: [TPS-115] 다음회차 : 기다무 회차 / 기다무 이용권 있음 > 뷰어 하단 툴바 > 다음회차 버튼 클릭 + Yes 버튼 클릭 (계정 상태 의존 - @skip)
    Given 다음회차 : 기다무 회차
    And 기다무 이용권 있음
    When 뷰어 하단 툴바 > [다음회차] 버튼 클릭
    And [Unlock Episode] 버튼 클릭
    And [Yes] 버튼 클릭
    Then 회차 언락 안내 화면이 노출된다.
    And 기다무 이용권 사용 안내 팝업이 노출된다.
    And 기다무 이용권이 차감되며 다음회차로 이동된다.
    And ㄴ 토스트 : Episode unlocked for 72 hours

  @skip
  Scenario: [TPS-116] 다음회차 : 유료회차 / 대여 이용권 있음 > 뷰어 하단 툴바 > 다음회차 버튼 클릭 + Unlock Episode 버튼 클릭 (계정 상태 의존 - @skip)
    Given 다음회차 : 유료회차
    And 대여 이용권 있음
    When 뷰어 하단 툴바 > [다음회차] 버튼 클릭
    And [Unlock Episode] 버튼 클릭
    Then 회차 언락 안내 화면이 노출된다.
    And 대여 이용권이 자동으로 차감되며 다음회차로 이동된다.
    And ㄴ 토스트 : Episode unlocked for 72 hours

  @skip
  Scenario: [TPS-117] 다음회차 : 유료회차 / 선물 이용권 있음 > 뷰어 하단 툴바 > 다음회차 버튼 클릭 + Unlock Episode 버튼 클릭 (계정 상태 의존 - @skip)
    Given 다음회차 : 유료회차
    And 선물 이용권 있음
    When 뷰어 하단 툴바 > [다음회차] 버튼 클릭
    And [Unlock Episode] 버튼 클릭
    Then 회차 언락 안내 화면이 노출된다.
    And 선물 이용권이 자동으로 차감되며 다음회차로 이동된다.
    And ㄴ 토스트 : Episode unlocked

  @skip
  Scenario: [TPS-118] 다음회차 : 유료회차 / 보유 이용권 없음 / 보유 잉크 >= 회차 금액 > 뷰어 하단 툴바 > 다음회차 버튼 클릭 + 회차 구매 옵션 클릭 (계정 상태 의존 - @skip)
    Given 다음회차 : 유료회차
    And 보유 이용권 없음
    And 보유 잉크 >= 회차 금액
    When 뷰어 하단 툴바 > [다음회차] 버튼 클릭
    And [Unlock Episode] 버튼 클릭
    And 회차 구매 옵션 클릭
    Then 회차 언락 안내 화면이 노출된다.
    And 회차 구매 팝업이 노출된다.
    And 회차가 구매되며 이전회차로 이동된다.
    And ㄴ 토스트 : Episode unlocked

  @skip
  Scenario: [TPS-119] 다음회차 : 유료회차 / 보유 이용권 없음 / 보유 잉크 < 회차 금액 > 뷰어 하단 툴바 > 다음회차 버튼 클릭 + 회차 구매 옵션클릭 (계정 상태 의존 - @skip)
    Given 다음회차 : 유료회차
    And 보유 이용권 없음
    And 보유 잉크 < 회차 금액
    When 뷰어 하단 툴바 > [다음회차] 버튼 클릭
    And [Unlock Episode] 버튼 클릭
    And 회차 구매 옵션클릭
    And 뒤로가기 / [X] 버튼 클릭
    And 뒤로가기 버튼 클릭
    And 뒤로가기 버튼 클릭
    Then 회차 언락 안내 화면이 노출된다.
    And 회차 구매 팝업이 노출된다.
    And 잉크샵 팝업이 노출된다.
