const decodeReq = require('../services/decodeReq')
 const postRequest= async (req, res) => {
 
    try {
  
      /*Attaches the request body and stores in shows*/
      const shows = await req.body.payload
      /*Function decodeReq is been called by passing the request body*/
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