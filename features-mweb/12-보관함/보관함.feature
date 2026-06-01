Feature: 보관함 (Mweb)

  @TC-161M @smoke
  Scenario: [TPS-161] 모바일 보관함 Recent — 작품 클릭 시 뷰어 진입 후 Recent 복귀
    Given 모바일 보관함 Recent로 이동한다
    Then Recent 메뉴로 진입된다
    When Recent에서 작품을 클릭한다
    Then 뷰어로 진입된다
    When 뒤로가기를 한다
    Then Recent로 복귀된다

  @TC-164M @smoke
  Scenario: [TPS-164] 모바일 보관함 Subscribed — 작품 클릭 시 작품홈 진입
    Given 모바일 보관함 Subscribed로 이동한다
    When 작품을 클릭한다
    Then 작품홈으로 진입된다
    When 뒤로가기를 한다
    Then Subscribed 화면으로 복귀된다

  @TC-169M @smoke
  Scenario: [TPS-169] 모바일 보관함 Free episodes — 작품 클릭 시 작품홈 진입
    Given 모바일 보관함 Free episodes로 이동한다
    When 작품을 클릭한다
    Then 작품홈으로 진입된다
    When 뒤로가기를 한다
    Then Free episodes 화면으로 복귀된다

  @TC-172M @smoke
  Scenario: [TPS-172] 모바일 보관함 Wait until Free — 작품 클릭 시 작품홈 진입
    Given 모바일 보관함 Wait until Free로 이동한다
    Then Wait until Free 탭으로 진입된다
    When 작품을 클릭한다
    Then 작품홈으로 진입된다
    When 뒤로가기를 한다
    Then Wait until Free 화면으로 복귀된다
