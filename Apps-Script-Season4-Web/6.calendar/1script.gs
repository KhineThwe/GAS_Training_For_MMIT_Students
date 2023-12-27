var url =
  "https://docs.google.com/spreadsheets/d/1FUgdenqgztxMaDLuoIA8seRW3WfPhL2LpzoQ79R9bLg/edit#gid=0";

function doGet(e) {
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Options");

  var list = ws
    .getRange(1, 1, ws.getRange("A1").getDataRegion().getLastRow(), 1)
    .getValues();

  var tmp = HtmlService.createTemplateFromFile("1");
  tmp.title = "My title";

  var htmlListArray = list.map(function (r) {
    return "<option>" + r[0] + "</option>";
  });
  tmp.list = htmlListArray;
  return tmp.evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function userClicked(userInfo) {
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Copy of Data");

  ws.appendRow([
    userInfo.fname,
    userInfo.lname,
    userInfo.app,
    userInfo.zip,
    userInfo.estimate,
    new Date(),
  ]);
}

function getCost(zipCode) {
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Estimate");

  var data = ws.getRange(1, 1, ws.getLastRow(), 2).getValues();

  var zipCodeList = data.map(function (r) {
    return r[0];
  });

  var costList = data.map(function (r) {
    return r[1];
  });

  var position = zipCodeList.indexOf(zipCode);
  if (position > -1) {
    return "$" + costList[position].toFixed(2);
  } else {
    return "Unavailable";
  }
}

// for date picker
function getCalendarBusyDays() {
  var startDate = new Date(); // today
  var endDate = new Date(new Date().setYear(startDate.getFullYear() + 1));
  var calendar = CalendarApp.getCalendarsByName("test calendar")[0];
  var events = calendar.getEvents(startDate, endDate);

  var uniqueDaysSet = new Set(
    events.map(function (e) {
      return e.getStartTime().setHours(0, 0, 0, 0);
    })
  );

  var uniqueDays = Array.from(uniqueDaysSet); // Convert Set to Array if needed
  console.log(uniqueDays);

  return uniqueDays;
}
