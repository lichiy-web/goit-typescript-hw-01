// Виконувати ці завдання було вкрай нудно, то ж я розважав себе, як міг.

type stringOrNumber = string | number;
type enableOrDisable = 'enable' | 'disable';

let strOrNum: stringOrNumber = new [Number, String][new Date().getTime() % 2](101) as stringOrNumber;
let enOrdis: enableOrDisable = ['enable', 'disable'][Math.round(Math.random() * 2 - .5)] as enableOrDisable;

console.table({ strOrNum, enOrdis });