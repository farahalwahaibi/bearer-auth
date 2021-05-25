'use strict';

///////////////////////////////////////////////////////////////////////////////////
////////2nd error we need to require ('environment') to access SECRET/////////////
/////////////////////////////////////////////////////////////////////////////////
require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

///////////////////////////////////////////////////////////////////
////////1st error we need to require ('jsonwebtoken')/////////////
/////////////////////////////////////////////////////////////////
const jwt = require('jsonwebtoken');

const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Adds a virtual field to the schema. We can see it, but it never persists
// So, on every user object ... this.token is now readable!
users.virtual('token').get(function () {
  let tokenObject = {
    username: this.username,
  }
  return jwt.sign(tokenObject, process.env.SECRET,
  // The expireIn property added because of this requirement in the lab assignment //
  //Add support for the creation and usage of time sensitive (valid for 15 minutes) JWTs//
    {expiresIn: '15m'})
});

users.pre('save', async function () {
  if (this.isModified('password')) {
    /////////////////////////////////////////////////////
    ////////3rd we need to add (await)///////////////////
    /////////////////////////////////////////////////////
    this.password = await bcrypt.hash(this.password, 10);
  }
});

// BASIC AUTH
users.statics.authenticateBasic = async function (username, password) {
  /////////////////////////////////////////////////////
  ////////4th we need to add (try-catch)///////////////
  /////////////////////////////////////////////////////
  try {
    const user = await this.findOne({ username })
    const valid = await bcrypt.compare(password, user.password)
    if (valid) {
      return user;
    }
    /////////////////////////////////////////
    ////////5th add (else)///////////////////
    /////////////////////////////////////////
    else {
      throw new Error('Invalid User');
    }
  } catch (e) {
    throw new Error(e.message)
  }
}

// BEARER AUTH
users.statics.authenticateWithToken = async function (token) {
  try {
    const parsedToken = jwt.verify(token, process.env.SECRET);
    /////////////////////////////////////////////////////
    ////////6th we need to add (await)///////////////////
    /////////////////////////////////////////////////////
    const user = await this.findOne({ username: parsedToken.username })
    if (user) {
      return user;
    }
    /////////////////////////////////////////
    ////////7th add (else)///////////////////
    /////////////////////////////////////////
    else {
      throw new Error("User Not Found");
    }
  } catch (e) {
    throw new Error(e.message)
  }
}


module.exports = mongoose.model('users', users);