# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: Profile
Feature: Settings

  @TC-0198
  Scenario: [TPS-208] 케이스-198
    When GNB > Profile 클릭
    And Settings 클릭
    And 하위 영역 확인.
    Then 하위 메뉴 노출된다.
    And Settings 탭으로 이동된다.
    And Reading option / Personal information / Block Users / Log out all other sessions / Delete account 영역 노출된다.
