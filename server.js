const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const postRequest = require('./routes/postRequest')
const getRequest = require('./routes/getRequest')
const checkError = require ('./error_handling/checkError')

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

app.get('/', async (req,res) =>{   
 getRequest(req,res);
})

app.post('/', async(req,res) =>{
postRequest(req,res)
})

app.listen(port, () => {
  console.log(`App listening at ${port}`)
})