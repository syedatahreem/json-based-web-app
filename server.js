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
  res.setHeader("Content-Type", "application/json");
   
  res.send({mssg: 
    'Please add a body to your request!'})
})

app.post('/', (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {

    const shows = req.body.payload
    const result = decodeReq(shows)
    
    res.send({
      response : result,
      check: "true"
    })

  } catch(error) {
    
    res.status(400).send({  
        "error": "Could not decode request: JSON parsing failed"

    })
  }
})

app.listen(port, () => {
  console.log(`App listening at ${port}`)
})