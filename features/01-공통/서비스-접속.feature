Feature: 서비스 접속

  @TC-0001 @smoke
  Scenario: [TPS-006] 타파스 홈 정상 진입
    When 타파스 홈에 접속한다
    Then GNB 메뉴와 홈 화면이 정상 노출된다
