Feature: Profile (Mweb)

  @TC-189M @smoke
  Scenario: [TPS-189M] 모바일 Profile 메뉴 항목 노출 — Publish 포함
    When 모바일 GNB > Profile 클릭
    Then 하위 메뉴가 노출된다
    And ㄴ 프로필 이미지, 닉네임, 보유 잉크, Publish, Inkshop, Redeem code, Settings, Logout 노출

  @TC-191M @smoke
  Scenario: [TPS-191M] 모바일 보유 잉크 클릭 — Ink 탭 및 하위 메뉴 노출
    When 모바일 GNB > Profile 클릭
    And 보유 잉크 영역을 클릭한다
    Then Ink 탭으로 이동된다
    And ㄴ Ink balance, Transactions 하위 메뉴 노출
    And ㄴ Buy Ink 버튼, 보유 잉크, 보너스 잉크, 잉크 내역 노출

  @TC-192M @smoke
  Scenario: [TPS-192M] 모바일 Publish 클릭 — creators.tapas.io 새 창 이동
    When 모바일 GNB > Profile 클릭
    And Publish를 클릭한다
    Then creators.tapas.io 페이지로 이동된다

  @TC-198M @smoke
  Scenario: [TPS-198M] 모바일 Settings — Edit profile 탭 및 하위 영역 노출
    When 모바일 GNB > Profile 클릭
    And Settings를 클릭한다
    Then Edit profile 탭으로 이동된다
    And ㄴ Reading option, Personal information, Delete account 영역 노출
