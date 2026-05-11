Feature: 진입

  @TC-0088
  Scenario: [TPS-106] Popular 서브탭 작품 클릭 시 작품홈 진입
    When Comics Popular 서브탭에 접속한다
    And 첫 번째 작품을 클릭한다
    Then 작품홈으로 진입된다

  @TC-0213
  Scenario: [TPS-NEW-01] 검색 > 코믹 기다무 작품 클릭 시 작품홈 진입
    When "I Was the Real Head of the House" 검색 후 작품 클릭
    Then 작품홈으로 진입된다

  @TC-0214
  Scenario: [TPS-NEW-02] 검색 > 코믹 유료 작품 클릭 시 작품홈 진입
    When "The Eccentric Duchess" 검색 후 작품 클릭
    Then 작품홈으로 진입된다

  @TC-0215
  Scenario: [TPS-NEW-03] 검색 > 소설 기다무 작품 클릭 시 작품홈 진입
    When "The Villain's Sidekick" 검색 후 작품 클릭
    Then 작품홈으로 진입된다

  @TC-0216
  Scenario: [TPS-NEW-04] 검색 > 소설 유료 작품 클릭 시 작품홈 진입
    When "Overlord" 검색 후 작품 클릭
    Then 작품홈으로 진입된다
