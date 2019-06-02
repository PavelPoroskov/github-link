
// from: https://github.com/facebook/relay
// to: https://api.github.com/repos/facebook/relay
function link2api(link) {
  const arSlash = link.split('/')
  let sProtocol = arSlash[0]
  let sSite = arSlash[2]
  let arPath = arSlash.slice(3)
  if (!(sProtocol==='https:' || sProtocol==='http:')) {
    sProtocol = 'https:'
    sSite = arSlash[0]
    arPath = arSlash.slice(1)
  }

  //sSite = `api.${sSite}`
  let sPath = arPath.join('/')

  let linkApi = `${sProtocol}//api.${sSite}/repos/${sPath}`

  return linkApi
}

async function fetchApi(link) {

  const linkApi = link2api(link)
  const data = await fetch(linkApi)

  // console.log('github')
  // console.log(data)
  // let tt = await data.text()
  // console.log(`11${tt}11`)

  //SyntaxError: "JSON.parse: unexpected end of data at line 1 column 1 of the JSON data"
  //data.body: null
  //data.type: opaque
  const dataJosn = await data.json()

  return {
    name: dataJosn.name, // relay
    full_name: dataJosn.full_name, // facebook/relay
    stargazers_count: dataJosn.stargazers_count,
    homepage: dataJosn.homepage, //"https://facebook.github.io/relay/"

    created_at: dataJosn.created_at, // "2015-08-10T22:09:16Z"
    updated_at: dataJosn.updated_at,
    pushed_at: dataJosn.pushed_at,

    size: dataJosn.size, 
    archived: dataJosn.archived, 
  }
}

export {
  fetchApi
}