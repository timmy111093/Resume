import React, { FC } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Main from './main/main';
import styles from './layoutArea.module.scss';

interface LayoutAreaProps {}

const LayoutArea: FC<LayoutAreaProps> = () => (
  <div className={styles.LayoutArea}>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default LayoutArea;
