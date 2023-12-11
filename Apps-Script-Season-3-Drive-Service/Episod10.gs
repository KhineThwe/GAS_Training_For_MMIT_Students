function ten() {
  const id = "1NdmuoVYMVxPLUiAnCKLicXntXG-y7wN0"; //Folder ID
  const targetFolder = DriveApp.getFolderById(id);

  const files = targetFolder.getFilesByType(MimeType.JPEG);
  while (files.hasNext()) {
    const file = files.next();
    console.log(file.getName());
  }
}
