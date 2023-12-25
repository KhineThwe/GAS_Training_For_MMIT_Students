function two() {
  const sheet = SpreadsheetApp.getActiveSheet();

  const timer1 = "each cell";
  console.time(timer1);

  for (let i = 1; i <= 1000; i++) {
    const value = sheet.getRange(i, 1).getValue();
    sheet.getRange(i, 2).setValue(value);
  }

  console.timeEnd(timer1); //each cell: 318580ms

  const timer2 = "Cells together";

  console.time(timer2);

  const values = sheet.getRange(1, 2, 1000, 1).getValues();
  sheet.getRange(1, 3, values.length, values[0].length).setValues(values);

  console.timeEnd(timer2); //Cells together: 333ms
}
