const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const postRequest = require('./routes/postRequest')
const getRequest = require('./routes/getRequest')
const checkError = require('./error_handling/bodyParsing')


app.use((req,res,next)=>{
  checkError(req,res,next)
});

app.get('/', async (req,res) =>{  
  /*calling getRequest method*/ 
 getRequest(req,res);
})

app.post('/', async(req,res) =>{
  /*calling the postRequest method */
postRequest(req,res)
})

app.listen(port, () => {
  
  console.log(`App listening at ${port}`)
})