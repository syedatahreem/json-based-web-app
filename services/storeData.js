const storeData = (shows) =>{

const result = []
const requiredAttributes = ['drm', 'episodeCount', 'image', 'slug', 'title']
/* atleast one object in the shows array should have the requiredAttributes else throw error*/
let count = 0 

shows.forEach( show => {

    requiredAttributes.every(attribute => attribute in show) && count++ 

    /*check if drm is true and episodeCount is greater than zero*/
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
}


module.exports = storeData;
 