# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 뷰어 (Novel)
Feature: 진입

  @TC-0126 @skip
  Scenario: [TPS-144] Home > Novels > Popular 서브탭 진입 + 첫 번째 작품 클릭
    # @skip: Popular 서브탭 첫 번째 작품이 동적 콘텐츠 (운영 상태에 따라 달라짐)
    When GNB > Home > Novels > Popular 서브탭 진입
    And 첫 번째 작품 클릭
    Then 소설 목록이 노출된다.
    And 에피소드 1화로 진입된다.
