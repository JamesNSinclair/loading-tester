import React, {useContext} from 'react';
import Link from 'next/link';
import {useConfigContext, useUpdateConfigContext} from "./ThemeContext";

export const Menu = () => {

     
        const toggleSignUp = useUpdateConfigContext();
console.log('Menu')
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/speakers">
              <a className="nav-link">Speakers</a>
            </Link>
          </li>
          <li>
              <a className="nav-link" onClick={(e) => {e.preventDefault(), toggleSignUp('showSignMeUp');}}>Hide/Display Speaker Days</a>
          </li>
          <li>
              <a className="nav-link" onClick={(e) => {e.preventDefault(), toggleSignUp('showSpeakerSpeakingDays');}}>Hide/Display Sign Me Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
