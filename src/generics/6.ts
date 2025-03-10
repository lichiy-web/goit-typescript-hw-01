// Виконувати ці завдання було вкрай нудно, то ж я розважав себе, як міг.

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так, 
// щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, 'errors'>;

let intialValues: Params = {
    email: 'john.doe@gmail.com',
    firstName: 'John',
    lastName:  'Doe',
    phone: null,
}

console.table(intialValues);