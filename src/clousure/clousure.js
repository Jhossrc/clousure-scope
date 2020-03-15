// Ejemplo 1 - Alcancía

const moneyBox = (coins) => {
        var saveCoins = 0;
        saveCoins += coins;
        console.log(`moneyBox: $${saveCoins}`);
    }
    // No hay clousure


moneyBox(5);
moneyBox(10);

// Ejemplo 2 

const moneyBox2 = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox : $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox2();

myMoneyBox(4); // 4
myMoneyBox(6); // 10
myMoneyBox(10); // 20