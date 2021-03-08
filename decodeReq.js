const decodeReq = (shows) => {
  try {
    if (!Array.isArray(shows)) {
      // if the payload recieved is not an array of shows then throw error
      throw new Error;
    }

  const result = []
  const requiredAttributes = ['drm', 'episodeCount', 'image', 'slug', 'title']
  let count = 0 // atleast one object in the shows array should have the requiredAttributes else throw error

  shows.forEach( show => {

    requiredAttributes.every(attribute => attribute in show) && count++ 

    if (show.drm && show.episodeCount > 0) {
      result.push({
        image: show.image.showImage,
        slug: show.slug,
        title: show.title
      })
    }
  })

  if (count === 0) {
      throw new Error;
  }

  return [...result]

  } catch(e) {
    
    throw new Error
  }

}

module.exports = decodeReq;