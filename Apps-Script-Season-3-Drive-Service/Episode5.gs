function myFunction() {
  const id = "1As0avkqCtp8Nbw0Nhud99hE5WH0lCH5d"; //File ID

  const file = DriveApp.getFileById(id);

  // const movedFile = file.makeCopy('合格できる_N2_OQ_UnknownMeanings_1.docx');
  // const destinationId = '1sDYFZjOhW0roQAsU_zWZVMU_Chh_ixv_'; //Folder ID to be moved
  // const destination = DriveApp.getFolderById(destinationId);
  // movedFile.moveTo(destination);

  const trashedFile = file.makeCopy("合格できる_N2_OQ_UnknownMeanings_1.docx");
  trashedFile.setTrashed(false);
  //If the argument is set to true, the file is placed in the trash; if set to false, the file is returned from the trash to its original folder.
}

// copy,move and deleteFile
// File object.makeCopy([File name][, Folder])
// File object.moveTo(Folder)
// File object.setTrashed(Boolean)
