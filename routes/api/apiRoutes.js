const router = require("express").Router();
const fs = require('fs');
const notes = require('../../db/db.json')

router.get("/api/notes", (req, res) => {
    res.json(notes);
});

router.post("/api/notes", (req, res) => {
    req.body;
})

module.exports = router;
