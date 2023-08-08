// code
var numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];
var newAr = [
    [0, 0],
    [0, 0],
    [0, 0],
];
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
        if (numbers[i][j] === 2) {
            newAr[0][0] = numbers[i][j];
        } else if (numbers[i][j] === 4) {
            newAr[0][1] = numbers[i][j];
        } else if (numbers[i][j] === 20) {
            newAr[1][0] = numbers[i][j];
        } else if (numbers[i][j] === 40) {
            newAr[1][1] = numbers[i][j];
        } else if (numbers[i][j] === 200) {
            newAr[2][0] = numbers[i][j];
        } else if (numbers[i][j] === 400) {
            newAr[2][1] = numbers[i][j];
        }
    }
}

numbers = newAr;
console.log(numbers);