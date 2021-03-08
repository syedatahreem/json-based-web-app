const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const decodeReq = require('./decodeReq')

app.use((req, res, next) => {
  bodyParser.json()(req, res, err => {
      if (err) {
          console.error(err);
          return res.status(400).json({  
            "error": "Could not decode request: JSON parsing failed"
        })
      }

      next();
  });
});

app.get('/', (req, res) => {
 
  res.json({mssg: 
    'Please add a body to your request!'})
})

app.post('/', (req, res) => {
 
  try {

    const shows = req.body.payload
    const result = decodeReq(shows)
    
    res.json({
      response : result
    })

  } catch(error) {
    
    res.status(400).json({  
        "error": "Could not decode request: JSON parsing failed"

    })
  }
})

app.listen(port, () => {
  console.log(`App listening at ${port}`)
})