function myFunction() {
  const id = '1qhx4Jg4QPzrq-k0MoN-MVT16ro6x-AVY3P-QzU1ETPQ';
  const spreadsheet = SpreadsheetApp.openById(id);
  const detroit = spreadsheet.getSheetByName('Sheet9');
  const sheet_bm = spreadsheet.getSheetByName('Sheet9-Copy');
  

  const lastRow =detroit.getLastRow();
  Logger.log(lastRow);
  const lastCol = detroit.getLastColumn();
  const maxRow = detroit.getMaxRows();
  const maxCol = detroit.getMaxColumns();

  var range_to_copy = detroit.getRange(2, 2);
  var range_to_paste = detroit.getRange(3, 2, lastRow - 2, 1);//start from row 3 col 2,no Of row 23,no of col 1
  
  //range_to_copy.copyTo(range_to_paste, {contentsOnly: true});
  //copyTo(destination, {contentsOnly: true})

  range_to_copy.copyTo(range_to_paste, SpreadsheetApp.CopyPasteType.PASTE_VALUES,false);
}
