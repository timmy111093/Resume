import React, { FC } from 'react';
import styles from './Router.module.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../layoutArea/HomeArea/Home/Home';
import About from '../layoutArea/About/About';
import PageNotFound from '../layoutArea/Page_not_found/Page_not_found';
import ContactMe from '../Contact-me/Contact-me';

interface RouterProps {
}

const Router: FC<RouterProps> = () => (

  <Routes>
    
    {/* default route */}
    <Route path='/Resume' element={<Home />}/>

    <Route path='/home' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<ContactMe />}/>

    {/* error route */}
    <Route path='*' element={<PageNotFound />}/>

  </Routes>
);

export default Router;
