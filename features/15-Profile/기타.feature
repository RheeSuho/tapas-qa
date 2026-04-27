# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: Profile
Feature: 

  @TC-0189
  Scenario: [TPS-209] 로그인 상태
    Given 로그인 상태
    When GNB > Profile 클릭
    And Profile 영역 확인
    Then 하위 메뉴 노출된다.
    And 프로필 이미지 / 닉네임 / 보유 잉크 / Inkshop / Redeem code / Settings / Logout 노출된다.
