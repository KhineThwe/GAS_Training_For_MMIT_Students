function myFunction() {
  //for nov 25,25 2023
  const id = '1qhx4Jg4QPzrq-k0MoN-MVT16ro6x-AVY3P-QzU1ETPQ';
  const spreadsheet = SpreadsheetApp.openById(id);
  const sheet_detroit = spreadsheet.getSheetByName('MMIT-Sheet');
  //https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app
  //About Range
  //sheet_detroit.getRange(row, column, numOfRows, numOfColumns)
  var range = sheet_detroit.getRange(2, 1, 1, 4);
  var cellValue = sheet_detroit.getRange('A1').getValue();
  Logger.log('Cell A1 value: ' + cellValue);

  //getValue() // This method is used to retrieve the value of a single cell.
  //It returns a single value (not an array) representing the content of the cell
  Logger.log(range.getValue());

  //getValues()://This method is used to retrieve the values of a range of cells.
  //It returns a two-dimensional array representing the contents of the specified range.
 
  Logger.log(range.getValues());

  var rangeValues = sheet_detroit.getRange('A1:B2').getValues();
  Logger.log('Values of cells A1 to B2: ' + rangeValues);
  
  //quick way of to get sheet's values
  //sheet_detroit.getSheetValues(startRow, startColumn, noOfRows, noOfColumns)
  //Logger.log(sheet_detroit.getSheetValues(2, 1, 1, 4));
  
  // This is a common way to retrieve all the data from a sheet in Google Sheets using Google Apps Script.
  //sheet_detroit.getDataRange().getValues()
  //dataRangeValues will contain a two-dimensional array representing all the values in the 'detroit' sheet. 
  Logger.log(sheet_detroit.getDataRange().getValues());
}