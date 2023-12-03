function myFunction() {
  const id = '1qhx4Jg4QPzrq-k0MoN-MVT16ro6x-AVY3P-QzU1ETPQ';
  const spreadsheet = SpreadsheetApp.openById(id);
  const detroit = spreadsheet.getSheetByName('Copy of Sheet9');

  const lastRow =detroit.getLastRow();

  var range_to_autofill = detroit.getRange(2, 2, 2);
  var destination = detroit.getRange(2, 2, 17);
  
  //2 methods
  //autoFill(Destination,Series)
  //autoFillToNeighbor(series)
  //range_to_autofill.autoFill(destination, SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);//two options DEFAULT and ALTERNATE
  //It returns values auto-increment by 1.


  //range_to_autofill.autoFill(destination, SpreadsheetApp.AutoFillSeries.ALTERNATE_SERIES);
  //It returns alternating values.

  //This method will fill values according to its neighbor's values.
  range_to_autofill.autoFillToNeighbor(SpreadsheetApp.AutoFillSeries.ALTERNATE_SERIES);
}
