# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 홈 (Comics)
Feature: All Comics (장르전체 랜딩 서브탭)

  Background:
    When 대메뉴 > Comics 카테고리 클릭

  @TC-0039
  Scenario: [TPS-136] 케이스-39
    When {All Comics} 서브탭 클릭
    And 정렬/필터 노출 확인
    And 작품 리스트 확인
    Then {All Comics} 서브탭이 활성화된다.
    And 상단에 장르 선택 필터와 정렬 옵션 변경 영역이 노출된다.
    And ㄴ 디폴트 : 장르 - ALL, 정렬 - Popular
    And Comic 작품의 모든 장르에 해당하는 작품이 노출된다.

  @TC-0040
  Scenario: [TPS-137] 케이스-40
    When 장르 선택 필터 버튼 클릭
    And 장르 선택 팝업 > {장르명} 선택 후 Confirm 버튼 클릭
    Then 장르 선택 팝업이 노출된다.
    And 팝업이 닫히고 작품 리스트가 갱신되며 필터된 장르의 작품만 노출된다.

  @TC-0041
  Scenario: [TPS-138] 케이스-41
    When 정렬 옵션 변경 버튼 클릭
    And 정렬 선택 팝업 > {정렬값} 선택 후 Confirm 버튼 클릭
    Then 정렬 선택 팝업이 노출된다.
    And 팝업이 닫히고 작품 리스트가 갱신되며 선택한 정렬 순으로 작품 리스트가 노출된다.
