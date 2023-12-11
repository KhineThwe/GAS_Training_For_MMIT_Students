function three() {
  const id = "1vX6yMpvXpM-iF3xPKBMsf4IyxceticnW"; //Enter the true id of the folder here
  const folder = DriveApp.getFolderById(id);
  //1
  // for (let i = 1; i <= 10; i++) {
  //   const name = String(i).padStart(2, '0');
  //   folder.createFolder(name);
  // }
  //2
  // const name = 'hello.txt';
  // const content = 'Hello GAS!';
  // folder.createFile(name, content, MimeType.PLAIN_TEXT);
  //3
  const targetId = "1xoAnvKXt95j1FX9rYNBVh96nYBd4J6ke"; //Enter the true file ID here
  folder.createShortcut(targetId);
}

// creating folders and files
//Folder object.createFolder(folder's name）
//Folder object createFile(File name, contents[, MIME Type])
//Folder object.createShortcut(File ID)
