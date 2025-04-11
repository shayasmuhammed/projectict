// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddBlogPage from './components/AddBlogPage';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddBlogPage />} />
      </Routes>
    </Router>
  );
};

export default App;
