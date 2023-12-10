function removingData() {
  const id = '1qhx4Jg4QPzrq-k0MoN-MVT16ro6x-AVY3P-QzU1ETPQ';
  const spreadsheet = SpreadsheetApp.openById(id);
  const sheet_w_data = spreadsheet.getSheetByName('Copy of MMIT-Sheet');

  const lastRow = sheet_w_data.getLastRow();
  const lastCol = sheet_w_data.getLastColumn();
  const maxRow = sheet_w_data.getMaxRows();
  const maxCol = sheet_w_data.getMaxColumns();
  
  //1
  //var range = sheet_w_data.getRange(lastRow, 1,1,lastCol-1);
  //sheet_w_data.clear();//clear everything
  

  //2
  //var range = sheet_w_data.getRange(6,1);
  //and you can clear format only or contents only 
  // Clear comments only in the specified range
  //range.clear({ contentsOnly: true });
  
  //3
  //var range = sheet_w_data.getRange(7,1);
  //delete white cell and shifted columns
  //range.deleteCells(SpreadsheetApp.Dimension.ROWS);

  //sheet_w_data.deleteColumns(2,3);
  //sheet_w_data.deleteRow(7);
  
 
}

//Removing Data
//Top 4 methods
//1.clear(options)
//2.deleteCells(shiftDimension)
//3.deleteColumns(columnPosition,howMany)
//4.deleteRows(rowPosition,howMany)
