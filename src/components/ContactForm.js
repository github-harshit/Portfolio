import React, { useState } from 'react';
import '../App.css'; 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [activeField, setActiveField] = useState('name');

  const handleInputChange = (e) => {
    e.preventDefault(); 
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'message') {
      setMessage(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const handleArrowClick = () => {
    if (activeField === 'name' && name.trim() !== '') {
      setActiveField('message');
    } else if (activeField === 'message' && message.trim() !== '') {
      setActiveField('email');
    }else if(activeField==='email' && email.trim() !==''){
         setActiveField('heading'); 
    }
  };

  return (
    <div className="container">
      <form className='form'>
        {activeField === 'name' && (
          <div className="inputContainer">
            
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
                placeholder='Name'
              />
            
            {name.trim() !== '' && (
              <ArrowForwardIcon className='icon'  onClick={handleArrowClick}></ArrowForwardIcon>
            )}
          </div>
        )}

        {activeField === 'message' && (
          <div className="inputContainer">
            
              <input
               type='text'
                name="message"
                value={message}
                onChange={handleInputChange}
                 placeholder='Message'
              ></input>
           
            {message.trim() !== '' && (
              <ArrowForwardIcon className='icon' onClick={handleArrowClick}></ArrowForwardIcon>
            )}
          </div>
        )}

        {activeField === 'email' && (
          <div className="inputContainer">
            
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                placeholder='Email'
              />
          
            {email.trim() !== '' && (
              <ArrowForwardIcon className='icon'  onClick={handleArrowClick}></ArrowForwardIcon>
            )}
          </div>
        )}

        {activeField==='heading' && (
            <h3> Than you I will contact you shortlly</h3>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
