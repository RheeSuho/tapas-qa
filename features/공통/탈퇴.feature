# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 공통
Feature: 탈퇴

  @TC-0010
  Scenario: 케이스-10
    When GNB > Profile 클릭
    And [Settings] 클릭
    And 하단 Delete account 클릭
    And Delete account 화면 > Delete account 클릭
    And 비밀번호 검증 팝업 > 비밀번호 정상 입력 후 Delete account 클릭
    Then 하위 메뉴 노출된다.
    And Edit Profile 화면에 진입된다.
    And Delete account 안내 화면으로 이동된다.
    And 비밀번호 검증 팝업이 노출된다.
    And 정상적으로 로그아웃 및 계정 탈퇴되며 홈 화면으로 이동된다.
