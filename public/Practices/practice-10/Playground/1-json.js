const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON)

const bookParsed = JSON.parse(bookJSON)
console.log(bookParsed.title)

const fs = require('fs');
fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json'); 
const dataJSON = dataBuffer.toString();
console.log(dataJSON);
const data = JSON.parse(dataBuffer);
console.log(data);
