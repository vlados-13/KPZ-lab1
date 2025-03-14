"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zoo = exports.Employee = exports.Food = exports.Enclosure = exports.Animal = void 0;
class Animal {
    constructor(name, animalType, diet) {
        this.name = name;
        this.animalType = animalType;
        this.diet = diet;
        this.foodConsumed = 0;
    }
    getInfo() {
        return `${this.name} - ${this.animalType}, тип їжі: ${this.diet}`;
    }
    consumeFood(quantity) {
        this.foodConsumed += quantity;
        console.log(`${this.name} спожила ${quantity} кг корму.`);
    }
    dailyFoodRequirement() {
        const dietRequirements = {
            herbivore: 5,
            carnivore: 7,
            omnivore: 6,
        };
        return dietRequirements[this.diet] || 0;
    }
}
exports.Animal = Animal;
class Enclosure {
    constructor(type, size) {
        this.type = type;
        this.size = size;
        this.animals = [];
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
    getAnimals() {
        return this.animals.map((animal) => animal.getInfo()).join("\n");
    }
    feedAnimals() {
        this.animals.forEach((animal) => {
            const dailyFood = animal.dailyFoodRequirement();
            animal.consumeFood(dailyFood);
        });
    }
}
exports.Enclosure = Enclosure;
class Food {
    constructor(type, quantity) {
        this.type = type;
        this.quantity = quantity;
    }
    restock(quantity) {
        this.quantity += quantity;
        console.log(`${this.type} поповнено на ${quantity} кг.`);
    }
    use(quantity) {
        if (this.quantity >= quantity) {
            this.quantity -= quantity;
            console.log(`${this.type} використано ${quantity} кг.`);
        }
        else {
            console.log(`Недостатньо ${this.type} для витрати.`);
        }
    }
}
exports.Food = Food;
class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}
exports.Employee = Employee;
class Zoo {
    constructor() {
        this.enclosures = [];
        this.foodStock = [];
        this.employees = [];
    }
    addEnclosure(enclosure) {
        this.enclosures.push(enclosure);
    }
    addFood(food) {
        this.foodStock.push(food);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    restockFood(type, quantity) {
        const food = this.foodStock.find((f) => f.type === type);
        if (food) {
            food.restock(quantity);
        }
        else {
            console.log(`Корм ${type} не знайдено.`);
        }
    }
    inventory() {
        console.log("Дані про зоопарк");
        console.log("Кількість вольєрів: ", this.enclosures.length);
        this.enclosures.forEach((enclosure, index) => {
            console.log(`Вольєр ${index + 1} тип тварин(${enclosure.type}, розмір: ${enclosure.size})`);
            console.log(enclosure.getAnimals());
        });
        console.log("Кількість працівників: ", this.employees.length);
        this.employees.forEach((employee) => console.log(`${employee.name} - ${employee.role}`));
        console.log("Запаси корму: ", this.foodStock
            .map((food) => `${food.type}: ${food.quantity} кг`)
            .join(", "));
    }
}
exports.Zoo = Zoo;
