# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 댓글
Feature: 댓글 리스트

  @TC-0146
  Scenario: [TPS-164] 내 댓글 - 작성
    When 댓글 입력창 선택
    And 텍스트 입력
    And [Comment] 버튼 클릭
    And 댓글 입력창 선택 > 텍스트 입력 후 [Comment] 버튼 클릭
    Then 텍스트 입력 가능 상태로 노출된다.
    And 입력창에 텍스트가 입력된다.
    And 작성한 댓글이 제일 상단 목록에 노출된다.
    And 작성한 댓글이 추가로 상단 목록에 노출된다.

  @TC-0147
  Scenario: [TPS-165] 내 댓글 - 더보기
    When 등록한 내 댓글 더보기 버튼 클릭
    Then 댓글 설정 팝업이 노출된다.
    And ㄴ Edit/Delete

  @TC-0148
  Scenario: [TPS-166] 내 댓글 - 수정
    When 등록한 내 댓글 더보기 > [Edit] 버튼 클릭
    And 텍스트 수정 후 [Save] 버튼 클릭
    Then 팝업이 닫히고 텍스트 입력 가능 상태로 노출된다.
    And 수정한 텍스트가 댓글에 반영되어 노출된다.

  @TC-0149
  Scenario: [TPS-167] 내 댓글 - 삭제
    When 등록한 내 댓글 더보기 > [Delete] 버튼 클릭
    Then 팝업이 닫히고 댓글 목록에서 삭제된다.

  @TC-0150
  Scenario: [TPS-168] 케이스-150
    When 다른 유저 댓글 > 프로필 이미지 클릭
    And 뒤로가기
    Then 유저 홈으로 이동된다.
    And 뷰어로 이동된다.

  @TC-0151
  Scenario: [TPS-169] 케이스-151
    When 댓글 [Likes] 버튼 클릭
    And 댓글 [Likes] 버튼 재클릭
    Then 좋아요 버튼이 활성화되어 노출된다.
    And 좋아요 버튼이 비활성화되어 노출된다.
