function settingFormula() {
  const id = '1qhx4Jg4QPzrq-k0MoN-MVT16ro6x-AVY3P-QzU1ETPQ';
  const spreadsheet = SpreadsheetApp.openById(id);
  const sheet_sb = spreadsheet.getSheetByName('Copy of Copy of MMIT-Sheet');

  const lastRow =  sheet_sb.getLastRow();
  const lastCol =  sheet_sb.getLastColumn();
  
  let range = sheet_sb.getRange(lastRow + 1, 3, 1, 2);

  //range.setFormula(`=COUNTUNIQUE(C2:C${lastRow})`);
  
  range.setFormulas([
    [`=COUNTUNIQUE(C2:C${lastRow})`, `=SUM(D2:D${lastRow})`]
  ]);
}

//Setting Formula Methods
//setFormula(sortSpecObj,columnPosition,boolean ascending (optional))
//setFormulas

