# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 댓글
Feature: Top

  @TC-0145
  Scenario: 케이스-145
    When 우상단 정렬 필터 > Newest 값 클릭
    And 우상단 정렬 필터 > Oldest 값 클릭
    Then 댓글 리스트가 최신순으로 갱신된다.
    And 댓글 리스트가 오래된 순으로 갱신된다.
