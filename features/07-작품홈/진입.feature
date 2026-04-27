# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 작품홈
Feature: 진입

  @TC-0088
  Scenario: [TPS-106] Section Menu
    When GNB > Home 클릭 후 Popular 서브탭 진입
    And 랭킹 1위 작품 클릭
    And 우측 영역 > 작품 이미지 선택
    And 작품 이미지 선택
    Then Popular 서브탭이 노출된다.
    And Episode 1 뷰어로 진입된다.
    And 팝업 형태로 작품홈이 노출된다.
    And 작품홈으로 진입된다.
