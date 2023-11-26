function myFunction() {
  
  const id = '1qhx4Jg4QPzrq-k0MoN-MVT16ro6x-AVY3P-QzU1ETPQ';
  const spreadsheet = SpreadsheetApp.openById(id);
  const sheet_mmit = spreadsheet.getSheetByName('MMIT-Sheet');
  
  var range = sheet_mmit.getRange(3, 1, 1, 4);
  var range_single = sheet_mmit.getRange('D2');
  //setValues()
  range_single.setValue('modified_KZT@gmail.com')//for just one value
  range.setValues([['Julian Edelman', 'New England', 'Wide Receiver', 'Jumping on Cars']]);//we can use setValues() method both single and multiple values//argument --> two dimensional array
    
}
