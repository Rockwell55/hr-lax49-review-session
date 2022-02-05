const db = require('../db');

const controller = {
  students: {
    getStudents: function (req, res) {
      // TODO: add your code here to fetch all students
      queryStr = 'SELECT * FROM students';
      queryArgs = [];

      db.query(queryStr, queryArgs, (err, results) => {
        if (err) {
          res.status(404).send(err);
        } else {
          res.status(200).send(results);
        }
      });
    },
    postName: function (req, res) {
      // TODO: add your code here to add a student's name

    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name

    }
  },
  images: {
    postImg: function (req, res) {
      // TODO: add your code here to add a student image

    }
  }
};

module.exports = controller;