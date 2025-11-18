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
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 15);
//IV
const numbers = [23, 44, 123, 234, 765, 1023, 2368];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}
//V
const currentDay = new Date().getDay();
let day;
switch (currentDay) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday ";
    break;
  case 2:
    day = "Tuesday ";
    break;
  case 3:
    day = "Wednesday ";
    break;
  case 4:
    day = "Thursday ";
    break;
  case 5:
    day = "Friday ";
    break;
  case 6:
    day = "Saturday ";
    break;
}
console.log(day);
