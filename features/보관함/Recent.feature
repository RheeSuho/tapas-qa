# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 보관함
Feature: Recent

  @TC-0161
  Scenario: [TPS-045] 케이스-161
    When Recent 클릭
    And Comic 작품 열람
    And ㄴ GNB > 보관함 아이콘 > Recent > 임의의 작품 클릭
    And 상단 [<] 백버튼 클릭
    And GNB > Home > 임의의 작품 클릭
    And GNB 보관함 아이콘 클릭 > Recent 클릭
    Then Recent 메뉴 진입된다.
    And ㄴ 현 상태 노출 작품 확인
    And 회차 뷰어 진입된다.
    And Recent로 복귀한다.
    And 회차뷰어 진입된다.
    And Recent로 진입된다.
    And ㄴRecent 화면 노출되고 열람한 작품이 상단에 추가되어 노출된다.

  @TC-0162
  Scenario: [TPS-046] Recent 작품 목록 없는 경우
    Given Recent 작품 목록 없는 경우
    When Recent 클릭
    Then 안내문구가 노출된다.
    And 목록 없을 때 안내 문구
    And -타이틀: No reading history
    And -서브 타이틀: Series you read will show up here, so you can pick up where you leave off
