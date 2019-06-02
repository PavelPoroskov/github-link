import {fetchApi as fetchApiGitHub} from './github'
//import {fetchApi as fetchApiNpmLatest} from './npm-latest'
//import {fetchApi as fetchApiNpmDownloads} from './npm-downloads'

async function fetchRepoData(link) {
  //return fetchApiGitHub(link)

  let [dataGitHub, //dataLatest //, dataDownloads
  ] = await Promise.all([
    fetchApiGitHub(link), 
    //fetchApiNpmLatest(link),
    //fetchApiNpmDownloads(link),
  ]);

  return {
    ...dataGitHub, // name, stargazers_count, pushed_at
    //...dataLatest, // version, unpackedSize
    //...dataDownloads, // downloadsMonth
  }
}

export {
  fetchRepoData,
}