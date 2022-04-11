import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CoffeeIndex from './views/CoffeeIndex';
import Home from './views/Home';
import TricksIndex from './views/TricksIndex';
import TricksNew from './views/TricksNew';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tricks" element={<Outlet></Outlet>}>
          <Route path=":id" element={<div>
            Hola
            </div>} />
          <Route path="new" element={<TricksNew />} />
          <Route index element={<TricksIndex />} />
        </Route>
        <Route path="/coffee" element={<CoffeeIndex />} />
      </Routes>
    </BrowserRouter>
  );
}