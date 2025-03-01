## 1. DRY (Don’t Repeat Yourself)

Принцип DRY заохочує уникати дублювання коду. Я забезпечив, щоб функціональність була абстрагована в повторно використовуваних методах і класах, щоб уникнути зайвого повторення.

### Приклад коду:

Методи `consumeFood` та `dailyFoodRequirement` в класі `Animal` виконують різні дії. `consumeFood` обробляє споживання їжі твариною, а `dailyFoodRequirement` отримує денну потребу їжі в залежності від дієти тварини. Це дозволяє централізувати логіку годування і уникнути її дублювання.

```js
class Animal {
  constructor(name, diet) {
    this.name = name;
    this.diet = diet;
  }

  consumeFood(amount) {
    console.log(`${this.name} consumes ${amount} units of food.`);
  }

  dailyFoodRequirement() {
    return this.diet === "herbivore" ? 5 : 10;
  }
}

class Zoo {
  constructor() {
    this.animals = [];
  }

  feedAnimals() {
    this.animals.forEach((animal) => {
      let requiredFood = animal.dailyFoodRequirement();
      animal.consumeFood(requiredFood);
    });
  }
}
```

## 2. KISS (Keep It Simple, Stupid)

Принцип KISS наголошує на простоті в дизайні та реалізації. Я зробив так, щоб методи і класи були якомога простіші для збереження читабельності та легкості використання.

### Приклад коду:

Клас Enclosure просто зберігає тварин і має метод для їх годування. Він не містить надмірно складної логіки, а фокусується на своїй основній відповідальності — управлінні тваринами.

```js
class Enclosure {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  getAnimals() {
    return this.animals;
  }

  feedAnimals() {
    this.animals.forEach((animal) => animal.consumeFood(10));
  }
}
```

## 3. SOLID Принципи

a. Принцип єдиної відповідальності (SRP)
Кожен клас має чітку відповідальність. Наприклад, клас Animal займається лише властивостями і поведінкою тварини, тоді як клас Enclosure управляє колекцією тварин.

```js
class Animal {
  constructor(name, diet) {
    this.name = name;
    this.diet = diet;
  }

  consumeFood(amount) {
    console.log(`${this.name} consumes ${amount} units of food.`);
  }
}

class Enclosure {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  feedAnimals() {
    this.animals.forEach(animal => animal.consumeFood(10));
  }
}

b. Принцип відкритості/закритості (OCP)
Код спроектовано так, щоб його можна було легко розширювати, не змінюючи існуючі класи. Нові функціональності, такі як додавання нових типів тварин або корму, можуть бути додані без зміни існуючого коду.

class Food {
  constructor(type) {
    this.type = type;
  }

  use(amount) {
    if (amount <= 0) {
      throw new Error('Not enough food');
    }
    console.log(`Using ${amount} units of ${this.type} food.`);
  }
}

c. Принцип підміни Ліскова (LSP)
Похідні класи повинні бути взаємозамінними з базовими класами. У нашому випадку, цей принцип не застосовується безпосередньо, оскільки в коді не використовується успадкування, але його можна застосувати, якщо ми додамо підкласи для конкретних типів тварин чи кормів у майбутньому.

d. Принцип розділення інтерфейсів (ISP)
Дизайн коду уникає змушення класів реалізовувати непотрібні методи. Наприклад, Animal має лише методи, які стосуються його потреб, такі як consumeFood та getInfo.

class Animal {
  constructor(name) {
    this.name = name;
  }

  consumeFood(amount) {
    console.log(`${this.name} consumes ${amount} units of food.`);
  }
}
```

e. Принцип інверсії залежностей (DIP)
Високорівневі модулі, такі як Zoo, не залежать від низькорівневих модулів, таких як Animal. Обидва залежать від абстракцій, таких як інтерфейси та спільні структури.

```js
class Zoo {
  constructor(animal) {
    this.animal = animal;
  }

  feedAnimals() {
    this.animal.consumeFood(10);
  }
}
```

## 4. YAGNI (You Aren’t Gonna Need It)

Принцип YAGNI заохочує не додавати функціональність, яка не є необхідною. У цьому коді є лише основні методи для управління тваринами, кормом і вольєрами.

```js
class Food {
  constructor(type) {
    this.type = type;
  }

  use(amount) {
    if (amount <= 0) {
      throw new Error("Not enough food");
    }
    console.log(`Using ${amount} units of ${this.type} food.`);
  }
}
```

## 5. Composition Over Inheritance

Замість використання успадкування, у коді використовується композиція для створення відносин між класами. Наприклад, клас Zoo складається з екземплярів класів Enclosure, Food та Employee, а не успадковує їх.

```js
class Zoo {
  constructor() {
    this.enclosures = [];
    this.food = new Food("meat");
  }

  addEnclosure(enclosure) {
    this.enclosures.push(enclosure);
  }
}
```

## 6. Program to Interfaces, Not Implementations

Замість залежності від конкретних реалізацій типів тварин чи кормів, код залежить від поведінки (методів), визначених в класах.

```js
class Zoo {
  constructor() {
    this.animals = [];
  }

  feedAnimals() {
    this.animals.forEach((animal) => animal.consumeFood(10));
  }
}
```

## 7. Fail Fast

Метод use класу Food перевіряє, чи достатньо корму для використання, і якщо умови не виконуються, одразу повідомляє про помилку, запобігаючи подальшим помилкам.

```js
class Food {
  constructor(type) {
    this.type = type;
  }

  use(amount) {
    if (amount <= 0) {
      throw new Error("Not enough food");
    }
    console.log(`Using ${amount} units of ${this.type} food.`);
  }
}
```
