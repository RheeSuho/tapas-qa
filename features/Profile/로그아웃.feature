# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: Profile
Feature: 로그아웃

  @TC-0199
  Scenario: 케이스-199
    When GNB > Profile 클릭
    And Log out 클릭
    Then 하위 메뉴 노출된다.
    And 로그아웃되며 홈 화면으로 이동된다.
