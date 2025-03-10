// Виконувати ці завдання було вкрай нудно, то ж я розважав себе, як міг.

interface User {
    name: string,
    age: number,
    email: string,
    address?: {
        city: string,
        country: string
    }

}

const mango: User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly: User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};

console.table({ mango, poly }, ['name', 'age', 'email']);