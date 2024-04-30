import { useState } from 'react';
import './Linkedin.css';
import linkedinlogoBlue from './images/LinkedIn_icon.svg';
import linkedinlogo from "./images/LinkedIn_icon_hover.svg"

export function LinkedInButton(){
  const [hovered, setHovered] = useState(false);
  return (
    <div className="LinkedinButton"
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <a href="http://linkedin.com/in/josemmangasdeveloper">
        <img src={linkedinlogo} alt="linkedinLogo"  className="img"/></a>
      ) : (
        <img src={linkedinlogoBlue} alt="linkedinLogo" className="img"/>
      )}
    </div>
  );
}
