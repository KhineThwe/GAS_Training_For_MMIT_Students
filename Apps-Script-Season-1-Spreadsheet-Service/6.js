function myFunction() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const sheet = ss.getSheetByName('MMIT-Sheet');
  Logger.log(sheet.getName);

  const sheets = ss.getSheets();
  Logger.log(sheets);

  Logger.log(sheets[0].getName());
  Logger.log(sheets[1].getName());
}
