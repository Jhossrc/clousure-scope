var hello = 'Hello';
var hello = 'Hello +'
let world = 'World';
let world = 'World +'
const helloWorld = 'Hello World!'

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();



const helloWorld = () => {
    globalVar = 'I am global'
}

helloWorld();
console.log(globalVar);

const anotherFunction2 = () => {
    var localVar = globalVar = 'I am Global !';
}

anotherFunction2();
console.log(globalVar);