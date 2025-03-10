// Виконувати ці завдання було вкрай нудно, то ж я розважав себе, як міг.

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser<T extends User>(initialValues: Partial<T>) {
    console.log('Оновленя даних користувача...');
    console.table(initialValues);
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
