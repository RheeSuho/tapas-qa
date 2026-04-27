# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 작품홈
Feature: 공통

  Background:
    Given 작품홈 진입

  @TC-0089
  Scenario: [TPS-099] 작품 정보 확인
    When 작품 정보 확인
    Then 아래 정보들이 노출된다.
    And ㄴ 썸네일, 뱃지 (기다무정보)
    And ㄴ 장르
    And ㄴ 작품명
    And ㄴ 카테고리, 뷰카운트, 좋아요, 구독 수

  @TC-0090
  Scenario: [TPS-100] 구독 버튼 노출 확인 + Subscribe 버튼 재클릭
    When 구독 버튼 노출 확인
    And 구독 버튼 클릭
    And . [Close] 클릭
    And [Subscribe] 버튼 재클릭
    Then 작품정보 하단에 미구독 상태로 버튼이 노출된다.

  @TC-0091
  Scenario: [TPS-101] 구독 버튼 좌측 버튼 노출 확인 + Continue Ep.2 버튼 클릭
    When 구독 버튼 좌측 버튼 노출 확인
    And [Continue Ep.2] 버튼 클릭
    And 뒤로가기 [<] 버튼 클릭
    Then [Continue Ep.2] 버튼 노출된다.
    And episode 2 뷰어 진입된다.
    And 작품홈으로 이동되며 버튼이 [Comtinue Ep.3] 으로 변경되어 노출된다.

  @TC-0092
  Scenario: [TPS-102] 배너 영역 확인
    When 배너 영역 확인
    Then 기다무 작품, 공지 사항 띠배너가 노출된다.

  @TC-0093
  Scenario: [TPS-103] 기다무 작품인 경우 > 배너 영역 확인 + 3, OK 버튼 클릭
    Given 기다무 작품인 경우
    When 배너 영역 확인
    And 기다무 띠배너 > ? 버튼 클릭
    And 3, OK 버튼 클릭
    Then 기다무 작품, 띠배너가 노출된다.
    And 기다무 안내 팝업이 노출된다.
    And 팝업이 닫히며 작품홈 화면 유지된다.

  @TC-0094
  Scenario: [TPS-104] 공지사항 있는 경우 > 배너 영역 확인 + 공지사항 띠배너 클릭
    Given 공지사항 있는 경우
    When 배너 영역 확인
    And 공지사항 띠배너 클릭
    Then 기다무 작품, 공지 사항 띠배너가 노출된다.
    And 공지사항 내용이 노출된다.

  @TC-0095
  Scenario: [TPS-105] 영역 노출 확인
    When 영역 노출 확인
    Then Episodes 우측으로 Details 영역이 노출된다.
