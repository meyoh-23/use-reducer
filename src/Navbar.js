import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linkContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linkContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linkContainerRef.current.style.height ="0px";
    }
  },[showLinks]);

  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="coding addict" />
        <button 
          className='nav-toggle' 
          onClick={() => setShowLinks(!showLinks)}>
          <FaBars/>
        </button>
      </div>
      <div className='links-container' ref={linkContainerRef}>
        <ul className="links" ref={linksRef}>
        {
          links.map((link) => {
            const {id, url, text} = link;
            return <li key={id}>
              <a href={url}>{text}</a>
            </li>
          })
        }
        </ul>
      </div>
      <ul className="social-icons">
        {
          social.map((icons) => {
            const {id, icon, url} = icons;
            return <li key={id}><a href={url}>{icon}</a></li>
          })
        }
      </ul>
    </div>
  </nav>
}

export default Navbar
