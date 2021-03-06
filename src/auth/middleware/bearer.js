'use strict';

const users = require('../models/users.js')

module.exports = async (req, res, next) => {

    if (!req.headers.authorization) { 
      next('Invalid Login') ;
     ////////////////////////////////////////
    ////////1st we need to add return///////
   ////////////////////////////////////////
   return ;
    }
  try {
    const token = req.headers.authorization.split(' ').pop();
    const validUser = await users.authenticateWithToken(token);

    req.user = validUser;
    req.token = validUser.token;

    ////////////////////////////////////////
    ////////2nd we need to add next////////
   ///////////////////////////////////////
   next () ; // pass 2 error because of next // 
  
  } catch (e) {
    res.status(403).send('Invalid Login');;
  }
}