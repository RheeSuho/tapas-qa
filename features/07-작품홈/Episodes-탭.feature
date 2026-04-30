Feature: Episodes 탭

  Background:
    Given 작품홈 진입

  @TC-0100 @smoke
  Scenario: [TPS-088] Episodes 탭 클릭 시 회차 리스트 노출
    When Episodes 탭 클릭
    Then 회차 리스트 영역이 노출된다

  @TC-0101
  Scenario: [TPS-089] 정렬 버튼 클릭 후 재클릭
    When Episodes 탭 클릭
    And 정렬 버튼 클릭
    And 정렬 버튼 재클릭
    Then 회차 리스트 영역이 노출된다

  @TC-0102
  Scenario: [TPS-090] 회차 리스트 노출 확인
    When Episodes 탭 클릭
    Then 회차 리스트 영역이 노출된다

  @TC-0103 @smoke
  Scenario: [TPS-091] 무료 회차 클릭 시 뷰어 진입
    When 무료 회차 클릭
    Then 뷰어로 진입된다

  @TC-0104 @skip
  Scenario: [TPS-092] 기다무 티켓 보유 상태 - 기다무 회차 클릭 (계정 상태 의존 - @skip)
    Given 기다무 티켓 보유 상태
    When 회차 영역 스크롤 > 기다무 회차 클릭
    And 기다무 사용 확인 팝업 > [Yes] 버튼 클릭
    Then 뷰어로 진입된다

  @TC-0105 @skip
  Scenario: [TPS-093] 기다무 티켓 소진 상태 - 회차 구매 팝업 노출 (계정 상태 의존 - @skip)
    Given 기다무 티켓 소진 상태
    When 다음 회차 (기다무) 클릭
    And 회차 구매 팝업 > [X] 버튼 클릭
    Then 작품홈 페이지가 노출된다

  @TC-0106 @skip
  Scenario: [TPS-094] 잉크 보유 상태 - 유료 회차 단건 구매 (계정 상태 의존 - @skip)
    Given 잉크 보유 상태
    When 회차 영역 스크롤 > 유료 회차 클릭
    And 회차 구매 팝업 > 단건 구매 옵션 클릭
    Then 뷰어로 진입된다
