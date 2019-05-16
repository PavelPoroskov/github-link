import React, {useState, useEffect} from 'react';

  // "created_at": "2015-08-10T22:09:16Z",
  // "updated_at": "2019-05-16T21:20:18Z",
  // "pushed_at": "2019-05-16T21:24:39Z",
  // "homepage": "https://facebook.github.io/relay/",
  // "stargazers_count": 12892,
  
  // "size": 28018,
  // "git_url": "git://github.com/facebook/relay.git",
  // "ssh_url": "git@github.com:facebook/relay.git",
  // "clone_url": "https://github.com/facebook/relay.git",
  // "svn_url": "https://github.com/facebook/relay",

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

function GitHubLink({link}) {
  const [stars, setStars] = useState('')

  useEffect( () => {
    async function fetchData() {
      try {
        const linkApi = link2api(link)
        //console.log(`link ${linkApi}`)
        const data = await fetch(linkApi)
        const dataJosn = await data.json()
        const res = dataJosn.stargazers_count
        setStars(res)
      }catch(e) {
        setStars('Error')
      }
    }

    fetchData()
  }, [link])

  return (
    <div>
      {link} 
      <svg className="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
        <path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
      </svg>
      {stars}      
    </div>
  );
}

export default GitHubLink;