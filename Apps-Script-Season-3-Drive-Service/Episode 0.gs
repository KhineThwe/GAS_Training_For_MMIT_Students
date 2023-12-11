function episode_0() {
  const folderId = "1vX6yMpvXpM-iF3xPKBMsf4IyxceticnW";
  const folder = DriveApp.getFolderById(folderId);

  console.log(folder.getName()); //sample for drive

  const fileId = "1As0avkqCtp8Nbw0Nhud99hE5WH0lCH5d";
  const file = DriveApp.getFileById(fileId);

  console.log(file.getName());

  const root = DriveApp.getRootFolder();
  console.log(root.getName()); //MyDrive
}
//getFolderById()
//getFolders()
//getFolderByName()
