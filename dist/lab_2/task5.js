"use strict";
class Character {
    constructor() {
        this.inventory = [];
        this.deeds = [];
        this.specialActions = [];
    }
    describe() {
        console.log(`Name: ${this.name}`);
        console.log(`Height: ${this.height} cm`);
        console.log(`Body Type: ${this.bodyType}`);
        console.log(`Hair Color: ${this.hairColor}`);
        console.log(`Eye Color: ${this.eyeColor}`);
        console.log(`Clothing: ${this.clothing}`);
        console.log(`Inventory: ${this.inventory.length ? this.inventory.join(", ") : "Empty"}`);
        console.log(`Deeds: ${this.deeds.length ? this.deeds.join(", ") : "None"}`);
        console.log(`Special Actions: ${this.specialActions.length ? this.specialActions.join(", ") : "None"}\n`);
    }
}
class HeroBuilder {
    constructor() {
        this.character = new Character();
    }
    setName(name) {
        this.character.name = name;
        return this;
    }
    setHeight(height) {
        this.character.height = height;
        return this;
    }
    setBodyType(bodyType) {
        this.character.bodyType = bodyType;
        return this;
    }
    setHairColor(hairColor) {
        this.character.hairColor = hairColor;
        return this;
    }
    setEyeColor(eyeColor) {
        this.character.eyeColor = eyeColor;
        return this;
    }
    setClothing(clothing) {
        this.character.clothing = clothing;
        return this;
    }
    addInventory(item) {
        this.character.inventory.push(item);
        return this;
    }
    addGoodDeed(deed) {
        this.character.deeds.push(deed);
        return this;
    }
    addSpecialAction(action) {
        this.character.specialActions.push(action);
        return this;
    }
    build() {
        return this.character;
    }
}
class EnemyBuilder {
    constructor() {
        this.character = new Character();
    }
    setName(name) {
        this.character.name = name;
        return this;
    }
    setHeight(height) {
        this.character.height = height;
        return this;
    }
    setBodyType(bodyType) {
        this.character.bodyType = bodyType;
        return this;
    }
    setHairColor(hairColor) {
        this.character.hairColor = hairColor;
        return this;
    }
    setEyeColor(eyeColor) {
        this.character.eyeColor = eyeColor;
        return this;
    }
    setClothing(clothing) {
        this.character.clothing = clothing;
        return this;
    }
    addInventory(item) {
        this.character.inventory.push(item);
        return this;
    }
    addEvilDeed(deed) {
        this.character.deeds.push(deed);
        return this;
    }
    addSpecialAction(action) {
        this.character.specialActions.push(action);
        return this;
    }
    build() {
        return this.character;
    }
}
class CharacterDirector {
    static createHero(builder) {
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
    static createEnemy(builder) {
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
