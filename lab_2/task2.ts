abstract class Device {
  abstract getDescription(): string;
}

class Laptop extends Device {
  getDescription(): string {
    return "Laptop";
  }
}

class Netbook extends Device {
  getDescription(): string {
    return "Netbook";
  }
}

class EBook extends Device {
  getDescription(): string {
    return "EBook";
  }
}

class Smartphone extends Device {
  getDescription(): string {
    return "Smartphone";
  }
}

abstract class DeviceFactory {
  abstract createLaptop(): Device;
  abstract createNetbook(): Device;
  abstract createEBook(): Device;
  abstract createSmartphone(): Device;
}

class IProneFactory extends DeviceFactory {
  createLaptop(): Device {
    return new Laptop();
  }

  createNetbook(): Device {
    return new Netbook();
  }

  createEBook(): Device {
    return new EBook();
  }

  createSmartphone(): Device {
    return new Smartphone();
  }
}

class KiaomiFactory extends DeviceFactory {
  createLaptop(): Device {
    return new Laptop();
  }

  createNetbook(): Device {
    return new Netbook();
  }

  createEBook(): Device {
    return new EBook();
  }

  createSmartphone(): Device {
    return new Smartphone();
  }
}

class BalaxyFactory extends DeviceFactory {
  createLaptop(): Device {
    return new Laptop();
  }

  createNetbook(): Device {
    return new Netbook();
  }

  createEBook(): Device {
    return new EBook();
  }

  createSmartphone(): Device {
    return new Smartphone();
  }
}

function testFactory(factory: DeviceFactory) {
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
