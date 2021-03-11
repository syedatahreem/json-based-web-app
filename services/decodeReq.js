const checkArray = require ('../error_handling/checkArray')
const storeData = require ('./storeData')

const decodeReq = (shows) => {
  
  try {   

  /*checkArray is called to check if the passed
  shows is an array or not */
  checkArray (shows)

  /*storeData is called and the result is returned */
  const result = storeData(shows)

  return [...result];

  } 
  
  catch(e) {
    
    throw new Error
  }

}

module.exports = decodeReq;