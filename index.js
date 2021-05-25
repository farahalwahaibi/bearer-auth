'use strict';

///////////////////////////////////////////////////////////////
////////1st error (we have to require our environment)////////
/////////////////////////////////////////////////////////////
require( 'dotenv' ).config();

// Start up DB Server
const mongoose = require( 'mongoose' );
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

///////////////////////////////////////////////////////////////////
////////4th error we need to add (MONGODB_URI) inside .env////////
/////////////////////////////////////////////////////////////////

mongoose.connect( process.env.MONGODB_URI, options )

//////////////////////////////////////////////////
////////3rd error we need a promise .then////////
////////////////////////////////////////////////

  .then( () => {
    // Start the web server
    ////////////////////////////////////////////////
    ////////2nd error (startup) NOT (start)////////
    //////////////////////////////////////////////
    require( './src/server.js' ).startup( process.env.PORT );
  } )

  .catch( ( e ) => {
    console.log( 'CONNECTION_ERROR', e.mssage );
  } );
