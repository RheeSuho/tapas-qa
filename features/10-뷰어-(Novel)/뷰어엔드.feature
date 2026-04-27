# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 뷰어 (Novel)
Feature: 뷰어엔드

  Background:
    When 소설 뷰어 진입

  @TC-0128
  Scenario: [TPS-139] 작가의 말
    # Test DATA: soft touch
    Given 작가의 말 있는 경우
    When 뷰어 진입
    And 뷰어 엔드 > 작가의 말 영역 확인
    Then 소설 원고 노출된다.
    And 작가 이미지, 작가의 말이 노출된다.

  @TC-0129
  Scenario: [TPS-140] Comments 영역 노출 확인 + See all 버튼 클릭
    When Comments 영역 노출 확인
    And [See all] 버튼 클릭
    Then Comments 영역 타이틀과 [See all] 버튼이 노출되며 좋아요 높은 순의 댓글 1개가 노출된다.
    And 뷰어 우측에 Comments 리스트가 노출된다.

  @TC-0130
  Scenario: [TPS-141] Comments 영역 > 첫 번 째 댓글 Likes 버튼 클릭 + Likes 버튼 재클릭
    When Comments 영역 > 첫 번 째 댓글 [Likes] 버튼 클릭
    And [Likes] 버튼 재클릭
    Then 좋아요 수가 +1 되며 좋아요 버튼이 활성화 상태로 노출된다.
    And 좋아요 수가 -1 되며 좋아요 버튼이 비활성화 상태로 노출된다.

  @TC-0131
  Scenario: [TPS-142] Recommendation for you 영역 확인
    When Recommendation for you 영역 확인
    Then 추천 작품이 노출된다.
    And ㄴ 작품 썸네일, 뱃지, 작품명, 카테고리, 장르

  @TC-0132
  Scenario: [TPS-143] Recommendation for you 영역 + 상단 < 버튼 클릭
    When Recommendation for you 영역
    And 추천 작품 선택
    And 상단 [<] 버튼 클릭
    And 상단 [<] 버튼 클릭
    Then 추천 작품 리스트이 노출된다.
    And 선택한 작품홈으로 이동된다.
    And 뷰어로 이동된다.
    And 직픔홈으로 이동된다.
