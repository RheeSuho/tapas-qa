Feature: 댓글 리스트 (Mweb)

  @TC-146M @smoke
  Scenario: [TPS-146] 모바일 댓글 — 댓글 입력 시 가상 키보드 노출 및 댓글 등록
    Given 모바일 댓글 화면에 진입한다
    When 댓글 입력창을 선택한다
    Then 가상 키보드가 노출되며 텍스트 입력 가능 상태다
    When 댓글 텍스트를 입력하고 Comment 버튼을 클릭한다
    Then 작성한 댓글이 상단 목록에 노출된다

  @TC-150M @smoke
  Scenario: [TPS-150] 모바일 댓글 — 유저 프로필 클릭 시 유저홈 이동
    Given 모바일 댓글 화면에 진입한다
    When 다른 유저의 프로필 이미지를 클릭한다
    Then 유저홈으로 이동된다
    When 상단 뒤로가기 버튼을 클릭한다
    Then 댓글 화면으로 이동된다
