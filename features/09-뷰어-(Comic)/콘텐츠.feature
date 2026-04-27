# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 뷰어 (Comic)
Feature: 콘텐츠

  @TC-0108
  Scenario: [TPS-128] 우측 스크롤바 아래로 드래그 + 우측 스크롤바 위로 드래그
    When 우측 스크롤바 아래로 드래그
    And 우측 스크롤바 위로 드래그
    Then 뷰어 엔드 영역까지 이동이 가능하다.
    And 뷰어 최상단까지 이동이 가능하다.
