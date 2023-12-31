const fs = require('fs')
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => {
    note.title === title;
  });

  if(duplicateNotes.length == 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
  }
  
};

const getNotes = function () {
  return "Your notes ..";
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
};
