# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 댓글
Feature: 댓글 리스트

  @TC-0146
  Scenario: [TPS-164] 댓글 입력창 선택 + 댓글 입력창 선택 > 텍스트 입력 후 Comment 버튼 클릭
    When 댓글 입력창 선택
    Then 댓글 입력창이 노출된다.
    When 텍스트 입력
    Then 입력창에 텍스트가 입력된다.
    When [Comment] 버튼 클릭
    Then 댓글 목록이 노출된다.
    When 댓글 입력창 선택 > 텍스트 입력 후 [Comment] 버튼 클릭
    Then 댓글 목록이 노출된다.

  @TC-0147
  Scenario: [TPS-165] 등록한 내 댓글 더보기 버튼 클릭
    When 등록한 내 댓글 더보기 버튼 클릭
    Then 댓글 설정 팝업이 노출된다.

  @TC-0148
  Scenario: [TPS-166] 등록한 내 댓글 더보기 > Edit 버튼 클릭 + 텍스트 수정 후 Save 버튼 클릭
    When 등록한 내 댓글 더보기 > [Edit] 버튼 클릭
    Then 팝업이 닫히고 텍스트 입력 가능 상태로 노출된다.
    When 텍스트 수정 후 [Save] 버튼 클릭
    Then 댓글 목록이 노출된다.

  @TC-0149
  Scenario: [TPS-167] 등록한 내 댓글 더보기 > Delete 버튼 클릭
    When 등록한 내 댓글 더보기 > [Delete] 버튼 클릭
    Then 팝업이 닫히고 댓글 목록에서 삭제된다.

  @TC-0150
  Scenario: [TPS-168] 다른 유저 댓글 > 프로필 이미지 클릭
    When 다른 유저 댓글 > 프로필 이미지 클릭
    Then 유저 프로필 페이지로 이동된다.
    When 뒤로가기
    Then 소설 원고 영역이 노출된다.

  @TC-0151
  Scenario: [TPS-169] 댓글 Likes 버튼 클릭 + 댓글 Likes 버튼 재클릭
    When 댓글 [Likes] 버튼 클릭
    Then 좋아요 버튼이 활성화되어 노출된다.
    When 댓글 [Likes] 버튼 재클릭
    Then 좋아요 버튼이 비활성화되어 노출된다.
