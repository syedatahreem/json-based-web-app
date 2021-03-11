const getRequest = (req, res) => {

  /*If the request made is get then the following response
  is displayed on the browser*/
 
    res.json({mssg: 
      'Please add a body to your request!'})
  }

  module.exports=getRequest