# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: Profile
Feature: 프로필 이미지

  @TC-0190
  Scenario: [TPS-212] 케이스-190
    When GNB > Profile 클릭
    And 프로필 이미지 클릭
    Then 하위 메뉴 노출된다.
    And 유저 홈으로 이동된다.
