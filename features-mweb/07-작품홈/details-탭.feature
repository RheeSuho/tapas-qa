Feature: 작품홈 Details 탭 (Mweb)

  @TC-096M @smoke
  Scenario: [TPS-096M] 모바일 작품홈 Details 탭 — 세부 정보 노출
    Given 모바일 작품홈에 진입한다
    When Details 탭을 클릭한다
    Then Creators, Description, 업데이트 일자, 발행처, 장르, 추천 작품이 노출된다

  @TC-097M @smoke
  Scenario: [TPS-097M] 모바일 작품홈 Details 탭 — 작가 클릭 시 작가홈 이동
    Given 모바일 작품홈 Details 탭에 진입한다
    When 작가 이름을 클릭한다
    Then 작가홈으로 이동된다
    And ㄴ 프로필 이미지, 작가명, 작가 작품 노출
    When 뒤로가기를 한다
    Then 작품홈 Episodes 탭으로 이동된다

  @TC-099M @smoke
  Scenario: [TPS-099M] 모바일 작품홈 Details 탭 — Fans also read 추천 작품 노출
    Given 모바일 작품홈 Details 탭에 진입한다
    Then Fans also read 섹션에 추천 작품이 노출된다
