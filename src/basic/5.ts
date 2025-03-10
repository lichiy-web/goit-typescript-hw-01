// Виконувати ці завдання було вкрай нудно, то ж я розважав себе, як міг.

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


const isWeekend = (day: DayOfWeek): boolean => day === 5 || day === 6;

let areWeekend: [string, boolean][] = new Array(7).fill(0).map((_, i) => [DayOfWeek[i], isWeekend(i)]);
console.table({ ...areWeekend });

console.table(DayOfWeek);
