import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import MainPage from './pages/MainPage/MainPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import FormPage from './pages/FormPage/FormPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './components/header/header';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/about" element={<AboutUsPage />}></Route>
          <Route path="/form" element={<FormPage />}></Route>
          <Route path="/404" element={<NotFoundPage />}></Route>
          <Route path="*" element={<Navigate to="/404" />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
