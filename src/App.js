import React from 'react'; 
import NavbarComp from './components/NavbarComp.js';
import Introduction from './components/Introduction.js';
import Skills from './components/Skills.js';
 import Projects from "./components/Projects.js"; 
 import GithubContributions from './components/GithubContributions.js';
  import LeetcodeStats from './components/LeetcodeStats.js';
import { useEffect } from 'react';
function App() {
    
    const handleSmoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
    
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      };

    useEffect(() => {
        // Add event listeners to navbar links for smooth scrolling
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => {
          link.addEventListener('click', handleSmoothScroll);
        });
    
        // Clean up the event listeners when the component unmounts
        return () => {
          links.forEach((link) => {
            link.removeEventListener('click', handleSmoothScroll);
          });
        };
      }, []);
  return (
    <div>
 
    <NavbarComp/>
    <Introduction/>
     <div id='skills'>
        <Skills/>
     </div>
    <div id='projects'>
        <Projects/>
    </div>
     <div id='github'>
        <GithubContributions/>
     </div>
      <div id='letcode'>
        <LeetcodeStats/>
      </div>
    </div>
  )
}

export default App; 
