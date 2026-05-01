# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 뷰어 (Novel)
Feature: 하단 툴바

  Background:
    When 소설 뷰어 진입

  @TC-0133
  Scenario: [TPS-146] 소설 작품 진입 + 하단 영역 확인
    When 소설 작품 진입
    And 하단 영역 확인
    Then 소설 원고 영역이 노출된다.
    And Like, List, Comment 버튼이 노출된다.

  @TC-0134
  Scenario: [TPS-147] 소설 뷰어 진입 + 우하단 List 버튼 클릭
    When 소설 뷰어 진입
    And 우하단 [List] 버튼 클릭
    Then 소설 원고 영역이 노출된다.
    And 우측 회차 패널이 닫힌다.

  @TC-0135
  Scenario: [TPS-148] PCW only > 리스트 버튼 클릭 + 리스트 버튼 재클릭
    Given PCW only
    When [리스트] 버튼 클릭
    And [리스트] 버튼 재클릭
    Then 뷰어 우측 작품홈 영역이 미노출로 전환된다
    And 뷰어 우측 작품홈 영역이 노출된다.

  @TC-0136 @skip
  Scenario: [TPS-149] PCW only > 전체화면 버튼 클릭 + 전체화면 버튼 재클릭
    # @skip: Playwright headless에서 Fullscreen API 작동 안 함
    Given PCW only
    When [전체화면] 버튼 클릭
    And [전체화면] 버튼 재클릭
    Then 뷰어가 전체화면으로 전환된다.
    And 전체화면 모드가 종료된다.

  @TC-0137
  Scenario: [TPS-150] AA 버튼 클릭 + 폰트 크기 - 버튼 클릭
    When [AA] 버튼 클릭
    And 폰트 크기 [+] 버튼 클릭
    And 폰트 크기 [-] 버튼 클릭
    Then Style 팝업이 노출된다.
    And Style 팝업이 유지된다.

  @TC-0138
  Scenario: [TPS-151] AA 버튼 클릭 + 행 간격 - 버튼 클릭
    When [AA] 버튼 클릭
    And 행 간격 [+] 버튼 클릭
    And 행 간격 [-] 버튼 클릭
    Then Style 팝업이 노출된다.
    And Style 팝업이 유지된다.

  @TC-0139
  Scenario: [TPS-152] AA 버튼 클릭 + 팝업 이외 영역 클릭
    When [AA] 버튼 클릭
    And 뷰어 화면 모드 클릭
    And 팝업 이외 영역 클릭
    Then Style 팝업이 노출된다.
    And 소설 원고 영역이 노출된다.

  @TC-0140
  Scenario: [TPS-153] 좋아요 버튼 선택 + 좋아요 버튼 재선택
    When [좋아요] 버튼 선택
    And [좋아요] 버튼 재선택
    Then 좋아요 버튼이 활성화 처리되며 카운트가 증가한다.
    And 좋아요 버튼 비활성화 처리되며 카운트가 감소한다

  @TC-0141
  Scenario: [TPS-154] 하단 툴바 확인 + 팝업 외 영역 클릭
    When 하단 툴바 확인
    And 좌하단 More 버튼 클릭
    And 팝업 외 영역 클릭
    Then Like, List, Comment 버튼이 노출된다.
    And 뷰어 화면 위로 More 팝업이 노출된다.
    And 팝업이 닫힌다.

  @TC-0142 @skip
  Scenario: [TPS-155] 첫 번째 작가 서포트 활성화 > Support 버튼 클릭 + 우상단 x 버튼 클릭
    # @skip: 작가 Support 버튼 유무가 작가 설정에 의존
    Given 첫 번째 작가 서포트 활성화
    When [Support] 버튼 클릭
    And 우상단 [x] 버튼 클릭
    Then 작가 Support 팝업이 노출된다.
    And 뷰어로 이동된다.

  @TC-0143
  Scenario: [TPS-156] 이전 회차 이동 버튼 클릭 + 다음 회차 이동 버튼 클릭
    When 이전 회차 이동 버튼 클릭
    And 다음 회차 이동 버튼 클릭
    Then 이전 회차로 이동된다.
    And 원래 회차로 돌아온다.

  @TC-0144
  Scenario: [TPS-157] Comment 버튼 클릭
    When [Comment] 버튼 클릭
    Then 우측에 댓글 리스트 화면이 노출된다.
