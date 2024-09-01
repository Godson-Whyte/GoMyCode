// class Animal {
//     speak() {
//         console.log('This animal makes a noise.');
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log('This dog barks.');
//     }
// }

// const animals = [new Animal(), new Dog()];
// animals.forEach(animal => animal.speak());
// //Output:
// //This animal makes a noise.
// //This dog barks.

//Abstraction
class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new TypeError("Cannot construct Animal instances directly");
        }
        this.name = name;
    }

    speak() {
        throw new Error('You have to implement the method speak!');
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }
}

const dog = new Animal('Buddy');
dog.speak(); //Buddy barks.