Feature: 작품홈 공통 (Mweb)

  @smoke
  Scenario: [TPS-089] 모바일 작품홈 — 작품 정보 노출
    Given 모바일 작품홈에 진입한다
    Then 작품 정보가 노출된다
    And ㄴ 썸네일, 뱃지, 장르, 작품명, 작가명 노출
    And ㄴ 뷰카운트, 좋아요 수, 구독 수 노출

  @smoke
  Scenario: [TPS-090] 모바일 작품홈 — 하단 바 구독 버튼 노출
    Given 모바일 작품홈에 진입한다
    Then 하단 바에 구독 버튼이 노출된다

  @smoke
  Scenario: [TPS-091] 모바일 작품홈 — 읽기 버튼 클릭 시 뷰어 진입
    Given 모바일 작품홈에 진입한다
    Then 하단 바에 읽기 버튼이 노출된다
    When 읽기 버튼을 클릭한다
    Then 뷰어로 진입된다
    When 뒤로가기를 한다
    Then 작품홈으로 이동된다

  @skip
  Scenario: [TPS-094] 모바일 작품홈 — 공지사항 띠배너 클릭
    # Pre: 공지사항 띠배너 운영 중인 경우
    Given 모바일 작품홈에 진입한다
    When 공지사항 띠배너를 클릭한다
    Then 공지사항 화면으로 이동된다
    When 뒤로가기를 한다
    Then 작품홈으로 이동된다

  @smoke
  Scenario: [TPS-095] 모바일 작품홈 — Episodes, Details 탭 노출
    Given 모바일 작품홈에 진입한다
    Then Episodes 탭과 Details 탭이 노출된다
