# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 댓글
Feature: 답글

  @TC-0152
  Scenario: [TPS-159] 케이스-152
    When 댓글 [View n reply] 버튼 클릭
    And 답글 리스트 노출 확인
    And [Hide n reply] 버튼 클릭
    Then 답글 화면으로 이동된다.
    And 등록된 답글이 노출된다.
    And ㄴ 프로필 이미지, 유저이름, 등록일, 답글 내용, [like] 버튼
    And 등록된 답글이 닫힌다.

  @TC-0153
  Scenario: [TPS-160] 케이스-153
    When 댓글 [Reply] 버튼 클릭 > 답글 작성
    And [Reply] 버튼 클릭
    Then 답글 작성란이 노출된다.
    And 작성한 답글이 등록되어 노출된다.

  @TC-0154
  Scenario: [TPS-161] 내 답글 - 수정
    When 등록한 내 답글 더보기 > [Edit] 버튼 클릭
    And 텍스트 수정 후 [Edit] 버튼 클릭
    Then 팝업이 닫히고 텍스트 입력 가능 상태로 노출된다.
    And 수정한 텍스트가 댓글에 반영되어 노출된다.

  @TC-0155
  Scenario: [TPS-162] 내 답글 - 삭제
    When 등록한 내 답글 더보기 > [Delete] 버튼 클릭
    Then 팝업이 닫히고 댓글 목록에서 삭제된다.

  @TC-0156
  Scenario: [TPS-163] 케이스-156
    When 답글 [Likes] 버튼 클릭
    And 답글 [Likes] 버튼 재클릭
    Then 좋아요 버튼이 활성화되어 노출된다.
    And 좋아요 버튼이 비활성화되어 노출된다.
