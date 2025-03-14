"use strict";
class Virus {
    constructor(name, species, weight, age) {
        this.name = name;
        this.species = species;
        this.weight = weight;
        this.age = age;
        this.children = [];
    }
    addChild(child) {
        this.children.push(child);
    }
    clone() {
        const clonedVirus = new Virus(this.name, this.species, this.weight, this.age);
        clonedVirus.children = this.children.map((child) => child.clone());
        return clonedVirus;
    }
    geInfo() {
        console.log(`${this.name}, вид: ${this.species}, вага: ${this.weight}г, вік: ${this.age} днів`);
        if (this.children.length > 0) {
            console.log(`Цей вірус має ${this.children.length} дітей:`);
            this.children.forEach((child) => child.geInfo());
        }
        else {
            console.log("Цей вірус не має дітей.");
        }
    }
}
const virus1 = new Virus("Virus A", "Viral 1", 100, 5);
const virus2 = new Virus("Virus B", "Viral 2", 80, 3);
const virus3 = new Virus("Virus C", "Viral 3", 120, 4);
const virus4 = new Virus("Virus D", "Viral 4", 120, 4);
virus1.addChild(virus2);
virus2.addChild(virus3);
virus1.addChild(virus4);
const clonedVirus1 = virus1.clone();
console.log("Оригінальний Virus A:");
virus1.geInfo();
console.log("\nКлонований Virus A:");
clonedVirus1.geInfo();
