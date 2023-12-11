function handling_file() {
  const id = "1As0avkqCtp8Nbw0Nhud99hE5WH0lCH5d"; //Enter the true file ID here
  const file = DriveApp.getFileById(id);

  console.log(file.getId()); //File ID
  console.log(file.getName()); //sea.jpg
  console.log(file.getDescription()); //Photo of sea
  console.log(file.getMimeType()); //image/jpeg
  console.log(file.getSize()); //1412243

  console.log(file.getUrl()); //URL for opening the file
  console.log(file.getDownloadUrl()); //URL for downloading the file

  console.log(file.getDateCreated()); //Wed Sep 27 2017 10:45:33
  console.log(file.getLastUpdated()); //Tue Jul 28 2020 15:09:11

  console.log(file.isStarred()); //false
  console.log(file.isTrashed()); //false
}
