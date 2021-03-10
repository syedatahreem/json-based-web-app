const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const postRequest = require('./routes/postRequest')
const getRequest = require('./routes/getRequest')
const checkError = require ('./error_handling/checkError')

app.use(checkError);

app.get('/', getRequest )

app.post('/', postRequest)

app.listen(port, () => {
  console.log(`App listening at ${port}`)
})