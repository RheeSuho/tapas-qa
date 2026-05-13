Feature: Daily (요일연재 랜딩 서브탭)

  @TC-0080
  Scenario: [TPS-062] Daily 서브탭 클릭 + 요일별 클릭
    When GNB > mature 클릭
    And Daily 서브탭 클릭
    Then Mature 카테고리 페이지가 노출된다
    And 작품 목록이 노출된다
    When "Mon" 요일 탭 클릭
    Then 작품 목록이 노출된다

  @TC-0233
  Scenario: [TPS-NEW-21] Mature 홈 > Daily 서브탭 > Comics/Novels 전환 + 요일별 작품 노출
    When Mature Daily 서브탭에 접속한다
    Then 작품 목록이 노출된다
    When Mature Novels 필터를 클릭한다
    Then Mature Novels 작품 목록으로 전환된다
    When "Mon" 요일 탭 클릭
    Then 작품 목록이 노출된다
