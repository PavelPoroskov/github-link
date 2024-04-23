import React from 'react';
import './App.css';

import GitHubLink from './GitHubLink';
/*
import GitHubLinkList from './GitHubLinkList';

const links = [
  "https://github.com/facebook/react",
  "https://github.com/facebook/react-native",
  "https://github.com/facebook/relay",
  "https://github.com/reduxjs/redux",
  "https://github.com/reduxjs/react-redux",
  // "https://github.com/reduxjs/reselect",
  // "https://github.com/acdlite/recompose",
  "https://github.com/mobxjs/mobx",
  "https://github.com/mobxjs/mobx-react",
  "https://github.com/ReactTraining/react-router",
  "https://github.com/reach/router",
  "https://github.com/cypress-io/cypress",
  "https://github.com/facebook/jest",
  // "https://github.com/webpack/webpack",
  "https://github.com/babel/babel",
  "https://github.com/immutable-js/immutable-js",
  "https://github.com/immerjs/immer",
  "https://github.com/microsoft/TypeScript",
  "https://github.com/nodejs/node",
  "https://github.com/facebook/create-react-app",
]
*/
function App() {

  return (
    <div className="App">
      <GitHubLink link='https://github.com/facebook/create-react-app'/>
      <br/>
      {/*
      <GitHubLinkList links={links}/>
      */}
    </div>
  );
}

export default App;
