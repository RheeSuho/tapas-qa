# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 작품홈
Feature: 회차 리스트

  @TC-0200
  Scenario: 회차 열람 (기다무) - 기다무 사용 팝업
    Given 기다무 회차인 경우
    When 기다무 회차 클릭
    And Don't show again 영역 클릭
    And [Yes] 버튼 클릭
    And 뒤로가기 [<] 버튼 클릭
    And 뒤로가기 [<] 버튼 클릭 > 메인홈 다른 기다무 작품 클릭
    And 기다무 회차 클릭
    Then 기다무 사용 팝업이 노출된다.
    And 해당 영역에 버튼이 활성화 된다.
    And 뷰어로 진입된다.
    And 작품홈으로 복귀한다
    And 다른 기다무 작품홈으로 이동된다.
    And 기다무 사용 팝업 없이 진입된다.

  @TC-0201
  Scenario: 회차 구매 팝업
    Given 유료 회차인 경우
    And 회차 금액 > 보유 잉크
    When 유료 회차 클릭
    And 회차 구매 옵션 클릭
    And 뒤로가기/[X] 버튼 클릭
    Then 회차 구매 팝업이 노출된다.
    And 잉크샵으로 팝업이 노출된다.
    And 팝업이 종료되며 작품홈에 머무른다.

  @TC-0202
  Scenario: 이용권 사용 팝업
    Given 이용권 사용하는 경우
    And Gift > 이용권 작품 수령한 경우
    When 이용권 사용 가능한 유료회차 클릭
    Then 토스트 팝업이 노출되며 뷰어로 진입된다.
    And ㄴ 토스트 : Episode unlocked
