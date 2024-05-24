import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import PageNotFound from './components/page-not-found';

const Routers: React.FC = () => {
  return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="*" element={<PageNotFound />} />  
    </Routes>
    </BrowserRouter>
  )
}


export default Routers;