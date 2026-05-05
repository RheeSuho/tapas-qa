# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 인박스
Feature: Activity

  @TC-0180 @skip
  Scenario: [TPS-188] 수신된 내역 있는 경우 > Inbox > Activity 탭 클릭 + Settings 버튼 클릭
    Given 수신된 내역 있는 경우
    When Inbox > Activity 탭 클릭
    Then 수신된 Activity가 노출된다.
    When Activity 타입별 클릭
    Then 설정된 랜딩페이지로 이동된다.
    When [<] 백버튼 클릭
    Then Activity 화면으로 복귀된다.
    When Activity 탭 우측 상단 [Mark all as read] 버튼 클릭
    Then Message 채움 표시 사라진다
    When [Settings] 버튼 클릭
    Then Settings로 진입된다.
    When [<] 백버튼 클릭
    Then Activity 화면으로 복귀된다.

  @TC-0181
  Scenario: [TPS-189] 수신된 내역 없는 경우 > Inbox > Activity 탭 클릭 + Supporters 필터 클릭
    Given 수신된 내역 없는 경우
    When Inbox > Activity 탭 클릭
    Then No recent activity 문구가 노출된다.
    When Commets 필터 클릭
    Then Comments 목록없을때 안내문구 노출된다.
    When Messages 필터 클릭
    Then Messages 목록없을때 안내문구 노출된다.
    When Tapas 필터 클릭
    Then Tapas 목록없을때 안내문구 노출된다.
    When Series 필터 클릭
    Then Series 목록없을때 안내문구 노출된다.
    When Likes 필터 클릭
    Then Likes 목록없을때 안내문구 노출된다.
    When Subs 필터 클릭
    Then Subs 목록없을때 안내문구 노출된다.
    When Supporters 필터 클릭
    Then Supporters 목록없을때 안내문구 노출된다.
