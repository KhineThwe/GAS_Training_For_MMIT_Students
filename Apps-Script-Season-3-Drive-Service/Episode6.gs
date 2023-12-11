function one() {
  const id = "1vX6yMpvXpM-iF3xPKBMsf4IyxceticnW"; //Folder ID
  const targetFolder = DriveApp.getFolderById(id);

  const subFolders = targetFolder.getFolders();
  while (subFolders.hasNext()) {
    const folder = subFolders.next();
    console.log(folder.getName());
  }
}
// FolderIterator object.next()
// FileIterator object.next()
// FolderIterator object.hasNext()
// FileIterator object.hasNext()
//Top 3 methods
//next()
//hasNext()
//getContinuationToken()
