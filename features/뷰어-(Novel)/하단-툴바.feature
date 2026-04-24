# 자동 생성됨 - 원본: Tapas Smoke TC CSV
# 1 Depth: 뷰어 (Novel)
Feature: 하단 툴바

  @TC-0133
  Scenario: 케이스-133
    When 소설 작품 진입
    And 하단 영역 확인
    Then 소설 뷰어 노출된다.
    And 회차 섬네일, 회차명, 회차 정보, 소설 옵션, More, Like, List, Comment, 이전/다음, 전체화면 전환 버튼이 노출된다.

  @TC-0134
  Scenario: 케이스-134
    When 소설 뷰어 진입
    And 우하단 [List] 버튼 클릭
    Then 소설 뷰어가 진입된다.
    And 우측 회차 리스트 접히며 뷰어 전체 화면으로 노출된다.

  @TC-0135
  Scenario: PCW only - 리스트
    Given PCW only
    When [리스트] 버튼 클릭
    And [리스트] 버튼 재클릭
    Then 뷰어 우측 작품홈 영역이 미노출로 전환된다
    And 뷰어 우측 작품홈 영역이 노출된다.

  @TC-0136
  Scenario: PCW only - 전체화면
    Given PCW only
    When [전체화면] 버튼 클릭
    And [전체화면] 버튼 재클릭
    Then 뷰어가 전체화면으로 전환된다.
    And 전체화면 모드가 종료된다.

  @TC-0137
  Scenario: 소설 뷰어 옵션(AA) - 폰트 크기
    When [AA] 버튼 클릭
    And 폰트 크기 [+] 버튼 클릭
    And 폰트 크기 [-] 버튼 클릭
    Then 팝업은 유지되며 소설 원고 폰트 크기가 커진다.
    And 팝업은 유지되며 소설 원고 폰트 크기가 작아진다.

  @TC-0138
  Scenario: 소설 뷰어 옵션(AA) - 행 간격
    When [AA] 버튼 클릭
    And 행 간격 [+] 버튼 클릭
    And 행 간격 [-] 버튼 클릭
    Then 팝업은 유지되며 소설 원고 행 간격이 넓어진다.
    And 팝업은 유지되며 소설 원고 행 간격이 좁아진다.

  @TC-0139
  Scenario: 소설 뷰어 옵션(AA) - 화면 모드
    When [AA] 버튼 클릭
    And 뷰어 화면 모드 클릭
    And 팝업 이외 영역 클릭
    Then 팝업은 유지되며 소설 원고가 선택한 배경으로 변경된다.
    And 팝업이 닫히며 소설 원고는 유지된다.

  @TC-0140
  Scenario: 케이스-140
    When [좋아요] 버튼 선택
    And [좋아요] 버튼 재선택
    Then 좋아요 버튼이 활성화 처리되며 카운트가 증가한다.
    And 좋아요 버튼 비활성화 처리되며 카운트가 감소한다

  @TC-0141
  Scenario: 케이스-141
    When 하단 툴바 확인
    And 좌하단 More 버튼 클릭
    And 팝업 외 영역 클릭
    Then 회차 섬네일, 회차명, 회차 정보, 소설 옵션, More, Like, List, Comment, 이전/다음, 전체화면 전환 버튼이 노출된다.
    And 뷰어 화면 위로 More 팝업이 노출된다.
    And 팝업이 닫힌다.

  @TC-0142
  Scenario: 첫 번째 작가 서포트 활성화
    Given 첫 번째 작가 서포트 활성화
    When [Support] 버튼 클릭
    And 우상단 [x] 버튼 클릭
    Then 작가 Support 팝업이 노출된다.
    And 뷰어로 이동된다.

  @TC-0143
  Scenario: 케이스-143
    When 이전 회차 이동 버튼 클릭
    And 다음 회차 이동 버튼 클릭
    Then 이전 회차로 이동된다.
    And 원래 회차로 돌아온다.

  @TC-0144
  Scenario: 케이스-144
    When [Comment] 버튼 클릭
    Then 우측에 댓글 리스트 화면이 노출된다.
