const express = require('express');
const router = new express.Router();

//GET homepage
router.get('/', function(req, res) {
  res.render('../public/views/index')
});

// GET curriculum
router.get('/curriculum', function(req, res) {
  res.render('../public/views/curriculum')
});

// GET course1
router.get('/curriculum/course1', function(req, res) {
  res.render('../public/views/courses/course1/course1')
});

// GET course2
router.get('/curriculum/course2', function(req, res) {
  res.render('../public/views/courses/course2/course2')
});

// GET course3
router.get('/curriculum/course3', function(req, res) {
  res.render('../public/views/courses/course3/course3')
});

module.exports = router;
