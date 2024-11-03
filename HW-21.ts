// Задание 1

abstract class Animal {
    abstract makeSound(): string; 
}

class Dog extends Animal {
    makeSound(): string {
        return "Bark"; 
    }
}

class Cat extends Animal {
    makeSound(): string {
        return "Meow"; 
    }
}

const animals: Animal[] = [new Dog(), new Cat()];


// Задание 2

abstract class Shape {
    abstract calculateArea(): number; 
}

abstract class ColoredShape extends Shape {
    abstract color: string; 
}
class ColoredCircle extends ColoredShape {
    radius: number;
    color: string;

    constructor(radius: number, color: string) {
        super();
        this.radius = radius;
        this.color = color;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class ColoredRectangle extends ColoredShape {
    width: number;
    height: number;
    color: string;

    constructor(width: number, height: number, color: string) {
        super();
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calculateArea(): number {
        return this.width * this.height; 
    }
}

// Задание 3

abstract class Appliance {
    abstract turnOn(): void;
    abstract turnOff(): void; 
}

class WashingMachine extends Appliance {
    turnOn(): void {
        console.log("Washing Machine is now ON");
    }
    
    turnOff(): void {
        console.log("Washing Machine is now OFF");
    }
}

class Refrigerator extends Appliance {
    turnOn(): void {
        console.log("Refrigerator is now ON");
    }

    turnOff(): void {
        console.log("Refrigerator is now OFF");
    }
}

// Создание массива типа Appliance[]
const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];

// Задание 4

abstract class Account {
    abstract deposit(amount: number): void; 
    abstract withdraw(amount: number): void; 
}

class SavingsAccount extends Account {
    private balance: number = 0; 

    deposit(amount: number): void {
        this.balance += amount; 
        console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount; 
            console.log(`Withdrew: ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }
}

class CheckingAccount extends Account {
    private balance: number = 0;
    private fee: number = 2;

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount + this.fee <= this.balance) {
            this.balance -= (amount + this.fee); 
            console.log(`Withdrew: ${amount}. Fee: ${this.fee}. New balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }
}


// Задание 5

abstract class Media {
    abstract play(): void; 
}

class MyAudio extends Media {
    play(): void {
        console.log("Playing audio"); 
    }
}

class Video extends Media {
    play(): void {
        console.log("Playing video"); 
    }
}

const mediaItems: Media[] = [new MyAudio(), new Video()];
