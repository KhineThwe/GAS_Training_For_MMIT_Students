function myFunction() {
  
  const id = '1qhx4Jg4QPzrq-k0MoN-MVT16ro6x-AVY3P-QzU1ETPQ';
  const spreadsheet = SpreadsheetApp.openById(id);
  const sheet_w_data = spreadsheet.getSheetByName('MMIT-Sheet');
  
  const lastRow = sheet_w_data.getLastRow();
  Logger.log(lastRow);
  const lastCol = sheet_w_data.getLastColumn();
  Logger.log(lastCol);
  const maxRow = sheet_w_data.getMaxRows();
  Logger.log(maxRow);
  const maxCol = sheet_w_data.getMaxColumns();
  Logger.log(maxCol);

   sheet_w_data.getRange(lastRow + 1, 1, 1, lastCol).setValues([
    ['M-Brown Antonio', 'M-Everywhere', 'M-WR', 'M-Too Good for the NFL']
  ]);// dynamic way of adding data to the excel sheet
}