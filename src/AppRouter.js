import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Topics from './Topics';
import Portfolio from './Portfolio';

const AppRouter = () => {

    return (
        <Routes >
            <Route path='/' element={<h2 style={{ textAlign: 'center' }}>Home</h2>} />
            <Route path='/topics' element={<Topics />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path="*" element={<h1>NotFound </h1>} />

        </Routes >
    );
}

export default AppRouter;