
//https://registry.npmjs.org/next
//https://registry.npmjs.org/next/latest
//https://registry.npmjs.org/-/package/babel-core/dist-tags

//https://github.com/npm/download-counts
//https://api.npmjs.org/downloads/point/last-month/next
//https://api.npms.io/v2/package/react
//https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md

function link2api(link) {
    const arSlash = link.split('/')
    let sPackage = arSlash[arSlash.length-1]
    if (!sPackage) {
      sPackage = arSlash[arSlash.length-2]
    }
  
//    let linkApi = `https://registry.npmjs.org/next/latest`
    let linkApi = `https://registry.npmjs.org/${sPackage}/latest`
  
    return linkApi
  }
  
  async function fetchApi(link) {
  
    const linkApi = link2api(link)
    //const data = await fetch( linkApi )
    const data = await fetch( linkApi
      ,{
      mode: 'no-cors',
      headers: {
         'Content-Type': 'application/json',
      },
      // mode: 'cors',
      // //referrer: 'no-referrer',
      // //credentals: 'omit',
      // credentals: 'include',
      }
    )
    // console.log('npm-latest')
    // console.log(data)
    // let tt = await data.text()
    // console.log(`11${tt}11`)
    
    const dataJosn = await data.json()

    return {
      version: dataJosn.version,
      unpackedSize: dataJosn.dist.unpackedSize,
    }
  }
  
  export {
    fetchApi
  }