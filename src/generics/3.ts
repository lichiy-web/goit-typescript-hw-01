// Виконувати ці завдання було вкрай нудно, то ж я розважав себе, як міг.

function merge<T extends object>(objA: T, objB: T) {
  return Object.assign(objA, objB);
}

console.table(merge<object>({ a: 'a' }, { b: 'b' }));