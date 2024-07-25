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
  else if (dayNumber === 2) console.log('It is Tuesday, maybe have a nice day');
  else if (dayNumber === 3) console.log('It is Wednesday my dudes');
  else if (dayNumber === 4) console.log('It is Thursday, have fun');
  else if (dayNumber === 5) console.log('It is Friday, have a nice weekend');
  else if (dayNumber === 6) console.log('It is Saturday, no more jokes');
  else if (dayNumber === 7)
    console.log('It is Sunday, prepare for the next week');
} else {
  console.log("Invalid number, doesn't have any corresponding day of the week");
}
