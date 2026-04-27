# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 작품홈
Feature: details 탭

  Background:
    Given 작품홈 진입

  @TC-0096
  Scenario: [TPS-095] 케이스-96
    When Details 영역 확인
    Then Creaotrs, Details, 업데이트 일자, 발행처, 추천 작품이 노출된다.

  @TC-0097
  Scenario: [TPS-096] 작가홈
    When 작가 클릭
    And 작가 홈 확인
    And 뒤로가기 [<] 버튼 클릭
    Then 작가 홈으로 이동된다.
    And 프로필 이미지, 작가명, 작가 작품이 노출된다.
    And 작품홈으로 이동된다.

  @TC-0098
  Scenario: [TPS-097] 장르
    When 작품 정보 영역 {장르값} 클릭
    And - MWeb) {장르값} 클릭
    And 장르 랜딩 리스트 확인
    And {장르값} 선택 후 [Comfirm] 버튼 클릭
    And {BM값} 선택 후 [Comfirm] 버튼 클릭
    And {정렬값} 선택 후 [Comfirm] 버튼 클릭
    And 뒤로가기 [<] 버튼 클릭
    Then 장르 랜딩 리스트로 이동된다.
    And 타이틀 문구, 장르값, 필터/정렬 버튼, 작품리스트가 노출된다.
    And {장르값} 으로 리스트 갱신된다.
    And {BM값} 으로 리스트 갱신된다.
    And {정렬값}으로 리스트 갱신된다.
    And 작품홈으로 이동된다.
    And - MWeb) 작품홈 Episodes 탭으로 이동된다.

  @TC-0099
  Scenario: [TPS-098] 추천 작품
    When 추천 작품 영역 확인
    Then Fans also read 문구 및 추천 작품이 노출된다.
