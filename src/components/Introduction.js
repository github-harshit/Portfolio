import React from 'react'; 
import HeroImage from "../images/HeroImage.png"; 
import styles from "../styles/Introduction.module.css"

function Introduction() {
  return (
    <div className={styles.container}>

        <div className={styles.content}>
             <h2 className={styles.secondary}> Hi,my name is  </h2>
              <h2 className={styles.primary}> Harshit Joshi </h2>
               <p className={styles.intro}>I have built many industry grade projects from scratch and am armed with many technological skills useful for tech projects. 
                Check out my projects below. </p>
                <div className={styles.box}>
                    <div className={styles.item}>
                        <h1 className={styles.upper}> 10+ </h1>
                        <h4 className={styles.lower}> Verified Skills</h4>
                    </div>
                    <div className={styles.item}>
                        <h1 className={styles.upper}> 5+ </h1>
                        <h4 className={styles.lower}> Professional Projects</h4>
                    </div>
                    <div className={styles.item}>

                       <h1 className={styles.upper}> 500+ </h1>
                        <h4 className={styles.lower}>DSA Problems Solved</h4>
                    </div>
                    
                       
                </div>

        </div>
         <div className={styles.image}>
            <div className={styles.imageContainer}>
               <img src={HeroImage}></img>
            </div>
            
         </div>
    </div>
  )
}

export default Introduction