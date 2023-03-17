import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import MainPage from './pages/MainPage';
import AboutUsPage from './pages/AboutUsPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<AboutUsPage />}></Route>
        <Route path="/404" element={<NotFoundPage />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
