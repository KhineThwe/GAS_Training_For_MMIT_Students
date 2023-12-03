function myFunction() {
  
  const id = '1qhx4Jg4QPzrq-k0MoN-MVT16ro6x-AVY3P-QzU1ETPQ';
  const spreadsheet = SpreadsheetApp.openById(id);
  const sheet_w_data = spreadsheet.getSheetByName('Copy of MMIT-Sheet');
  
  const lastRow = sheet_w_data.getLastRow();
  const lastCol = sheet_w_data.getLastColumn();
  const maxRow = sheet_w_data.getMaxRows();
  const maxCol = sheet_w_data.getMaxColumns();
  
  //sheet_w_data.deleteColumns(colPosition, howMany)
  //sheet_w_data.deleteColumns(lastCol + 1, maxCol - lastCol);//26-4 
  
  var range = sheet_w_data.getRange(1, 1, maxRow, maxCol);
  range.createFilter();
}