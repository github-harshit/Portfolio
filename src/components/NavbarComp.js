import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/Navbar.module.css"
 import {useState, useEffect} from "react"; 
 import GitHubIcon from '@mui/icons-material/GitHub';
 import LinkedInIcon from '@mui/icons-material/LinkedIn';
 import TwitterIcon from '@mui/icons-material/Twitter';
 import { Icon } from '@iconify/react';
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
     
  return (
     <>
      <div className={scroll ? styles.navbarContainerScrolled : styles.navbarContainer}>

     
     <div className={styles.navbar}>
     
      <div  className={styles.navbarLogo}>
       HARSHIT JOSHI
      </div>

     
      <div className={styles.navMenu}>
        <div className={styles.navItem}>
         
          
          <a href='#skills'> Skills Acquired </a>
          
        </div>
        <div className={styles.navItem}>
          <a href="#github">
            GitHub
          </a>
        </div>
        <div className={styles.navItem}>
          <a href="#leetcode">
           Leetcode
          </a>
        </div>
        <div className={styles.navItem}>
         
          <a href='#projects'> My Projects</a>
        </div>
        </div>
        <div className={styles.navIcon}>
        <div className={styles.navItem}>
        <a  target= "blank" href='https://github.com/github-harshit'> <GitHubIcon/> </a>
      </div>
        <div className={styles.navItem}>
        <a  target= "blank" href='https://leetcode.com/harshitjoshi250/'> <Icon icon="simple-icons:leetcode" /> </a>
      </div>
        <div className={styles.navItem}>
        <a  target= "blank" href='https://www.linkedin.com/in/harshit-joshi-a2b5b2189/'> <LinkedInIcon/> </a>
      </div>
        <div className={styles.navItem}>
        <a  target= "blank" href='https://twitter.com/Harshit96230938'> <TwitterIcon/> </a>
      </div>

        </div>
       


     

     
    </div>
    </div>
     </>
     
  );
}

export default NavbarComp;
