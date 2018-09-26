const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if(command === 'add')
{
  var note=notes.addNote(argv.title,argv.body);
  if(note)
  {
    console.log("Note added");
    notes.logNote(note);
  }else
  {
    console.log('Duplicate title found');
  }

}

else if (command ==='list')
{
  var allNotes=notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => {
    notes.logNote(note);
  });

}

else if(command==='read')
{
  var readNote = notes.getNote(argv.title);
  if(readNote)
  {
    notes.logNote(readNote);
  }else
  {
    console.log('Note not found');
  }
}

else if (command==='remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}
else if (command === 'update') {
  var updatedNote = notes.updateNote(argv.title,argv.body);
  if(updatedNote)
  {
    console.log('Updated Note');
    notes.logNote(updatedNote);
  }
  else
  {
    console.log('No notes found');
  }
}
else
{
  console.log('Command not recognised');
}
