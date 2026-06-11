# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 보관함
Feature: Updated
  @skip
  Scenario: [TPS-181] 작품 클릭 + 임의의 작품 클릭
    # @skip: Updated 목록 비어있음 — 계정 상태 의존
    When GNB > 라이브러리 클릭
    And 작품 클릭
    Then 작품홈 으로 진입 된다.
    When [<-] 백버튼 클릭
    Then Updated 메뉴가 노출된다.
    When Comics 필터 클릭
    And 임의의 작품 클릭
    Then Comic 작품홈으로 진입된다.
    When [<-] 백버튼 클릭
    Then Updated 메뉴가 노출된다.
    When Novels 필터 클릭
    And 임의의 작품 클릭
    Then Novel 작품홈으로 진입된다.
    When [<-] 백버튼 클릭
    Then Updated 메뉴가 노출된다.
  Scenario: [TPS-182] PCW + 필터 > All 버튼 클릭
    When GNB > 라이브러리 클릭
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
  @skip
  Scenario: [TPS-183] Updated 작품 목록 없는 경우 > PCW + 필터 > All 버튼 클릭
    # @skip: 계정 Updated 항목이 있어 빈 목록 상태 재현 불가
    Given Updated 작품 목록 없는 경우
    When GNB > 라이브러리 클릭
    And [PCW]
    And 탭 하단 [Comics] 버튼 클릭
    Then 안내문구가 노출된다.
    When [Novels] 버튼 클릭
    Then 안내문구가 노출된다.
    When [All] 버튼 클릭
    Then 안내문구가 노출된다.
    When [MW]
    And 우상단 필터 > [Comics] 버튼 클릭
    Then 안내문구가 노출된다.
    When 필터 > [Novels] 버튼 클릭
    Then 안내문구가 노출된다.
    When 필터 > [All] 버튼 클릭
    Then 안내문구가 노출된다.
