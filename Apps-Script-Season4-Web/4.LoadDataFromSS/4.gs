var url =
  "https://docs.google.com/spreadsheets/d/1FUgdenqgztxMaDLuoIA8seRW3WfPhL2LpzoQ79R9bLg/edit#gid=1529747592";
function doGet(e) {
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Options");
  var list = ws
    .getRange(1, 1, ws.getRange("A1").getDataRegion().getLastRow(), 1)
    .getValues();

  var tmp = HtmlService.createTemplateFromFile("1");
  tmp.title = "My Title";

  // var htmlListArray = list.map(function(r){return '<option>'+r[0]+'</option>';});
  // tmp.list = [["GS"],["Excel"]];
  tmp.list = list.map(function (r) {
    return r[0];
  });
  return tmp.evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function userClicked(userInfo) {
  var ss = SpreadsheetApp.openByUrl(url);

  var ws = ss.getSheetByName("Copy of Data");

  ws.appendRow([userInfo.fname, userInfo.lname, userInfo.app, new Date()]);
}
