Feature: Completed

  @TC-0238
  Scenario: [TPS-238] Mature 홈 > Completed 서브탭 > 작품 목록 + 정렬 옵션 노출
    When Mature Completed 서브탭에 접속한다
    Then 작품 목록이 노출된다
    And 장르 필터와 정렬 옵션이 노출된다
