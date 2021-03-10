const decodeReq = require('../services/decodeReq')
 const postRequest= async (req, res) => {
 
    try {
  
      const shows = await req.body.payload
      const result = decodeReq(shows)
      
      res.json({
        response : result
      })
  
    } catch(error) {
      
      res.status(400).json({  
          "error": "Could not decode request: JSON parsing failed"
  
      })
    }
  }

  module.exports= postRequest;