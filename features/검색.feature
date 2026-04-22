# 기존 tests/search.spec.ts를 BDD 형식으로 포팅한 버전
Feature: 검색

  @TC-SEARCH-0001
  Scenario: 키워드 검색으로 작품 진입 후 뒤로가기로 홈 복귀
    Given 홈에 접속한다
    When 검색을 연다
    And "Olympus"로 검색한다
    Then 검색 결과가 보인다
    And 결과 탭들이 모두 보인다
    When "The Edge of Olympus" 작품을 클릭한다
    Then 작품 상세 페이지로 이동한다
    When 뒤로가기를 누른다
    Then 검색 결과로 돌아온다
    When 뒤로가기를 다시 누른다
    Then 홈으로 돌아온다