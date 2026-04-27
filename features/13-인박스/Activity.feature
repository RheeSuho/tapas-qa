# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 인박스
Feature: Activity

  @TC-0180
  Scenario: [TPS-188] 수신된 내역 있는 경우 > Inbox > Activity 탭 클릭 + Settings 버튼 클릭
    Given 수신된 내역 있는 경우
    When Inbox > Activity 탭 클릭
    And Activity 타입별 클릭
    And [<] 백버튼 클릭
    And Activity 탭 우측 상단 [Mark all as read] 버튼 클릭
    And [Settings] 버튼 클릭
    And [<] 백버튼 클릭
    Then 수신된 Activity가 노출된다.
    And ㄴAll/Comments/Messages/Tapas/Series/Likes/Subs/Supportes 노출확인
    And ㄴ[Mark All Read] 버튼 노출 확인.
    And ㄴAll Activity / unread 필터 노출 확인
    And 설정된 랜딩페이지로 이동된다.
    And Activity 화면으로 복귀된다.
    And Message 채움 표시 사라진다
    And Settings로 진입된다.
    And Activity 화면으로 복귀된다.

  @TC-0181
  Scenario: [TPS-189] 수신된 내역 없는 경우 > Inbox > Activity 탭 클릭 + Supporters 필터 클릭
    Given 수신된 내역 없는 경우
    When Inbox > Activity 탭 클릭
    And Commets 필터 클릭
    And Messages 필터 클릭
    And Tapas 필터 클릭
    And Series 필터 클릭
    And Likes 필터 클릭
    And Subs 필터 클릭
    And Supporters 필터 클릭
    Then No recent activity 문구가 노출된다.
    And All 목록 없을 때 안내 문구 노출된다.
    And ㄴNo recent activity
    And ㄴComments, replies, and other updates will appear here.
    And Comments 목록없을때 안내문구 노출된다.
    And ㄴNo recent comments
    And Messages 목록없을때 안내문구 노출된다.
    And ㄴNo recent messages and posts
    And Tapas 목록없을때 안내문구 노출된다.
    And ㄴNo recent announcements
    And Series 목록없을때 안내문구 노출된다.
    And ㄴNo recent series and updates
    And Likes 목록없을때 안내문구 노출된다.
    And ㄴNo recent likes
    And Subs 목록없을때 안내문구 노출된다.
    And ㄴNo recent subscribers
    And Supporters 목록없을때 안내문구 노출된다.
    And ㄴNo recent supporters
