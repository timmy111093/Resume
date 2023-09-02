import React, { FC } from 'react';
import styles from './About.module.scss';

interface AboutProps {}

const About: FC<AboutProps> = () => {

  return (
    <div className={styles.About}>
      <h3>About Me</h3>
      <p>I am proud to have completed full-stack web development course at John Bryce.
          From foundational concepts to advanced techniques, the program equipped me with an understanding of both front-end and back-end development. Through hands-on projects and real-world simulations, I honed my skills in building responsive and dynamic user interfaces using HTML, CSS, JavaScript/Typescript, Frameworks like Angular and React. Additionally, I gained proficiency in server-side scripting with technologies like Node.js and Express, and developed a grasp of database management using MongoDB/MySql.</p>
      <div className={styles.Main__paragraph}>
            <h5>Main Technologies I Learned:</h5>
          </div>
      <div className={`row ${styles.About__techs}`}>
            <div className={`col-md-3 col-sm-12 ${styles.About__captions}`}>
              <h5>Frontend</h5>
              <ul>
                <li>React</li>
                <li>Angular</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className={`col-md-3 col-sm-12 ${styles.About__captions}`}>
              <h5>Backend & DB</h5>
            <ul>
                <li>NodeJs</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>PHP</li>
              </ul>
            </div>
            <div className={`col-md-3 col-sm-12 ${styles.About__captions}`}>
              <h5>Others</h5>
              <ul>
              <li>TypeScript</li>
                <li>REST API</li>
                <li>Redux</li>
                <li>Bootstrap</li>
                <li>Docker</li>
                <li>Axios</li>
                <li>OOP Programming</li>
              </ul>
            </div>
          </div>
    </div>
  );
}

export default About;
