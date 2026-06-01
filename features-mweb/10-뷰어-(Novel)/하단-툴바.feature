Feature: 소설 뷰어 하단 툴바 (Mweb)

  @TC-133M @smoke
  Scenario: [TPS-133] 모바일 소설 뷰어 — 상단/하단 툴바 버튼 노출
    Given 모바일 소설 뷰어에 진입한다
    Then 상단에 회차 리스트 버튼, 작품명, 회차명, 소설 옵션, More 버튼이 노출된다
    And 하단 툴바에 좋아요, 댓글, 이전화, 다음화 버튼이 노출된다

  @TC-134M @smoke
  Scenario: [TPS-134] 모바일 소설 뷰어 — List 버튼 클릭 시 작품홈 회차 리스트로 이동
    Given 모바일 소설 뷰어에 진입한다
    When 좌상단 List 버튼을 클릭한다
    Then 작품홈 회차 리스트로 이동된다

  @TC-141M @smoke
  Scenario: [TPS-141] 모바일 소설 뷰어 — 우상단 More 팝업 열고 닫기
    Given 모바일 소설 뷰어에 진입한다
    Then 상단에 회차 리스트 버튼, 작품명, 회차명, 소설 옵션, More 버튼이 노출된다
    When More 버튼을 클릭한다
    Then More 팝업이 노출된다
    When 팝업 외 영역을 클릭한다
    Then 팝업이 닫힌다

  @TC-142M @smoke
  Scenario: [TPS-142] 모바일 소설 뷰어 — Support 버튼 클릭 시 Support 화면 이동
    Given 모바일 소설 뷰어에 진입한다
    When Support 버튼을 클릭한다
    Then 작가 Support 화면으로 이동된다
    When 뒤로가기를 한다
    Then 뷰어로 이동된다

  @TC-144M @smoke
  Scenario: [TPS-144] 모바일 소설 뷰어 — Comment 버튼 클릭 시 댓글 화면 이동
    Given 모바일 소설 뷰어에 진입한다
    When Comment 버튼을 클릭한다
    Then 댓글 화면으로 이동된다
