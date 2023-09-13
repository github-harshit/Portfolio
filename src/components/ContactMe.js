
import styles from "../styles/ContactMe.module.css"; 

import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Icon } from '@iconify/react';


const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here, like sending an email
    console.log('Form submitted with data:', formData);
  };

  return (
     <div className={styles.container}>
        
     
        <div className={styles.box}>
    <div className={styles.contactMe}>
    <h2>Contact Me</h2>
     
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.fancyButton}>
          Send
        </button>
      </form>
    </div>
     <div className={styles.content}>
        <h2> Connect with Me </h2>
         <p>
         Feel free to drop me a message whenever you have some awesome projects in mind. 
         I'm always excited and ready to work on new and exciting ventures. 
         Don't hesitate to reach out to me!
         </p>
        
     </div>
     </div>
     <div className={styles.navIcon}>
        <div className={styles.navItem}>
        <a  target= "blank" href='https://github.com/github-harshit'> <GitHubIcon/> </a>
      </div>
        
        <div className={styles.navItem}>
        <a  target= "blank" href='https://www.linkedin.com/in/harshit-joshi-a2b5b2189/'> <LinkedInIcon/> </a>
      </div>
        <div className={styles.navItem}>
        <a  target= "blank" href='https://twitter.com/Harshit96230938'> <TwitterIcon/> </a>
      </div>

        </div>

    </div>
  );
};

export default ContactMe;
