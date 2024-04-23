import React from 'react';

import GitHubLink from '../GitHubLink';

function GitHubLinkList({links}) {

  return (
    <div>
      {links.map(link => <GitHubLink link={link} key={link.full_name}/>)}
    </div>
  );
}

export default GitHubLinkList
