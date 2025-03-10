// Виконувати ці завдання було вкрай нудно, то ж я розважав себе, як міг.

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

showMessage('Hello, everybody!');
console.log(`calc(${18}, ${61}) = ${calc(18, 61)}`);
try {
    customError();
} catch (error) {
    console.error(error);
}