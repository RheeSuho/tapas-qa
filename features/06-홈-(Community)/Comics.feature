Feature: Comics (장르전체 랜딩 서브탭)

  Background:
    When GNB > Community 클릭
    And "Comics" 서브탭 클릭

  @TC-0088
  Scenario: [TPS-074] Comics 서브탭 클릭 + 정렬/필터 노출 확인
    Then Community 카테고리 페이지가 노출된다
    And 장르 필터와 정렬 옵션이 노출된다
    And 작품 목록이 노출된다

  @TC-0089
  Scenario: [TPS-075] 장르 선택 필터 - Romance
    When 장르 선택 필터 버튼 클릭
    And "Romance" 장르를 선택한다
    Then 작품 목록이 노출된다

  @TC-0090
  Scenario Outline: [TPS-076] 정렬 옵션 변경 - <정렬값>
    When 정렬 옵션 변경 버튼 클릭
    And "<정렬값>" 정렬을 선택한다
    Then 작품 목록이 노출된다

    Examples:
      | 정렬값         |
      | Popular        |
      | Newest episode |
      | Newest series  |
