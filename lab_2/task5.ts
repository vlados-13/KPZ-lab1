interface CharacterBuilder {
  setName(name: string): this;
  setHeight(height: number): this;
  setBodyType(bodyType: string): this;
  setHairColor(hairColor: string): this;
  setEyeColor(eyeColor: string): this;
  setClothing(clothing: string): this;
  addInventory(item: string): this;
  addSpecialAction(action: string): this;
  build(): Character;
}

class Character {
  name!: string;
  height!: number;
  bodyType!: string;
  hairColor!: string;
  eyeColor!: string;
  clothing!: string;
  inventory: string[] = [];
  deeds: string[] = [];
  specialActions: string[] = [];

  describe(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Height: ${this.height} cm`);
    console.log(`Body Type: ${this.bodyType}`);
    console.log(`Hair Color: ${this.hairColor}`);
    console.log(`Eye Color: ${this.eyeColor}`);
    console.log(`Clothing: ${this.clothing}`);
    console.log(
      `Inventory: ${
        this.inventory.length ? this.inventory.join(", ") : "Empty"
      }`
    );
    console.log(`Deeds: ${this.deeds.length ? this.deeds.join(", ") : "None"}`);
    console.log(
      `Special Actions: ${
        this.specialActions.length ? this.specialActions.join(", ") : "None"
      }\n`
    );
  }
}

class HeroBuilder implements CharacterBuilder {
  private character: Character;

  constructor() {
    this.character = new Character();
  }

  setName(name: string): this {
    this.character.name = name;
    return this;
  }

  setHeight(height: number): this {
    this.character.height = height;
    return this;
  }

  setBodyType(bodyType: string): this {
    this.character.bodyType = bodyType;
    return this;
  }

  setHairColor(hairColor: string): this {
    this.character.hairColor = hairColor;
    return this;
  }

  setEyeColor(eyeColor: string): this {
    this.character.eyeColor = eyeColor;
    return this;
  }

  setClothing(clothing: string): this {
    this.character.clothing = clothing;
    return this;
  }

  addInventory(item: string): this {
    this.character.inventory.push(item);
    return this;
  }

  addGoodDeed(deed: string): this {
    this.character.deeds.push(deed);
    return this;
  }

  addSpecialAction(action: string): this {
    this.character.specialActions.push(action);
    return this;
  }

  build(): Character {
    return this.character;
  }
}

class EnemyBuilder implements CharacterBuilder {
  private character: Character;

  constructor() {
    this.character = new Character();
  }

  setName(name: string): this {
    this.character.name = name;
    return this;
  }

  setHeight(height: number): this {
    this.character.height = height;
    return this;
  }

  setBodyType(bodyType: string): this {
    this.character.bodyType = bodyType;
    return this;
  }

  setHairColor(hairColor: string): this {
    this.character.hairColor = hairColor;
    return this;
  }

  setEyeColor(eyeColor: string): this {
    this.character.eyeColor = eyeColor;
    return this;
  }

  setClothing(clothing: string): this {
    this.character.clothing = clothing;
    return this;
  }

  addInventory(item: string): this {
    this.character.inventory.push(item);
    return this;
  }

  addEvilDeed(deed: string): this {
    this.character.deeds.push(deed);
    return this;
  }

  addSpecialAction(action: string): this {
    this.character.specialActions.push(action);
    return this;
  }

  build(): Character {
    return this.character;
  }
}

class CharacterDirector {
  static createHero(builder: HeroBuilder): Character {
    return builder
      .setName("Герой")
      .setHeight(185)
      .setBodyType("Спортивний")
      .setHairColor("Темний")
      .setEyeColor("Зелений")
      .setClothing("Лицарські обладунки")
      .addInventory("Меч")
      .addInventory("Щит")
      .addGoodDeed("Врятував село від дракона")
      .addSpecialAction("Атакує ворога мечом")
      .build();
  }

  static createEnemy(builder: EnemyBuilder): Character {
    return builder
      .setName("Злодій")
      .setHeight(175)
      .setBodyType("Худорлявий")
      .setHairColor("Чорний")
      .setEyeColor("Червоний")
      .setClothing("Чорний плащ")
      .addInventory("Палиця")
      .addInventory("Книга Чорної Магії")
      .addEvilDeed("Знищив ціле місто магією")
      .addSpecialAction("Викликає темних духів")
      .build();
  }
}

const hero = CharacterDirector.createHero(new HeroBuilder());
const enemy = CharacterDirector.createEnemy(new EnemyBuilder());

console.log("Герой:");
hero.describe();

console.log("Ворог:");
enemy.describe();
