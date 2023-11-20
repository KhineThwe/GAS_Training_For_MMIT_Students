function myFunction() {
  const ssActive = SpreadsheetApp.getActiveSpreadsheet();
  console.log(ssActive.getName());

	// change xxxxxxxx as the true url
  const url = 'https://docs.google.com/spreadsheets/d/1qhx4Jg4QPzrq-k0MoN-MVT16ro6x-AVY3P-QzU1ETPQ/edit#gid=97307472';
  const ssByUrl = SpreadsheetApp.openByUrl(url);
  console.log(ssByUrl.getName());

	// //change xxxxxxxx as the true id from the spreadsheet url
  const id = '1qhx4Jg4QPzrq-k0MoN-MVT16ro6x-AVY3P-QzU1ETPQ';
  const ssById = SpreadsheetApp.openById(id);
  console.log(ssById.getName());
}