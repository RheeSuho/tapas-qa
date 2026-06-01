Feature: 서비스 접속 (Mweb)

  @TC-M006 @smoke
  Scenario: [TPS-006] 타파스 모바일 홈 정상 진입
    When 타파스 모바일 홈에 접속한다
    Then 모바일 GNB와 홈 화면이 정상 노출된다
