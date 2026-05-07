Feature: 탈퇴

  @TC-0010 @skip
  Scenario: [TPS-007] 계정 탈퇴
    # @skip: 파괴적 작업 — 실제 계정 탈퇴 자동화 범위 외
    When Profile 메뉴에서 Settings로 진입한다
    And Delete account를 클릭하고 비밀번호를 입력한다
    Then 계정이 탈퇴되고 홈 화면으로 이동된다
