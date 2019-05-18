import {fetchGitHubRepoData} from './github'

function fetchRepoData(link) {
  return fetchGitHubRepoData(link)
}

export {
  fetchRepoData,
}