Feature: 공통

  Background:
    Given 작품홈 진입

  @TC-0089
  Scenario: [TPS-099] 작품 정보 확인
    Then 작품홈 페이지가 노출된다

  @TC-0090
  Scenario: [TPS-100] 구독 버튼 노출 및 재클릭
    When 구독 버튼 클릭
    Then 작품홈 페이지가 노출된다

  @TC-0091
  Scenario: [TPS-101] 무료 회차 클릭 후 뷰어 진입
    When 무료 회차 클릭
    Then 뷰어로 진입된다

  @TC-0092
  Scenario: [TPS-102] 배너 영역 확인
    Given 기다무 작품인 경우
    Then 기다무 작품, 공지 사항 띠배너가 노출된다.

  @TC-0093
  Scenario: [TPS-103] 기다무 작품 띠배너 > ? 버튼 클릭
    Given 기다무 작품인 경우
    When 기다무 띠배너 > ? 버튼 클릭
    Then 기다무 안내 팝업이 노출된다.

  @TC-0094
  Scenario: [TPS-104] 공지사항 띠배너 클릭
    Given 공지사항 있는 경우
    When 공지사항 띠배너 클릭
    Then 공지사항 내용이 노출된다.

  @TC-0095
  Scenario: [TPS-105] Details 영역 노출 확인
    Then Details 영역이 노출된다
