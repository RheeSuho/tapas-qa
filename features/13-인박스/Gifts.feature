# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 인박스
Feature: Gifts

  Background:
    When 대메뉴 > 하단 Inbox 클릭
  Scenario: [TPS-190] Get Gift Passes 영역 확인 + Gifts 탭 새로고침 동작
    When Get Gift Passes 영역 확인
    And 작품 정보 영역 확인
    Then Gift Pass가 있는 작품이 노출된다.
    When 작품 클릭
    Then 해당 작품홈으로 이동된다.
    When 작품 오른쪽의 [Get] 버튼 클릭
    Then [Get]버튼 > [Read]로 변경된다.
    When [Read] 버튼 클릭
    Then 해당 작품홈으로 이동된다.
    When 상단 [<] 버튼 클릭
    Then Inbox > gift 화면으로 복귀된다.
    When Gifts 탭 새로고침 동작
    Then [Read]로 노출된 작품 목록이 제거된다.
