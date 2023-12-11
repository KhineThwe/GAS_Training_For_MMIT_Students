function create() {
  const folderName = "Folder Name here";
  DriveApp.createFolder(folderName);

  const fileName = "FileName.txt";
  const content = "Hello Drive!";
  DriveApp.createFile(fileName, content);
  // DriveApp.getFoldersByName("Profile Data").next().setName("Profile Pictures");
}
// DriveApp.createFolder({folder name});

//DriveApp.createFile({file name, contents[, MIME type]});
