import React, { FC } from 'react';
import styles from './About.module.scss';
// import file from '../../../../public/myResume.pdf';

interface AboutProps {}

const About: FC<AboutProps> = () => {

  return (
    <div className={styles.About}>
      <h3>About Me</h3>
      <p>I am proud to have completed an immersive full-stack web development program at John Bryce, a prestigious institution renowned for its comprehensive training in modern web technologies. From foundational concepts to advanced techniques, the program equipped me with a deep understanding of both front-end and back-end development. Through hands-on projects and real-world simulations, I honed my skills in building responsive and dynamic user interfaces using HTML, CSS, JavaScript/Typescript, Frameworks like Angular and React. Additionally, I gained proficiency in server-side scripting with technologies like Node.js and Express, and developed a strong grasp of database management using MongoDB/MySql.</p>
      {/* <embed src={process.env.PUBLIC_URL + '/myResume.pdf'} type="application/pdf" width="100%" height="600px" /> */}
      <a className={styles.About__pdfBtn} href={process.env.PUBLIC_URL + '/myResume.pdf'} download>Get My Resume in PDF</a>
    </div>
  );
}

export default About;
