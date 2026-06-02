# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: Profile
Feature: 로그아웃

  @smoke
  Scenario: [TPS-210] Profile 클릭 + Log out 클릭
    When GNB > Profile 클릭
    Then 하위 메뉴 노출된다.
    When Log out 클릭
    Then 홈 화면으로 이동된다.
