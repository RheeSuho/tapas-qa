# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 보관함
Feature: Updated

  @TC-0158
  Scenario: [TPS-181] 작품 클릭 + 임의의 작품 클릭
    When 작품 클릭
    And [<-] 백버튼 클릭
    And Comics 필터 클릭
    And 임의의 작품 클릭
    And [<-] 백버튼 클릭
    And Novels 필터 클릭
    And 임의의 작품 클릭
    And [<-] 백버튼 클릭
    Then Updated 메뉴가 노출된다.
    And ㄴAll 필터가 디폴트로 노출된다.
    And ㄴAll/Comics/Novels 필터, 작품 목록이 노출된다.
    And 작품홈 으로 진입 된다.
    And Updated로 복귀한다.
    And Comic 작품목록이 노출된다.
    And Comic 작품홈으로 진입된다.
    And Updated 로 복귀한다.
    And ㄴComics 필터 선택되어 노출된다.
    And Novel 작품목록이 노출된다.
    And Novel 작품홈으로 진입된다.
    And Updated로 복귀한다.
    And ㄴNovel 필터 선택되어 노출된다.

  @TC-0159
  Scenario: [TPS-182] PCW + 필터 > All 버튼 클릭
    When [PCW]
    And 탭 하단 [Comics] 버튼 클릭
    And [Novels] 버튼 클릭
    And [All] 버튼 클릭
    And [MW]
    And 우상단 필터 > [Comics] 버튼 클릭
    And 필터 > [Novels] 버튼 클릭
    And 필터 > [All] 버튼 클릭
    Then Comics 작품리스트만 노출된다.
    And Novels 작품리스트만 노출된다.
    And 모든 작품 리스트가 노출된다.

  @TC-0160
  Scenario: [TPS-183] Updated 작품 목록 없는 경우 > PCW + 필터 > All 버튼 클릭
    Given Updated 작품 목록 없는 경우
    When [PCW]
    And 탭 하단 [Comics] 버튼 클릭
    And [Novels] 버튼 클릭
    And [All] 버튼 클릭
    And [MW]
    And 우상단 필터 > [Comics] 버튼 클릭
    And 필터 > [Novels] 버튼 클릭
    And 필터 > [All] 버튼 클릭
    Then 안내문구가 노출된다.
    And 안내문구가 노출된다.
    And 안내문구가 노출된다.
    And 목록 없을때 안내 문구
    And -타이틀: No updated series
    And -서브타이틀Subscribed series will appear here whenever new episodes are added.
