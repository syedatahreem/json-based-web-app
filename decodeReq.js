const checkArray = require ('./error_handling/checkArray')
const storeData = require ('./utils/storeData')

const decodeReq = (shows) => {
  
  try {   

  checkArray (shows)
  const result = storeData(shows)

  return [...result];

  } 
  
  catch(e) {
    
    throw new Error
  }

}

module.exports = decodeReq;