# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 뷰어 (Novel)
Feature: 콘텐츠

  @TC-0127
  Scenario: [TPS-145] 우측 스크롤바 아래로 드래그 + 우측 스크롤바 위로 드래그
    When 우측 스크롤바 아래로 드래그
    And 우측 스크롤바 위로 드래그
    Then 소설 원고 하단 영역이 노출된다.
    And 소설 원고 상단 영역이 노출된다.
