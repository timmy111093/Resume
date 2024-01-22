import React, { FC } from 'react';
import styles from './Router.module.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../layoutArea/HomeArea/Home/Home';
import About from '../layoutArea/About/About';
import PageNotFound from '../layoutArea/Page_not_found/Page_not_found';
import ContactMe from '../Contact-me/Contact-me';
import Resume from '../Resume/Resume';

interface RouterProps {
}

const Router: FC<RouterProps> = () => (

  <Routes>
    
    {/* default route */}
    <Route path='/' element={<Home />}/>

    <Route path='/home' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<ContactMe />}/>
    <Route path='/resume' element={<Resume />} />
    {/* other route */}
    <Route path='*' element={<Home />}/>

  </Routes>
);

export default Router;
