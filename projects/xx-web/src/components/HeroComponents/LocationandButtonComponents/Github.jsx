import { useState } from 'react';
import './Github.css';
import  githubLogo  from "./images/github.svg";
import  githubhover  from "./images/githubhover.svg"

export function GitHubButton(){
  const [hovered, setHovered] = useState(false);
  return (
    <div className="GitHubButton"
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <a href="http://github.com/jmiguelmangas">
        <img src={githubhover} alt="Github Jmiguelmangas"className="img"/></a>
      ) : (
        <img src={githubLogo} alt="Github Jose Miguel Mangas" className="img"/>
      )}
    </div>
  );
}
