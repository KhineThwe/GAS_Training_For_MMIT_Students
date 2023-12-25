function three() {
  console.log(Session.getActiveUser().getEmail()); //email address of the current user
  console.log(Session.getEffectiveUser().getEmail()); //The email address of the user with execution permissions.

  console.log(Session.getActiveUserLocale()); //ja
  console.log(Session.getScriptTimeZone()); //timizone in your location
  console.log(Session.getTemporaryActiveUserKey()); //temporal key of the user
}
