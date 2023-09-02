import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Resume.module.scss';

interface ResumeProps {}

const Resume: FC<ResumeProps> = () => {

  const [embed,setEmbed] = useState(false);

  return(
    <div className={styles.Resume}>
            <div className={styles.Resume__buttons}>
            {!embed && <NavLink onClick={() => {
              setEmbed((prev) => !prev)
            }} className={styles.About__pdfBtn} to='#'>Show File</NavLink>}
            {embed && <NavLink onClick={() => {
              setEmbed((prev) => !prev)
            }} className={styles.About__pdfBtn} to='#'>Close File</NavLink>}
            <a className={styles.About__pdfBtn} href={process.env.PUBLIC_URL + '/myResume.pdf'} download>Download in PDF</a><br />
            </div>
            {embed && <embed src={process.env.PUBLIC_URL + '/myResume.pdf'} type="application/pdf" width="100%" height="600px" />
}    
            </div>
  );
}

export default Resume;
