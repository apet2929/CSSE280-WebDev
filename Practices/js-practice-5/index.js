document.getElementById("demo").style.fontSize = "35px"; 
document.getElementById("demo2").style.display = "none"; 
document.getElementById("demo").style.display = "block"; 

// This is a comment
/*
this is a 
multiline comment
*/

let x = 5
x += 10
console.log(x)

var z = 503.12 + 3
let $a, _b, c = "abc"
c *= 3
console.log(c)

let z = 4
z <<= 2
console.log(z)

let _ = {
    "[": 0,
    "a": {
        "b": [1,2,3]
    }
}
console.log(_)

const y = 10
try{
    y = 20
} catch {
    console.log("can't assign to const var")
}

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

myFunction()