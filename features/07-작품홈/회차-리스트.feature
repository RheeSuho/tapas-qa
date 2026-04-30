Feature: 회차 리스트

  Background:
    Given 작품홈 진입

  @TC-0200 @skip
  Scenario: [TPS-107] 기다무 회차 클릭 팝업 플로우 (계정 상태 의존 - @skip)
    Given 기다무 회차인 경우
    When 기다무 회차 클릭
    Then 기다무 사용 팝업이 노출된다

  @TC-0201 @skip
  Scenario: [TPS-108] 유료 회차 - 잉크 부족 시 잉크샵 팝업 (계정 상태 의존 - @skip)
    Given 유료 회차인 경우
    When 유료 회차 클릭
    And 회차 구매 옵션 클릭
    Then 회차 구매 팝업이 노출된다

  @TC-0202 @skip
  Scenario: [TPS-109] 이용권 사용 가능한 유료회차 클릭 (계정 상태 의존 - @skip)
    Given 이용권 사용하는 경우
    When 이용권 사용 가능한 유료회차 클릭
    Then 뷰어로 진입된다
