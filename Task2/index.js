const { Animal, Zoo, Employee, Enclosure, Food } = require("../dist/index");

const zoo = new Zoo();

const lion = new Animal("Лев", "Lion", "carnivore");
const elephant = new Animal("Слон", "elephant", "herbivore");
const zebra = new Animal("Зебра", "zebra", "herbivore");
const wolf = new Animal("Вовк", "wolf", "carnivore");
const parrot = new Animal("Папуга", "parrot", "omnivore");

const carnivoreEnclosure = new Enclosure("Хижі", "великий");
const herbivoreEnclosure = new Enclosure("Травоїдні", "середній");
const birdEnclosure = new Enclosure("Птахи", "малий");

carnivoreEnclosure.addAnimal(lion);
carnivoreEnclosure.addAnimal(wolf);
herbivoreEnclosure.addAnimal(elephant);
herbivoreEnclosure.addAnimal(zebra);
birdEnclosure.addAnimal(parrot);

zoo.addEnclosure(carnivoreEnclosure);
zoo.addEnclosure(herbivoreEnclosure);
zoo.addEnclosure(birdEnclosure);

zoo.addFood(new Food("М'ясо", 200));
zoo.addFood(new Food("Фрукти", 150));
zoo.addFood(new Food("Зерно", 100));
zoo.addFood(new Food("Сіно", 300));

zoo.addEmployee(new Employee("Іван Іванов", "Доглядач хижаків"));
zoo.addEmployee(new Employee("Петро Петрович", "Доглядач травоїдних"));
zoo.addEmployee(new Employee("Олександр Олександрович", "Доглядач птахів"));
zoo.addEmployee(new Employee("Олексій Олексійович", "Головний ветеринар"));

zoo.inventory();

console.log("\nКількість корму для кожної тварини на день:");
zoo.enclosures.forEach((enclosure) => {
  console.log(`\nВольєр: ${enclosure.type}`);
  enclosure.animals.forEach((animal) => {
    console.log(
      `${
        animal.name
      } потребує ${animal.dailyFoodRequirement()} кг корму на день.`
    );
  });
});
