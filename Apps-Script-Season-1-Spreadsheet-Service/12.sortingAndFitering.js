function myFunction() {
  const id = '1qhx4Jg4QPzrq-k0MoN-MVT16ro6x-AVY3P-QzU1ETPQ';
  const spreadsheet = SpreadsheetApp.openById(id);
  const sheet_sb = spreadsheet.getSheetByName('Copy of Copy of MMIT-Sheet');

  const lastRow =  sheet_sb.getLastRow();
  const lastCol =  sheet_sb.getLastColumn();
  
  //1
  //sheet_sb.sort(2, false);//this sorts including first row but we don't want to sort.Look at following 
  
  //2
  // let range = sheet_sb.getRange(2, 1, lastRow - 1, lastCol);  
  // range.sort([
  //    {column: 3, ascending: true},
  //  {column: 4, ascending: false}
  // ]);
  
 let range = sheet_sb.getDataRange();
 range.createFilter();
}

//Sorting And Filtering Methods
//2 methods
//1.sort(sortSpecObj,columnPosition,boolean ascending (optional))
//2.createFilter()
