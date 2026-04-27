# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 뷰어 (Comic)
Feature: 하단 툴바

  @TC-0116 @smoke
  Scenario: [TPS-129] Bottom 영역 노출 확인
    When Bottom 영역 노출 확인
    Then 회차 썸네일, 회차명, 뷰카운트, 좋아요 수, 댓글 수, [더보기], [좋아요], [리스트], [댓글],[이전회차],[다음회차],[전체화면] 버튼이 노출된다.

  @TC-0117
  Scenario: [TPS-130] 하단 더보기 버튼 클릭 + More 팝업 > 팝업 외 영역 클릭
    When 하단 [더보기] 버튼 클릭
    And More 팝업 > 팝업 외 영역 클릭
    Then 뷰어 화면 위로 More 팝업이 노출된다.
    And 팝업이 닫힌다.

  @TC-0118
  Scenario: [TPS-131] 구독 상태 > 더보기 버튼 클릭 + 더보기 버튼 재클릭 > Subscribe 버튼 클릭
    Given 구독 상태
    When [더보기] 버튼 클릭
    And [Unsubscribe] 버튼 클릭
    And [더보기] 버튼 재클릭 > [Subscribe] 버튼 클릭
    Then 뷰어 더보기 팝업이 노출된다.
    And 토스트가 노출되며 팝업이 닫힌다.
    And ㄴ 토스트: Unsubscribed
    And 토스트가 노출되며 팝업이 닫힌다.
    And ㄴ 토스트: Subscribed

  @TC-0119
  Scenario: [TPS-132] 더보기 버튼 클릭 + Share to Facebook or Share to Twiiter 버튼 클릭
    When [더보기] 버튼 클릭
    And [Share to Facebook] or [Share to Twiiter] 버튼 클릭
    Then 뷰어 더보기 팝업이 노출된다.
    And 새탭으로 SNS 페이지로 진입된다.

  @TC-0120
  Scenario: [TPS-133] 더보기 버튼 클릭 + Cancel 클릭
    When [더보기] 버튼 클릭
    And [Report] 버튼 클릭
    And [Cancel] 클릭
    Then 뷰어 더보기 팝업이 노출된다.
    And 신고 항목 선택 팝업이 노출된다.
    And 팝업이 닫힌다.

  @TC-0121
  Scenario: [TPS-134] Like 버튼 클릭 + Like 버튼 재클릭
    When [Like] 버튼 클릭
    And [Like] 버튼 재클릭
    Then 토스트가 노출되며 좋아요 버튼이 활성화되어 노출된다.
    And ㄴ 토스트: Liked
    And 토스트가 노출되며 좋아요 버튼이 비활성화되어 노출된다.
    And ㄴ 토스트: Unliked

  @TC-0122
  Scenario: [TPS-135] PCW only > 리스트 버튼 클릭 + 리스트 버튼 재클릭
    Given PCW only
    When [리스트] 버튼 클릭
    And [리스트] 버튼 재클릭
    Then 뷰어 우측 작품홈 영역이 미노출로 전환된다
    And 뷰어 우측 작품홈 영역이 노출된다.

  @TC-0123
  Scenario: [TPS-136] Comment 버튼 클릭 + Comment 버튼 재클릭
    When [Comment] 버튼 클릭
    And [Comment] 버튼 재클릭
    Then 뷰어 우측에 Comments 리스트가 노출된다.
    And 뷰어 우측에 Comments 리스트가 미노출된다.

  @TC-0124
  Scenario: [TPS-137] 다음회차 이동 버튼 클릭 + 이전회차 이동 버튼 클릭
    When 다음회차 이동 버튼 클릭
    And 이전회차 이동 버튼 클릭
    Then 다음회차 뷰어로 즉시 진입된다.
    And 이전회차로 즉시 진입된다.

  @TC-0125
  Scenario: [TPS-138] PCW only > 전체화면 버튼 클릭 + 전체화면 버튼 재클릭
    Given PCW only
    When [전체화면] 버튼 클릭
    And [전체화면] 버튼 재클릭
    Then 뷰어가 전체화면으로 전환된다.
    And 전체화면 모드가 종료된다.
