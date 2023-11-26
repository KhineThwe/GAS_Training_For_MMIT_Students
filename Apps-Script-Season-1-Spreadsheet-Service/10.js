function myFunction() {
  const id = '1qhx4Jg4QPzrq-k0MoN-MVT16ro6x-AVY3P-QzU1ETPQ';
  const spreadsheet = SpreadsheetApp.openById(id);
  const detroit = spreadsheet.getSheetByName('MMIT-Sheet');
  const sheet_bm = spreadsheet.getSheetByName('Sheet9');
  
  //detroit.copyTo(spreadsheet);
  
  // var range_to_copy = sheet_bm.getRange(2, 2);
  // var range_to_paste = sheet_bm.getRange(3, 2, lastRow - 2, 1);
  
  // range_to_copy.copyTo(range_to_paste, {contentsOnly: true});
}
