import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import TricksIndex from './views/TricksIndex';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tricks" element={<TricksIndex />} />
      </Routes>
    </BrowserRouter>
  );
}