function create_calendar() {
  const name = "test calendar";
  const options = {
    timeZone: "Asia/Tokyo",
    color: CalendarApp.Color.ORANGE,
  };

  CalendarApp.createCalendar(name, options);
}
