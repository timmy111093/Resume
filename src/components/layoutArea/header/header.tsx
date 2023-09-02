import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.scss';
import {RiCodeSFill} from 'react-icons/ri';
import {RiCodeSSlashFill} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import photo from '../../../images/31682419_2061012090593055_6373127736596103168_n.jpg';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {

  return(
    <header className={`container ${styles.Header}`}>
        <div className="row">
        <div className={`col-md-3 col-sm-6 ${styles.Header__img}`}>
        
          <img src={photo} alt="tamir-profile" width={85}/>
          <span><RiCodeSSlashFill size={50}/></span>
      </div>
      <div className={`col-md-4 col-sm-6 ${styles.Header__description}`}>
        <h1>Tamir Elmakyes </h1>
        <h4>Full Stack Web Developer</h4>
      </div>
      <div className={`col-md-5 col-sm-12 ${styles.Header__navigation}`} >
        <nav>
          <NavLink className={`${styles.Aside}`} to='/home'>Home</NavLink>
          <span> | </span>
          <NavLink className={`${styles.Aside}`} to='/about'>About Me</NavLink>
          <span> | </span>
          <NavLink className={`${styles.Aside}`} to='/resume'>Resume</NavLink>
          <span> | </span>
          <NavLink className={`${styles.Aside}`} to='/contact'>Contact</NavLink>
        </nav>
      </div>
        </div>
      
    </header>
  );
}

export default Header;
