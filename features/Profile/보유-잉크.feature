# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: Profile
Feature: 보유 잉크

  @TC-0191
  Scenario: 케이스-191
    When GNB > Profile 클릭
    And 보유 잉크 영역 클릭
    And Ink 영역 확인
    Then 하위 메뉴 노출된다.
    And Ink 탭 으로 이동된다.
    And - 하위 메뉴 Balance / Transactions / Supported 노출.
    And Buy Ink 버튼 / 보유 잉크 + 보너스 잉크 / 잉크 내역 / 서포트 내역 노출된다.
