const express = require('express');

const router = express.Router();

// GET all IG account
router.get('/', (req, res) => {
  res.json({message: 'GET all IG account'})
});

// GET a single IG account 
router.get('/:id', (req, res) => {
  res.json({message: 'Get a single IG account'})
});

// POST a new IG account
router.post('/', (req, res) => {
  res.json({message: 'Post a new IG account'})
})
// DELETE an IG account
router.delete('/:id', (req, res) => {
  res.json({message: 'Delete an IG account'})
})

// UPDATE an IG account 
router.patch('/:id', (req, res) => {
  res.json({message: 'Update an IG account'})
})

module.exports = router