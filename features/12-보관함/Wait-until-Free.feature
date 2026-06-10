# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 보관함
Feature: Wait until Free
  Scenario: [TPS-184] Wait until Free 메뉴 클릭 + 상단 < 버튼 클릭
    When Wait until Free 메뉴 클릭
    Then Wait until Free 탭으로 진입된다.
    When 작품 리스트 노출 확인
    Then 아래 작품이 노출된다.
    When 작품 클릭
    Then 뷰어 회차로 진입된다.
    When 상단 [<] 버튼 클릭
    Then Wait until Free 화면으로 복귀된다.
  Scenario: [TPS-185] PCW + 필터 > All 버튼 클릭
    When Wait until Free 메뉴 클릭
    And [PCW]
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
  Scenario: [TPS-186] Wait Until Free 작품 목록 없는 경우 > Comics 필터 클릭 + All 필터 클릭
    Given Wait Until Free 작품 목록 없는 경우
    When Comics 필터 클릭
    Then 안내문구가 노출된다.
    When Novels 필터 클릭
    Then 안내문구가 노출된다.
    When All 필터 클릭
    Then 안내문구가 노출된다.
