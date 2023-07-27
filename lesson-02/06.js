let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let getNewPassport = deepClone(passportWithAddress);

function deepClone(oldObj) {
    let newObj = {};
    for (let key in oldObj) {
        if (typeof oldObj[key] === 'object'
            && oldObj[key] !== null) {
            newObj[key] = deepClone(oldObj[key]);
            continue;
        }
        newObj[key] = oldObj[key];
    }
    return newObj;
}

getNewPassport.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);
console.log(getNewPassport.address.city);