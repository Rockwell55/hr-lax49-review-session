const db = require('../db');

const controller = {
  students: {
    getStudents: function (req, res) {
      // TODO: add your code here to fetch all students
      var queryStr = `SELECT * FROM students INNER JOIN images ON students.id = images.id`;
      db.query(queryStr, (err, data) => {
        if (err) {
          res.status(404).send(err)
        } else {
          res.status(200).send(data);
        }
      })
    },
    postName: function (req, res) {
      // TODO: add your code here to add a student's name
      var { name } = req.body;
      var queryStr = `INSERT INTO students (name) VALUES ("${ name }")`;
      db.query(queryStr, (err) => {
        if (err) {
          res.status(404).send(err)
        } else {
          res.status(201).send(`Successfully inserted name into DB!`)
        }
      })

    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name
      var { newName } = req.body;
      var { id } = req.params
      var queryStr = `UPDATE students SET name = "${ newName }" WHERE id = ${ id }`

      db.query(queryStr, (err) => {
        if (err) {
          res.status(404).send(err)
        } else {
          res.status(200).send(`Successfully updated name!`)
        }
      })
    }
  },
  images: {
    postImg: function (req, res) {
      // TODO: add your code here to add a student image
      var queryStr = `INSERT INTO images (imgurl) VALUES("${req.body.imgurl}")`;
      db.query(queryStr, (err) => {
        if (err) {
          res.status(404).send(err)
        } else {
          res.status(200).send('Successfully inserted into DB!')
        }
      })
    }
  }
};

module.exports = controller;