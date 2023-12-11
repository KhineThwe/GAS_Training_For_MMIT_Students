function nine() {
  const file = DriveApp.getFilesByName("Drive_Sheet").next();
  //file.addEditor("khinezar.ncc@gmail.com");
  //file.setShareableByEditors(false);
  //file.removeEditor("weissdav@sas.upenn.edu");
  // file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
}
// Top 5 Methods
//add[Commenter][Editor][Viewer]([emailAddress,User])
//remove[Commenter][Editor][Viewer]([emailAddress,User])
//get[Editors][Viewers]()
//setSharableByEditors(sharable)
//setSharing(accessType,permissionType)
