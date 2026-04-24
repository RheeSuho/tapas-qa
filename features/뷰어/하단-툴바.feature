# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 뷰어
Feature: 하단 툴바

  @TC-0203
  Scenario: 이전 회차 이동 - 기다무 이용권
    Given 이전회차 : 기다무 회차
    And 기다무 이용권 있음
    When 뷰어 하단 툴바 > [이전회차] 버튼 클릭
    And [Unlock Episode] 버튼 클릭
    And [Yes] 버튼 클릭
    Then 회차 언락 안내 화면이 노출된다.
    And 기다무 이용권 사용 안내 팝업이 노출된다.
    And 기다무 이용권이 차감되며 이전회차로 이동된다.
    And ㄴ 토스트 : Episode unlocked for 72 hours

  @TC-0204
  Scenario: 이전 회차 이동 - 대여 이용권
    Given 이전회차 : 유료회차
    And 대여 이용권 있음
    When 뷰어 하단 툴바 > [이전회차] 버튼 클릭
    And [Unlock Episode] 버튼 클릭
    Then 회차 언락 안내 화면이 노출된다.
    And 대여 이용권이 자동으로 차감되며 이전회차로 이동된다.
    And ㄴ 토스트 : Episode unlocked for 72 hours

  @TC-0205
  Scenario: 이전 회차 이동 - 선물 이용권
    Given 이전회차 : 유료회차
    And 선물 이용권 있음
    When 뷰어 하단 툴바 > [이전회차] 버튼 클릭
    And [Unlock Episode] 버튼 클릭
    Then 회차 언락 안내 화면이 노출된다.
    And 선물 이용권이 자동으로 차감되며 이전회차로 이동된다.
    And ㄴ 토스트 : Episode unlocked

  @TC-0206
  Scenario: 이전 회차 이동 - 잉크 구매
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

  @TC-0207
  Scenario: 이전 회차 이동 - 잉크 부족
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

  @TC-0208
  Scenario: 다음 회차 이동 - 기다무 이용권
    Given 다음회차 : 기다무 회차
    And 기다무 이용권 있음
    When 뷰어 하단 툴바 > [다음회차] 버튼 클릭
    And [Unlock Episode] 버튼 클릭
    And [Yes] 버튼 클릭
    Then 회차 언락 안내 화면이 노출된다.
    And 기다무 이용권 사용 안내 팝업이 노출된다.
    And 기다무 이용권이 차감되며 다음회차로 이동된다.
    And ㄴ 토스트 : Episode unlocked for 72 hours

  @TC-0209
  Scenario: 다음 회차 이동 - 대여 이용권
    Given 다음회차 : 유료회차
    And 대여 이용권 있음
    When 뷰어 하단 툴바 > [다음회차] 버튼 클릭
    And [Unlock Episode] 버튼 클릭
    Then 회차 언락 안내 화면이 노출된다.
    And 대여 이용권이 자동으로 차감되며 다음회차로 이동된다.
    And ㄴ 토스트 : Episode unlocked for 72 hours

  @TC-0210
  Scenario: 다음 회차 이동 - 선물 이용권
    Given 다음회차 : 유료회차
    And 선물 이용권 있음
    When 뷰어 하단 툴바 > [다음회차] 버튼 클릭
    And [Unlock Episode] 버튼 클릭
    Then 회차 언락 안내 화면이 노출된다.
    And 선물 이용권이 자동으로 차감되며 다음회차로 이동된다.
    And ㄴ 토스트 : Episode unlocked

  @TC-0211
  Scenario: 다음 회차 이동 - 잉크 구매
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

  @TC-0212
  Scenario: 다음 회차 이동 - 잉크 부족
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
