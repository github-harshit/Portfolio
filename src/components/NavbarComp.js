import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/Navbar.module.css"
 import {useState, useEffect} from "react"; 



function NavbarComp() {
    const [scroll, setScrolled] = useState(false); 
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 20) {
            // Set the 'scrolled' state to true when scrolling down
            setScrolled(true);
          } else {
            // Set the 'scrolled' state to false when scrolling to the top
            setScrolled(false);
          }
        };
    
        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
    
        // Remove the scroll event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      const navbarClass = `${styles.navbarContainer} ${scroll ? styles.navbarContainerScrolled : ''}`
  return (
     <>
      <div className={navbarClass}>

     
     <div className={styles.navbar}>
     
      <Link to="/" className={styles.navbarLogo}>
        Your Logo
      </Link>

     
      <ul className={styles.navMenu}>
        <li className={styles.navItem}>
         
          
          <a href='#skills'> Skills Acquired </a>
          
        </li>
        <li className={styles.navItem}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li className={styles.navItem}>
         
          <a href='#projects'> My Projects</a>
        </li>
      </ul>
    </div>
    </div>
     </>
     
  );
}

export default NavbarComp;
