console.log("Q1");
for(let i = 2; i <= 10; i+=2) {
    console.log(i);
}

console.log("Q2");
for (let i = 5; i > 0; i--) {
    console.log(i);
}

console.log("Q3");
let sum = 0;
for (const i of [1,2,3,4,5]) {
    sum += i;
}
console.log(sum);

console.log("Q4");
const obj = {name: "John", age: 20, grade: 'A'}
for (const key in obj) {
    console.log(key);
}

console.log("Q5");
const book = { title: 'Harry Potter', author: 'J.K. Rowling', year: 1997 };
for (const key in book) {
    const element = book[key];
    console.log(element);    
}

console.log("Q6");
const colors = ['red', 'green', 'blue', 'yellow'];
for (const color of colors) {
    console.log(color);
}

console.log("Q7");
let sum2 = 0;
const numbers = [1, 2, 3, 4, 5];
for (const i of numbers) {
    sum2 += i;
}
console.log(sum2);


console.log("Q8");
const temperatures = [32, 68, 75, 82, 56];
for (const temperature of temperatures) {
    console.log(temperature * 5/9);
}

console.log("Q9");
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
const populations = { 'New York': 8398748, 'Los Angeles': 3990456, 'Chicago': 2705994, 'Houston': 2320268 };
cities.forEach(city => {
    console.log(populations[city])
});

console.log("Q10");
let str = "*\n**\n***\n****\n*****"
let valid = true;
for (let i = 0; i < str.split("\n").length; i++) {
    const re = new RegExp(`^\\*{${i+1}}$`) // match start of string then (i+1) stars then end of string 
    if(!re.exec(str.split("\n")[i])){
        valid = false;
    }
}
if(valid){
    console.log("Valid thai pattern")
} else {
    console.log("Invalid thai patten");
}

