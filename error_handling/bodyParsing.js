const bodyParser = require('body-parser')

const bodyParsing = (req, res, next) => {
    bodyParser.json()(req, res, err => {
        if (err) {
            /*Error message when the request was invalid */
            return res.status(400).json({  
              "error": "Could not decode request: JSON parsing failed"
          })
        }
  
        next();
    });
  }
  module.exports = bodyParsing;