# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 홈 (Mature)
Feature: Popular (랭킹 랜딩 서브탭)

  @TC-0081
  Scenario: 케이스-81
    When {Popular} 서브탭 클릭
    And exc) 서브탭 영역 가려진 경우 노출될 때까지 스크롤 후 클릭
    And 상단 대분류 카테고리 필터 노출 확인
    And 작품 리스트 확인
    Then Popular 서브탭이 활성화된다.
    And 2-1. Comics/Novels 모두 설정된 경우, 대분류 필터가 노출된다.
    And 2-2. Comics/Novels 중 하나만 설정된 경우, 대분류 필터 노출되지 않는다.
    And ㄴ SS 서브탭 설정값에 따라 다름
    And Mature 작품이 최대 300위까지 노출된다.
