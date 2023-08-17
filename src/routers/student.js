const express = require("express");
const router = new express.Router();
const Student = require("../models/studentsSchema");

// define the router

// using async and await
router.post("/students", async (req, res) => {
    try {
      const user = new Student(req.body);
      const createUser = await user.save();
      res.status(201).send(createUser);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  // read the data of all students
  router.get("/students", async (req, res) => {
    try {
      const studentsData = await Student.find();
      res.send(studentsData);
    } catch (err) {
      res.send(err);
    }
  });
  
  // get the individual student data
  router.get("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const studentData = await Student.findById({ _id });
  
      if (!studentData) {
        return res.status(404).send();
      } else {
        res.send(studentData);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  // update the students data by id
  router.patch("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const updateStudents = await Student.findByIdAndUpdate({ _id }, req.body, {
        new: true,
      });
      res.send(updateStudents);
    } catch (err) {
      res.status(404).send(err);
    }
  });
  
  // delete students data
  router.delete("/students/:id", async (req, res) => {
    try {
      const deleteStudents = await Student.findByIdAndDelete(req.params.id);
      if (!req.params.id) {
        return res.status(400).send(err);
      }
      res.send(deleteStudents);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  // you do not need express.json() and express.urlencoded() for GET requests or DELETE requests requests. we only need it for POST and PUT req
  
  // express.json() is method inbuilt in express to recognize the incoming  req obj as an JSON object . this method is called a middleware in your application using the code : app.use(express.json())
  

module.exports = router;