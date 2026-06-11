# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: Profile
Feature: 보유 잉크
  @skip
  Scenario: [TPS-211] Profile 클릭 + Ink 영역 확인
    # @skip: Ink shop 티어 버튼 로드 실패 — 잉크샵 모달 비동기 로딩 이슈
    When GNB > Profile 클릭
    Then 하위 메뉴 노출된다.
    When 보유 잉크 영역 클릭
    Then Ink shop 화면 노출된다.
    When Ink 영역 확인
    Then Buy Ink 버튼 / 보유 잉크 + 보너스 잉크 / 잉크 내역 / 서포트 내역 노출된다.
