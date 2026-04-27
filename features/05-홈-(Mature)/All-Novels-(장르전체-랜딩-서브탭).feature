# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 홈 (Mature)
Feature: All Novels (장르전체 랜딩 서브탭)

  Background:
    When GNB > mature 클릭

  @TC-0085
  Scenario: [TPS-059] QA환경 : Novels 탭
    # Test DATA: QA환경 : Novels 탭
    When All Novels 서브탭 클릭
    And 정렬/필터 노출 확인
    And 작품 리스트 확인
    Then {All Novels} 서브탭이 활성화된다.
    And 상단에 장르 선택 필터와 정렬 옵션 변경 영역이 노출된다.
    And ㄴ 디폴트 : 장르 - ALL, 정렬 - Popular
    And Mature - Novel 작품의 모든 장르에 해당하는 작품이 노출된다.

  @TC-0086
  Scenario: [TPS-060] 케이스-86
    When 장르 선택 필터 버튼 클릭
    And 장르 선택 팝업 > {장르명} 선택 후 Confirm 버튼 클릭
    Then 장르 선택 팝업이 노출된다.
    And 팝업이 닫히고 작품 리스트가 갱신되며 필터된 장르의 작품만 노출된다.

  @TC-0087
  Scenario: [TPS-061] 케이스-87
    When 정렬 옵션 변경 버튼 클릭
    And 정렬 선택 팝업 > {정렬값} 선택 후 Confirm 버튼 클릭
    Then 정렬 선택 팝업이 노출된다.
    And 팝업이 닫히고 작품 리스트가 갱신되며 선택한 정렬 순으로 작품 리스트가 노출된다.
