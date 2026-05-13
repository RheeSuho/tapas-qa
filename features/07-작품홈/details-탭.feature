Feature: details 탭

  Background:
    Given 작품홈 진입

  @TC-0113
  Scenario: [TPS-095] Details 영역 확인
    Then Details 영역이 노출된다

  @TC-0114
  Scenario: [TPS-096] 작가 클릭 시 작가 홈 이동
    When 작가 클릭
    Then 작가 홈으로 이동된다

  @TC-0115
  Scenario: [TPS-097] 장르 클릭 시 장르 랜딩 이동
    When 작품 정보 영역 {장르값} 클릭
    Then 장르 랜딩 리스트로 이동된다

  @TC-0116
  Scenario: [TPS-098] Fans also read 추천 작품 노출
    Then Fans also read 추천 작품이 노출된다
