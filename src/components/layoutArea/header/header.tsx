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
    <header className={styles.Header}>
      <div className={styles.Header__img}>
          <img src={photo} alt="tamir-profile" width={85}/>
      </div>
      <div>
        <RiCodeSFill size={50}/> <RiCodeSSlashFill size={50}/>
      </div>
      <div>
        <h1>Tamir Elmakyes </h1>
        <h4>Full Stack Web Developer</h4>
      </div>
      <div className={styles.Header__navigation} >
        <nav>
          <NavLink className={`Box ${styles.Aside}`} to='/home'>Home</NavLink>
          <NavLink className={`Box ${styles.Aside}`} to='/about'>About Me</NavLink>
          <NavLink className={`Box ${styles.Aside}`} to='/contact'>Contact Me</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
