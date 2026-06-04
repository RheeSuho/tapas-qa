# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 댓글
Feature: 답글
  Scenario: [TPS-159] 댓글 View n reply 버튼 클릭 + Hide n reply 버튼 클릭
    When 댓글 [View n reply] 버튼 클릭
    Then 답글 목록이 노출된다.
    When [Hide n reply] 버튼 클릭
    Then 답글 접기 버튼이 노출된다.
  Scenario: [TPS-160] 댓글 Reply 버튼 클릭 > 답글 작성 + Reply 버튼 클릭
    When 댓글 [Reply] 버튼 클릭
    Then 댓글 입력창이 노출된다.
    When 답글 텍스트 입력 후 [Reply] 버튼 클릭
    Then 답글 목록이 노출된다.
  @skip
  Scenario: [TPS-161] 등록한 내 답글 더보기 > Edit 버튼 클릭 + 텍스트 수정 후 Edit 버튼 클릭
    When 등록한 내 답글 더보기 > [Edit] 버튼 클릭
    Then 팝업이 닫히고 텍스트 입력 가능 상태로 노출된다.
    When 텍스트 수정 후 [Edit] 버튼 클릭
    Then 댓글 목록이 노출된다.
  @skip
  Scenario: [TPS-162] 등록한 내 답글 더보기 > Delete 버튼 클릭
    When 등록한 내 답글 더보기 > [Delete] 버튼 클릭
    Then 팝업이 닫히고 댓글 목록에서 삭제된다.
  Scenario: [TPS-163] 답글 Likes 버튼 클릭 + 답글 Likes 버튼 재클릭
    When 답글 [Likes] 버튼 클릭
    Then 좋아요 버튼이 활성화되어 노출된다.
    When 답글 [Likes] 버튼 재클릭
    Then 좋아요 버튼이 비활성화되어 노출된다.
