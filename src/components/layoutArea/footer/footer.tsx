import React, { FC, ReactNode } from 'react';
import styles from './footer.module.scss';

interface FooterProps {}


const Footer: FC<FooterProps> = () => {

  const date = new Date();
  const currentYear = date.getFullYear();
  return(
    
    <footer className={styles.Footer}>
      All Rights Reserve &copy; Tamir Elmakyes {currentYear}
    </footer>
  );
}

export default Footer;
