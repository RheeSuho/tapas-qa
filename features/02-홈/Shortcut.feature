# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 홈
Feature: Shortcut

  @TC-0011 @smoke
  Scenario: [TPS-016] 로그인 상태 > 타파스 홈 진입 + 숏컷 영역 노출 확인
    Given 로그인 상태
    When 타파스 홈 진입
    And 숏컷 영역 노출 확인
    Then 홈화면의 첫 번째 서브탭으로 진입된다.
    And 숏컷 영역에 Library, Inbox, Publish, 검색 아이콘 노출된다.
    And (작가인 경우 Dashboard 노출)

  @TC-0012
  Scenario: [TPS-017] 미로그인 상태 > 타파스 홈 진입 + 숏컷 영역 노출 확인
    Given 미로그인 상태
    When 타파스 홈 진입
    And 숏컷 영역 노출 확인
    Then 홈화면의 첫 번째 서브탭으로 진입된다.
    And 숏컷 영역에
    And [PCW] 검색 필드, 로그인, Publish 버튼이 노출된다.
    And [MW] 검색, 프로필 버튼이 노출된다.

  @TC-0013 @smoke
  Scenario: [TPS-018] 검색 필드 클릭 + 작품 클릭
    When 검색 필드 클릭
    And 검색어 입력란 > {키워드} 입력
    And 검색 결과 화면 확인
    And 작품 클릭
    And 작품홈 > 상단네비바 [<] 또는 단말 백버튼 클릭
    And 검색 결과 화면 > [Cancel] 버튼 또는 단말 백버튼 클릭
    Then 검색 화면으로 이동된다.
    And 검색 결과 화면이 노출된다.
    And ㄴ Comics/Novels/People/Tags 탭 노출
    And {작품명} 작품이 조회된다.
    And {작품명} 작품홈으로 이동된다.
    And 검색 결과 화면으로 돌아온다.
    And 홈화면으로 돌아온다.
