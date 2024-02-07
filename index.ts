//tipos basicos de ts

// numeros:

const numero: number = 20;
console.log(typeof numero);
console.log(numero)

// strings:

const nome: string = "Fabio";
console.log(typeof nome);
console.log(nome);

// objetos: 

const array: number[] = [1, 2, 3];
console.log(typeof array);
console.log(array);

// tuplas:

let tupla: [number, string, string[]];

tupla = [5, "test", ["a", "b"]];

// objetos literais ou object literals -> {chave: valor}

const user: { nome: string; idade: number; } = {
    nome: "Fabio",
    idade: 18,
};

console.log(user);
console.log(user.nome);
console.log(user.idade);

// any - aceita qualquer valor

let a:any = 0

a = "teste";
a = true;
a = [];

// union type

let id: string | number = "10"

id = 200

// type alias

type idType = number | string

const userId: idType = 10
const produtoId: idType = "0001"
const shirId: idType = 123

// enum

//tamanho de roupas

enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
}

const camisa = {
    name: "Camisa gola v",
    size: Size.G,
}

console.log(camisa);

// literal types 

let teste: "algumvalor" | null

teste = "algumvalor";
teste = null;

// function

function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(12, 12));

function sayHello(name: string) {
    return `Helll ${name}`;
}

console.log(sayHello('Fabio'));

function logger(msg: string): void {
    console.log(msg);
}

logger("Teste!");

function greeting(name: string, greet?: string) {
    if(greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`)
}

greeting("Fábio");
greeting("Fábio", "Sir");

// interface

interface MathFunc {
    n1: number,
    n2: number,
}

function sumNumbers(nums: MathFunc) {
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({n1: 1, n2: 3}));

function multiplyNumbers(nums: MathFunc) {
    return nums.n1 * nums.n2
}

const someNumbers:MathFunc = {
    n1: 5,
    n2: 10,
}

console.log(multiplyNumbers(someNumbers));

// narrowing
// checagem tipos 

function facaAlgo(info: number | boolean) {
    if(typeof info === "number") {
        console.log(`O número é ${info}`);
        return
    }
    console.log("Não foi passado como número");
}

facaAlgo(5);
facaAlgo(true);

// generics 

function arrayItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    });
}

const a1 = [1, 2, 3]
const a2 = ["a", "b", "c"]

arrayItems(a1);
arrayItems(a2);

// classes

class User {

    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow: boolean) {
        if(canShow) {
            console.log(`Idade do usuário é ${this.role}`);
            return;
        }
        console.log("Informação restrita!");
    }

}

const fabio = new User("Fábio", "Admin", true)

console.log(fabio);

fabio.showUserName();

fabio.showUserRole(false);

// interfaces em classes

interface Ivehicle {
    brand: string
    showBrand(): void
}

class Car implements Ivehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}

const fusca = new Car("VW", 4)

fusca.showBrand();

// heranca

class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)

console.log(a4);

a4.showBrand();

// decorators 

// constructor decorators

function baseParemetros() {
    return function <T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}

@baseParemetros()

class Person {
    name

    constructor(name: string) {
        this.name = name
    }
}

const sam = new Person("sam");

console.log(sam);