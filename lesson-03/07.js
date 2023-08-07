// code
var numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

function getR(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length;j++) {
            if ((arr[i][j] % 2) !== 0) {
                delete arr[i][j];
            }
        }
        console.log(arr);
    }
}

getR(numbers);