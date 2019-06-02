
//https://api.npmjs.org/downloads/point/last-month/next

function link2api(link) {
    const arSlash = link.split('/')
    let sPackage = arSlash[arSlash.length-1]
    if (!sPackage) {
      sPackage = arSlash[arSlash.length-2]
    }
  
    let linkApi = `https://api.npmjs.org/downloads/point/last-month/${sPackage}`
  
    return linkApi
  }
  
  async function fetchApi(link) {
  
    const linkApi = link2api(link)
    const data = await fetch(linkApi, {mode: 'no-cors'})
    const dataJosn = await data.json()
  
    return {
      downloadsMonth: dataJosn.downloadsMonth,
    }
  }
  
  export {
    fetchApi
  }