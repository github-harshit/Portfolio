import React from 'react'
import styles from "../styles/Projects.module.css"; 
import ProjectOne  from "./ProjectOne"
import ProjectTwo  from "./ProjectTwo";
import ProjectThree from './ProjectThree';
function Projects() {
  return (
    <div className={styles.container}>
        <div className={styles.box}>
    <h1 className={styles.heading}> My Projects ----------------------------------------------------------------------</h1>
         <ProjectOne/>
         <ProjectTwo/>
         <ProjectThree/>
        
        </div>
         </div>
  )
}

export default Projects