# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 공통
Feature: 서비스 접속

  @TC-0001
  Scenario: [TPS-006] qa.tapas.io 도메인 진입
    When qa.tapas.io 도메인 진입
    Then 타파스 웹 정상 진입된다.
    And - 하기 구성 노출 확인
    And - 대메뉴 : Tapas 로고 + Home, Comics, Novels, Community, Mature, More
    And - 미로그인 : 검색 / 프로필 버튼
    And - 로그인 검색 / 인박스 / 라이브러리 /프로필 버튼
