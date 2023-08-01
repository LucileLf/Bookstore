import React from 'react';
import './App.scss';
import Navbar from './components/navbar'
import Categories from './components/categories'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Show from './pages/Show'
import Index from './pages/Index'


function App() {
  return (
    <div className="App">
        <header className="App-header">
            {/* <Header /> */}
            <Navbar />
            <Categories />
        </header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/book/:id" element={<Show />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );

}

export default App;
