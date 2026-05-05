# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: More
Feature: 기타

  @TC-0182
  Scenario: [TPS-201] More 클릭 + More 영역 확인
    When GNB > More 클릭
    Then 하위 메뉴 노출된다.
    When More 영역 확인
    Then Help / Discord / Forums / Newsfeed / Contact / Merch shop 노출된다.
