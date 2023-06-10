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

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
