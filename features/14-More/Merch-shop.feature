# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: More
Feature: Merch shop
  @skip
  Scenario: [TPS-199] More 클릭 + Merch Shop 클릭
    # @skip: 외부 URL 이동 — 콘텐츠 자동 검증 불가
    When GNB > More 클릭
    Then 하위 메뉴 노출된다.
    When Merch Shop 클릭
    Then Merch shop 이동된다.
