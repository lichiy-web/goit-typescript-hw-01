// Виконувати ці завдання було вкрай нудно, то ж я розважав себе, як міг.

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare (top: Pick<AllType, 'name'|'color'>, bottom: Pick<AllType, 'position' | 'weight'>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

console.table(compare({ name: "Petro", color: 'red' }, { position: 10, weight: 500 }));