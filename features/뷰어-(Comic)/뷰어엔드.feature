# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 뷰어 (Comic)
Feature: 뷰어엔드

  @TC-0109
  Scenario: [TPS-059] 작가의 말이 등록된 회차
    # Test DATA: sparks (작가 : revel)
    Given 작가의 말이 등록된 회차
    When 뷰어엔드 > 작가의 말 노출 확인
    And 작가 이름 클릭
    And 상단 [<] 버튼 클릭
    Then 원고 하단에 작가의 말이 노출된다.
    And 작가 홈으로 이동된다.
    And 뷰어로 이동된다.

  @TC-0110
  Scenario: [TPS-060] 광고가 설정된 작품
    # Test DATA: sparks (작가 : revel)
    Given 광고가 설정된 작품
    When 뷰어엔드 > 하단 광고 노출 확인
    And 광고 선택
    And 상단 [<] 버튼 또는 디바이스 백버튼 선택
    Then 설정되어있는 광고가 노출된다.
    And 설정된 랜딩 페이지로 이동된다.
    And 뷰어로 이동된다.

  @TC-0111
  Scenario: [TPS-061] 이벤트 배너가 설정된 작품
    # Test DATA: sparks (작가 : revel)
    Given 이벤트 배너가 설정된 작품
    When 뷰어엔드 > 이벤트 배너 노출 확인
    And 이벤트 배너 선택
    And 상단 [<] 버튼 또는 디바이스 백버튼 선택
    Then 설정되어있는 이벤트 배너가 노출된다.
    And 설정된 랜딩 페이지로 이동된다.
    And 뷰어로 이동된다.

  @TC-0112
  Scenario: [TPS-062] 케이스-112
    When Comments 영역 노출 확인
    And [See all] 버튼 클릭
    Then Comments 영역 타이틀과 [See all] 버튼이 노출되며 좋아요 높은 순의 댓글 1개가 노출된다.
    And 뷰어 우측에 Comments 리스트가 노출된다.

  @TC-0113
  Scenario: [TPS-063] 케이스-113
    When Comments 영역 > 댓글 [Likes] 버튼 클릭
    And [Likes] 버튼 재클릭
    Then 좋아요 수가 +1 되며 좋아요 버튼이 활성화 상태로 노출된다.
    And 좋아요 수가 -1 되며 좋아요 버튼이 비활성화 상태로 노출된다.

  @TC-0114
  Scenario: [TPS-064] 케이스-114
    When Comments 영역 하단 버튼 노출 확인
    And 버튼 클릭
    Then [Add a comment] 버튼이 노출된다.
    And 뷰어 우측에 Comments 리스트가 노출된다.

  @TC-0115
  Scenario: [TPS-065] 케이스-115
    When Recommendation for you 영역 확인
    And 가로 스크롤 동작
    And 리스트의 첫번째 작품 클릭
    And 디바이스/브라우저 뒤로가기 버튼 클릭
    Then 추천 작품이 노출된다.
    And ㄴ 작품 썸네일, 뱃지, 작품명, 카테고리, 장르, 좋아요 수
    And 6개의 작품과 랜덤 추천 버튼이 노출된다.
    And 선택한 작품홈으로 이동된다.
    And 뷰어로 이동된다.
