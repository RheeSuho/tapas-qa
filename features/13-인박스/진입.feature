# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 인박스
Feature: 진입

  @smoke
  Scenario: [TPS-194] 대메뉴 > 하단 Inbox 클릭
    When 대메뉴 > 하단 Inbox 클릭
    Then Inbox 화면의 첫 번째 탭으로 진입된다. (Gifts)
