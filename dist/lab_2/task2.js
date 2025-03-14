"use strict";
class Device {
}
class Laptop extends Device {
    getDescription() {
        return "Laptop";
    }
}
class Netbook extends Device {
    getDescription() {
        return "Netbook";
    }
}
class EBook extends Device {
    getDescription() {
        return "EBook";
    }
}
class Smartphone extends Device {
    getDescription() {
        return "Smartphone";
    }
}
class DeviceFactory {
}
class IProneFactory extends DeviceFactory {
    createLaptop() {
        return new Laptop();
    }
    createNetbook() {
        return new Netbook();
    }
    createEBook() {
        return new EBook();
    }
    createSmartphone() {
        return new Smartphone();
    }
}
class KiaomiFactory extends DeviceFactory {
    createLaptop() {
        return new Laptop();
    }
    createNetbook() {
        return new Netbook();
    }
    createEBook() {
        return new EBook();
    }
    createSmartphone() {
        return new Smartphone();
    }
}
class BalaxyFactory extends DeviceFactory {
    createLaptop() {
        return new Laptop();
    }
    createNetbook() {
        return new Netbook();
    }
    createEBook() {
        return new EBook();
    }
    createSmartphone() {
        return new Smartphone();
    }
}
function testFactory(factory) {
    const laptop = factory.createLaptop();
    const netbook = factory.createNetbook();
    const ebook = factory.createEBook();
    const smartphone = factory.createSmartphone();
    console.log(laptop.getDescription());
    console.log(netbook.getDescription());
    console.log(ebook.getDescription());
    console.log(smartphone.getDescription());
}
console.log("IProne Devices:");
testFactory(new IProneFactory());
console.log("\nKiaomi Devices:");
testFactory(new KiaomiFactory());
console.log("\nBalaxy Devices:");
testFactory(new BalaxyFactory());
