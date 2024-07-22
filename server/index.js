const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require('./models/Employee')

const app = express();
app.use(express.json());
app.use(cors());
app.post('/register', (req, res) => {
})
mongoose.connect("mongodb+srv://meitsfemina:2432003@cluster0.mrfuflk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/employee");

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees >res.json (employees))
    .catch(err=> res.json(err))
    })
    
    app.listen(3001, () => {
  console.log("server is running");
});
