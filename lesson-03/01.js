// code
const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString(colors) {
    return colors.filter(item => item === "черный"
    || item === "красный" || item === "желтый").join('-');
}

console.log(createColorString(colors));
