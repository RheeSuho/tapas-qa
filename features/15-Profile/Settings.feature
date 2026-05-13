# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: Profile
Feature: Settings

  @TC-0233
  Scenario: [TPS-208] Profile 클릭 + 하위 영역 확인.
    When GNB > Profile 클릭
    Then 하위 메뉴 노출된다.
    When Settings 클릭
    Then Settings 탭으로 이동된다.
    When 하위 영역 확인.
    Then Reading option / Personal information / Block Users / Log out all other sessions / Delete account 영역 노출된다.
