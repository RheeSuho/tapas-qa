# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 보관함
Feature: Free episodes

  @TC-0168
  Scenario: [TPS-041] 케이스-168
    When Free episodes 메뉴 클릭
    And Gift 수령
    And ㄴ GNB > Inbox 클릭 > 제일 상단 작품 [Get] 버튼 클릭
    And GNB > 라이브러리 클릭
    Then Free episodes 메뉴 진입된다.
    And ㄴ 현 상태 노출 작품 확인
    And Gift 수령되어 버튼 비활성화로 변경된다.
    And Free episodes 화면 유지되어 노출되고 이용권 받은 작품이 노출된다.

  @TC-0169
  Scenario: [TPS-042] 케이스-169
    When 작품 클릭
    And 상단 [<] 버튼 클릭
    Then 회차 뷰어로 진입된다.
    And Free episodes 화면으로 복귀된다.

  @TC-0170
  Scenario: [TPS-043] 케이스-170
    When [PCW]
    And 탭 하단 [Comics] 버튼 클릭
    And [Novels] 버튼 클릭
    And [All] 버튼 클릭
    And [MW]
    And 우상단 필터 > [Comics] 버튼 클릭
    And 필터 > [Novels] 버튼 클릭
    And 필터 > [All] 버튼 클릭
    Then Comics 작품리스트만 노출된다.
    And Novels 작품리스트만 노출된다.
    And 모든 작품 리스트가 노출된다.

  @TC-0171
  Scenario: [TPS-044] Free Episodes 작품 목록 없는 경우
    Given Free Episodes 작품 목록 없는 경우
    When Comics 필터 클릭
    And Novels 필터 클릭
    And All 필터 클릭
    Then 안내문구가 노출된다.
    And 안내문구가 노출된다.
    And 안내문구가 노출된다.
    And 목록 없을 때 안내 문구
    And - 타이틀: No Gift Passes
    And - 서브 타이틀 : Unused Passes for free episodes will be listed here.
