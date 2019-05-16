import React from 'react';
import './App.css';

import GitHubLink from './github-link';

function App() {
  return (
    <div className="App">
      <GitHubLink link="https://github.com/facebook/react"/>
      <GitHubLink link="https://github.com/facebook/react-native"/>
      <GitHubLink link="https://github.com/facebook/relay"/>
    </div>
  );
}

export default App;
