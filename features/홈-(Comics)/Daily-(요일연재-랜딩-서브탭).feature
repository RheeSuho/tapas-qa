# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 홈 (Comics)
Feature: Daily (요일연재 랜딩 서브탭)

  Background:
    When 대메뉴 > Comics 카테고리 클릭

  @TC-0038
  Scenario: [TPS-139] 케이스-38
    When {Daily} 서브탭 클릭
    And 상단 대분류 카테고리 필터 노출 확인
    And 작품 리스트 확인
    And 요일별 클릭
    Then Daily 서브탭이 활성화되며 디바이스 시간(요일)에 맞는 요일이 디폴트 선택되어 노출된다.
    And 상단 대분류 필터 영역이 노출되지 않는다.
    And Comic 작품이 연재 요일에 맞게 노출된다. Novels 작품은 노출되지 않는다.
    And 변경된 요일 탭에 맞는 Comic 작품이 노출된다.
