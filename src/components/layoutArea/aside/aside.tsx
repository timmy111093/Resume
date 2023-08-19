import React, { FC } from 'react';
import styles from './aside.module.scss';
import {NavLink} from 'react-router-dom';

interface AsideProps {}

const Aside: FC<AsideProps> = () => (
  <aside className={`Box ${styles.Aside}`}>
          <h3 className={`Box ${styles.Aside}`}>Menu</h3>
    <nav>
      <NavLink className={`Box ${styles.Aside}`} to='/home'>Home</NavLink>
      <NavLink className={`Box ${styles.Aside}`} to='/about'>About Me</NavLink>
      <NavLink className={`Box ${styles.Aside}`} to='/contact'>Contact Me</NavLink>
    </nav>
  </aside>
);

export default Aside;
