Feature: 인박스 Activity (Mweb)

  @smoke
  Scenario: [TPS-180] 모바일 인박스 Activity 탭 — 필터 및 내역 노출
    # Pre: 수신된 Activity 내역 있는 경우
    Given 모바일 인박스 Activity로 이동한다
    Then 수신된 Activity 목록이 노출된다
    And ㄴ All, Comments, Messages, Announcements, Series, Likes, Subscribers, Supporters 필터 노출
