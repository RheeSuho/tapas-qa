# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 홈
Feature: Popular (랭킹 랜딩 서브탭)

  @TC-0027
  Scenario: [TPS-015] Popular 서브탭 클릭 + 대분류 카테고리 필터 > Novels 클릭
    When {Popular} 서브탭 클릭
    And exc) 서브탭 영역 가려진 경우 노출될 때까지 스크롤 후 클릭
    And 상단 대분류 카테고리 필터 노출 확인
    And 작품 리스트 확인
    And 대분류 카테고리 필터 > Novels 클릭
    Then Popular 서브탭이 활성화된다.
    And Comics/Novels 대분류 필터 노출되며 Comics 탭이 디폴트로 활성화되어 있다.
    And Comic 작품이 300위까지 노출된다.
    And Novels 탭이 활성화되며 Novel에 해당하는 작품으로 노출된다.
