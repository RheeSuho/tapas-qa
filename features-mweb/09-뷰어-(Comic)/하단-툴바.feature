Feature: 코믹 뷰어 하단 툴바 (Mweb)

  @TC-116M @smoke
  Scenario: [TPS-116] 모바일 코믹 뷰어 — 하단 툴바 버튼 노출
    Given 모바일 코믹 뷰어에 진입한다
    Then 하단 툴바에 좋아요, 댓글, 이전화, 다음화 버튼이 노출된다

  @TC-117M @smoke
  Scenario: [TPS-117] 모바일 코믹 뷰어 — 상단 영역 및 더보기 팝업
    Given 모바일 코믹 뷰어에 진입한다
    Then 상단에 리스트 버튼, 작품명, 회차명, 더보기 버튼이 노출된다
    When 더보기 버튼을 클릭한다
    Then More 팝업이 노출된다
    When 팝업 외 영역을 클릭한다
    Then 팝업이 닫힌다

  @TC-119M @smoke
  Scenario: [TPS-119] 모바일 코믹 뷰어 더보기 — Share 버튼 클릭 시 공유 팝업 노출
    Given 모바일 코믹 뷰어에 진입한다
    When 더보기 버튼을 클릭한다
    Then 더보기 팝업이 노출된다
    When Share 버튼을 클릭한다
    Then 디바이스 공유 팝업이 노출되거나 공유 액션이 실행된다
    When 팝업 외 영역을 클릭한다
    Then 뷰어에 머무른다

  @TC-123M @smoke
  Scenario: [TPS-123] 모바일 코믹 뷰어 — Comment 버튼 클릭 시 Comments 화면 이동
    Given 모바일 코믹 뷰어에 진입한다
    When Comment 버튼을 클릭한다
    Then Comments 화면으로 이동된다
    When 뒤로가기를 한다
    Then 뷰어로 이동된다
    When 상단 리스트 버튼 또는 뒤로가기를 한다
    Then 작품홈으로 이동된다
