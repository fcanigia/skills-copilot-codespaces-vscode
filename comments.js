// Create web server
// Create API
// Create DB
// Create Comment Schema
// Create Comment Model
// Create Comment CRUD
// Create API
// Create front-end
// Create front-end CRUD
// Create front-end interface
// Create front-end logic
// Create front-end styles
// Create front-end API
// Create front-end validation

// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Create API
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create DB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create Comment Schema
const CommentSchema = new mongoose.Schema({
