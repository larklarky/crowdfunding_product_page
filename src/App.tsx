import React, { useState } from 'react';
import styles from './App.module.css';
import {IoClose, IoMenu} from 'react-icons/io5';
import {ProjectHeader} from './ProjectHeader';

function App() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className={styles.App}>
      <img
          src='/image-hero-desktop.jpg'
          srcSet="/image-hero-mobile.jpg 700w, /image-hero-desktop.jpg 1440w"
          sizes="(max-width: 700px) 700px, 1440px"
          alt="desktop"
        />
      
      <div className={styles.navbar}>
        <div className={styles.logo}>crowdfund</div>
        <div className={styles.links}>
        <button 
          className={`${styles.menu}`}
          onClick={() => setActive(!active)}
        >
          {active ? <IoClose/> : <IoMenu/>}
        </button>
          <ul className={active ? styles.dropped : ''}>
            <li>About</li>
            <li>Discover</li>
            <li>Get Started</li>
          </ul>
        </div>
      </div>
      <ProjectHeader />
      
    </div>
  );
}

export default App;
