const express = require('express');

const {
  getAllAccounts,
  getSingleAccount,
  createAccount,
  deleteAccount,
  updateAccount
} = require('../controllers/igAccountController')

const router = express.Router();

// GET all IG account
router.get('/', getAllAccounts);

// GET a single IG account 
router.get('/:id', getSingleAccount);

// POST a new IG account
router.post('/', createAccount);

// DELETE an IG account
router.delete('/:id', deleteAccount)

// UPDATE an IG account 
router.patch('/:id', updateAccount)

module.exports = router