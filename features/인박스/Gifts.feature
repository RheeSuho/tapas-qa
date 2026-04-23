# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 인박스
Feature: Gifts

  @TC-0176
  Scenario: 케이스-176
    When Get Gift Passes 영역 확인
    And 작품 정보 영역 확인
    And 작품 클릭
    And 작품 오른쪽의 [Get] 버튼 클릭
    And [Read] 버튼 클릭
    And 상단 [<] 버튼 클릭
    And Gifts 탭 새로고침 동작
    Then Gift Pass가 있는 작품이 노출된다.
    And 작품 이미지, 작품BM, {작품명}, {작품 종류}, {n} Gift Pass(es)가 노출된다.
    And 해당 작품홈으로 이동된다.
    And [Get]버튼 > [Read]로 변경된다.
    And 해당 작품홈으로 이동된다.
    And Inbox > gift 화면으로 복귀된다.
    And [Read]로 노출된 작품 목록이 제거된다.
