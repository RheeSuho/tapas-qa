# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 뷰어 (Comic)
Feature: 뷰어엔드

  @TC-0142
  Scenario: [TPS-120] 작가의 말이 등록된 회차 > 뷰어엔드 > 작가의 말 노출 확인 + 상단 < 버튼 클릭
    # Test DATA: sparks (작가 : revel)
    Given 작가의 말이 등록된 회차
    When 뷰어엔드 > 작가의 말 노출 확인
    And 작가 이름 클릭
    And 상단 [<] 버튼 클릭
    Then 뷰어엔드 작가의 말 영역이 노출된다.
    And 작가 홈으로 이동된다.
    And 뷰어 원고 이미지와 리스트 버튼이 노출된다.

  @TC-0143 @skip
  Scenario: [TPS-121] 광고가 설정된 작품 > 뷰어엔드 > 하단 광고 노출 확인 + 광고 선택
    # Test DATA: sparks (작가 : revel)
    # @skip: 동적 콘텐츠(광고) 및 디바이스 백버튼 의존
    Given 광고가 설정된 작품
    When 뷰어엔드 > 하단 광고 노출 확인
    And 광고 선택
    And 상단 [<] 버튼 또는 디바이스 백버튼 선택
    Then 설정되어있는 광고가 노출된다.
    And 설정된 랜딩 페이지로 이동된다.
    And 뷰어 원고 이미지와 리스트 버튼이 노출된다.

  @TC-0144 @skip
  Scenario: [TPS-122] 이벤트 배너가 설정된 작품 > 뷰어엔드 > 이벤트 배너 노출 확인 + 이벤트 배너 선택
    # Test DATA: sparks (작가 : revel)
    # @skip: 동적 콘텐츠(이벤트 배너) 및 디바이스 백버튼 의존
    Given 이벤트 배너가 설정된 작품
    When 뷰어엔드 > 이벤트 배너 노출 확인
    And 이벤트 배너 선택
    And 상단 [<] 버튼 또는 디바이스 백버튼 선택
    Then 설정되어있는 이벤트 배너가 노출된다.
    And 설정된 랜딩 페이지로 이동된다.
    And 뷰어 원고 이미지와 리스트 버튼이 노출된다.

  @TC-0145
  Scenario: [TPS-123] Comments 영역 노출 확인 + See all 버튼 클릭
    When Comments 영역 노출 확인
    And [See all] 버튼 클릭
    Then Comments 영역 타이틀과 [See all] 버튼이 노출되며 좋아요 높은 순의 댓글 1개가 노출된다.
    And 뷰어 우측에 Comments 리스트가 노출된다.

  @TC-0146
  Scenario: [TPS-124] Comments 영역 > 댓글 Likes 버튼 클릭 + Likes 버튼 재클릭
    When Comments 영역 > 댓글 [Likes] 버튼 클릭
    And [Likes] 버튼 재클릭
    Then 좋아요 수가 +1 되며 좋아요 버튼이 활성화 상태로 노출된다.
    And 좋아요 수가 -1 되며 좋아요 버튼이 비활성화 상태로 노출된다.

  @TC-0147
  Scenario: [TPS-125] Comments 영역 하단 버튼 노출 확인 + 버튼 클릭
    When Comments 영역 하단 버튼 노출 확인
    And 버튼 클릭
    Then [Add a comment] 버튼이 노출된다.
    And 뷰어 우측에 Comments 리스트가 노출된다.

  @TC-0148
  Scenario: [TPS-126] Recommendation for you 영역 확인 + 리스트의 첫번째 작품 클릭
    When Recommendation for you 영역 확인
    And 리스트의 첫번째 작품 클릭
    And 디바이스/브라우저 뒤로가기 버튼 클릭
    Then 추천 작품이 노출된다.
    And 선택한 작품홈으로 이동된다.
    And 뷰어 원고 이미지와 리스트 버튼이 노출된다.
