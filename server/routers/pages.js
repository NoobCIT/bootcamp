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

module.exports = router;
