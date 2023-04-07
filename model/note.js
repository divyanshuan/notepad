const fs = require("fs");
const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "note.json"
);

module.exports = class Note {
  constructor(note) {
    this.note = note;
  }
  save() {
    fs.readFile(p, (err, filecontent) => {
      let product = [];
      if (!err) {
        product = JSON.parse(filecontent);
      }
      product.push(this);
      fs.writeFile(p, JSON.stringify(product), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(callback) {
    fs.readFile(p, (err, filecontent) => {
      if (err) {
        callback([]);
      }
      callback(JSON.parse(filecontent));
    });
  }
};
