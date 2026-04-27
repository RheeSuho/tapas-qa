# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 홈
Feature: Completed (섹션 서브탭)

  @TC-0029
  Scenario: [TPS-011] Home > Completed 서브탭 클릭
    When Home > Completed 서브탭 클릭
    Then Completed 서브탭에 설정된 빅배너가 노출된다.
    And Completed 서브탭에 설정된 카드배너가 노출된다.
    And Completed 서브탭에 설정된 섹션이 노출된다.
