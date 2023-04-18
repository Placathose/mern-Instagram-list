const igAccountUser = require('..models/igAccountModel');
const mongoose = require('mongoose');

// Get all ig Account
const getAllAccounts = async (req, res) => {
  const accounts = await igAccountUser.find({}).sort({createdAt: -1})

  res.status(200).json(accounts)
}

// Get a single Account
const getSingleAccount = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such account'})
  }

  const account = await igAccountUser.findById(id);
  
  if(!workout) {
    return res.status(404).json({error: 'No such account'})
  }

  res.status(200).json(account)
}

// Create an Account
const createAccount = async (req, res) => {
  // destructure request
  const { username, followers, followings, posts, image, bio } = req.body;

  //add to database
  try {
    const account = await igAccountUser.create({username, followers, followings, posts, image, bio})
    res.status(200).json(account)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Delete an account
const deleteAccount = async (req, res) => {

}

// Update an account
const updateAccount = async (req, res) => {

}

module.exports = {
  getAllAccounts,
  getSingleAccount,
  createAccount,
  deleteAccount,
  updateAccount
}


