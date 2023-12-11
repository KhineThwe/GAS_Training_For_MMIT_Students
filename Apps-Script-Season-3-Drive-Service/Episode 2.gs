function two() {
  const id = "1vX6yMpvXpM-iF3xPKBMsf4IyxceticnW";
  const folder = DriveApp.getFolderById(id);

  console.log(folder.getId()); //1vX6yMpvXpM-iF3xPKBMsf4IyxceticnW
  console.log(folder.getUrl()); //https://drive.google.com/drive/folders/1vX6yMpvXpM-iF3xPKBMsf4IyxceticnW
  console.log(folder.getName()); //GAS_MMIT
  console.log(folder.getDescription()); //Description of Sample for Drive

  console.log(folder.getDateCreated()); //Fri Dec 01 2023 02:00:49 GMT-1200 (GMT-12:00)
  console.log(folder.getLastUpdated()); //Sat Dec 02 2023 21:25:37 GMT-1200 (GMT-12:00)

  console.log(folder.isStarred()); //false
  console.log(folder.isTrashed()); //false
}
