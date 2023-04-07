const Note = require("../model/note");
// const path = require("path");

exports.getAddNotes = (req, res, next) => {
  res.render("addnote");
};
exports.postAddNotes = (req, res, next) => {
  const note = new Note(req.body.notetext);
  note.save();
  res.render("addnote");
};
exports.getDisplayNotes = (req, res, next) => {
  Note.fetchAll((data) => {
    res.render("displaynotes", { mydata: data });
  });
};
