// scope to avoid trying to overwrite const
{
    function multiply(x, y){
        return x*y;
    }

    function isEven(num){
        return num % 2 == 0;
    }

    function subtract(a, b) {
        return b - a;
    }

    const calculate = function(x, y) {
        return (x+y)**2;
    }

    function average(num1, num2, num3) {
        return (num1 + num2 + num3) / 3
    }
}

// Q7
{
    const multiply = (a,b) => {
        return a * b;
    }
    const greet = (name) => {
        return `Hello, ${name}`
    }

    const square = (x) => {
        return x*x;
    }

    const isEven = (num) => {
        return num % 2 === 0;
    }

    const findMax = (numbers) => {
        return Math.max(...numbers);
    }

    const addTwoNumbers = (a, b) => {
        return a + b;
    }
}
