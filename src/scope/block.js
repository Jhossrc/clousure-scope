let fruit2 = 'pineapple'

const fruits = () => {

    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Banana';
        const fruit3 = 'Strawberry';

        console.log(fruit3);
    }

    console.log(fruit1);
    console.log(fruit2);

}

fruits();


// Ejemplo 2

var x = 1;

{
    var x = 2;
    console.log(x);
}

console.log(x);

// Ejemplo 3

const anotherFunction = () => {
    for (var i = 0; i < 10; i++) {
        console.log("# ", i);
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

anotherFunction();