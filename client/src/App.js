import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Search from './components/search/Search';

import './css/header.css';
import './css/navbar.css';
import './css/content.css';
import './css/footer.css';
import './css/search.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>

          <Route path="/" element={<> <Navbar /> <Content /> </>} />
          <Route path="/search" element={<> <Navbar /> <Search/> </>} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
