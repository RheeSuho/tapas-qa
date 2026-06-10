# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 보관함
Feature: Free episodes
  Scenario: [TPS-170] Free episodes 메뉴 클릭 + 작품 목록 확인
    When Free episodes 메뉴 클릭
    Then Free episodes 메뉴 진입된다.
    And Free episodes 작품 목록이 노출된다.
  Scenario: [TPS-171] 작품 클릭 + 상단 < 버튼 클릭
    When Free episodes 메뉴 클릭
    And 작품 클릭
    Then 회차 뷰어로 진입된다.
    When 상단 [<] 버튼 클릭
    Then Free episodes 화면으로 복귀된다.
  Scenario: [TPS-172] PCW + 필터 > All 버튼 클릭
    When [PCW]
    And 탭 하단 [Comics] 버튼 클릭
    Then Comics 작품리스트만 노출된다.
    When [Novels] 버튼 클릭
    Then Novels 작품리스트만 노출된다.
    When [All] 버튼 클릭
    Then 모든 작품 리스트가 노출된다.
    When [MW]
    And 우상단 필터 > [Comics] 버튼 클릭
    Then Comics 작품리스트만 노출된다.
    When 필터 > [Novels] 버튼 클릭
    Then Novels 작품리스트만 노출된다.
    When 필터 > [All] 버튼 클릭
    Then 모든 작품 리스트가 노출된다.
  Scenario: [TPS-173] Free Episodes 작품 목록 없는 경우 > Comics 필터 클릭 + All 필터 클릭
    Given Free Episodes 작품 목록 없는 경우
    When Comics 필터 클릭
    Then 안내문구가 노출된다.
    When Novels 필터 클릭
    Then 안내문구가 노출된다.
    When All 필터 클릭
    Then 안내문구가 노출된다.
