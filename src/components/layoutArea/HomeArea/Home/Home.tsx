import React, { FC } from 'react';
import styles from './Home.module.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return(
    <div className={styles.Main}>
      <div className={styles.Main__paragraph}> 
        <h5>Hey there, welcome to my website.</h5>
        <span>Here you can find information on my development abilities and experience.</span><br />

      <div>I recently graduated from John Bryce College.
      The course I studied lasted about a year, during which I discovered that I like to write code and create new things, and this allows me to express my ability to solve problems and optimize processes.
          </div>
          </div><br />
          <div className={styles.Main__techs}>
            <div>
              <b><p>Frontend</p></b>
              <ul>
                <li>React</li>
                <li>Angular</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div>
              <b><p>Backend</p></b>
            <ul>
                <li>NodeJs</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>PHP</li>
              </ul>
            </div>
            <div>
              <b><p>Others</p></b>
              <ul>
              <li>TypeScript</li>
                <li>REST API</li>
                <li>Redux</li>
                <li>Bootstrap</li>
                <li>Docker</li>
                <li>Axios</li>
              </ul>
            </div>
          </div>
          <div className={styles.Main__gitHub}>
              <p>Also You Can Visit My <a href="https://github.com/timmy111093">Git Hub</a>, Part Of My Projects Are There</p>
          </div>
    </div>
  );
}

export default Home;
