# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 보관함
Feature: Recent

  @TC-0161 @smoke
  Scenario: [TPS-174] Recent 클릭 + GNB 보관함 아이콘 클릭 > Recent 클릭
    When Recent 클릭
    Then Recent 메뉴 진입된다.
    When Comic 작품 열람
    Then 회차 뷰어로 진입된다.
    When 상단 [<] 백버튼 클릭
    Then Recent로 복귀한다.
    When GNB > Home > 임의의 작품 클릭
    And GNB 보관함 아이콘 클릭 > Recent 클릭
    Then Recent로 진입된다.

  @TC-0162
  Scenario: [TPS-175] Recent 작품 목록 없는 경우 > Recent 클릭
    Given Recent 작품 목록 없는 경우
    When Recent 클릭
    Then 안내문구가 노출된다.
