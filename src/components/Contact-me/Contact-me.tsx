import React, { FC } from 'react';
import styles from './Contact-me.module.scss';
import {BsFacebook} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';
import {BiPhone} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

interface ContactMeProps {}

const ContactMe: FC<ContactMeProps> = () => (
  <div className={styles.ContactMe}>
    <div className={styles.ContactMe__links}>
      
      <h4>Feel free to contact me on:</h4>

            <NavLink className={styles.ContactMe__links__facebook} target='blank' to="https://www.facebook.com/profile.php?id=100000528510399"><BsFacebook size={35}/> Facebook</NavLink>

            <a className={styles.ContactMe__links__linkedin} href="https://www.linkedin.com/in/tamir-elmakyes-a99618255/"><AiFillLinkedin size={35}/> LinkedIn</a>

            <a className={styles.ContactMe__links__whatsapp} href="https://api.whatsapp.com/send?phone=972543193899"><BsWhatsapp size={35}/> WhatsApp</a>

            <a className={styles.ContactMe__links__phone} href="#"><BiPhone size={35}/> +972-543-193-899</a>

    </div>
  </div>
);

export default ContactMe;
