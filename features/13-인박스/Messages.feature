# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 인박스
Feature: Messages

  Background:
    When Inbox > Messages 탭 클릭
  Scenario: [TPS-191] Inbox > Messages 탭 클릭
    When Inbox > Messages 탭 클릭
    Then Inbox 화면의 두 번째 탭으로 진입된다. (Messagess)
    And 신규 메세지가 있다면 메세지 썸네일 우측에 New 표시가 노출된다.
  Scenario: [TPS-192] Messages 영역 노출 확인 + Messages 타입별 클릭
    When Messages 영역 노출 확인
    And Messages 타입별 클릭
    Then 수신된 Messages가 노출된다.
    And 설정된 랜딩페이지로 이동된다.
  Scenario: [TPS-193] PCWeb only > Messages 탭 우측 상단 Mark all as read 버튼 클릭
    Given PCWeb only
    When Messages 탭 우측 상단 [Mark all as read] 버튼 클릭
    Then Message New 표시 사라진다.
