function myFunction() {
  //SpreadsheetApp.create("MMIT",100,26);//name,row,col
  //SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1Zn__qJsb2EvB8fXLA-BdLS_MxFyMCuaIC5NcSVvQTZc/edit#gid=0');
  //SpreadsheetApp.openById('1Zn__qJsb2EvB8fXLA-BdLS_MxFyMCuaIC5NcSVvQTZc');

  //open by file name method -> open(file)
  SpreadsheetApp.open(DriveApp.getFilesByName('MMIT').next());
}