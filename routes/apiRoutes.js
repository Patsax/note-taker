const express = require("express")
const app = express();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const notes = require('../db/db.json');

app.get("/notes", (req, res) => {
    res.json(notes);
});

app.post("/notes", (req, res) => {
    // req.body IS the note i want to save
    const newNote = req.body;
    // uuid(universally unique identifier) for adding an id 
    newNote.id = uuidv4;
    // adds new note file db.json
    notes.push(newNote);
    fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(notes), function (error) {
        if (error) throw error
    });
    res.end();
});

module.exports = app;
