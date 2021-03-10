const bodyParser = require('body-parser')

const checkError = (req, res, next) => {
    bodyParser.json()(req, res, err => {
        if (err) {
            console.error(err);
            return res.status(400).json({  
              "error": "Could not decode request: JSON parsing failed"
          })
        }
  
        next();
    });
  }

  module.exports = checkError;