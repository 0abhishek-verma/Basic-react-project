import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
const ContactForm = () => {
  const [names,setName] =useState(" ")
  const [email,setEmail] =useState(" ")
  const [text,setText] =useState(" ")
  const onSubmit=(event)=>{
    event.preventDefault()
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

  }
  return (
    <section
    className= {styles.container}
    >
      <div className= {styles.contact_form}>
        <div className={styles.top_btn}>
            <Button text="VIA SUPPORT MESSAGE" icon={<MdMessage fontSize="24px"/>}/>
            <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
        </div>
        <Button
         isOutline ={true}
         text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />

         <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="E-Mail">E-Mail</label>
            <input type="text" name='E-Mail' />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="name">Text</label>
            <textarea name='Text' rows="7" style={{
              minWidth: "480px"
            }}/>
          </div>
          <div style={{
            display:"flex",
            flexDirection:"row-reverse"
          }}>
          <Button text="SUBMIT" />
          </div>
          <div>{names}</div>
          <div>{email}</div>
          <div>{text}</div>
         </form>
        </div>
      <div className= {styles.contact_image}>
       <img src="./images/main.svg" alt="main image" /> 
      </div>
    </section>
  )
}

export default ContactForm
