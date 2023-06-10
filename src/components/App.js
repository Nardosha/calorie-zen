import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Diary from './Diary';
import Tips from './Tips';
import Register from './Register';
import Login from './Login';
import NavBar from './NavBar';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main className="content">
          {this.state.loggedIn && <NavBar />}
          <Routes>
            <Route
              path="/"
              element={
                this.state.loggedIn ? (
                  <Navigate to="/diary" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route path="/diary" element={<Diary />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
