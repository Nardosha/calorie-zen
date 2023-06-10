import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Diary from './Diary';
import Tips from './Tips';
import Register from './Register';
import Login from './Login';
import NavBar from './NavBar';
import * as auth from '../auth.js';
import './styles/App.css';
import ProtectedRouteElement from './ProtectedRoute';

const App = () => {
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    // проверьте токен здесь
  }, []);

  const handleTokenCheck = () => {
    // проверьте, есть ли jwt токен в локальном хранилище браузера
    // если это так, возьмите этот токен и создайте переменную jwt
    // вызовите метод auth.checkToken(), передающий этот токен
    // внутри следующего then(), если там есть объект res,
    // установите loggedIn значение true
    // перенаправьте пользователя в /diary
  };
  const handleLogin = () => {
    setLoggedIn(true);
  };
  return (
    <>
      <Header />
      <main className="content">
        {loggedIn && <NavBar />}
        <Routes>
          <Route
            path="/"
            element={
              loggedIn ? (
                <Navigate to="/diary" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/diary"
            element={
              <ProtectedRouteElement element={Diary} loggedIn={loggedIn} />
            }
          />
          <Route
            path="/tips"
            element={
              <ProtectedRouteElement element={Tips} loggedIn={loggedIn} />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
