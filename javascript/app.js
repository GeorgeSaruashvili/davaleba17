//I
for (let i = 0; i < 25; i++) {
  console.log(i);
}
//II
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
//III
let I = 0;
do {
  console.log(I);
  i++;
} while (I < 15);
//IV
const numbers = [23, 44, 123, 234, 765, 1023, 2368];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}
//V
const currentDay = newdate().getDay();
let day;
switch (currentDay) {
  case 0:
    day: "Sunday";
    brake;
  case 1:
    day: "Monday ";
    brake;
  case 2:
    day: "Tuesday ";
    brake;
  case 3:
    day: "Wednesday ";
    brake;
  case 4:
    day: "Thursday ";
    brake;
  case 5:
    day: "Friday ";
    brake;
  case 6:
    day: "Saturday ";
    brake;
}
