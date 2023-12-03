function createBanding() {
  const id = '1qhx4Jg4QPzrq-k0MoN-MVT16ro6x-AVY3P-QzU1ETPQ';
  const spreadsheet = SpreadsheetApp.openById(id);
  var sheet_w_data = spreadsheet.getSheetByName('Sheet1');

  const lastRow = sheet_w_data.getLastRow();
  const lastCol = sheet_w_data.getLastColumn();
  const maxRow = sheet_w_data.getMaxRows();
  const maxCol = sheet_w_data.getMaxColumns();

  // Create a new range for the entire sheet
  var range = sheet_w_data.getDataRange();

  // Iterate through rows and set background color
  for (var i = 1; i <= maxRow; i += 2) {
    range.offset(i - 1, 0, 1, maxCol).setBackground('lightgray');
  }

  for (var i = 2; i <= maxRow; i += 2) {
    range.offset(i - 1, 0, 1, maxCol).setBackground('white');
  }

  Logger.log('Banding created!');
}
