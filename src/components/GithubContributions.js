import React from 'react'; 
import styles from "../styles/GithubContribution.module.css"

function GithubContributions() {
  return (
    <div className={styles.container}>
      <h1 className= {styles.heading}>Github Contributions --------------------------------------------------</h1>
       <div className = {styles.box}>
        
       <img className={styles.image} src="https://ghchart.rshah.org/github-harshit" alt="2016rshah's Github chart" /> 
       </div>
        
    </div>
  )
}

export default GithubContributions