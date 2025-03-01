class Animal {
  name: string;
  animalType: string;
  diet: string;
  foodConsumed: number;

  constructor(name: string, animalType: string, diet: string) {
    this.name = name;
    this.animalType = animalType;
    this.diet = diet;
    this.foodConsumed = 0;
  }

  getInfo(): string {
    return `${this.name} - ${this.animalType}, тип їжі: ${this.diet}`;
  }

  consumeFood(quantity: number): void {
    this.foodConsumed += quantity;
    console.log(`${this.name} спожила ${quantity} кг корму.`);
  }

  dailyFoodRequirement(): number {
    const dietRequirements: { [key: string]: number } = {
      herbivore: 5,
      carnivore: 7,
      omnivore: 6,
    };
    return dietRequirements[this.diet] || 0;
  }
}

class Enclosure {
  type: string;
  size: string;
  animals: Animal[];

  constructor(type: string, size: string) {
    this.type = type;
    this.size = size;
    this.animals = [];
  }

  addAnimal(animal: Animal): void {
    this.animals.push(animal);
  }

  getAnimals(): string {
    return this.animals.map((animal) => animal.getInfo()).join("\n");
  }

  feedAnimals(): void {
    this.animals.forEach((animal) => {
      const dailyFood = animal.dailyFoodRequirement();
      animal.consumeFood(dailyFood);
    });
  }
}

class Food {
  type: string;
  quantity: number;

  constructor(type: string, quantity: number) {
    this.type = type;
    this.quantity = quantity;
  }

  restock(quantity: number): void {
    this.quantity += quantity;
    console.log(`${this.type} поповнено на ${quantity} кг.`);
  }

  use(quantity: number): void {
    if (this.quantity >= quantity) {
      this.quantity -= quantity;
      console.log(`${this.type} використано ${quantity} кг.`);
    } else {
      console.log(`Недостатньо ${this.type} для витрати.`);
    }
  }
}

class Employee {
  name: string;
  role: string;

  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
  }
}

class Zoo {
  enclosures: Enclosure[];
  foodStock: Food[];
  employees: Employee[];

  constructor() {
    this.enclosures = [];
    this.foodStock = [];
    this.employees = [];
  }

  addEnclosure(enclosure: Enclosure): void {
    this.enclosures.push(enclosure);
  }

  addFood(food: Food): void {
    this.foodStock.push(food);
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  restockFood(type: string, quantity: number): void {
    const food = this.foodStock.find((f) => f.type === type);
    if (food) {
      food.restock(quantity);
    } else {
      console.log(`Корм ${type} не знайдено.`);
    }
  }

  inventory(): void {
    console.log("Дані про зоопарк");
    console.log("Кількість вольєрів: ", this.enclosures.length);
    this.enclosures.forEach((enclosure, index) => {
      console.log(
        `Вольєр ${index + 1} тип тварин(${enclosure.type}, розмір: ${
          enclosure.size
        })`
      );
      console.log(enclosure.getAnimals());
    });
    console.log("Кількість працівників: ", this.employees.length);
    this.employees.forEach((employee) =>
      console.log(`${employee.name} - ${employee.role}`)
    );
    console.log(
      "Запаси корму: ",
      this.foodStock
        .map((food) => `${food.type}: ${food.quantity} кг`)
        .join(", ")
    );
  }
}

export { Animal, Enclosure, Food, Employee, Zoo };
