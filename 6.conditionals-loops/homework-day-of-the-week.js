let dayNumber = 3;

// switch cases
switch (dayNumber) {
  case 1:
    console.log('It is Monday, enjoy your week!');
    break;
  case 2:
    console.log('It is Tuesday, maybe have a nice day');
    break;
  case 3:
    console.log('It is Wednesday my dudes');
    break;
  case 4:
    console.log('It is Thursday, have fun');
    break;
  case 5:
    console.log('It is Friday, have a nice weekend');
    break;
  case 6:
    console.log('It is Saturday, no more jokes');
    break;
  case 7:
    console.log('It is Sunday, prepare for the next week');
    break;
  default:
    console.log(
      "Invalid number, doesn't have any corresponding day of the week"
    );
}

// else if
if (dayNumber >= 1 && dayNumber <= 7) {
  if (dayNumber === 1) console.log('It is Monday, enjoy your week!');
  if (dayNumber === 2) console.log('It is Tuesday, maybe have a nice day');
  if (dayNumber === 3) console.log('It is Wednesday my dudes');
  if (dayNumber === 4) console.log('It is Thursday, have fun');
  if (dayNumber === 5) console.log('It is Friday, have a nice weekend');
  if (dayNumber === 6) console.log('It is Saturday, no more jokes');
  if (dayNumber === 7) console.log('It is Sunday, prepare for the next week');
} else {
  console.log("Invalid number, doesn't have any corresponding day of the week");
}
