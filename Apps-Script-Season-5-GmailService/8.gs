function calendar_event() {
  const id = "classroom106156169165366235991@group.calendar.google.com";
  const calendar = CalendarApp.getCalendarById(id);
  console.log(calendar.getId()); //Title of the specified calendar

  console.log(calendar.getName()); //sample calendar
  console.log(calendar.getId()); //Calendar ID
  console.log(calendar.getDescription()); //This is a sample calendar
  console.log(calendar.getTimeZone()); //Asia/Tokyo
  console.log(calendar.getColor()); //#7BD148

  console.log(calendar.isMyPrimaryCalendar()); //false
  console.log(calendar.isOwnedByMe()); //true

  console.log(calendar.isHidden()); //false
  console.log(calendar.isSelected()); //true
}
