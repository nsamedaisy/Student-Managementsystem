let express = require("express");
let app = express();
app.listen(7000);
const bodyparser = require("body-parser");

let students = [
  {
    id: 1,
    name: "JohnWalker",
    age: 25,
    level: 400,
  },
  {
    id: 2,
    name: "MilletDoe",
    age: 23,
    level: 300,
  },
  {
    id: 3,
    name: "EposiMeel",
    age: 22,
    level: 200,
  },
  {
    id: 4,
    name: "Grace",
    age: 25,
    level: 500,
  },
  {
    id: 5,
    name: "AtiyaCupta",
    age: 20,
    level: 200,
  },
];

//callbacks
let getStudents = (req, res) => {
  res.json(students);
};

let getStudentById = (req, res) => {
  let { id } = req.params;
  let studentId = students.filter((student) => {
    return student.id == id;
  });
  res.json(studentId);
};

let deleteStudent = (req, res) => {
  let { id } = req.params;
  students = students.filter((student) => {
    return student.id != id;
  });
  res.json(students);
};

let createStudent = (req, res) => {
  let newStudent = {
    id: Date.parse(new Date()),
    ...req.body,
  };
  students.push(newStudent);
  res.json(students);
};

let updateStudent = (req, res) => {
  requestedId = 1;
  let student = students.find((student) => student.id == requestedId);
  student.name = req.body.name;
  student.age = req.body.age;
  student.level = req.body.level;

  student = students.filter((student) => {});
  res.json(students);
};

//middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//routes
app.get("/students", getStudents);
app.get("/students/:id", getStudentById);
app.get("/students/delete/:id", deleteStudent);
app.post("/students/create", createStudent);
app.post("/students/update", updateStudent);
