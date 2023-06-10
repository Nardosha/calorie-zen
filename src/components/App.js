import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Diary from './Diary';
import Tips from './Tips';
import Register from './Register';
import Login from './Login';
import NavBar from './NavBar';
import './styles/App.css';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
    <BrowserRouter>
      <Header />
      <main className="content">
        <NavBar />
        <Routes>
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