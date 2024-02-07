"use strict";
//tipos basicos de ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// numeros:
const numero = 20;
console.log(typeof numero);
console.log(numero);
// strings:
const nome = "Fabio";
console.log(typeof nome);
console.log(nome);
// objetos: 
const array = [1, 2, 3];
console.log(typeof array);
console.log(array);
// tuplas:
let tupla;
tupla = [5, "test", ["a", "b"]];
// objetos literais ou object literals -> {chave: valor}
const user = {
    nome: "Fabio",
    idade: 18,
};
console.log(user);
console.log(user.nome);
console.log(user.idade);
// any - aceita qualquer valor
let a = 0;
a = "teste";
a = true;
a = [];
// union type
let id = "10";
id = 200;
const userId = 10;
const produtoId = "0001";
const shirId = 123;
// enum
//tamanho de roupas
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola v",
    size: Size.G,
};
console.log(camisa);
// literal types 
let teste;
teste = "algumvalor";
teste = null;
// function
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHello(name) {
    return `Helll ${name}`;
}
console.log(sayHello('Fabio'));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("Fábio");
greeting("Fábio", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 3 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10,
};
console.log(multiplyNumbers(someNumbers));
// narrowing
// checagem tipos 
function facaAlgo(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado como número");
}
facaAlgo(5);
facaAlgo(true);
// generics 
function arrayItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
arrayItems(a1);
arrayItems(a2);
// classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Idade do usuário é ${this.role}`);
            return;
        }
        console.log("Informação restrita!");
    }
}
const fabio = new User("Fábio", "Admin", true);
console.log(fabio);
fabio.showUserName();
fabio.showUserRole(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
// heranca
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
// decorators 
// constructor decorators
function baseParemetros() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    baseParemetros()
], Person);
const sam = new Person("sam");
console.log(sam);
