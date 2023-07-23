//Создай рандомное число при помощи  
//let number1 = Math.floor(Math.random() * 100)
//а затем проверь их выводя в консоль: «[вставь сюда полученное число] :
//Это четное число» или «[вставь сюда полученное число] :Это нечетное число». С каждой перезагрузкой страницы у
// тебя будет новое число.​
var getRandomNumber = Math.floor(Math.random() * 100);
if (getRandomNumber % 2 == 0) {
    console.log(getRandomNumber, "Это четное число");
}
else console.log(getRandomNumber, "Это нечетное число");