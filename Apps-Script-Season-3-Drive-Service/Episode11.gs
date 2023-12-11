function myFunction() {
  const email = "khinezar70122107@gmail.com"; //your email address

  const folderId = "1vX6yMpvXpM-iF3xPKBMsf4IyxceticnW"; //folder ID
  const folder = DriveApp.getFolderById(folderId);

  console.log(folder.getAccess(email).toString()); //Authority of the specified user
  console.log(folder.getOwner().getEmail()); //owner's email address
  console.log(folder.getEditors().length); //number of editors
  console.log(folder.getViewers().length); //number of visitors
  console.log(folder.isShareableByEditors()); //True or False

  const fileId = "1mkqaPtRCakIE0vIItKGuxLKSdGVMu0PIBbU_bROMteJVSeNSSyxjZoWM"; //file ID
  const file = DriveApp.getFileById(fileId);

  console.log(file.getAccess(email).toString()); //Authority of the specified user
  console.log(file.getOwner().getEmail()); //owner's email address
  console.log(file.getEditors().length); //number of editors
  console.log(file.getViewers().length); //number of visitors
  console.log(file.isShareableByEditors()); //True or False
}
