# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 댓글
Feature: Top

  @TC-0145
  Scenario Outline: [TPS-158] 우상단 정렬 필터 변경 - <정렬값>
    When 우상단 정렬 필터 > <정렬값> 값 클릭
    Then 댓글 목록이 노출된다.
    Examples:
      | 정렬값  |
      | Newest  |
      | Oldest  |
