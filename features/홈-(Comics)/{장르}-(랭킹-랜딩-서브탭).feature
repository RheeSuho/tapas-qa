# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 홈 (Comics)
Feature: {장르} (랭킹 랜딩 서브탭)

  Background:
    When 대메뉴 > Comics 카테고리 클릭

  @TC-0042
  Scenario: [TPS-147] 케이스-42
    When {장르명} 서브탭 클릭
    And exc) 서브탭 영역 가려진 경우 노출될 때까지 스크롤 후 클릭
    And 상단 대분류 카테고리 필터 노출 확인
    And 작품 리스트 확인
    Then {장르명} 서브탭이 활성화된다.
    And 상단 대분류 필터 영역이 노출되지 않는다.
    And 해당 장르의 Comic 작품이 300위까지 노출된다.
