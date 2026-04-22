// Generated from: features/검색.feature
import { test } from "playwright-bdd";

test.describe('검색', () => {

  test('키워드 검색으로 작품 진입 후 뒤로가기로 홈 복귀', { tag: ['@TC-SEARCH-0001'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('홈에 접속한다', null, { page }); 
    await When('검색을 연다', null, { page }); 
    await And('"Olympus"로 검색한다', null, { page }); 
    await Then('검색 결과가 보인다', null, { page }); 
    await And('결과 탭들이 모두 보인다', null, { page }); 
    await When('"The Edge of Olympus" 작품을 클릭한다', null, { page }); 
    await Then('작품 상세 페이지로 이동한다', null, { page }); 
    await When('뒤로가기를 누른다', null, { page }); 
    await Then('검색 결과로 돌아온다', null, { page }); 
    await When('뒤로가기를 다시 누른다', null, { page }); 
    await Then('홈으로 돌아온다', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/검색.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@TC-SEARCH-0001"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given 홈에 접속한다","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When 검색을 연다","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And \"Olympus\"로 검색한다","stepMatchArguments":[{"group":{"start":0,"value":"\"Olympus\"","children":[{"start":1,"value":"Olympus","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then 검색 결과가 보인다","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And 결과 탭들이 모두 보인다","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When \"The Edge of Olympus\" 작품을 클릭한다","stepMatchArguments":[{"group":{"start":0,"value":"\"The Edge of Olympus\"","children":[{"start":1,"value":"The Edge of Olympus","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then 작품 상세 페이지로 이동한다","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When 뒤로가기를 누른다","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then 검색 결과로 돌아온다","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When 뒤로가기를 다시 누른다","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then 홈으로 돌아온다","stepMatchArguments":[]}]},
]; // bdd-data-end