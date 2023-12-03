function myFunction() {
  //Get and Insert Sheets
  //getSheetByName(name)
  //getSheets()
  //insertSheet([sheetName,sheetIndex,options])
  const spreadsheet = SpreadsheetApp.openById('1qhx4Jg4QPzrq-k0MoN-MVT16ro6x-AVY3P-QzU1ETPQ');
  spreadsheet.getSheetByName('Sheet1');
  Logger.log(spreadsheet.getSheets());

  //spreadsheet.insertSheet();//inserting a sheet info
  spreadsheet.insertSheet('MMIT-Sheet',0,{template:spreadsheet.getSheetByName('Sheet1')});
}
