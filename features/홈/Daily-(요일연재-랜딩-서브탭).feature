# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 홈
Feature: Daily (요일연재 랜딩 서브탭)

  @TC-0024
  Scenario: [TPS-195] 케이스-24
    When {Daily} 서브탭 클릭
    And 상단 대분류 카테고리 필터 노출 확인
    And 작품 리스트 확인
    And 요일별 클릭
    And 대분류 카테고리 필터 > Novels 클릭
    Then Daily 서브탭이 활성화되며 디바이스 시간(요일)에 맞는 요일이 디폴트 선택되어 노출된다.
    And Comics/Novels 대분류 필터 노출되며 Comics 탭이 디폴트로 활성화되어 있다.
    And Comic 작품이 활성화된 연재 요일에 맞게 노출된다.
    And 변경된 요일 탭에 맞는 작품이 노출된다.
    And Novels 탭이 활성화되며 작품 리스트에 현재 선택된 요일에 해당하는 Novle 작품들이 노출된다.
