import React, {useState, useEffect} from 'react';
import {fetchRepoData} from '../api'

function formatNum(n) {
  let s = `${n}`
  let ar = []
  while (3 < s.length) {
    const subs = s.slice(-3)
    s = s.slice(0, -3)
    ar.unshift(subs)
  } 
  if (0 < s.length) {
    ar.unshift(s)
  }

  return ar.join(',')
}

function GitHubLink({link}) {
  const [stars, setStars] = useState('')

  useEffect( () => {
    async function fetchData() {
      try {
        const dataJosn = await fetchRepoData(link)
        const res = dataJosn.stargazers_count
        setStars(res)
      }catch(e) {
        setStars('err')
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
      {formatNum(stars)}      
    </div>
  );
}

export default GitHubLink;