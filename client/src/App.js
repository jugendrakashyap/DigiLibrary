import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Search from './components/search/Search';
import Book from './components/book/Book';
import Mybooks from './components/mybooks/Mybooks';
import Reader from './components/reader/Reader';
import Profile from './components/profile/Profile';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<> <header><Header /><Navbar /></header> <Content /><Footer /> </>} />
        <Route path="/login" element={<><header><Header /></header> <Login /> </>} />
        <Route path="/signup" element={<><header><Header /></header> <Signup /> </>} />
        <Route path="/:id" element={<> <header><Header /><Navbar /></header> <Content /><Footer /> </>} />
        <Route path="/search" element={<><header><Header /><Navbar /></header> <Search /><Footer /> </>} />
        <Route path="/book" element={<><header><Header /><Navbar /></header> <Book /><Footer /> </>} />
        <Route path="/collections" element={<><header><Header /><Navbar /></header> <Mybooks /> </>} />
        <Route path="/reader" element={<><header><Header /></header> <Reader /> </>} />
        <Route path="/profile" element={ <Profile />} />

      </Routes>
    </Router>
  );
}

export default App;
