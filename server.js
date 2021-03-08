const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const decodeReq = require('./decodeReq')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// app.use(function(req, res, next) {
 
//   next();
// });

app.get('/', (req, res) => {
 
  res.json({mssg: 
    'Please add a body to your request!'})
})

app.post('/', (req, res) => {
 
  try {

    const shows = JSON.parse(req.body.payload)
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