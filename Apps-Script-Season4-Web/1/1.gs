function doGet(e) {
  Logger.log(e);
  return HtmlService.createHtmlOutputFromFile("1");
}

function userClicked(name) {
  var url =
    "https://docs.google.com/spreadsheets/d/1FUgdenqgztxMaDLuoIA8seRW3WfPhL2LpzoQ79R9bLg/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");

  ws.appendRow([name, new Date()]);
  // console.log(name + "Clicked The Button");
}
