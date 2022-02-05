const db = require('../db');

const controller = {
  students: {
    getStudents: function (req, res) {
      // TODO: add your code here to fetch all students
      var queryStr = 'SELECT * FROM students JOIN images ON students.id = images.id';
      var queryArgs = [];

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
      var queryStr = 'INSERT INTO students (name) VALUES (?)';
      var queryArgs = [req.body.name];   // make sure this is the right req path
      // console.log(queryArgs);
      db.query(queryStr, queryArgs, (err, results) => {
        if (err) {
          res.status(404).send(err);
        } else {
          res.status(201).send(results);
        }
      })
    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name
      var queryStr = 'UPDATE students SET name=(?) WHERE id=(?)';
      var queryArgs = [req.body.name, req.params.id];   // make sure this is the right req path
      console.log('params ', req.params);
      db.query(queryStr, queryArgs, (err, results) => {
        if (err) {
          res.status(404).send(err);
        } else {
          res.status(202).send(results);
        }
      });
    }
  },
  images: {
    postImg: function (req, res) {
      // TODO: add your code here to add a student image
      var queryStr = 'INSERT INTO images (imgurl) VALUES (?)';
      var queryArgs = [req.body.image];  // make sure this is the right req path

      db.query(queryStr, queryArgs, (err, results) => {
        if (err) {
          res.status(404).send(err);
        } else {
          res.status(203).send(results);
        }
      })
    }
  }
};

module.exports = controller;