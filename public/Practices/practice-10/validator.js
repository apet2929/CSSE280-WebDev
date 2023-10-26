const validator = require("validator")

console.log(validator.isEmail("olga@example.com"));
console.log(validator.isEmail('example.com'));
console.log(validator.isURL('example.com'));