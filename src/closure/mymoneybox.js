/*function moneyBox(coins){
    let saveCoins = 0;

    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
}


moneyBox(5);
moneyBox(5);
*/ 
// LO DE ARRIBA NO RECUERDA DENTRO DEL ÁMBITO LÉXICO

function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins+=coins;
        console.log(`MoneyBox: ${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(30);

