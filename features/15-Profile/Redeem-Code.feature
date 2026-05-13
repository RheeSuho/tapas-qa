# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: Profile
Feature: Redeem Code

  @TC-0230 @skip
  Scenario: [TPS-205] 리딤코드 정상 입력 > Profile 클릭 + Redeem 버튼 클릭
    Given 리딤코드 정상 입력
    When GNB > Profile 클릭
    And Redeem Code 클릭
    Then 하위 메뉴 노출된다.
    And Redeem Code 타이틀, 입력 필드, 안내문구, Contact CS, Redeem 버튼이 노출된다.
    When 입력 필드 클릭 > 리딤코드 입력
    Then 코드 입력이 가능하다
    When Redeem 버튼 클릭
    Then 입력한 리딤코드가 등록되며 리딤코드 화면은 유지된다.
    When 뒤로가기 [<] 버튼 클릭
    Then 홈 화면으로 이동된다.

  @TC-0231
  Scenario: [TPS-206] 리딤코드 오입력 > Profile 클릭 + Redeem 버튼 클릭
    Given 리딤코드 오입력
    When GNB > Profile 클릭
    And Redeem Code 클릭
    Then 하위 메뉴 노출된다.
    And Redeem Code 타이틀, 입력 필드, 안내문구, Contact CS, Redeem 버튼이 노출된다.
    When 입력 필드 클릭 > 리딤코드 입력
    Then 코드 입력이 가능하다
    When Redeem 버튼 클릭
    Then Invalid code 토스트 팝업이 노출된다.
    When 뒤로가기 [<] 버튼 클릭
    Then 홈 화면으로 이동된다.

  @TC-0232
  Scenario: [TPS-207] Profile 클릭 + 닫기 버튼 클릭
    When GNB > Profile 클릭
    And Redeem Code 클릭
    Then 하위 메뉴 노출된다.
    And Redeem Code 타이틀, 입력 필드, 안내문구, Contact CS, Redeem 버튼이 노출된다.
    When [Contact CS] 텍스트 버튼 클릭
    Then 디바이스 메일 앱이 열린다.
    When [닫기] 버튼 클릭
    Then 메일 앱이 닫히며 리딤코드 화면 유지된다.
    When 뒤로가기 [<] 버튼 클릭
    Then 홈 화면으로 이동된다.
