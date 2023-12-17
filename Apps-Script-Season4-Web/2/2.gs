function doGet(e) {
  return HtmlService.createTemplateFromFile("1").evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function userClicked(userInfo) {
  var url =
    "https://docs.google.com/spreadsheets/d/1FUgdenqgztxMaDLuoIA8seRW3WfPhL2LpzoQ79R9bLg/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");

  ws.appendRow([userInfo.fname, userInfo.lname, userInfo.app, new Date()]);
}
