function calendar_event() {
  const id = "classroom106156169165366235991@group.calendar.google.com";
  const calendar = CalendarApp.getCalendarById(id);
  console.log(calendar.getId()); //Title of the specified calendar

  const defaultCalendar = CalendarApp.getDefaultCalendar();
  console.log(defaultCalendar.getName()); //Title of the default calendar

  const calendars = CalendarApp.getAllOwnedCalendars();
  for (const calendar of calendars) {
    console.log(calendar.getName());
  }
}
