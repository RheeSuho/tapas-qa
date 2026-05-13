Feature: 진입

  @TC-0124
  Scenario: [TPS-106] Popular 서브탭 작품 클릭 시 작품홈 진입
    When Comics Popular 서브탭에 접속한다
    And 첫 번째 작품을 클릭한다
    Then 작품홈으로 진입된다

  @TC-0125
  Scenario: [TPS-213] 검색 > 코믹 기다무 작품 클릭 시 작품홈 진입
    When "I Was the Real Head of the House" 검색 후 작품 클릭
    Then 작품홈으로 진입된다

  @TC-0126
  Scenario: [TPS-214] 검색 > 코믹 유료 작품 클릭 시 작품홈 진입
    When "The Eccentric Duchess" 검색 후 작품 클릭
    Then 작품홈으로 진입된다

  @TC-0127
  Scenario: [TPS-215] 검색 > 소설 기다무 작품 클릭 시 작품홈 진입
    When "The Villain's Sidekick" 검색 후 작품 클릭
    Then 작품홈으로 진입된다

  @TC-0128
  Scenario: [TPS-216] 검색 > 소설 유료 작품 클릭 시 작품홈 진입
    When "Overlord" 검색 후 작품 클릭
    Then 작품홈으로 진입된다
