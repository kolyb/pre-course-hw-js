 let passport = {
    name: "Petr",
    surname: "Petrov",
};

let newPassport = {};
newPassport.name = "Ivan";
newPassport.surname = passport.surname;

console.log(passport.name);
console.log(newPassport.name);
