function five() {
  const trigger = ScriptApp.getProjectTriggers()[0];

  console.log(trigger.getEventType().toString()); //ON_OPEN
  console.log(trigger.getHandlerFunction()); //myFunction
  console.log(trigger.getTriggerSource().toString()); //SPREADSHEETS
  console.log(trigger.getTriggerSourceId()); //Spreadsheet ID
  console.log(trigger.getUniqueId()); //4744618
}
