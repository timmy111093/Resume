import React, { FC } from 'react';
import styles from './Home.module.scss';
import {MdDevices} from 'react-icons/md';
import {SiAntdesign} from 'react-icons/si';
import {MdWorkOutline} from 'react-icons/md';
import {BsGit} from 'react-icons/bs';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return(

      <div className={`container ${styles.Main}`}>
      <div className="row">
      <div className={styles.Main__paragraph}> 
        <h4>Welcome to my website.</h4>
        <h5>Here you can find information on my development abilities and experience.</h5><br />

      <div><h5>
      I recently graduated from <em>John Bryce</em> College.
      The course I studied lasted about a year, during which I discovered that I like to write code and create new things, and this allows me to express my ability to solve problems and optimize processes.
      </h5></div><br /><br />
          <h3>
            - General skills -
          </h3>
          </div><br />
          <div className={`${styles.Main__circles}`}>
            <span className={`col-md-6 col-sm-12`}>
              <div>
              <h5>Responsive Pages</h5>
              </div>
              <div className={`${styles.Main__circleItem}`}>
              <MdDevices size={50} color={'white'}/>
              </div>
   
              <div className={styles.Main__paragraph}>
                Responsive pages are dynamic display that adjust the content In accordance with any screen size
              </div>
            </span>
            <span className={`col-md-6 col-sm-12`}>
              <div>
              <h5>Custom UI</h5>
              </div>
              <div className={`${styles.Main__circleItem}`}>
              <SiAntdesign size={50} color={'white'}/>
              </div>
 
              <div className={styles.Main__paragraph}>
              Customization of the website design according to requirements with CSS and Bootstrap
              </div>
            </span>
            
            <span className={`col-md-6 col-sm-12`}>
              <div>
              <h5>Personal Projects</h5>
              </div>
              <div className={`${styles.Main__circleItem}`}>
              <MdWorkOutline size={50} color={'white'}/>
              </div>
              <div className={styles.Main__paragraph}>
                  You can get my projcts on <em>Git-hub</em>, see my code and stractures.
              </div>
            </span>
            <span className={`col-md-6 col-sm-12`}>
            <h5>Git</h5>
              <div className={`${styles.Main__circleItem}`}>
              <BsGit size={50} color={'white'}/>
              </div>
              {/* <div>
              <h5>Git</h5>
              </div> */}
              <div className={styles.Main__paragraph}>
                  When you work with git, you dont lost any line of code with git branches practice.
              </div>
            </span>
          </div>
          

          <div className={styles.Main__gitHub}>
              <p>Also You Can Visit My <a href="https://github.com/timmy111093">Git Hub</a>, Part Of My Projects Are There</p>
          </div>
    </div>
    </div>
  );
}

export default Home;
