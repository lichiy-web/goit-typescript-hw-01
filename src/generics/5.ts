// Виконувати ці завдання було вкрай нудно, то ж я розважав себе, як міг.

export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Замініть наступний код на версію за допомогою Record
const RoleDescription: Record<UserRole, string> = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',   
};


console.table(RoleDescription);