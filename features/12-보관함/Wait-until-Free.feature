# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 보관함
Feature: Wait until Free

  @TC-0172
  Scenario: [TPS-184] Wait until Free 메뉴 클릭 + 상단 < 버튼 클릭
    When Wait until Free 메뉴 클릭
    And 작품 리스트 노출 확인
    And 작품 클릭
    And 상단 [<] 버튼 클릭
    Then Wait until Free 탭으로 진입된다.
    And 아래 작품이 노출된다.
    And ㄴ 위 작품 연동 케이스에서 기다무 사용했던 Comic, Novel 작품
    And 뷰어 회차로 진입된다.
    And Wait until Free 화면으로 복귀된다.

  @TC-0173
  Scenario: [TPS-185] PCW + 필터 > All 버튼 클릭
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

  @TC-0174
  Scenario: [TPS-186] Wait Until Free 작품 목록 없는 경우 > Comics 필터 클릭 + All 필터 클릭
    Given Wait Until Free 작품 목록 없는 경우
    When Comics 필터 클릭
    And Novels 필터 클릭
    And All 필터 클릭
    Then 안내문구가 노출된다.
    And 안내문구가 노출된다.
    And 안내문구가 노출된다.
    And 목록 없을 때 안내 문구
    And -타이틀: No timers running
    And -서브 타이틀: Series with unlock timers will appear here while you’re waiting.
