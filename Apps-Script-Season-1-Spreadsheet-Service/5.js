function myFunction() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  console.log(ss.getId());
  console.log(ss.getName());
  console.log(ss.getNumSheets());
  console.log(ss.getUrl());
}